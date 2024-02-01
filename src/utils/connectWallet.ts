import * as Linking from "expo-linking";
import "react-native-get-random-values";
import AsyncStorage from "@react-native-async-storage/async-storage";

import nacl, { BoxKeyPair, randomBytes } from "tweetnacl";

type ConnectData = {
  appInfo: {
    domain: string;
  };
  redirectLink: string;
  dappEncryptionPublicKey?: string;
};
type Wallet = "pontem" | "rise" | "petra";
export const handlWalletConnect = async (walletName: Wallet) => {
  const redirect_link = Linking.createURL(`/ChooseWallet`);

  let connectData: ConnectData = {
    appInfo: {
      domain: "com.townesquare.townesquare",
    },
    redirectLink: redirect_link,
  };
  if (walletName === "petra") {
    const storedPublicKey = await AsyncStorage.getItem("petra_publicKey");
    const storedSecretKey = await AsyncStorage.getItem("petra_secretKey");
    let base64ConnectData: string;

    if (storedPublicKey && storedSecretKey) {
      const publicKeyArray = new Uint8Array(
        Buffer.from(storedPublicKey, "base64")
      );
      const secretKeyArray = new Uint8Array(
        Buffer.from(storedSecretKey, "base64")
      );

      const keysFromStorage = {
        publicKey: publicKeyArray,
        secretKey: secretKeyArray,
      };
      connectData.dappEncryptionPublicKey = Buffer.from(
        keysFromStorage.publicKey
      ).toString("hex");
      base64ConnectData = Buffer.from(JSON.stringify(connectData)).toString(
        "base64"
      );
    } else {
      const keyPair = nacl.box.keyPair();
      const publicKeyBase64 = Buffer.from(keyPair.publicKey).toString("base64");
      const secretKeyBase64 = Buffer.from(keyPair.secretKey).toString("base64");
      await AsyncStorage.setItem("petra_publicKey", publicKeyBase64);
      await AsyncStorage.setItem("petra_secretKey", secretKeyBase64);
      const publicKeystring = Buffer.from(keyPair.publicKey).toString("hex");

      connectData.dappEncryptionPublicKey = publicKeystring;
      base64ConnectData = Buffer.from(JSON.stringify(connectData)).toString(
        "base64"
      );
    }

    const url = `https://petra.app/api/v1/connect?data=${base64ConnectData}`;
    await Linking.openURL(url);
  }
};

export const decodePetraWalletConnectResponse = async (response: {
  data: string;
  response: string;
}) => {
  const responseDataJson = JSON.parse(
    Buffer.from(response.data, "base64").toString("utf-8")
  );
  const petraPublicKey = Uint8Array.from(
    Buffer.from(responseDataJson.petraPublicEncryptedKey.slice(2), "hex")
  );

  const storedSecretKey = await AsyncStorage.getItem("petra_secretKey");
  const secretKeyArray = new Uint8Array(Buffer.from(storedSecretKey, "base64"));

  const sharedDappSecretKey = nacl.box.before(petraPublicKey, secretKeyArray);
  const wallet_public_address = {
    address: responseDataJson.address,
    publicKey: responseDataJson.publicKey,
  };

  const base64Data = Buffer.from(
    JSON.stringify(wallet_public_address)
  ).toString("base64");

  return { token: base64Data, address: responseDataJson.address };
};
