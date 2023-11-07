import { Text, Dimensions, Pressable } from "react-native";
import { appColor } from "../../constants";
import { sizes } from "../../utils";
import { useAppSelector } from "../../controller/hooks";
const { height, width } = Dimensions.get("window");
interface Props {
  disable: boolean;
  action: () => void;
}
const TranslationForwardButton = ({ disable, action }: Props) => {
  const usernameError = useAppSelector(
    (state) => state.USER.errors.usernameError
  );
  const nickNameError = useAppSelector(
    (state) => state.USER.errors.nicknameError
  );
  const size = new sizes(height, width);

  let disabled = usernameError || nickNameError || disable;
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
        minHeight: size.getHeightSize(48),
        justifyContent: "center",
        marginTop: size.getHeightSize(8),
        paddingVertical: size.getHeightSize(12.5),
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
