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
import React, {useState} from 'react';
import { appColor, fonts, images } from '../constants';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
const { height, width } = Dimensions.get('window');
import UsernameField from '../components/UsernameField';
import User from '../images/svg/User';import { useNavigation } from '@react-navigation/native';
import ContinueButton from '../components/ContinueButton';
import BackButton from '../components/BackButton';
import ProfileSetUpHeader from '../components/ProfileSetUpHeader';
import { sizes } from '../utils';

const ChooseUsername = () => {
   const navigation = useNavigation();
   const size = new sizes(height, width);
   const [value, onChangeText] = React.useState('');

   const onChange = (e:string) => {
    onChangeText(e)
   }

   const disabled = value === ''
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
          <UsernameField value={value} onChangeText={onChange} />
        </View>
        <View style={{ flex: 1 }} />
        <View
          style={{
            height: size.getHeightSize(124),
            marginBottom: size.getHeightSize(24),
          }}
        >
          {/* <ContinueButton navigateTo="ConnectSocialsAndVrify" marginTop={2} /> */}
           <Pressable
              disabled={disabled}
              onPress={() => {
       

               navigation.navigate("ConnectSocialsAndVrify"  as never);
            }}
            style={{
              backgroundColor: disabled
                ? appColor.kWhiteColorWithOpacity
                : appColor.kWhiteColor,
              alignSelf: 'center',
              width: size.sWidth(0.9),
              borderRadius: 40,
              height: size.sHeight(0.075),
              justifyContent: 'center',
              marginTop: 2 ? size.vMargin(2) : 0,
        
            }}
           >
            <Text
              style={{
                textAlign: 'center',
                color: appColor.kButtonTextColor,
                fontSize: size.fontSize(18),
                fontFamily: 'Outfit-Bold',
              }}
            >
              CONTINUE
            </Text>
          </Pressable>
          <BackButton marginTop={50} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChooseUsername;
