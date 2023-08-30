import {
  Button,
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import { appColor, fonts, images } from '../../constants';
import { sizes } from '../../utils';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

const CommunityWelcomeScreen = () => {
  const navigation = useNavigation();
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <SafeAreaView>
      <ImageBackground
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        resizeMode="cover"
        source={images.background3}
      >
        <View
          style={{
            alignItems: 'center',
            flex: 1,
          }}
        >
          <View
            style={{
              marginTop: size.getHeightSize(60),
            }}
          >
            <Text style={styles.context2}>Welcome to</Text>
            <View
              style={{
                marginTop: size.getHeightSize(20),
                height: size.getHeightSize(131.125),
                width: size.getWidthSize(133.509),
                alignSelf: 'center',
              }}
            >
              <Image
                source={images.MainAvatar}
                style={{
                  alignSelf: 'center',
                  height: '100%',
                  width: '100%',
                  borderRadius: 8,
                }}
              />
            </View>

            <Text style={styles.title}>Community X</Text>

            <View
              style={{
                height: size.getHeightSize(106),
                marginHorizontal: size.getWidthSize(19),
                paddingHorizontal: size.getWidthSize(22),
                justifyContent: 'center',
              }}
            >
              <Text style={styles.context2}>Great to have you here</Text>
              <Text style={styles.context2}>Username123!</Text>

              <Text style={styles.bodytext}>
                We're all frens here, so please be sure to check out these
                community's rules:
              </Text>
            </View>

            <View
              style={{
                marginHorizontal: size.getHeightSize(24),
                flex: 1,
              }}
            >
              <Text style={styles.rule}>Rules</Text>
              <View
                style={{
                  gap: size.getHeightSize(16),
                  marginTop: size.getHeightSize(24),
                }}
              >
                <View style={styles.row}>
                  <Text style={styles.number}>1</Text>
                  <View style={styles.gap}>
                    <Text style={styles.leadingText}>No spamming</Text>
                    <Text style={styles.ruleDescription}>
                      Do not share suspicious links, harmefuharmful content or
                      spam links
                    </Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <Text style={styles.number}>2</Text>
                  <View style={styles.gap}>
                    <Text style={styles.leadingText}>Only English</Text>
                    <Text style={styles.ruleDescription}>
                      Please write only in English
                    </Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <Text style={styles.number}>3</Text>
                  <View style={styles.gap}>
                    <Text style={styles.leadingText}>No self promo</Text>
                    <Text style={styles.ruleDescription}>
                      Please don't spam with you personal links
                    </Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <Text style={styles.number}>4</Text>
                  <View style={styles.gap}>
                    <Text style={styles.leadingText}>
                      Be kind and respectful
                    </Text>
                    <Text style={styles.ruleDescription}>
                      Respect everyone's opinion
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Pressable
              onPress={() => {
                navigation.navigate('CommunityMainScreen');
              }}
              style={{
                backgroundColor: appColor.kWhiteColor,
                alignSelf: 'center',

                borderRadius: 40,
                marginBottom: size.heightSize(22),
                justifyContent: 'center',
                paddingVertical: size.getHeightSize(14),
                paddingHorizontal: size.widthSize(59),
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  color: appColor.kButtonTextColor,
                  fontSize: size.fontSize(16),
                  fontFamily: 'Outfit-SemiBold',

                  letterSpacing: 0.16,
                  lineHeight: size.getHeightSize(20),
                }}
              >
                LET'S GOOO!
              </Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(32),
    fontFamily: 'Outfit-Bold',
    textAlign: 'center',
    marginBottom: size.getHeightSize(32),
    marginTop: size.getHeightSize(20),
    lineHeight: size.getHeightSize(40),
  },
  context: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-SemiBold',

    lineHeight: size.getHeightSize(24),
  },
  context2: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Bold',
    textAlign: 'center',
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
  },
  bodytext: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(21),
    marginTop: size.getHeightSize(16),
    textAlign: 'left',
  },
  rule: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-SemiBold',
    lineHeight: size.getHeightSize(24),
    marginTop: size.getHeightSize(32),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',

    gap: size.getWidthSize(20),
  },
  number: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Bold',
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
  },
  gap: {
    gap: size.getHeightSize(4),
    flex: 1,
  },
  leadingText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    lineHeight: size.getHeightSize(21),
  },
  ruleDescription: {
    color: appColor.kGrayscale,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(21),
  },
});

export default CommunityWelcomeScreen;
