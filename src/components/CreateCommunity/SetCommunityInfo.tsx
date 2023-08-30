import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  TextInput,
  Image,
} from 'react-native';
import React, { useState, useContext } from 'react';
const { height, width } = Dimensions.get('window');
import CameraIcon from '../../../assets/images/svg/CameraIcon';
import { appColor } from '../../constants';
import { sizes } from '../../utils';
const size = new sizes(height, width);
import CloseIcon from '../../../assets/images/svg/CloseIcon';
import RemoveAttachment from '../../../assets/images/svg/RemoveAttachment';
import { SetCommunityContext } from '../../context/SetUpCommunityContext';
const SetCommunityInfo = () => {
  const {
    setProfilePictureBottomSheet,
    selectedNFTImage,
    setSelectedImage,
    setCommunityDetails,
    communityDetails,
  } = useContext(SetCommunityContext);
  //   console.log(selectedNFTImage);
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>
        Let's add more details to your community!
      </Text>
      <View
        style={{
          justifyContent: 'space-between',

          flex: 1,
        }}
      >
        {communityDetails.communityPFP ? (
          <>
            <Pressable
              style={styles.pfpContainer}
              onPress={() => setProfilePictureBottomSheet(true)}
            >
              <Image
                style={styles.image}
                source={{ uri: communityDetails.communityPFP.uri }}
                resizeMode="cover"
              />
            </Pressable>
            <CloseIcon
              onPress={() =>
                setCommunityDetails({
                  ...communityDetails,
                  communityPFP: undefined,
                })
              }
              size={size.getHeightSize(36)}
              style={{
                position: 'absolute',
                top: size.getHeightSize(69),
                right: size.getWidthSize(58),
              }}
            />
          </>
        ) : (
          <Pressable
            onPress={() => setProfilePictureBottomSheet(true)}
            style={[styles.pfpContainer, { borderWidth: 3 }]}
          >
            <CameraIcon size={size.getHeightSize(32)} />
            <Text
              style={{
                color: appColor.kTextColor,
                fontSize: size.fontSize(16),
                fontFamily: 'Outfit-Regular',
                lineHeight: size.getHeightSize(24),
                textAlign: 'center',
              }}
            >
              Upload
            </Text>
          </Pressable>
        )}
        <View>
          <Text
            style={{
              color: appColor.kTextColor,
              fontSize: size.fontSize(16),
              fontFamily: 'Outfit-Medium',
              lineHeight: size.getHeightSize(21),
              marginBottom: size.getHeightSize(8),
            }}
          >
            Community name
          </Text>
          <TextInput
            cursorColor={appColor.klightPurple}
            placeholder="Insert community name"
            placeholderTextColor={appColor.kgrayTextColor}
            onChangeText={(text) => {
              setCommunityDetails({
                ...communityDetails,
                communityName: text,
              });
            }}
            style={{
              width: size.getWidthSize(328),
              height: size.getHeightSize(48),
              borderRadius: 48,
              borderWidth: 1,
              borderColor: appColor.kGrayscale,
              paddingHorizontal: size.getWidthSize(16),
              paddingVertical: size.getHeightSize(8),
              fontSize: size.fontSize(16),
              fontFamily: 'Outfit-Regular',
              color: appColor.kTextColor,
              backgroundColor: appColor.kGrayscaleDart,
            }}
          />
        </View>
        <Text
          style={{
            color: appColor.kTextColor,
            fontSize: size.fontSize(16),
            fontFamily: 'Outfit-Medium',
            lineHeight: size.getHeightSize(21),
            marginBottom: size.getHeightSize(24),
          }}
        >
          By proceeding with the community creation, you agree with the{' '}
          <Text
            style={{
              color: appColor.primaryLight,
            }}
          >
            Guidelines
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default SetCommunityInfo;
const styles = StyleSheet.create({
  title: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Bold',
    lineHeight: size.getHeightSize(24),
    textAlign: 'center',
    marginTop: size.getHeightSize(32),
    letterSpacing: 0.4,
  },
  titleDescription: {
    color: appColor.kGrayscale,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(21),
    textAlign: 'center',
    marginTop: size.getHeightSize(16),
  },
  privacyLeadingText: {
    color: appColor.primaryLight,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Bold',
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
  },
  privacyText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(21),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(16),
    gap: 3,
    borderWidth: 1,
    borderColor: appColor.grayLight,
    borderRadius: 8,
  },
  text: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Bold',
    lineHeight: size.getHeightSize(24),
    textAlign: 'center',
    marginTop: size.getHeightSize(16),
  },
  view: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: size.getWidthSize(16),
    width: size.getWidthSize(328),
  },
  leadingText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    lineHeight: size.getHeightSize(21),
  },
  description: {
    color: appColor.kGrayscale,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(21),
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 200,
  },
  pfpContainer: {
    borderColor: appColor.kWhiteColor,
    backgroundColor: appColor.kGrayLight3,
    alignItems: 'center',
    justifyContent: 'center',
    gap: size.getHeightSize(4),
    alignSelf: 'center',
    marginTop: size.getHeightSize(61.67),
    height: size.getHeightSize(160),
    width: size.getHeightSize(160),
    borderRadius: 200,
  },
});
