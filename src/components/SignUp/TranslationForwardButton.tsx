import { View, Text, Dimensions, Pressable } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { appColor, fonts, images } from "../../constants";
import { sizes } from "../../utils";
import { useNavigation } from "@react-navigation/native";
import { useAppSelector } from "../../controller/hooks";
const { height, width } = Dimensions.get("window");
interface Props {
  action: () => void;
}
const TranslationForwardButton = ({ action }: Props) => {
  const usernameError = useAppSelector(
    (state) => state.USER.errors.usernameError
  );
  const nickNameError = useAppSelector(
    (state) => state.USER.errors.nicknameError
  );
  const userNameLength = useAppSelector(
    (state) => state.USER.details.username.length
  );
  const size = new sizes(height, width);
  const nickNameLength = useAppSelector(
    (state) => state.USER.details.Nickname.length
  );
  let disabled =
    usernameError || nickNameError || userNameLength < 1 || nickNameLength < 1;
  return (
    <Pressable
      disabled={disabled}
      onPress={() => {
        action();
      }}
      style={{
        backgroundColor: disabled
          ? appColor.kWhiteColorWithOpacity
          : appColor.kWhiteColor,
        alignSelf: "center",
        width: size.getWidthSize(328),
        borderRadius: 40,
        // height: size.getHeightSize(48),
        justifyContent: "center",
        marginTop: size.getHeightSize(8),
        paddingVertical: size.getHeightSize(16),
      }}
    >
      <Text
        style={{
          textAlign: "center",
          color: appColor.kButtonTextColor,
          fontSize: size.fontSize(18),
          fontFamily: "Outfit-Medium",
          fontStyle: "normal",
          lineHeight: size.getHeightSize(23),
          letterSpacing: 0.02,
        }}
      >
        Continue
      </Text>
    </Pressable>
  );
};

export default TranslationForwardButton;
