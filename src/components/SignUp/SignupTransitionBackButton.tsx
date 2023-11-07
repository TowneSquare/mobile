import { View, Text, Dimensions } from 'react-native';
import { appColor, fonts } from '../../constants';
import { useFonts } from 'expo-font';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
interface Props {
  action: () => void;
  index?: number;
  next?: () => void;
}
const SignupTransitionBackButton = ({ action, index, next }: Props) => {
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
  });
  if (!isLoaded) {
    return null;
  }

  const size = new sizes(height, width);
  return (
    <View
      style={{
        alignSelf: 'center',
        width: size.getWidthSize(328),
        borderRadius: 40,
        minHeight: size.getHeightSize(48),
        justifyContent: 'center',
        paddingVertical: size.getHeightSize(12.5),
      }}
    >
      <Text
        onPress={() => {
          index === 5 ? next() : action();
        }}
        style={{
          fontStyle: 'normal',
          textAlign: 'center',
          color: appColor.kTextColor,
          fontSize: size.fontSize(18),
          fontFamily: 'Outfit-Medium',
          lineHeight: size.getHeightSize(23),
          letterSpacing: 0.02,
        }}
      >
        {index === 5? "I'll do it later" : 'Back'}
      </Text>
    </View>
  );
};

export default SignupTransitionBackButton;
