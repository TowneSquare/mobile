import React, { useContext } from 'react';
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import AptosIcon from '../../../../assets/images/svg/AptosIcon';
import CheckBox from '../../../../assets/images/svg/CheckBox';
import UncheckedBoxIcon from '../../../../assets/images/svg/UncheckedBoxIcon';
import { appColor } from '../../../constants';
import { SetCommunitySettingsContext } from '../../../context/CommunitySettingsContext';
import { sizes } from '../../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const CryptoAsset = () => {
  const {
    setChooseAssetBottomSheetVisibilty,
    communityDetails,
    setCommunityDetails,
    selectedAsset,
    setSelectedAssetBottomSheetVisibility,
  } = useContext(SetCommunitySettingsContext);

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: size.getWidthSize(16),
      }}
    >
      <Text style={styles.choose}>Choose asset</Text>
      <View style={styles.view1}>
        {selectedAsset ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
            }}
          >
            <AptosIcon size={size.getHeightSize(24)} />
            <Text style={styles.assetId}>APT</Text>
            <Text style={styles.assetName}>Aptos</Text>
          </View>
        ) : (
          <Text style={styles.label}>Asset</Text>
        )}
        <Text
          onPress={() => setChooseAssetBottomSheetVisibilty(true)}
          style={styles.label2}
        >
          {!selectedAsset ? 'Choose' : 'Change'}
        </Text>
      </View>
      <Text style={styles.text1}>Select Amount</Text>
      <View
        style={{
          marginTop: size.getHeightSize(32),
          gap: size.getHeightSize(24),
          opacity: !selectedAsset ? 0.4 : 1,
        }}
      >
        <Pressable
          disabled={!selectedAsset}
          onPress={() => {
            communityDetails.cryptoAssetAmountType = 'any_amount';
            communityDetails.selectedCryptoAsset.amount = '';
            setCommunityDetails({
              ...communityDetails,
            });
          }}
          style={styles.row}
        >
          {communityDetails.cryptoAssetAmountType &&
          communityDetails.cryptoAssetAmountType === 'any_amount' ? (
            <CheckBox size={size.getHeightSize(24)} />
          ) : (
            <UncheckedBoxIcon size={size.getHeightSize(24)} />
          )}
          <Text style={styles.rowText1}>Any Amount</Text>
        </Pressable>
        <Pressable
          disabled={!selectedAsset}
          onPress={() => {
            communityDetails.cryptoAssetAmountType = 'specified_amount';
            setCommunityDetails({
              ...communityDetails,
            });
          }}
          style={styles.row}
        >
          {communityDetails.cryptoAssetAmountType &&
          communityDetails.cryptoAssetAmountType === 'specified_amount' ? (
            <CheckBox size={size.getHeightSize(24)} />
          ) : (
            <UncheckedBoxIcon size={size.getHeightSize(24)} />
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
          value={communityDetails.selectedCryptoAsset.amount}
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
        {communityDetails.cryptoAssetAmountType === 'specified_amount' ? (
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
      <View style={{ height: size.getHeightSize(214) }} />
      <Pressable
        disabled={
          communityDetails.cryptoAssetAmountType === 'specified_amount' &&
          !communityDetails.selectedCryptoAsset.amount
        }
        onPress={() => {
          setSelectedAssetBottomSheetVisibility(true);
        }}
        style={{
          ...styles.save,
          backgroundColor:
            communityDetails.cryptoAssetAmountType === 'specified_amount' &&
            !communityDetails.selectedCryptoAsset.amount
              ? '#FFFFFF60'
              : appColor.kWhiteColor,
        }}
      >
        <Text style={styles.saveText}>Save</Text>
      </Pressable>
    </View>
  );
};

export default CryptoAsset;
const styles = StyleSheet.create({
  rowText1: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(21),
  },
  choose: {
    color: appColor.kWhiteColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Bold',
    lineHeight: size.getHeightSize(21),
    marginTop: size.getHeightSize(32),
  },
  view1: {
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
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
  },

  assetId: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Bold',
    lineHeight: size.getHeightSize(21),
    marginLeft: size.getWidthSize(8),
  },
  assetName: {
    color: appColor.grayLight,
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(18),
    marginLeft: size.getWidthSize(8),
  },
  label: {
    color: appColor.kGrayLight3,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(21),
    flex: 1,
  },
  label2: {
    color: appColor.primaryLight,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Medium',
    lineHeight: size.getHeightSize(21),
    marginLeft: size.getWidthSize(8),
    letterSpacing: 0.32,
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
  save: {
    alignSelf: 'center',
    width: size.getWidthSize(328),
    borderRadius: 40,
    minHeight: size.getHeightSize(48),
    justifyContent: 'center',
    paddingVertical: size.getHeightSize(12.5),
    marginBottom: size.getHeightSize(16),
  },
  saveText: {
    textAlign: 'center',
    color: appColor.kButtonTextColor,
    fontSize: size.fontSize(18),
    fontFamily: 'Outfit-Medium',
    fontStyle: 'normal',
    lineHeight: size.getHeightSize(23),
    letterSpacing: 0.02,
  },
});
