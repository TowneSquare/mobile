import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appColor } from '../../constants';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
const size = new sizes(height, width);
const CommunityDemo = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
        justifyContent: 'center',
      }}
    >
      <Text
        onPress={() => navigation.navigate('CreateCommunity1')}
        style={{
          color: appColor.kTextColor,
          fontSize: size.fontSize(20),
          lineHeight: size.getHeightSize(24),
          letterSpacing: 0.4,
          fontFamily: 'Outfit-Bold',
          textAlign: 'center',
        }}
      >
        Create Community
      </Text>
      <Text
        onPress={() => navigation.navigate('CommunityInfoScreen')}
        style={{
          color: appColor.kTextColor,
          fontSize: size.fontSize(20),
          lineHeight: size.getHeightSize(24),
          letterSpacing: 0.4,
          fontFamily: 'Outfit-Bold',
          textAlign: 'center',
          marginTop: size.getHeightSize(32),
        }}
      >
        Join Community
      </Text>
      <Text
        onPress={() => navigation.navigate('CommunityScreen')}
        style={{
          color: appColor.kTextColor,
          fontSize: size.fontSize(20),
          lineHeight: size.getHeightSize(24),
          letterSpacing: 0.4,
          fontFamily: 'Outfit-Bold',
          textAlign: 'center',
          marginTop: size.getHeightSize(32),
        }}
      >
        New Community
      </Text>
      <Text
        onPress={() => navigation.navigate('CommunitySettings')}
        style={{
          color: appColor.kTextColor,
          fontSize: size.fontSize(20),
          lineHeight: size.getHeightSize(24),
          letterSpacing: 0.4,
          fontFamily: 'Outfit-Bold',
          textAlign: 'center',
          marginTop: size.getHeightSize(32),
        }}
      >
        Settings
      </Text>
    </SafeAreaView>
  );
};

export default CommunityDemo;
