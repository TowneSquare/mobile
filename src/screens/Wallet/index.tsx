import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import { getAptMarketData } from '../../utils/walletFunctions';
import { getUserApt, getUserTokens } from '../../api/hooks/wallet';
import Token from '../../components/Wallet/Token';
import Transaction from '../../components/Wallet/Transaction';
import WalletCard from '../../components/Wallet/WalletCard';
import { appColor, images } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../controller/hooks';
import { TokenDetails } from '../../models/wallet';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const Wallet = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [isWalletBalanceLoading, setLoading] = useState(false);
  const [tokenData, setTokenData] = useState<TokenDetails[]>([]);
  const [accountAptValue, setAccountAptValue] = useState<string>('');
  const [totalAssetInUSD, setTotalAssetInUSD] = useState('0');
  const dispatch = useAppDispatch();
  const { APTOS_DOMAIN_NAME, address, token } = useAppSelector((state) => ({
    APTOS_DOMAIN_NAME: state.USER.aptosName,
    address: state.USER.UserData.aptosWallet,
    token: state.USER.didToken,
  }));

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAptMarketData(address, () => {});
      setAccountAptValue(data.assetBalance.APT.toString());
      setTokenData(data.formattedData);
      setTotalAssetInUSD(data.totalValueInUSD.toFixed(2));
    };

    fetchData();
  }, []);

  // Handle reload
  const handleReload = async () => {
    const fetchData = async () => {
      const data = await getAptMarketData(address, () => {});
      setAccountAptValue(data.assetBalance.APT.toString());
      setTokenData(data.formattedData);
      setTotalAssetInUSD(data.totalValueInUSD.toFixed(2));
    };
    fetchData();
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleReload} />
        }
        contentContainerStyle={{
          paddingBottom: size.getHeightSize(42),
        }}
      >
        <WalletCard
          APTOS_DOMAIN_NAME={
            APTOS_DOMAIN_NAME ? APTOS_DOMAIN_NAME : 'UNAVAILABLE'
          }
          WALLET_ADDRESS={address}
          addressBalance={totalAssetInUSD}
          aptValue={
            isNaN(parseFloat(accountAptValue))
              ? '...'
              : parseFloat(accountAptValue).toFixed(3)
          }
        />

        {isWalletBalanceLoading ? (
          <ActivityIndicator
            color={appColor.grayLight}
            style={{
              marginTop: size.getHeightSize(12),
            }}
            size={size.getHeightSize(24)}
          />
        ) : (
          <>
            <Text style={styles.text}>Token</Text>
            {tokenData &&
              tokenData.map((token, index) => (
                <Token
                  key={index}
                  name={token.assetSymbol}
                  id={token.assetName}
                  amount={token.assetBalance}
                  currentPrice={token.assetMarketPrice}
                  priceChange={token.assetPercentChange24h}
                  imageUri={token.assetImage}
                />
              ))}

            <Text
              style={[styles.text, { marginBottom: size.getHeightSize(8) }]}
            >
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
          </>
        )}
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
