import {
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  StyleSheet,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React from 'react';
import { appColor, fonts, images } from '../constants';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
const { height, width } = Dimensions.get('window');
import UsernameField from '../components/UsernameField';
import User from '../images/svg/User';
import ContinueButton from '../components/ContinueButton';
import BackButton from '../components/BackButton';
import ProfileSetUpHeader from '../components/ProfileSetUpHeader';
import { sizes } from '../utils';

const ChooseUsername = () => {
  const size = new sizes(height, width);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.kDisabledColor,
      }}
    >
      <StatusBar style="light" backgroundColor={appColor.kDisabledColor} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ProfileSetUpHeader
          SvgImage={<User />}
          stepDescription="Connect socials and verify"
          title="Choose your username"
          sub_title={`Stand out in TowneSquare with \n  a unique username.`}
          steps={1}
          iconMarginTop={32}
        />
        <View style={{ height: size.getHeightSize(156) }} />
        <View>
          <UsernameField />
        </View>
        <View style={{ flex: 1 }} />
        <View
          style={{
            height: size.getHeightSize(124),
            marginBottom: size.getHeightSize(24),
          }}
        >
          <ContinueButton navigateTo="ConnectSocialsAndVrify" />
          <BackButton marginTop={16} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChooseUsername;
