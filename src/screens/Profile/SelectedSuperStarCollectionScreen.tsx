import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SelectedIcon from "../../../assets/images/svg/SelectedIcon";
import SelectedStars from "../../components/Profile/About/SelectedStars";
import { appColor } from "../../constants";
import { updateSelectedSuperStar } from "../../controller/UserController";
import { useAppDispatch, useAppSelector } from "../../controller/hooks";
import { SelectedSuperStarCollectionScreenProps } from "../../navigations/NavigationTypes";
import Header from "../../shared/Feed/Header";
import { sizes } from "../../utils";

const { height, width } = Dimensions.get("window");

const size = new sizes(height, width);
const SelectedSuperStarCollectionScreen = ({
  navigation,
  route,
}: SelectedSuperStarCollectionScreenProps) => {
  const selected = useAppSelector((state) => state.USER.selectedSuperStars);
  const dispatch = useAppDispatch();
  const { title, nfts } = route.params;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <Header title={title} />
      <View
        style={{
          flex: 1,
          paddingTop: size.getHeightSize(16),
        }}
      >
        <ScrollView>
          <View style={styles.collectionContainer}>
            {nfts.map((collection, index) => (
              <Pressable
                key={collection.asset_id}
                disabled={
                  selected?.length === 6 ||
                  selected?.some(
                    (obj) =>
                      obj.hasOwnProperty("nftTokenId") &&
                      obj["nftTokenId"] === collection.name
                  )
                }
                onPress={() => {
                  dispatch(
                    updateSelectedSuperStar({
                      nftImageUrl: collection.image_uri,
                      nftTokenId: collection.name,
                      nftCollection: collection.collection,
                    })
                  );
                }}
                style={styles.nftContainer}
              >
                <View style={styles.imageContainer}>
                  <Image
                    source={{
                      uri: collection.image_uri,
                    }}
                    resizeMode="cover"
                    style={styles.imageStyle}
                  />
                  {selected?.some(
                    (obj) =>
                      obj.hasOwnProperty("nftTokenId") &&
                      obj["nftTokenId"] === collection.name
                  ) && (
                    <View
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        borderRadius: 8,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "rgba(151, 71, 255, 0.70)",
                      }}
                    >
                      <SelectedIcon />
                    </View>
                  )}
                </View>
                <Text style={styles.name}>{collection.name}</Text>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>
      <SelectedStars navigation={navigation} />
    </SafeAreaView>
  );
};

export default SelectedSuperStarCollectionScreen;
const styles = StyleSheet.create({
  collectionContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-between",
    alignSelf: "center",
    paddingHorizontal: size.getWidthSize(16),
  },
  nftContainer: {
    width: size.getWidthSize(109.23357),
    gap: size.getHeightSize(3.64),
    marginBottom: size.getHeightSize(8),
  },
  imageContainer: {
    height: size.getHeightSize(109.23357),
    width: size.getWidthSize(109.23357),
  },
  imageStyle: {
    borderRadius: 8,
    height: "100%",
    width: "100%",
  },
  name: {
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    fontFamily: "Outfit-Medium",
    color: appColor.kTextColor,
  },
});
