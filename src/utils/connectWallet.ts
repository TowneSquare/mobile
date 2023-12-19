import * as Linking from "expo-linking";

import { CONNECT_PETRA_WALLET_PAYLOAD } from "../../constants";
type Wallet = "pontem" | "rise" | "petra";

import { box, randomBytes } from "tweetnacl";

const newNonce = () => randomBytes(box.nonceLength);
export const generateKeyPair = () => box.keyPair();

export const handlWalletConnect = async (
  walletName: Wallet,
  publicKey: any
) => {
  if (walletName === "petra") {
    const appInfo = CONNECT_PETRA_WALLET_PAYLOAD;
    const redirectLink = Linking.createURL("/ChooseWallet");

    const data = {
      appInfo,
      redirectLink,
      dappEncryptionPublicKey: Buffer.from(publicKey).toString(
        'hex',
      ),
    };
    
    const dataBase64 = Buffer.from(JSON.stringify(data)).toString("base64");

    const url = `https://petra.app/api/v1/connect?data=${dataBase64}`;
    await Linking.openURL(url);
  }
};
