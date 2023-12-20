import * as Linking from 'expo-linking';
import { CONNECT_PETRA_WALLET_PAYLOAD } from '../../constants';
type Wallet = 'pontem' | 'rise' | 'petra';
export const handlWalletConnect = async (walletName: Wallet) => {
  if (walletName === 'petra') {
    const appInfoBase64 = Buffer.from(
      JSON.stringify(CONNECT_PETRA_WALLET_PAYLOAD)
    ).toString('base64');
    const redirect_link = Linking.createURL('/ChooseWallet');
    const url = `https://petra.app/api/v1/connect?app_info=${appInfoBase64}&redirect_link=${redirect_link}`;
    await Linking.openURL(url);
  }
};
