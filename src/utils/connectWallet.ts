import * as Linking from 'expo-linking';

import {
  APTOS_COIN,
  Aptos,
  AptosConfig,
  Network,
  NetworkToNetworkName,
} from '@aptos-labs/ts-sdk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { decode as atob, encode as btoa } from 'base-64';
import nacl, { BoxKeyPair, randomBytes } from 'tweetnacl';
import axios from 'axios';
import { CMC_PRO_API_KEY } from '../../constants';

type ConnectData = {
  appInfo: {
    domain: string;
  };
  redirectLink: string;
  dappEncryptionPublicKey?: string;
  payload?: any;
};
type Wallet = 'pontem' | 'rise' | 'petra';
export const handlWalletConnect = async (walletName: Wallet) => {
  const redirect_link = Linking.createURL(`/ChooseWallet`);

  if (walletName === 'petra') {
    let connectData: ConnectData = {
      appInfo: {
        domain: 'com.townesquare.townesquare',
      },
      redirectLink: redirect_link,
    };

    let base64ConnectData: string;
    connectData.dappEncryptionPublicKey = await getDappPublicKey();
    base64ConnectData = Buffer.from(JSON.stringify(connectData)).toString(
      'base64'
    );

    const url = `https://petra.app/api/v1/connect?data=${base64ConnectData}`;
    await Linking.openURL(url);
  } else if (walletName === 'pontem') {
    const appInfo = {
      name: 'Townesquare',
      logoUrl:
        'https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png',
      redirectLink: redirect_link,
    };
    const base64ConnectData = Buffer.from(JSON.stringify(appInfo)).toString(
      'base64'
    );

    const url = `pontem-wallet://mob2mob?connect=${base64ConnectData}`;
    // console.log(url);
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
    Buffer.from(response.data, 'base64').toString('utf-8')
  );
  const petraPublicKey = Uint8Array.from(
    Buffer.from(responseDataJson.petraPublicEncryptedKey.slice(2), 'hex')
  );

  const storedSecretKey = await AsyncStorage.getItem('petra_secretKey');
  const secretKeyArray = new Uint8Array(Buffer.from(storedSecretKey, 'base64'));

  const sharedDappSecretKey = nacl.box.before(petraPublicKey, secretKeyArray);
  const wallet_public_address = {
    address: responseDataJson.address,
    publicKey: responseDataJson.publicKey,
  };

  const header = {
    alg: 'HS256',
    typ: 'JWT',
  };
  const payload = {
    aptosWallet: responseDataJson.address,
    iat: 1704443183,
  };
  const headerBase64 = btoa(JSON.stringify(header));
  const payloadBase64 = btoa(JSON.stringify(payload));
  const token = `${headerBase64}.${payloadBase64}.w343UG40U0WBkMTXckaax3szEUU4opWYDosHlsQJIDE`;
  const base64Data = Buffer.from(
    JSON.stringify(wallet_public_address)
  ).toString('base64');

  return { token: token, address: responseDataJson.address };
};

export const getWalletBalance = async (walletAddress: string) => {
  // Set aptos network to mainnet
  const config = new AptosConfig({
    network: Network.MAINNET,
  });

  //Create an instance of the aptos sdk
  const aptos = new Aptos(config);

  //Get the account apt amount and the current price of apt
  try {
    const [aptAmount, currentPrice] = await Promise.all([
      aptos.getAccountAPTAmount({
        accountAddress: walletAddress,
      }),
      getAptMarketData(),
    ]);

    //Convert the apt amount to apt and return the apt amount and the current price
    const aptDecimal = 10 ** 8;
    const aptAmt = aptAmount / aptDecimal;

    return { aptAmt, currentPrice };
  } catch (err) {
    console.log(err);
  }
};
const getAptMarketData = async () => {
  const baseUrl =
    'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest';

  const response = await axios.get(baseUrl, {
    params: {
      symbol: 'APT',
      convert: 'USD',
    },
    headers: {
      'X-CMC_PRO_API_KEY': CMC_PRO_API_KEY,
    },
  });

  return response.data.data.APT.quote.USD.price;
};

export const submitTransactionToPetra = async (
  senderAddress: string,
  amount: number,
  recipeient: string
  // currentScreen: string
) => {
  const redirect_link = Linking.createURL(`/${'DrawerNavigation'}`);
  const payload = {
    arguments: [
      '0x19e17197b6469d692c67a27f2e8634b96b6ae1e5c085dfc24350f08aba4d1a5',
      190,
      61,
      207,
      132,
      132,
      ,
    ],
    function: '0x1::coin::transfer',
    type: 'entry_function_payload',
    type_arguments: ['0x1::aptos_coin::AptosCoin'],
  };
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
      domain: 'com.townesquare.townesquare',
    },
    redirectLink: redirect_link,
    payload: payload,
  };
  data.dappEncryptionPublicKey = await getDappPublicKey();
  const base64ConnectData = Buffer.from(JSON.stringify(data)).toString(
    'base64'
  );
  const url = `https://petra.app/api/v1/signAndSubmit?data=${base64ConnectData}`;
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
  const storedPublicKey = await AsyncStorage.getItem('petra_publicKey');
  const storedSecretKey = await AsyncStorage.getItem('petra_secretKey');

  if (storedPublicKey && storedSecretKey) {
    const publicKeyArray = new Uint8Array(
      Buffer.from(storedPublicKey, 'base64')
    );

    const secretKeyArray = new Uint8Array(
      Buffer.from(storedSecretKey, 'base64')
    );

    const keysFromStorage = {
      publicKey: publicKeyArray,
      secretKey: secretKeyArray,
    };
    return Buffer.from(keysFromStorage.publicKey).toString('hex');
  } else {
    const keyPair = nacl.box.keyPair();

    const publicKeyBase64 = Buffer.from(keyPair.publicKey).toString('base64');
    const secretKeyBase64 = Buffer.from(keyPair.secretKey).toString('base64');

    await AsyncStorage.setItem('petra_publicKey', publicKeyBase64);
    await AsyncStorage.setItem('petra_secretKey', secretKeyBase64);

    const publicKeystring = Buffer.from(keyPair.publicKey).toString('hex');
    return publicKeystring;
  }
};
