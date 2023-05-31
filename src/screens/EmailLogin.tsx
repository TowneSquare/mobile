import {
  Dimensions,
  StyleSheet,
} from 'react-native';
import { useFonts } from 'expo-font';
import { appColor, fonts, images } from '../constants';
import { sizes } from '../utils';
const { height, width } = Dimensions.get('window');
import { EmailLoginProps } from '../utils/NavigationTypes';
const size = new sizes(height, width);

import { Magic } from '@magic-sdk/react-native-expo';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text } from 'react-native';

const EmailLogin = ({ navigation }: EmailLoginProps) => {
  const m = new Magic('pk_live_CA547FCC1F472701'); // ✨

  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
    'Outfit-ExtraBold': fonts.OUTFIT_EXTRABOLD,
  });
  if (!isLoaded) {
    return null;
  }

  return (
    <>
      <Text
        style={{
          textAlign: 'center',
          color: appColor.kButtonTextColor,
          fontFamily: 'Outfit-Bold',
          fontSize: size.fontSize(17.0213),
          lineHeight: size.getHeightSize(21),
          fontStyle: 'normal',
          textTransform: 'uppercase',
        }}
      >
        Connect Wallet
      </Text>
      <SafeAreaProvider>


        {/* Remember to render the `Relayer` component into your app! */}
        <m.Relayer />
      </SafeAreaProvider >
    </>
  );
};

export default EmailLogin;
const styles = StyleSheet.create({
  socials: {
    height: size.getHeightSize(51.06),
    width: size.getHeightSize(51.06),
    backgroundColor: appColor.kWhiteColor,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
