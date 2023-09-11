import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  BackHandler,
  Image,
  Pressable,
} from 'react-native';
import React, { useCallback, useMemo, useRef, useEffect } from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import CustomHandler from '../../Feed/CustomHandler';
import InfoIcon from '../../../../assets/images/svg/InfoIcon';
import { appColor, images } from '../../../constants';
import { sizes } from '../../../utils';
const { height, width } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
import { CommunityDetailsType } from '../../../context/CommunitySettingsContext';
const size = new sizes(height, width);
type TokenGateSettingsCompleteParams = {
  TokenGateSettingsComplete: {
    nftImageUri: string;
    type: 'NFT' | 'crypto_asset';
    amount?: string;
    name?: string;
  };
};
interface Props {
  visibility: boolean;
  onclose: () => void;
  navigateTo?: keyof TokenGateSettingsCompleteParams;
  onBackButtonPressed: () => void;
  callBack?: () => void;
  communityDetails?: CommunityDetailsType;
  communityAssetType?: 'NFT' | 'crypto_asset';
}

const ViewNFT = ({
  visibility,
  onBackButtonPressed,
  onclose,
  navigateTo,
  callBack,
  communityDetails,
  communityAssetType,
}: Props) => {
  const navigation = useNavigation();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);
  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior={'close'}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.5}
      />
    ),
    []
  );
  useEffect(() => {
    const handleBackButton = () => {
      if (visibility === true) {
        onclose();
        return true;
      } else {
        return false;
      }
    };
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [visibility]);
  return (
    <>
      {!visibility ? (
        <></>
      ) : (
        <BottomSheet
          onClose={() => {
            onclose();
          }}
          ref={bottomSheetRef}
          snapPoints={animatedSnapPoints}
          handleHeight={animatedHandleHeight}
          contentHeight={animatedContentHeight}
          enablePanDownToClose={true}
          animateOnMount={true}
          backgroundStyle={{
            backgroundColor: appColor.kgrayDark2,
          }}
          handleComponent={CustomHandler}
          backdropComponent={renderBackdrop}
        >
          <BottomSheetView
            style={{
              paddingHorizontal: size.getWidthSize(16),
            }}
            onLayout={handleContentLayout}
          >
            <Text style={styles.title}>SIOthians</Text>
            <View
              style={{
                alignSelf: 'center',
                marginTop: size.getHeightSize(32),
                height: size.getHeightSize(210),
                width: size.getWidthSize(206),
              }}
            >
              <Image
                source={{ uri: Image.resolveAssetSource(images.siothian).uri }}
                resizeMode="cover"
                style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: 6,
                }}
              />
            </View>
            <View
              style={{
                marginTop: size.getHeightSize(44.75),
                flexDirection: 'row',
                paddingHorizontal: size.getWidthSize(16),
                paddingVertical: size.getWidthSize(16),
                gap: size.getWidthSize(16),
                alignItems: 'flex-start',
                borderRadius: 8,
                borderWidth: 1,
                borderColor: appColor.grayLight,
              }}
            >
              <InfoIcon size={size.getHeightSize(24)} />
              <Text
                style={{
                  fontSize: size.fontSize(16),
                  lineHeight: size.getHeightSize(21),
                  color: appColor.kTextColor,

                  fontFamily: 'Outfit-Regular',
                  flex: 1,
                }}
              >
                Embrace the Power of NFTs! By continuing, you'll create an
                exclusive token-gated community for holders of{' '}
                <Text style={{ fontFamily: 'Outfit-Bold' }}>
                  [Collection name]{' '}
                </Text>
                NFT collection.
              </Text>
            </View>
            <View
              style={{
                marginTop: size.getHeightSize(40),
                marginBottom: size.getHeightSize(16),
              }}
            >
              <Pressable
                onPress={() => {
                  onclose();
                  callBack && callBack();
                  navigateTo &&
                    navigation.navigate(navigateTo, {
                      asset: {
                        nftImageUri: Image.resolveAssetSource(images.siothian)
                          .uri,
                        type: communityAssetType,
                        amount: communityDetails?.selectedCryptoAsset.amount
                          ? communityDetails.selectedCryptoAsset.amount
                          : undefined,
                        name: communityDetails?.selectedCryptoAsset.name,
                        coinId: communityDetails?.selectedCryptoAsset.coinId,
                      },
                    });
                }}
                style={{
                  alignSelf: 'center',
                  width: size.getWidthSize(328),
                  borderRadius: 40,
                  minHeight: size.getHeightSize(48),
                  justifyContent: 'center',
                  marginTop: size.getHeightSize(8),
                  backgroundColor: appColor.kWhiteColor,
                  paddingVertical: size.getHeightSize(12.5),
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    color: appColor.kButtonTextColor,
                    fontSize: size.fontSize(18),
                    fontFamily: 'Outfit-SemiBold',
                    lineHeight: size.getHeightSize(23),

                    letterSpacing: 0.01,
                  }}
                >
                  Continue
                </Text>
              </Pressable>
              <View style={styles.backButton}>
                <Text
                  onPress={() => {
                    onclose();
                    onBackButtonPressed();
                  }}
                  style={styles.back}
                >
                  Back
                </Text>
              </View>
            </View>
          </BottomSheetView>
        </BottomSheet>
      )}
    </>
  );
};

export default ViewNFT;
const styles = StyleSheet.create({
  container: {
    marginTop: size.heightSize(36),
    flexDirection: 'row',
    gap: size.getWidthSize(8),

    alignItems: 'center',
  },
  text: {
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    color: appColor.kTextColor,
    letterSpacing: 0.36,
    fontFamily: 'Outfit-Medium',
  },
  title: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(29),
    fontFamily: 'Outfit-Bold',
    textAlign: 'center',
    marginTop: size.getHeightSize(29),
    lineHeight: size.getHeightSize(37),
  },
  backButton: {
    justifyContent: 'center',
    height: size.getHeightSize(48),
    marginTop: size.getHeightSize(8),
    paddingVertical: size.getHeightSize(12.5),
    marginBottom: size.getHeightSize(20),
  },
  back: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(18),
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
    lineHeight: size.getHeightSize(23),
  },
});
