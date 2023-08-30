import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { sizes } from '../../utils/size';
import { appColor, fonts } from '../../constants';
import RenderDescription from './Description';
import { TabRouter } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import PinnedPost from './JoinModal';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const AboutCommunity = () => {
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <View
      style={{
        backgroundColor: appColor.feedBackground,
        flex: 1,
      }}
    >
      <View
        style={{
          height: size.getHeightSize(16),
        }}
      />
      <View
        style={{
          flex: 1,
        }}
      >
        <RenderDescription
          showCategories={false}
          description="Description lorem ispum et quotindolor sit amet quot amet ipuet ipuet ipuet ipuet ipuet ipusm dolorit emoit escription lorem ispum et quoti ndolor sit amet qum dolorit emoi"
          link="www.site.com"
        />
        <ScrollView
          style={{
            paddingHorizontal: size.getWidthSize(16),
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
                  Do not share suspicious links, harmefuharmful content or spam
                  links
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
                <Text style={styles.leadingText}>Be kind and respectful</Text>
                <Text style={styles.ruleDescription}>
                  Respect everyone's opinion
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  context: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-SemiBold',
    fontWeight: '600',
    lineHeight: size.getHeightSize(24),
  },
  rule: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-SemiBold',
    lineHeight: size.getHeightSize(24),
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

export default AboutCommunity;
