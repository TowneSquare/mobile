import {
  Text,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { appColor } from "../../constants";
import WalletCard from "../../components/Wallet/WalletCard";
import { images } from "../../constants";
import { sizes } from "../../utils";
import Token from "../../components/Wallet/Token";
import Transaction from "../../components/Wallet/Transaction";
import { useMemo, useEffect, useState } from "react";
import { TokenDetails } from "../../models/wallet";
import { useAppDispatch, useAppSelector } from "../../controller/hooks";
import { getAptosName } from "../../controller/UserController";
import { getUserApt, getUserTokens } from "../../api/hooks/wallet";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
const Wallet = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [isWalletBalanceLoading, setLoading] = useState(false);
  const [tokenData, setTokenData] = useState<TokenDetails[]>([]);
  const dispatch = useAppDispatch();
  const { APTOS_DOMAIN_NAME, address, token } = useAppSelector((state) => ({
    APTOS_DOMAIN_NAME: state.USER.aptosName,
    address: state.USER.UserData.aptosWallet,
    token: state.USER.didToken,
  }));

  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        return;
      }
      const response = await getUserApt(token);
      console.log("getUserApt data", response);
    };

    fetchData();
  }, [token]);

  const { tokens, error, isLoading, refetch, addressBalance } =
    getUserTokens(address);

  useMemo(() => dispatch(getAptosName({ address })), [address]);

  // Handle reload
  const handleReload = async () => {
    refetch();
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
            APTOS_DOMAIN_NAME ? APTOS_DOMAIN_NAME : "UNAVAILABLE"
          }
          WALLET_ADDRESS={address}
          addressBalance={addressBalance}
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
            {tokens &&
              tokens.map((token, index) => (
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
    fontFamily: "Outfit-SemiBold",
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
    marginTop: size.getHeightSize(24),
    marginLeft: size.getWidthSize(16),
  },
});
