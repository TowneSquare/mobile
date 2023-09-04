import { View, Text, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
import { sizes } from "../../../utils";
import { appColor } from "../../../constants";
import Envelope from "../../../../assets/images/svg/Envelope";
import EmailField from "./EmailField";
const size = new sizes(height, width);
const EmailContent = () => {
  return (
    <>
      <View
        style={{
          marginTop: size.getHeightSize(32),
          alignSelf: "center",
          paddingLeft: size.getWidthSize(16),
        }}
      >
        <Envelope />
      </View>
      <View
        style={{
          marginHorizontal: size.getWidthSize(16),
        }}
      >
        <Text
          style={{
            color: appColor.kTextColor,
            fontSize: size.fontSize(29),
            fontFamily: "Outfit-Bold",
            textAlign: "center",
            marginTop: size.getHeightSize(8),
            lineHeight: size.getHeightSize(37),
          }}
        >
          Get started
        </Text>
      </View>
      <View
        style={{
          alignSelf: "center",
          marginTop: size.getHeightSize(8),
          width: size.getWidthSize(304),
          marginHorizontal: size.getWidthSize(16),
        }}
      >
        <Text
          style={{
            color: appColor.kTextColor,
            fontSize: size.fontSize(16),
            fontFamily: "Outfit-Regular",
            textAlign: "center",
            lineHeight: size.getHeightSize(21),
          }}
        >
          Continue with your email
        </Text>
      </View>
      <View style={{ height: size.getHeightSize(113.5) }} />
      <View>
        <EmailField />
      </View>
      <View style={{ height: size.getHeightSize(180) }} />
      <View>
        <Text
          style={{
            color: appColor.kTextColor,
            fontSize: size.fontSize(14),
            fontFamily: "Outfit-Regular",
            textAlign: "center",
            lineHeight: size.getHeightSize(18),
          }}
        >
          By continuing to use the app, you agree to the Terms of Service and
          Privacy Policy.
        </Text>
      </View>
    </>
  );
};

export default EmailContent;
