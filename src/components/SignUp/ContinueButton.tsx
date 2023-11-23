import { Text, Dimensions, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import { appColor, fonts } from '../../constants';
import { sizes } from '../../utils';
import { useNavigation } from '@react-navigation/native';
const { height, width } = Dimensions.get('window');
import { updateBottomSheet } from '../../controller/BottomSheetController';

import { useAppDispatch } from '../../controller/hooks';
interface Props {
  navigateTo?: string;
  marginTop?: number;
  onPress?: () => void;
  disabled?: boolean;
}
const ContinueButton = ({
  navigateTo,
  marginTop,
  onPress,
  disabled,
}: Props) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
  });
  if (!isLoaded) {
    return null;
  }
  const size = new sizes(height, width);
  return (
    <Pressable
      disabled={disabled}
      onPress={() => {
        onPress();
        // navigation.navigate(navigateTo as never);
      }}
      style={{
        backgroundColor: disabled
          ? appColor.kWhiteColorWithOpacity
          : appColor.kWhiteColor,
        alignSelf: 'center',
        width: size.getWidthSize(328),
        borderRadius: 40,
        // height: size.getHeightSize(48),
        justifyContent: 'center',
        marginTop: marginTop ? size.getHeightSize(8) : 8,
        paddingVertical: size.getHeightSize(12.5),
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          color: appColor.kButtonTextColor,
          fontSize: size.fontSize(18),
          fontFamily: 'Outfit-Medium',
          fontStyle: 'normal',
          lineHeight: size.getHeightSize(23),
          letterSpacing: 0.02,
        }}
      >
        Continue
      </Text>
    </Pressable>
  );
};

export default ContinueButton;
