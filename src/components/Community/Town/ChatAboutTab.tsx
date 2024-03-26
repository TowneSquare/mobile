import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import ImageStack from '../../../shared/Feed/ImageStack';
import RenderDescription from '../JoinCommunity/Description';
import { appColor, images } from '../../../constants';
import CommunityAvatar from '../../../../assets/images/svg/CommunityAvatar';
import { sizes } from '../../../utils';
const { height, width } = Dimensions.get('window');

const size = new sizes(height, width);
const ChatAboutTab = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <View
        style={{
          width: '100%',
          height: size.getHeightSize(124),
        }}
      >
        <Image
          resizeMode="cover"
          style={{
            height: '100%',
            width: '100%',
          }}
          source={images.SiothianCommunity}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: size.getWidthSize(10),
          marginTop: size.getHeightSize(6),
        }}
      >
        <View>
          <CommunityAvatar
            size={size.getHeightSize(75)}
            style={{
              position: 'absolute',
              bottom: size.getHeightSize(-24),
              marginLeft: size.getWidthSize(16),
            }}
          />
        </View>
        <Text
          style={{
            color: appColor.kTextColor,
            fontSize: size.fontSize(20),
            lineHeight: size.getHeightSize(24),
            letterSpacing: 0.4,
            fontFamily: 'Outfit-Bold',
            textAlign: 'center',
            marginLeft: size.getWidthSize(85),
          }}
        >
          Cool SIOths
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: size.getWidthSize(26),
          marginVertical: size.getHeightSize(16),
          alignItems: 'center',
        }}
      >
        <ImageStack />
        <Text style={styles.text}> 13K members</Text>
      </View>
      <Text style={styles.title}>Description</Text>
      <RenderDescription
        showCategories={false}
        description="Description lorem ispum et quotindolor sit amet quot amet ipuet ipuet ipuet ipuet ipuet ipusm dolorit emoit escription lorem ispum et quoti ndolor sit amet qum dolorit emoi"
        link="www.site.com"
      />
      <Text style={styles.title2}>Rules</Text>
      <View
        style={{
          gap: size.getHeightSize(16),

          paddingHorizontal: size.getWidthSize(22),
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
      <Text style={styles.title2}>Tags</Text>
      <View style={styles.categoryContainer}>
        <Pressable style={styles.categoryButton}>
          <Text style={styles.categoryButtonText}>Crytocurrency</Text>
        </Pressable>
        <Pressable style={styles.categoryButton}>
          <Text style={styles.categoryButtonText}>Travel</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default ChatAboutTab;

const styles = StyleSheet.create({
  text: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    letterSpacing: 0.4,
    fontWeight: '400',
    fontFamily: 'Outfit-Regular',
    paddingLeft: size.getWidthSize(36),
  },
  title: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    letterSpacing: 0.4,
    fontFamily: 'Outfit-SemiBold',
    paddingHorizontal: size.getWidthSize(16),
    marginBottom: size.getHeightSize(9.5),
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
  categoryContainer: {
    flexDirection: 'row',
    marginBottom: size.getHeightSize(24),
    paddingHorizontal: size.getWidthSize(16),
  },
  categoryButton: {
    paddingHorizontal: size.getWidthSize(16),
    height: size.heightSize(34),
    backgroundColor: appColor.grayDark,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: size.getWidthSize(8),
    borderRadius: 20,
  },
  categoryButtonText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(21),
    letterSpacing: 0.4,
    fontWeight: '400',
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
  },
  title2: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    letterSpacing: 0.4,
    fontFamily: 'Outfit-SemiBold',
    marginVertical: size.getHeightSize(16),
    paddingHorizontal: size.getWidthSize(22),
  },
});
