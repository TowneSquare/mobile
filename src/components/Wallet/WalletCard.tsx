import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import React from 'react';

import { useFonts } from 'expo-font';
import BarCodeIcon from '../../../assets/images/svg/BarcodeIcon';
import SendIcon from '../../../assets/images/svg/SendIcon';
import SwapIcon from '../../../assets/images/svg/SwapIcon';
import { images, fonts, appColor } from '../../constants';
import { sizes } from '../../utils';

import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '../../controller/hooks';

import TowneSquareProfileLogo from '../../../assets/images/svg/TowneSquareProfileLogo';
import { LinearGradient } from 'expo-linear-gradient';
import TownesquareGradient from '../../../assets/images/svg/TownesquareGradient';
const { height, width } = Dimensions.get('window');
import WalletImage from '../../../assets/images/svg/WalletImage';
const size = new sizes(height, width);
interface Props {
  APTOS_DOMAIN_NAME: string;
}
const WalletCard = ({ APTOS_DOMAIN_NAME }: Props) => {
  const navigation = useNavigation();
  const profilePics = useAppSelector(
    (state) => state.USER.details.profileImage
  );
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  return (
    <View style={[styles.view1]}>
      <View style={{}}>
        <View
          style={{
            position: 'relative',
            backgroundColor: '#9D9D9D',

            borderRadius: 10,
            // height: size.getHeightSize(207),
          }}
        >
          <View
            style={{
              position: 'relative',
              backgroundColor: '#060606',
              borderRadius: 10,
              top: size.getHeightSize(1),
            }}
          >
            <LinearGradient
              colors={[
                '#3D4043',
                '#292D30',
                '#313436',
                '#292B2C',
                '#292A2C',
                '#111214',
              ]}
              locations={[0.0152, 0.3642, 0.479, 0.5846, 0.724, 1]}
              start={[-0.18, 0.01]}
              end={[0.7, 0.99]}
              style={styles.linearGradient}
            >
              <Image
                source={images.profileVector}
                style={styles.absoluteImage}
                resizeMode="cover"
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',

                  height: size.getHeightSize(28),
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    paddingLeft: size.getWidthSize(1.5),
                    gap: size.getWidthSize(4),
                  }}
                >
                  <TowneSquareProfileLogo />
                  <TownesquareGradient
                    style={{ marginTop: size.getHeightSize(3) }}
                  />
                </View>
                <View />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: size.getWidthSize(12),
                  marginTop: size.getHeightSize(13),
                }}
              >
                <LinearGradient
                  colors={[
                    '#F1C6DD',
                    '#C1A4E8',
                    '#B8E2FB',
                    '#F2EFE8',
                    '#F9DCDD',
                    '#E1C1E5',
                    '#BDAFE3',
                    '#C7EDEB',
                    '#E7F5EB',
                    '#F2F0E7',
                    '#DDC1E1',
                  ]}
                  start={{ x: 1.3, y: -0.1 }}
                  end={{ x: 0.1, y: 1 }}
                  locations={[
                    0, 0.1391, 0.2387, 0.3749, 0.4779, 0.5576, 0.6241, 0.7204,
                    0.8301, 0.9131, 1,
                  ]}
                  style={styles.gradient}
                >
                  <WalletImage />
                </LinearGradient>
                <View style={{}}>
                  <Text style={styles.walletBalance}>Wallet balance</Text>
                  <Text style={styles.balance}>$26,231</Text>
                </View>
              </View>
              <View style={{ marginTop: size.getHeightSize(27) }}>
                <Text
                  style={{
                    fontFamily: 'Outfit-SemiBold',
                    color: '#FCFAFF',
                    fontSize: size.fontSize(16),
                    lineHeight: size.getHeightSize(21),
                  }}
                >
                  {APTOS_DOMAIN_NAME}
                </Text>
                <Text style={styles.address}>0x4184CED...1584CE3c4d</Text>
              </View>
            </LinearGradient>
          </View>
        </View>
      </View>

      <View style={styles.view2}>
        <Pressable
          onPress={() => {}}
          style={[
            styles.view2Box,
            {
              borderRightWidth: 1,
              borderRightColor: appColor.grayDark,
            },
          ]}
        >
          <BarCodeIcon />
          <Text style={styles.view2TextUp}>Receive</Text>
        </Pressable>
        <Pressable
          onPress={() => {}}
          style={[
            styles.view2Box,
            {
              borderRightWidth: 1,
              borderRightColor: appColor.grayDark,
            },
          ]}
        >
          <SendIcon />
          <Text style={styles.view2TextUp}>Send</Text>
        </Pressable>
        <Pressable style={styles.view2Box}>
          <SwapIcon />
          <Text style={styles.view2TextUp}>Swap</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default WalletCard;
const styles = StyleSheet.create({
  view1: {
    borderRadius: 10,
    marginTop: size.getHeightSize(16),
    backgroundColor: appColor.kgrayDark2,
    marginHorizontal: size.getWidthSize(16),
  },
  text: {
    color: appColor.kGrayscale,
    fontFamily: 'Outfit-Bold',
    paddingLeft: 5,
  },
  view2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: size.getHeightSize(4),
    marginHorizontal: size.getWidthSize(4),
    
    height:size.getHeightSize(40),
    marginBottom:size.getHeightSize(7)
  },
  view2Box: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    gap: size.getWidthSize(4),
    justifyContent: 'center',
    paddingVertical: size.getHeightSize(4),
  },
  view2TextUp: {
    fontFamily: 'Outfit-SemiBold',
    color: appColor.primaryLight,
    lineHeight: size.getHeightSize(21),
    fontSize: size.fontSize(16),
  },
  view2TextDown: {
    fontFamily: 'Outfit-Regular',
    color: appColor.kGrayscale,
    fontSize: size.fontSize(14),
  },

  imageContainer: {},
  image: {
    width: size.getHeightSize(84),
    height: size.getHeightSize(84),
    borderRadius: 200,
    marginBottom: size.getHeightSize(2),
  },
  gradient: {
    height: size.getHeightSize(84),
    width: size.getHeightSize(84),
    borderRadius: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  walletBalance: {
    color: appColor.kGrayscale,
    fontFamily: 'Outfit-Regular',
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
  },
  balance: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(29),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(37),
  },
  absoluteImage: {
    position: 'absolute',
    bottom: 0,
    marginTop: size.getHeightSize(16),
    height: size.getHeightSize(185),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  linearGradient: {
    paddingHorizontal: size.getWidthSize(16),
    paddingTop: size.getHeightSize(16),
    paddingBottom: size.getHeightSize(13),
    borderRadius: 10,
    marginBottom: size.getHeightSize(1),
  },
  address: {
    fontFamily: 'Outfit-Regular',
    color: appColor.kGrayscale,
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
  },
});
