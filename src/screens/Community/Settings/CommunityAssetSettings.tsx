import React, { useState } from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AptosIcon from '../../../../assets/images/svg/AptosIcon';
import CommunityNFT1 from '../../../../assets/images/svg/CommunityNFT1';
import CommunityNFT2 from '../../../../assets/images/svg/CommunityNFT2';
import CommunityNFTIcon from '../../../../assets/images/svg/CommunityNFTIcon';
import CommunityUsersIcon from '../../../../assets/images/svg/CommunityUsersIcon';
import TetherIcon from '../../../../assets/images/svg/TetherIcon';
import UsdcIcon from '../../../../assets/images/svg/UsdcIcon';
import ChooseNFTBottomsheet from '../../../components/Community/CreateCommunity/ChooseNFTBottomsheet';
import ViewNFT from '../../../components/Community/CreateCommunity/ViewNFT';
import { appColor } from '../../../constants';
import { CommunityAssetSettingsProps } from '../../../navigations/NavigationTypes';
import BackButton from '../../../shared/BackButton';
import ContinueButton from '../../../shared/ContinueButton';
import Header from '../../../shared/Feed/Header';
import { sizes } from '../../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const CommunityAssetSettings = ({
  navigation,
}: CommunityAssetSettingsProps) => {
  const [assetType, setAssetType] = useState<'NFT' | 'crypto_asset'>(undefined);
  const [nftBottomSheetVisibility, setNFTBottomSheetVisibility] =
    useState(false);
  const [viewNftBottomsheet, setViewNftVisibility] = useState(false);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <Header title="Token-gated" />

      <CommunityUsersIcon
        size={size.getHeightSize(76)}
        style={{
          marginTop: size.getHeightSize(16),
          alignSelf: 'center',
        }}
      />
      <Text style={styles.description}>Token gated it is!</Text>
      <Text style={styles.text}>
        What asset do new members need to hold to join the community?
      </Text>
      <View style={styles.container}>
        <Pressable
          onPress={() => {
            setAssetType('NFT');
          }}
          style={[
            styles.row,
            {
              backgroundColor:
                assetType === 'NFT'
                  ? 'rgba(146, 100, 248, 0.40)'
                  : 'transparent',
              borderWidth: assetType === 'NFT' ? 3 : 1,
              borderColor:
                assetType === 'NFT'
                  ? appColor.primaryLight
                  : appColor.grayLight,
            },
          ]}
        >
          <View
            style={{
              flex: 1,
            }}
          >
            <Text style={styles.settingsLeadingText}>NFT</Text>
            <Text style={styles.settingsText}>
              New members will need to hold an NFT from the chosen collection.
            </Text>
          </View>
          <View
            style={{
              height: size.getHeightSize(84),
              width: size.getHeightSize(84),
              justifyContent: 'center',
            }}
          >
            <CommunityNFTIcon
              size={size.getHeightSize(40)}
              style={{
                marginLeft: size.getWidthSize(13),
              }}
            />
            <CommunityNFT1
              size={size.getHeightSize(43)}
              style={{
                position: 'absolute',
                right: size.getWidthSize(0),
                bottom: size.getHeightSize(0),
              }}
            />
            <CommunityNFT2
              size={size.getHeightSize(40)}
              style={{
                position: 'absolute',
                right: size.getWidthSize(8.8),
                top: size.getHeightSize(4),
              }}
            />
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            setAssetType('crypto_asset');
          }}
          style={[
            styles.row,
            {
              backgroundColor:
                assetType === 'crypto_asset'
                  ? 'rgba(146, 100, 248, 0.40)'
                  : 'transparent',
              borderWidth: assetType === 'crypto_asset' ? 3 : 1,
              borderColor:
                assetType === 'crypto_asset'
                  ? appColor.primaryLight
                  : appColor.grayLight,
            },
          ]}
        >
          <View
            style={{
              flex: 1,
            }}
          >
            <Text style={styles.settingsLeadingText}>Crypto asset</Text>
            <Text style={styles.settingsText}>
              New members will need to hold a crypto asset ($APT, $USDC etc.)
            </Text>
          </View>
          <View
            style={{
              height: size.getHeightSize(84),
              width: size.getHeightSize(84),
            }}
          >
            <UsdcIcon
              size={size.getHeightSize(40)}
              style={{ marginTop: size.getHeightSize(9.6) }}
            />
            <TetherIcon
              size={size.getHeightSize(40)}
              style={{
                position: 'absolute',
                right: size.getWidthSize(24.98),
                bottom: size.getHeightSize(3.3),
              }}
            />
            <AptosIcon
              size={size.getHeightSize(40)}
              style={{
                position: 'absolute',
                right: size.getWidthSize(0),
                top: size.getHeightSize(4),
              }}
            />
          </View>
        </Pressable>
      </View>
      <View
        style={{
          paddingHorizontal: size.getWidthSize(16),
        }}
      >
        <ContinueButton
          callBack={() => {
            assetType === 'NFT'
              ? setNFTBottomSheetVisibility(true)
              : navigation.navigate('CryptoAssetSettings');
          }}
          disable={typeof assetType === 'undefined'}
        />

        <BackButton callBack={navigation.goBack} />
      </View>
      <ChooseNFTBottomsheet
        visible={nftBottomSheetVisibility}
        onclose={() => {
          setNFTBottomSheetVisibility(false);
        }}
        callback={() => {
          setViewNftVisibility(true);
        }}
      />
      <ViewNFT
        onBackButtonPressed={() => {
          setNFTBottomSheetVisibility(true);
        }}
        visibility={viewNftBottomsheet}
        onclose={() => {
          setViewNftVisibility(false);
        }}
        communityAssetType="NFT"
        navigateTo={'TokenGateSettingsComplete'}
      />
    </SafeAreaView>
  );
};

export default CommunityAssetSettings;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: size.getWidthSize(16),
    justifyContent: 'center',
    gap: size.getHeightSize(16),
  },

  text: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Bold',
    lineHeight: size.getHeightSize(24),
    textAlign: 'center',
    marginTop: size.getHeightSize(16),
    letterSpacing: 0.4,
    marginHorizontal: size.getWidthSize(16),
  },
  description: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Bold',
    lineHeight: size.getHeightSize(24),
    textAlign: 'center',
    marginHorizontal: size.getWidthSize(16),
  },
  leadingText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    lineHeight: size.getHeightSize(21),
  },
  settingsLeadingText: {
    color: appColor.primaryLight,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Bold',
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
  },
  settingsText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(21),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(16),
    gap: size.getWidthSize(8),
    borderWidth: 1,
    borderColor: appColor.grayLight,
    borderRadius: 8,
  },
});
