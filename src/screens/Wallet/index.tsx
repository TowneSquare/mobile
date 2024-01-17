import {
  Text,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import { appColor } from '../../constants';
import WalletCard from '../../components/Wallet/WalletCard';
import { images } from '../../constants';
import { sizes } from '../../utils';
import Token from '../../components/Wallet/Token';
import Transaction from '../../components/Wallet/Transaction';
import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../controller/hooks';
import { getAptosName } from '../../controller/UserController';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const Wallet = () => {
  const dispatch = useAppDispatch();
  const { APTOS_DOMAIN_NAME, address } = useAppSelector((state) => ({
    APTOS_DOMAIN_NAME: state.USER.aptosName,
    address: state.USER.UserData.aptosWallet,
  }));
  // useMemo(() => dispatch(getAptosName({ address })), [address]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <ScrollView
        contentContainerStyle={{
          paddingBottom: size.getHeightSize(42),
        }}
      >
        <WalletCard
          APTOS_DOMAIN_NAME={
            APTOS_DOMAIN_NAME ? APTOS_DOMAIN_NAME : 'UNAVAILABLE'
          }
          WALLET_ADDRESS={address}
        />
        <Text style={styles.text}>Token</Text>
        <Token
          name="APT"
          id="Aptos"
          amount="12.345"
          currentPrice="240.34"
          priceChange="5.4%"
          imageUri={Image.resolveAssetSource(images.aptToken).uri}
        />
        <Token
          name="USDC (Layer Zero)"
          id="USD Coin"
          amount="12.345"
          currentPrice="240.34"
          priceChange="5.4%"
          imageUri={Image.resolveAssetSource(images.usdc).uri}
        />
        <Token
          name="ABEL"
          id="Abel Coin"
          amount="12.345"
          currentPrice="240.34"
          priceChange="5.4%"
          imageUri={Image.resolveAssetSource(images.abel).uri}
        />
        <Text style={[styles.text, { marginBottom: size.getHeightSize(8) }]}>
          TowneSquare Transactions
        </Text>
        <Transaction
          assetType="Token"
          type="send"
          date="Today"
          from="FakeJC"
          imageUri={Image.resolveAssetSource(images.profileImage).uri}
          to="FakeJC"
          asset="12.345"
        />
        <Transaction
          assetType="pinnedNFT"
          type="receive"
          date="Today"
          from="FakeJC"
          imageUri={Image.resolveAssetSource(images.profileImage).uri}
          to="FakeJC"
          asset="12.345"
          pinnedNftUri={Image.resolveAssetSource(images.aptosMonkey5).uri}
        />
        <Transaction
          assetType="Token"
          type="swap"
          date="Today"
          fromValue="10.345"
          toValue="12.345"
          fromAssetImageUri={Image.resolveAssetSource(images.aptToken).uri}
          toAssetImageUri={Image.resolveAssetSource(images.usdc).uri}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Wallet;
const styles = StyleSheet.create({
  text: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-SemiBold',
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
    marginTop: size.getHeightSize(24),
    marginLeft: size.getWidthSize(16),
  },
});
