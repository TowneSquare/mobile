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
import tinycolor from 'tinycolor2';
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
    <>
      <StatusBar style="light" />
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
                ? tinycolor('#12121270').darken(10).toString()
                : tinycolor('#12121220').darken(10).toString(),
            alignItems: 'center',
            paddingTop: size.getHeightSize(72),
          }}
        >
          <Text
            style={{
              opacity: isVisible && renderCount > 0 ? 0.3 : 1,
              marginTop: size.getHeightSize(72),
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
          <View
            style={{
              height: size.getHeightSize(108),
            }}
          />
          <Wallets />
          <View style={{ flex: 1 }} />
          <View
            style={{
              height: size.getHeightSize(124),
              marginBottom: size.getHeightSize(24),
            }}
          >
            <View style={{ height: 48 }} />

            <BackButton marginTop={16} />
          </View>
        </View>

        <CompleteSignUpModal />
      </ImageBackground>
    </>
  );
};

export default ChooseProfile;
