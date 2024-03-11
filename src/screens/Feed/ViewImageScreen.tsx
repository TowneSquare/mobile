import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Dimensions, Image, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PostActions from "../../components/Feed/PostActions";
import { appColor, fonts } from "../../constants";
import { ViewImageScreenProps } from "../../navigations/NavigationTypes";
import { sizes } from "../../utils";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
const ViewImageScreen = ({ route }: ViewImageScreenProps) => {
  const navigation = useNavigation();
  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
  });
  const { postData, imageUri, showReactions } = route.params;
  if (!isLoaded) {
    return null;
  }
  let uri = postData ? postData.imageUrls[0] : imageUri;
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
          source={{ uri }}
          resizeMode="cover"
          style={{
            width: "100%",
            height: size.heightSize(347),
            top: showReactions !== false ? 0 : size.getHeightSize(-30),
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
        }}
      />
      {showReactions !== false && (
        <>
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
        </>
      )}
    </SafeAreaView>
  );
};

export default ViewImageScreen;
