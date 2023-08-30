import { View, Text, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
import { sizes } from "../../../utils";
import { appColor } from "../../../constants";
import User from "../../../../assets/images/svg/User";
import NickNameField from "./NickNameField";
import UsernameField from "./UsernameField";

const size = new sizes(height, width);
const ChooseUsernameContent = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          marginTop: size.getHeightSize(32),
          alignSelf: "center",
        }}
      >
        <User />
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
          How shall we call you?
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
          Stand out in TowneSquare with a display name and a unique username.
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <NickNameField />
        <View style={{ height: size.getHeightSize(32) }} />
        <UsernameField />
      </View>
    </View>
  );
};

export default ChooseUsernameContent;
