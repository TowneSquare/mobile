import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Pressable,
} from 'react-native';
import React, { useContext, useState } from 'react';
const { height, width } = Dimensions.get('window');
import RadioButton from '../../../assets/images/png/RadioButton';
import DefaultButton from '../../../assets/images/svg/DefaultButton';
import CommunityDiscoverIcon from '../../../assets/images/svg/CommunityDiscoverIcon';
import CommunityUsersIcon from '../../../assets/images/svg/CommunityUsersIcon';
import CommunityUserIcon from '../../../assets/images/svg/CommunityUserIcon';
import CoomunityMonetizeIcon from '../../../assets/images/svg/CommunityMonetizeIcon';
import { SetCommunityContext } from '../../context/SetUpCommunityContext';
import { appColor } from '../../constants';
import { sizes } from '../../utils';
import AptosIcon from '../../../assets/images/svg/AptosIcon';
const size = new sizes(height, width);
const CryptoAssetView = () => {
  const {
    setChooseAssetBottomSheetVisibilty,
    selectedAsset,

    setCommunityDetails,
    communityDetails,
  } = useContext(SetCommunityContext);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Text style={styles.title}>Crypto asset</Text>
      <Text style={styles.titleDescription}>
        New members will need to hold this crypto asset in order to join the
        community
      </Text>
      <Text
        style={{
          color: appColor.kGrayscale,
          fontSize: size.fontSize(16),
          fontFamily: 'Outfit-SemiBold',
          lineHeight: size.getHeightSize(21),

          marginTop: size.getHeightSize(32),
        }}
      >
        Choose asset
      </Text>
      <View
        style={{
          paddingVertical: size.getHeightSize(12),
          width: size.getWidthSize(328),
          minHeight: size.getHeightSize(48),
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: appColor.kGrayscale,
          borderRadius: 40,
          paddingHorizontal: size.getWidthSize(16),
          marginTop: size.getHeightSize(8),
          alignItems: 'center',
        }}
      >
        {selectedAsset ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
            }}
          >
            <AptosIcon size={size.getHeightSize(24)} />
            <Text
              style={{
                color: appColor.kTextColor,
                fontSize: size.fontSize(16),
                fontFamily: 'Outfit-Bold',
                lineHeight: size.getHeightSize(21),
                marginLeft: size.getWidthSize(8),
              }}
            >
              APT
            </Text>
            <Text
              style={{
                color: appColor.kTextColor,
                fontSize: size.fontSize(16),
                fontFamily: 'Outfit-Regular',
                lineHeight: size.getHeightSize(24),
                marginLeft: size.getWidthSize(8),
              }}
            >
              Aptos
            </Text>
          </View>
        ) : (
          <Text
            style={{
              color: appColor.kGrayLight3,
              fontSize: size.fontSize(16),
              fontFamily: 'Outfit-Regular',
              lineHeight: size.getHeightSize(21),
              flex: 1,
            }}
          >
            Asset
          </Text>
        )}
        <Text
          onPress={() => setChooseAssetBottomSheetVisibilty(true)}
          style={{
            color: appColor.primaryLight,
            fontSize: size.fontSize(16),
            fontFamily: 'Outfit-Medium',
            lineHeight: size.getHeightSize(21),
            marginLeft: size.getWidthSize(8),
            letterSpacing: 0.32,
          }}
        >
          {selectedAsset ? 'Choose' : 'Change'}
        </Text>
      </View>
      <Text style={styles.text1}>Select Amount</Text>
      <View
        style={{
          opacity: !selectedAsset ? 0.4 : 1,
          marginTop: size.getHeightSize(32),
          gap: size.getHeightSize(24),
        }}
      >
        <Pressable
          disabled={!selectedAsset}
          onPress={() => {
            setCommunityDetails({
              ...communityDetails,
              cryptoAssetAmountType: 'any_amount',
            });
          }}
          style={styles.row}
        >
          {communityDetails.cryptoAssetAmountType === 'any_amount' ? (
            <RadioButton size={size.getHeightSize(24)} />
          ) : (
            <DefaultButton size={size.getHeightSize(24)} />
          )}
          <Text style={styles.rowText1}>Any Amount</Text>
        </Pressable>
        <Pressable
          disabled={!selectedAsset}
          onPress={() => {
            setCommunityDetails({
              ...communityDetails,
              cryptoAssetAmountType: 'specified_amount',
            });
          }}
          style={styles.row}
        >
          {communityDetails.cryptoAssetAmountType === 'specified_amount' ? (
            <RadioButton size={size.getHeightSize(24)} />
          ) : (
            <DefaultButton size={size.getHeightSize(24)} />
          )}
          <Text style={styles.rowText1}>Select minimal amount</Text>
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',

          marginTop: size.getHeightSize(16),
          opacity:
            communityDetails.cryptoAssetAmountType === 'any_amount' ? 0.4 : 1,
        }}
      >
        <TextInput
          editable={
            communityDetails.cryptoAssetAmountType === 'specified_amount'
          }
          keyboardType="number-pad"
          cursorColor={appColor.klightPurple}
          placeholder="Asset"
          onChangeText={(text) => {
            communityDetails.selectedCryptoAsset.amount = text;
            setCommunityDetails({
              ...communityDetails,
            });
          }}
          placeholderTextColor={appColor.kgrayTextColor}
          style={{
            width: size.getWidthSize(258),
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
        {communityDetails.cryptoAssetAmountType === 'specified_amount' &&
        communityDetails.cryptoAssetAmountType ? (
          <Text
            style={{
              color: appColor.kTextColor,
              fontSize: size.fontSize(16),
              fontFamily: 'Outfit-Bold',
              lineHeight: size.getHeightSize(24),
              width: size.getWidthSize(54),
              textAlign: 'center',
            }}
          >
            {selectedAsset.Name}
          </Text>
        ) : (
          <Text
            style={{
              color: appColor.kTextColor,
              fontSize: size.fontSize(16),
              fontFamily: 'Outfit-Bold',
              lineHeight: size.getHeightSize(24),
              width: size.getWidthSize(54),
              textAlign: 'center',
            }}
          >
            -
          </Text>
        )}
      </View>
    </View>
  );
};

export default CryptoAssetView;
const styles = StyleSheet.create({
  titleDescription: {
    color: appColor.kGrayscale,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(21),
    textAlign: 'center',
    marginTop: size.getHeightSize(8),
  },
  text: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Bold',
    lineHeight: size.getHeightSize(24),
    textAlign: 'center',
    marginTop: size.getHeightSize(16),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
  },

  title: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(29),
    fontFamily: 'Outfit-Bold',
    lineHeight: size.getHeightSize(37),
    textAlign: 'center',
    marginTop: size.getHeightSize(32),

    letterSpacing: 0.4,
  },
  text1: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Bold',
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
    textAlign: 'center',
    marginTop: size.getHeightSize(32),
  },
  rowText1: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(21),
  },
});
