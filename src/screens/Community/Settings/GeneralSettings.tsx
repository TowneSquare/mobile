import React from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ArrowRight from '../../../../assets/images/svg/ArrowRight';
import { appColor } from '../../../constants';
import { GeneralSettingsProps } from '../../../navigations/NavigationTypes';
import Header from '../../../shared/Feed/Header';
import { sizes } from '../../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const GeneralSettings = ({ navigation }: GeneralSettingsProps) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <Header title="General" />
      <Text style={styles.label}>Community name</Text>
      <View style={styles.communityView}>
        <Text style={styles.communityName}>Community X</Text>
      </View>
      <Text style={styles.privacy}>Privacy</Text>
      <Pressable onPress={() => navigation.navigate('CommunityPrivacy')}>
        <View style={styles.row}>
          <Text style={styles.text}>Public community</Text>
          <ArrowRight size={size.getHeightSize(24)} />
        </View>
        <Text style={styles.text2}>Everyone can join the community</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('TokenGateSettings')}>
        <View
          style={[
            styles.row,
            {
              marginTop: size.getHeightSize(24),
            },
          ]}
        >
          <Text style={styles.text}>Token-gated</Text>
          <ArrowRight size={size.getHeightSize(24)} />
        </View>
        <Text style={styles.text2}>
          Members need to hold certain NFT or crypto asset to be able to join
        </Text>
      </Pressable>
      <View
        style={[
          styles.row,
          {
            marginTop: size.getHeightSize(24),
          },
        ]}
      >
        <Text style={styles.text}>Tags</Text>
        <ArrowRight size={size.getHeightSize(24)} />
      </View>
      <Text style={styles.text2}>Dummy text</Text>
    </SafeAreaView>
  );
};

export default GeneralSettings;
const styles = StyleSheet.create({
  label: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
    fontFamily: 'Outfit-Regular',
    marginTop: size.getHeightSize(32),
    marginHorizontal: size.getWidthSize(16),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: size.getWidthSize(16),
    marginTop: size.getHeightSize(24),
    gap: size.getWidthSize(8),
  },
  text: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    letterSpacing: 0.4,
    fontFamily: 'Outfit-SemiBold',
    flex: 1,
  },
  text2: {
    color: appColor.grayLight,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    letterSpacing: 0.4,
    fontFamily: 'Outfit-Regular',
    marginHorizontal: size.getWidthSize(16),
    marginTop: size.getHeightSize(4),
    maxWidth: size.getWidthSize(292),
  },
  communityView: {
    marginHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(12),
    paddingHorizontal: size.getWidthSize(16),
    borderWidth: 1,
    borderColor: appColor.kGrayscale,
    marginTop: size.getHeightSize(16),
    borderRadius: 40,
  },
  communityName: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
    fontFamily: 'Outfit-Regular',
  },
  privacy: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
    fontFamily: 'Outfit-Bold',
    marginHorizontal: size.getWidthSize(16),
    marginTop: size.getHeightSize(32),
  },
});
