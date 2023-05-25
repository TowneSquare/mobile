import { View, Text, Dimensions, ImageBackground } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import { appColor, fonts, images } from '../constants';
import { StatusBar } from 'expo-status-bar';
import CompleteSignUpModal from '../components/CompleteSignUpModal';
import { sizes } from '../utils';
import { SafeAreaView } from 'react-native-safe-area-context';
import Wallets from '../components/Wallets';
import { useAppSelector } from '../controller/hooks';
import BackButton from '../components/BackButton';
import Background3 from '../images/svg/Background3';
import { ChooseProfileProps } from '../utils/NavigationTypes';
const { height, width } = Dimensions.get('window');
const ChooseProfile = ({ navigation }: ChooseProfileProps) => {
  const size = new sizes(height, width);
  const isVisible = useAppSelector(
    (state) => state.bottomSheetController.isBottomSheetOpen
  );
  const renderCount = useAppSelector(
    (state) => state.bottomSheetController.renderCount
  );
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <StatusBar style="light" backgroundColor={appColor.kStatusBarNaviDark} />
      <ImageBackground
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          alignItems: 'center',
        }}
        resizeMode="cover"
        source={images.ChooseWallet}
      >
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor:
              isVisible && renderCount > 0
                ? appColor.kBlackWithOpacity
                : undefined,
            alignItems: 'center',
            paddingTop: size.getHeightSize(72),
          }}
        >
          <Text
            style={{
              opacity: isVisible && renderCount > 0 ? 0.3 : 1,
              top: size.sHeight(0.04),
              color: appColor.kTextColor,
              fontStyle: 'normal',
              fontSize: size.fontSize(32),
              fontFamily: 'Outfit-Bold',
              textAlign: 'center',
              lineHeight: size.getHeightSize(40),
            }}
          >
            Choose your wallet
          </Text>
          <Wallets />
          <BackButton marginTop={164} />
        </View>

        <CompleteSignUpModal />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ChooseProfile;
