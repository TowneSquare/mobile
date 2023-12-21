import { View, Dimensions, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { appColor, fonts, images } from "../../constants";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import { sizes } from "../../utils";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
const { height, width } = Dimensions.get("window");
import { useFonts } from "expo-font";
const size = new sizes(height, width);
import PostActions from "../../components/Feed/PostActions";
import { ViewImageScreenProps } from "../../navigations/NavigationTypes";
const ViewImageScreen = ({ route }: ViewImageScreenProps) => {
  const navigation = useNavigation();
  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
  });
  const { postData } = route.params;
  if (!isLoaded) {
    return null;
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <StatusBar style="light" backgroundColor={appColor.feedBackground} />
      <Pressable
        style={{
          height: size.getHeightSize(102 - Constants.statusBarHeight),
          alignItems: "flex-start",
          paddingBottom: size.getHeightSize(12),
          justifyContent: "flex-end",
          paddingHorizontal: size.getWidthSize(16),
        }}
        onPress={navigation.goBack}
      >
        <AntDesign
          name="arrowleft"
          color={appColor.kWhiteColor}
          size={size.fontSize(22)}
        />
      </Pressable>
      <View style={{ flex: 1 }} />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: postData.imageUrls[0] }}
          resizeMode="cover"
          style={{
            width: "100%",
            height: size.heightSize(347),
          }}
        />
      </View>
      <View style={{ flex: 1 }} />
      <View
        style={{
          marginBottom: size.getHeightSize(31),
        }}
      >
        <PostActions
          noOfComments={postData.comments.length}
          Likes={postData?.likes}
          Repost={postData?.reposts}
          paddingHorizontal={16}
          postId={postData?._id}
          userId={postData?.userId}
          showShareIcon
        />
      </View>
    </SafeAreaView>
  );
};

export default ViewImageScreen;
