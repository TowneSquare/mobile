import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StackActions } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { sizes } from '../utils';
import LoginButton from '../components/LoginButton';
import { appColor, images, fonts } from '../constants';
import { LoginScreenProps } from '../utils/NavigationTypes';
import ChooseWalletModal from '../components/ChooseWalletModal';

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [isModalVisible, setModalVisibility] = useState(false);

  const { height, width } = Dimensions.get('window');
  const size = new sizes(height, width);
  let [isLoaded] = useFonts({
    'Urbanist-Bold': fonts.EXTRABOLD,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.APPBACKGROUNDCOLOR,
        alignItems: 'center',
      }}
    >
      <StatusBar style="light" />
      <View
        style={{
          marginTop: size.sHeight(0.033),
          height: size.sHeight(0.25),
          width: size.sWidth(0.9),

          justifyContent: 'space-between',
        }}
      >
        <Image source={images.towneSquare} />
        <Text
          style={[
            styles.textWithShadow,
            {
              fontWeight: '600',
              color: appColor.maintext,
              fontSize: size.fontSize(38),
              fontFamily: 'Urbanist-Bold',
            },
          ]}
        >
          Social
        </Text>
        <Text
          style={[
            styles.textWithShadow,
            {
              color: appColor.maintext,
              fontWeight: '600',
              fontSize: size.fontSize(38),
              fontFamily: 'Urbanist-Bold',
            },
          ]}
        >
          the web3 way
        </Text>
        <Text
          style={{
            color: appColor.maintext,
            fontWeight: '600',
            fontSize: size.fontSize(20),
            fontFamily: 'Urbanist-Bold',
          }}
        >
          Join Townesquare today
        </Text>
      </View>
      <View
        style={{
          paddingTop: size.sHeight(0.1),
          flex: 1,
          width: size.sWidth(0.9),
        }}
      >
        <Text
          style={{
            color: appColor.maintext,
            textAlign: 'center',
            fontWeight: '600',
            fontSize: size.fontSize(20),
            fontFamily: 'Urbanist-Bold',
          }}
        >
          Login
        </Text>

        <LoginButton
          onPress={() => {
            setModalVisibility(!isModalVisible);
          }}
          top={0.04}
          label="Web3 Wallet"
        />

        <LoginButton
          navigateTo="ChooseWallet"
          top={0.03}
          label="Import Wallet"
        />

        <Text
          style={{
            color: appColor.maintext,
            textAlign: 'center',
            paddingTop: size.sHeight(0.04),
            fontWeight: '600',
            fontSize: size.fontSize(16),
            fontFamily: 'Urbanist-Bold',
          }}
        >
          Don't have a wallet?
        </Text>
        <LoginButton
          navigateTo="ChooseWallet"
          top={0.03}
          label="Create Wallet"
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          bottom: size.sHeight(0.04),
        }}
      >
        <Image source={images.aptos} />
        <Text
          style={{
            color: appColor.maintext,
            marginLeft: 5,
            fontSize: size.fontSize(16),
            fontWeight: '700',
            textAlign: 'center',
          }}
        >
          POWERED BY APTOS
        </Text>
      </View>
      <ChooseWalletModal
        visibility={isModalVisible}
        onClose={() => setModalVisibility(!isModalVisible)}
        navigate={() => {
          navigation.navigate('WalletAddedScreen');
        }}
      />
    </SafeAreaView>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  textWithShadow: {
    textShadowColor: 'rgba(255, 0, 184, 0.65)',
    textShadowOffset: { width: -5, height: 6 },
    textShadowRadius: 13,
    fontWeight: '800',
    fontFamily: 'Urbanist-Bold',
  },
});
