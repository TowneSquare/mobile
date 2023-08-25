import {
  View,
  Text,
  ImageBackground,
  Dimensions,
} from "react-native";
import { useFonts } from "expo-font";
import { appColor, fonts, images } from "../../constants";
import { StatusBar } from "expo-status-bar";
import { sizes } from "../../utils";
import Congrats from "../../../assets/images/svg/Congrats";
import LetGoButton from "../../components/SignUp/LetGoButton";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
const Congratulations = () => {
  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <>
      <StatusBar style="light" />
      <ImageBackground
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
        resizeMode="cover"
        source={images.background3}
      >
        <View
          style={{
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Congrats />
          <View
            style={{
              marginTop: size.getHeightSize(20),
              width: size.getWidthSize(180),
              // height: size.getHeightSize(80),
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: appColor.kTextColor,
                fontSize: size.fontSize(32),
                fontFamily: "Outfit-Bold",
                textAlign: "center",
                lineHeight: size.getHeightSize(40),
              }}
            >
              Congrats!
            </Text>
            <Text
              style={{
                color: appColor.kTextColor,
                fontSize: size.fontSize(32),
                fontFamily: "Outfit-Bold",
                lineHeight: size.getHeightSize(40),
                textAlign: "center",
              }}
            >
              You made it!
            </Text>
          </View>
          <LetGoButton navigateTo="DrawerNavigation" />
        </View>
      </ImageBackground>
    </>
  );
};

export default Congratulations;
