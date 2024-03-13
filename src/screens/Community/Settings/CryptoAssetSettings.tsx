import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import AssetBottomSheet from '../../../components/Community/CreateCommunity/AssetBottomSheet';
import SelectedAssetBottomsheet from '../../../components/Community/CreateCommunity/SelectedAssetBottomsheet';
import CryptoAsset from '../../../components/Community/Settings/CryptoAsset';
import { appColor } from '../../../constants';
import CommunitySettingsContext, { SetCommunitySettingsContext } from '../../../context/CommunitySettingsContext';
import { CryptoAssetSettingsProps } from '../../../navigations/NavigationTypes';
import { sizes } from '../../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const CryptoAssetSettings = ({ navigation }: CryptoAssetSettingsProps) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <View style={styles.container}>
        <Text onPress={navigation.goBack} style={styles.cancel}>
          Cancel
        </Text>
        <Text style={styles.title}>Token-gated</Text>
        <View style={{ width: size.getWidthSize(51) }} />
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Text style={styles.description}>Crypto asset</Text>
          <Text style={styles.text}>
            New members will need to hold a crypto asset in order to join the
            community
          </Text>
          <CommunitySettingsContext>
            <CryptoAsset />
            <SelectedAssetBottomsheet
              communityAssetType="crypto_asset"
              context={SetCommunitySettingsContext}
              navigateTo="TokenGateSettingsComplete"
            />
            <AssetBottomSheet context={SetCommunitySettingsContext} />
          </CommunitySettingsContext>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CryptoAssetSettings;

const styles = StyleSheet.create({
  title: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingVertical: size.getHeightSize(20),
    paddingHorizontal: size.getWidthSize(16),
    backgroundColor: appColor.kgrayDark2,
    justifyContent: 'space-between',
  },
  cancel: {
    color: appColor.primaryLight,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(20),
    fontFamily: 'Outfit-Medium',
    letterSpacing: size.getWidthSize(0.32),
  },
  text: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(21),
    textAlign: 'center',
    marginTop: size.getHeightSize(16),
    letterSpacing: 0.4,
    marginHorizontal: size.getWidthSize(16),
  },
  description: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(29),
    fontFamily: 'Outfit-Bold',
    lineHeight: size.getHeightSize(37),
    textAlign: 'center',
    marginHorizontal: size.getWidthSize(16),
    marginTop: size.getHeightSize(32),
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
  assetId: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Bold',
    lineHeight: size.getHeightSize(21),
    marginLeft: size.getWidthSize(8),
  },
  assetName: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(24),
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
});
