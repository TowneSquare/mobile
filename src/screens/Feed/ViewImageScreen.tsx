import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { appColor, fonts, images } from "../../constants";
import { StatusBar } from "expo-status-bar";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { sizes } from "../../utils";
import { useNavigation } from "@react-navigation/native";
const { height, width } = Dimensions.get("window");
import { useFonts } from "expo-font";
const size = new sizes(height, width);
import PostActions from "../../components/Feed/PostActions";
const ViewImageScreen = () => {
  const navigation = useNavigation();
  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
  });
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
      <View
        style={{
          height: size.heightSize(70.25),
        }}
      />
      <Pressable
        style={{
          paddingLeft: size.getWidthSize(18.75),
        }}
        onPress={navigation.goBack}
      >
        <AntDesign
          name="arrowleft"
          color={appColor.kWhiteColor}
          size={size.fontSize(22)}
        />
      </Pressable>
      <View
        style={{
          height: size.heightSize(121.25),
        }}
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={images.feedImage1}
          resizeMode="cover"
          style={{
            width: size.widthSize(360),
            height: size.heightSize(347),
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
        }}
      />
      <View
        style={{
          marginBottom: size.getHeightSize(31),
        }}
      >
        <PostActions
          noOfComments={"99k"}
          noOfLikes={"99k"}
          noOfRetweet={"99k"}
          paddingHorizontal={16}
        />
      </View>
    </SafeAreaView>
  );
};

export default ViewImageScreen;
