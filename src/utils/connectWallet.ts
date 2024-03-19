import { Aptos, AptosConfig, MoveAddressType, MoveOption, MoveOptionType, MoveString, Network } from "@aptos-labs/ts-sdk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import * as Linking from "expo-linking";
import { Image } from "react-native";
import { TextEncoder } from "text-encoding";
import nacl from "tweetnacl";
import { CMC_PRO_API_KEY } from "../../constants";
import { images } from "../constants";
import { TOWNSQUARE_CORE_MODULE_ADDRESS } from "../../config/env";
import { RootStackParamList } from "../navigations/NavigationTypes";

// Data type for petra wallet connect
type ConnectData = {
  appInfo: {
    domain: string;
  };
  redirectLink: string;
  dappEncryptionPublicKey?: string;
  payload?: any;
};

// Supported wallet types
type Wallet = "pontem" | "rise" | "petra";

// Create an instance of the aptos sdk
const config = new AptosConfig({
  network: Network.TESTNET,
});
const aptos = new Aptos(config);

export const handlWalletConnect = async (walletName: Wallet) => {
  // redirect link for the wallet connect
  const redirect_link = Linking.createURL(`/ChooseWallet`);

  if (walletName === "petra") {
    let connectData: ConnectData = {
      appInfo: {
        domain: "com.townesquare.townesquare",
      },
      redirectLink: redirect_link,
    };

    let base64ConnectData: string;

    // Get Dapp Public key
    const { publicKeyString } = await getDappPublicKey();
    connectData.dappEncryptionPublicKey = publicKeyString;

    // Convert the connect data to base64
    base64ConnectData = Buffer.from(JSON.stringify(connectData)).toString(
      "base64"
    );

    const url = `https://petra.app/api/v1/connect?data=${base64ConnectData}`;

    // Open the wallet connect link
    await Linking.openURL(url);
  } else if (walletName === "pontem") {
    //TODO: Add pontem wallet connect
    const appInfo = {
      name: "Townesquare",
      logoUrl: Image.resolveAssetSource(images.defaultAvatar).uri,
      redirectLink: redirect_link,
    };
    const base64ConnectData = Buffer.from(JSON.stringify(appInfo)).toString(
      "base64"
    );

    const url = `pontem-wallet://mob2mob?connect=${base64ConnectData}`;

    // Open the wallet connect link
    Linking.openURL(url);
  }
};

/**
 * Decodes the response from the Petra Wallet Connect API and performs necessary operations.
 * @param response - The response object containing the data and response strings.
 * @returns An object containing the token and address extracted from the response.
 */
export const decodePetraWalletConnectResponse = async (response: {
  data: string;
  response: string;
}) => {
  const responseDataJson = JSON.parse(
    Buffer.from(response.data, "base64").toString("utf-8")
  );

  // TODO: Add the logic to generate a shared secret to encrypt the payload to be submitted to petra

  // const nonce = nacl.randomBytes(nacl.secretbox.nonceLength);
  // console.log("===============nonce====================")
  // console.log(nonce)
  // const petraEncryptedPublicKey = Buffer.from(
  //   responseDataJson.petraPublicEncryptedKey,
  //   'hex'
  // );
  // const dappEncryptionPublicKey = await getDappPublicKey();

  // const sharedKey = nacl.box.before(
  //   petraEncryptedPublicKey,
  //   Buffer.from(dappEncryptionPublicKey, 'hex')
  // );
  // console.log('==================response===================');
  // console.log(sharedKey);
  // const petraPublicKey = Uint8Array.from(
  //   Buffer.from(response.data.petraPublicEncryptedKey.slice(2), 'hex')
  // );
  // const storedSecretKey = await AsyncStorage.getItem('petra_secretKey');
  // const secretKeyArray = new Uint8Array(Buffer.from(storedSecretKey, 'base64'));
  // const sharedDappSecretKey = nacl.box.before(petraPublicKey, secretKeyArray);

  const wallet_public_address = {
    address: responseDataJson.address,
    publicKey: responseDataJson.publicKey,
  };
  // return user petra wallet address
  return { token: "", address: responseDataJson.address };
};

// Decode the response from the Pontem Wallet Connect and returns the wallet address
export const decodePontemWalletConnectResponse = async (account: string) => {
  const responseDataJson = JSON.parse(
    Buffer.from(account, "base64").toString("utf-8")
  );

  return { token: "", address: responseDataJson.account.address };
};

export const getWalletBalance = async (walletAddress: string) => {
  //Get the account apt amount and the current price of apt

  const [aptAmount, currentPrice] = await Promise.all([
    aptos.getAccountAPTAmount({
      accountAddress: walletAddress,
    }),
    getAptMarketData(),
  ])
    .then((res) => res)
    .catch((err) => {
      if (axios.isAxiosError(err)) {
        return [0, null];
      }

      return [0, null];
    });

  //Convert the apt amount to apt and return the apt amount and the current price
  const aptDecimal = 10 ** 8;
  const aptAmt = aptAmount / aptDecimal;
  return { aptAmt, currentPrice };
};

const getAptMarketData = async () => {
  const baseUrl =
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest";

  const response = await axios.get(baseUrl, {
    params: {
      symbol: "APT",
      convert: "USD",
    },
    headers: {
      "X-CMC_PRO_API_KEY": CMC_PRO_API_KEY,
    },
  });

  return response.data.data.APT.quote.USD.price;
};

// TODO: Add the logic to submit a transaction to petra
export const submitTransactionToPetra = async (
  senderAddress: string,
  amount: number,
  recipeient: string
  // currentScreen: string
) => {
  const petraEncryptedapublicKey =
    "0x92476d423dfad6fbdfaa214fc5c177799e96985465f23fb6b5611a9532d15248";
  const petraPublicKeyUint8Array = new Uint8Array(
    petraEncryptedapublicKey
      .slice(2)
      .match(/.{1,2}/g)
      .map((byte) => parseInt(byte, 16))
  );
  const { Keys } = await getDappPublicKey();
  const sharedDappSecretKey = nacl.box.before(
    petraPublicKeyUint8Array,
    Keys.secretKey
  );
  // console.log('==========Shared Secret================');
  // console.log(sharedDappSecretKey);
  const redirect_link = Linking.createURL(`/${"DrawerNavigation"}`);
  const payload = {
    arguments: [
      "0x19e17197b6469d692c67a27f2e8634b96b6ae1e5c085dfc24350f08aba4d1a5",
      9,
    ],
    function: "0x1::coin::transfer",
    type: "entry_function_payload",
    type_arguments: ["0x1::aptos_coin::AptosCoin"],
  };
  // const uint8Array = textEncoder.encode('Your string here');
  const payloadUint8Array = new TextEncoder().encode(JSON.stringify(payload));

  const nonce = nacl.randomBytes(nacl.secretbox.nonceLength);
  console.log("===============nonce====================");
  console.log(nonce);
  const encryptedPayload = nacl.secretbox(
    payloadUint8Array,
    nonce,
    sharedDappSecretKey
  );
  const hexString = Array.from(encryptedPayload)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
  // const TRANSACTION_PAYLOAD = {
  //   type: 'entry_function_payload',
  //   function: '0x1::aptos_account::transfer_coins',
  //   type_arguments: [APTOS_COIN],
  //   arguments: [
  //     '0x19e17197b6469d692c67a27f2e8634b96b6ae1e5c085dfc24350f08aba4d1a5',
  //     '0.1',
  //   ],
  // };
  // const config = new AptosConfig({
  //   network: Network.MAINNET,
  // });
  // const aptos = new Aptos(config);
  // const transaction = await aptos.transferCoinTransaction({
  //   sender: '0x19e17197b6469d692c67a27f2e8634b96b6ae1e5c085dfc24350f08aba4d1a5',
  //   recipient:
  //     '0x19e17197b6469d692c67a27f2e8634b96b6ae1e5c085dfc24350f08aba4d1a5',
  //   amount: 4,
  // });
  // console.log(transaction);

  let data: ConnectData = {
    appInfo: {
      domain: "com.townesquare.townesquare",
    },
    redirectLink: redirect_link,
    payload: hexString,
  };
  const { publicKeyString } = await getDappPublicKey();
  data.dappEncryptionPublicKey = publicKeyString;
  const submitDataBase64 = Buffer.from(JSON.stringify(data)).toString("base64");
  // console.log(base64ConnectData);
  const url = `https://petra.app/api/v1/signAndSubmit?data=${submitDataBase64}`;
  // console.log(url);
  Linking.openURL(url);
};

/**
 * Retrieves the Dapp public key from AsyncStorage.
 * If the public key and secret key are already stored, it returns the public key as a hexadecimal string.
 * If the keys are not stored, it generates a new key pair, stores them in AsyncStorage, and returns the public key as a hexadecimal string.
 * @returns The Dapp public key as a hexadecimal string.
 */
const getDappPublicKey = async () => {
  const storedPublicKey = await AsyncStorage.getItem("petra_publicKey");
  const storedSecretKey = await AsyncStorage.getItem("petra_secretKey");

  if (storedPublicKey && storedSecretKey) {
    const publicKeyArray = new Uint8Array(
      Buffer.from(storedPublicKey, "base64")
    );

    const secretKeyArray = new Uint8Array(
      Buffer.from(storedSecretKey, "base64")
    );

    const Keys = {
      publicKey: publicKeyArray,
      secretKey: secretKeyArray,
    };
    const publicKeyString = Buffer.from(Keys.publicKey).toString("hex");

    return { publicKeyString, Keys };
  } else {
    const keyPair = nacl.box.keyPair();

    const publicKeyBase64 = Buffer.from(keyPair.publicKey).toString("base64");
    const secretKeyBase64 = Buffer.from(keyPair.secretKey).toString("base64");

    await AsyncStorage.setItem("petra_publicKey", publicKeyBase64);
    await AsyncStorage.setItem("petra_secretKey", secretKeyBase64);

    const Keys = {
      publicKey: keyPair.publicKey,
      secretKey: keyPair.secretKey,
    };
    const publicKeyString = Buffer.from(keyPair.publicKey).toString("hex");
    return { publicKeyString, Keys };
  }
};

/**
 * Retrieves the supported tokens market data.
 * @returns An array of objects containing the formatted market data for each supported token.
 */
export const getSupportedTokensMarketData = async (address: string) => {
  const aptBalance = await aptos.getAccountAPTAmount({
    accountAddress: address,
  });

  const aptDecimal = 10 ** 8;
  const aptAmt = aptBalance / aptDecimal;
  const assetImages = {
    USDC: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=029",
    APT: Image.resolveAssetSource(images.aptToken).uri,
    GUI: "https://assets.coingecko.com/coins/images/33924/large/gui_inu_tg_tiny.png?1703408231",
    THL: "https://assets.coingecko.com/coins/images/29697/large/thalalogo.jpg?1696528630",
    DOODOO:
      "https://assets.coingecko.com/coins/images/35033/large/doodoo.png?1707189618",
  };
  const assetBalance = {
    USDC: "0",
    APT: aptAmt.toFixed(3).toString(),
    GUI: "0",
    THL: "0",
    DOODOO: "0",
  };
  const baseUrl =
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest";
  const response = await axios.get(baseUrl, {
    params: {
      symbol: "USDC,APT,GUI,THL,DOODOO",
      convert: "USD",
    },
    headers: {
      "X-CMC_PRO_API_KEY": CMC_PRO_API_KEY, // Make sure to define CMC_PRO_API_KEY
    },
  });

  let formattedData = Object.entries(response.data.data).map(
    ([key, value]: any) => {
      return {
        assetImage: assetImages[value.symbol],
        assetName: value.name,
        assetSymbol: value.symbol,
        assetBalance: assetBalance[value.symbol], // Placeholder for balance
        assetMarketPrice: `${value.quote.USD.price.toFixed(2)}`,
        assetPercentChange24h: `${value.quote.USD.percent_change_24h.toFixed(
          2
        )}`,
      };
    }
  );

  return formattedData;
};

export const pontemCreateUserTransaction = async (
  referral_code: string,
  referrer: MoveOptionType,
  username: string,
  screen: keyof RootStackParamList
) => {
  const redirect_link = Linking.createURL(`/${screen}`);
  const transaction = {
    type: "entry_function_payload",
    function: `${TOWNSQUARE_CORE_MODULE_ADDRESS}::core::create_user`,
    type_arguments: [],
    arguments: [referral_code, referrer, username],
  };

  const appInfo = {
    name: "Townesquare",
    logoUrl:
      "https://www.townesquare.xyz/static/media/logo.6e77e4b3cad4fe08bb6e.png",
    redirectLink: "",
  };

  const base64AppInfo = Buffer.from(JSON.stringify(appInfo)).toString("base64");
  const base64Payload = Buffer.from(JSON.stringify(transaction)).toString(
    "base64"
  );
  const url = `pontem-wallet://mob2mob?payload=${base64Payload}&app_info=${base64AppInfo}`;

  Linking.openURL(url);
};

export const connectWalletPontem = async () => {
  const appInfo = {
    name: "Townesquare",
    logoUrl:
      "https://www.townesquare.xyz/static/media/logo.6e77e4b3cad4fe08bb6e.png",
    redirectLink: "",
  };

  const base64AppInfo = Buffer.from(JSON.stringify(appInfo)).toString("base64");
  const url = `pontem-wallet://mob2mob?connect=${appInfo}`
  Linking.openURL(url);
}