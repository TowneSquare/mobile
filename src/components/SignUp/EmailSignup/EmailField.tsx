import { View, Text, Dimensions, TextInput } from "react-native";
import { sizes } from "../../../utils";
import { useFonts } from "expo-font";
import { appColor, fonts } from "../../../constants";
import { useAppSelector, useAppDispatch } from "../../../controller/hooks";
import { updateEmail } from "../../../controller/UserController";
const EmailField = () => {
  const dispatch = useAppDispatch();
  const emailError = useAppSelector(
    (state) => state.USER.errors.emailError
  );
  const { height, width } = Dimensions.get("window");
  const size = new sizes(height, width);
  let [isLoaded] = useFonts({
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }

  return (
    <View
      style={{
        alignSelf: "center",
        width: size.getWidthSize(328),
        alignItems: "center",
      }}
    >
        <Text
            style={{
                fontSize: size.fontSize(16),
                fontFamily: "Outfit-SemiBold",
                paddingRight: size.getWidthSize(264),
                paddingBottom: size.getHeightSize(12),
                color: appColor.kTextColor,
                lineHeight: size.getHeightSize(21),
                fontStyle: "normal",
            }}
        >Email</Text>
        <TextInput
            cursorColor={appColor.klightPurple}
            placeholder="Email address"
            placeholderTextColor={appColor.kgrayTextColor}
            onChangeText={(text) => dispatch(updateEmail(text))}
            style={{
            width: size.getWidthSize(328),
            height: size.getHeightSize(48),
            borderRadius: 48,
            borderWidth: 1,
            borderColor: emailError
                ? appColor.kErrorText
                : appColor.kGrayscale,
            paddingHorizontal: size.getWidthSize(16),
            paddingVertical: size.getHeightSize(8),
            fontSize: size.fontSize(16),
            fontFamily: "Outfit-Regular",
            color: appColor.kTextColor,
            backgroundColor: appColor.kGrayscaleDart,
            marginHorizontal: size.getWidthSize(16),
            }}
        />
      {emailError && (
        <View
          style={{
            alignSelf: "flex-start",
          }}
        >
          <Text
            style={{
              marginTop: size.getHeightSize(8),
              color: appColor.kErrorText,
              fontSize: size.fontSize(16),
              lineHeight: size.getHeightSize(21),
              marginLeft: size.getWidthSize(16),
              fontFamily: "Outfit-Regular",
            }}
          >
            Email can be max. 70 characters long
          </Text>
        </View>
      )}
    </View>
  );
};

export default EmailField;
