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
const ChooseUsername = () => {
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
          SvgImage = {<User/>}
          stepDescription="Connect socials & verify"
          title="Choose your username"
          sub_title="Stand out in Towne Square with a unique username"
          steps={1}
        />
        <View style={{ flex: 1 }}>
          <UsernameField />
        </View>
        <View
          style={{
            alignSelf: 'baseline',
            alignItems: 'center',
            width: '100%',
            height: 150,
          }}
        >
          <ContinueButton navigateTo="ConnectSocialsAndVrify" marginTop={2} />
          <BackButton marginTop={50} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChooseUsername;
