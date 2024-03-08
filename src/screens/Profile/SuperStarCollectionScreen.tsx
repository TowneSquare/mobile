import { View, Dimensions, ScrollView, StyleSheet, Text } from "react-native";
import { appColor } from "../../constants";
import { sizes } from "../../utils";
import Header from "../../shared/Feed/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppSelector } from "../../controller/hooks";
import { SuperStarCollectionScreenProps } from "../../navigations/NavigationTypes";
import { useUserNFT } from "../../api/hooks";
const { height, width } = Dimensions.get("window");

const size = new sizes(height, width);
import SelectedStars from "../../components/Profile/About/SelectedStars";
import SuperStarCollection from "../../components/Profile/About/SuperStarCollection";
import SearchField from "../../shared/Feed/SearchField";
import AsyncStorage from "@react-native-async-storage/async-storage";
const SuperStarCollectionScreen = ({
  navigation,
}: SuperStarCollectionScreenProps) => {
  const collections = useAppSelector(
    (state) => state.bottomSheetController.listOfNftCollections
  );
  const userWallet = useAppSelector((state) => state.USER.UserData.aptosWallet);
  const userNFT = useUserNFT({
    userAddress: userWallet,
  });
  // const userNFT = initialData
  return (
    <SafeAreaView
      style={{
        backgroundColor: appColor.feedBackground,
        flex: 1,
      }}
    >
      <Header title="My Super Stars" resetSuperStar={true} />
      <SearchField
        placeholder="Search by Collection name or ID#"
        marginTop={16}
      />
      {userNFT.isLoading && (
        <View>
          <Text style={{ color: appColor.kWhiteColor }}>Loading</Text>
        </View>
      )}
      {!userNFT.isFetching && !userNFT.data?.data?.length  && (
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              color: appColor.kWhiteColor,
              textAlign:"center"
            }}
          >
            You have no NFT
          </Text>
        </View>
      )}
      {userNFT.isSuccess && userNFT.data?.data && (
        <View style={{ flex: 1 }}>
          <ScrollView style={{ marginBottom: size.getHeightSize(16) }}>
            <View style={styles.collectionContainer}>
              {userNFT.data?.data?.map((collection, index) => (
                <SuperStarCollection
                  navigation={navigation}
                  collectionName={collection.collection}
                  collectionLogo={collection.logo_url}
                  ownsTotal={collection.owns_total}
                  assets={collection.assets}
                  key={index}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      )}
       {userNFT.isError  && (
        <View style={{ flex: 1 }}>
          <Text style={{ color: appColor.kWhiteColor, textAlign: "center" }}>
            Could not fetch your NFT at this time.
          </Text>
        </View>
      )}
      <SelectedStars navigation={navigation} />
    </SafeAreaView>
  );
};

export default SuperStarCollectionScreen;
const styles = StyleSheet.create({
  collectionContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    width: size.getWidthSize(328),
    justifyContent: "space-between",
    alignSelf: "center",
    paddingHorizontal: size.getWidthSize(16),
  },
  emptyState: {
    color: appColor.grayLight,
    textAlign: 'center',
    lineHeight: size.getHeightSize(23),
    fontFamily: 'Outfit-Regular',
    fontSize: size.fontSize(18),
  },
});
