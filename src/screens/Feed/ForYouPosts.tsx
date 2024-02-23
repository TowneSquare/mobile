import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  Pressable,
} from "react-native";
import { images } from "../../constants";
import { UserPosts } from "../../components/Feed/DuumyData";
import { sizes } from "../../utils";
import ForYou from "../../components/Feed/ForYou";
import { useAppDispatch, useAppSelector } from "../../controller/hooks";
import { getAllPost, POSTSTATE } from "../../controller/createPost";
import { SafeAreaView } from "react-native-safe-area-context";
import { appColor } from "../../constants";
import { useEffect } from "react";
import { FlashList } from "@shopify/flash-list";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { getUserData } from "../../controller/UserController";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
const ForYouPosts = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const userToken = useAppSelector((state) => state.USER.didToken);
  const user = useAppSelector((state) => state.USER.UserData._id);
  const AllPost = useAppSelector((state) => state.CreatePostController.AllPost);

  useEffect(() => {
    dispatch(getAllPost(userToken));
  }, []);

  console.log(userToken)

  const EmptyComponent = () => {
    return (
      <SafeAreaView
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50%",
          }}
        >
          <Image
            source={images.plug}
            style={{
              height: size.getHeightSize(61),
              width: size.getWidthSize(60),
            }}
          />
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: size.getHeightSize(8),
            }}
          >
            <Text
              style={{
                color: appColor.grayLight,
                fontFamily: "Outfit-Regular",
                fontSize: size.fontSize(16),
              }}
            >
              Something went wrong.
            </Text>
            <Text
              style={{
                color: appColor.grayLight,
                fontFamily: "Outfit-Regular",
                fontSize: size.fontSize(16),
              }}
            >
              Try to reload.
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <FlashList
        data={AllPost}
        renderItem={({ item }) => <ForYou data={item} shouldPFPSwipe />}
        keyExtractor={(item, index) => index.toString()}
        estimatedItemSize={500}
        onRefresh={() => {
          dispatch(getAllPost(userToken));
        }}
        refreshing={false}
        ListEmptyComponent={EmptyComponent}
      />
      <Pressable
        onPress={() =>
          navigation.navigate("CreatePost", {
            showToast: false,
            whichPost: "singlePost",
          })
        }
        style={styles.FAB}
      >
        <AntDesign name="plus" size={25} color={appColor.kTextColor} />
      </Pressable>
    </View>
  );
};

export default ForYouPosts;
const styles = StyleSheet.create({
  FAB: {
    height: size.getHeightSize(56),
    width: size.getHeightSize(56),
    borderRadius: 50,
    backgroundColor: appColor.kSecondaryButtonColor,
    position: "absolute",
    bottom: size.getHeightSize(42),
    right: size.getWidthSize(18),
    justifyContent: "center",
    alignItems: "center",

    elevation: 9,
    shadowColor: "#000000",
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.25,
  },
});
