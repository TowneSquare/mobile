import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  BackHandler,
  Pressable,
  Image,
} from 'react-native';
import React, {
  useCallback,
  useMemo,
  useRef,
  useEffect,
  useContext,
} from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import TheterIcon from '../../../../assets/images/svg/ThetherIcon';
import AptosIcon from '../../../../assets/images/svg/AptosIcon';
import CustomHandler from '../../Feed/CustomHandler';
import { CommunityDetailsType } from '../../../context/SetUpCommunityContext';
import InfoIcon from '../../../../assets/images/svg/InfoIcon';
import { appColor, images } from '../../../constants';
import { sizes } from '../../../utils';
import { useNavigation } from '@react-navigation/native';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

type TokenGateSettingsCompleteParams = {
  TokenGateSettingsComplete: {
    nftImageUri: string;
    type: 'NFT' | 'crypto_asset';
    amount?: string;
    name?: string;
  };
};
type ContextType<T> = React.Context<T | undefined>;
interface Props<T> {
  context: ContextType<T>;
  navigateTo?: keyof TokenGateSettingsCompleteParams;
  onContinuewButtonPressed?: () => void;
  communityAssetType?: 'NFT' | 'crypto_asset';
}
type SelectedAssetBottomSheetContextType = {
  selectedAssetBottomSheetVisibility: boolean;
  setSelectedAssetBottomSheetVisibility: (state: boolean) => void;
  communityDetails: CommunityDetailsType;
};

const SelectedAssetBottomsheet = <T,>({
  context,
  onContinuewButtonPressed,
  navigateTo,
  communityAssetType,
}: Props<T>) => {
  const {
    selectedAssetBottomSheetVisibility,
    setSelectedAssetBottomSheetVisibility,
    communityDetails,
  } = useContext(context) as SelectedAssetBottomSheetContextType;
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
      if (selectedAssetBottomSheetVisibility === true) {
        setSelectedAssetBottomSheetVisibility(false);
        return true;
      } else {
        return false;
      }
    };
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [selectedAssetBottomSheetVisibility]);

  return (
    <>
      {!selectedAssetBottomSheetVisibility ? (
        <></>
      ) : (
        <BottomSheet
          onClose={() => {
            setSelectedAssetBottomSheetVisibility(false);
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
            <Text style={styles.title}>Aptos APT</Text>
            {communityAssetType === 'crypto_asset' ? (
              <TheterIcon
                size={size.getHeightSize(130)}
                style={{
                  alignSelf: 'center',
                  marginTop: size.heightSize(32),
                }}
              />
            ) : (
              <AptosIcon
                size={size.getHeightSize(130)}
                style={{
                  alignSelf: 'center',
                  marginTop: size.heightSize(32),
                }}
              />
            )}
            <Text
              style={{
                fontSize: size.fontSize(16),
                lineHeight: size.getHeightSize(21),
                color: appColor.grayLight,
                fontFamily: 'Outfit-Regular',
                textAlign: 'center',
                marginTop: size.getHeightSize(32),
              }}
            >
              New members will need to hold{' '}
              <Text
                style={{
                  fontFamily: 'Outfit-Bold',
                  color: appColor.kTextColor,
                }}
              >
                {communityDetails.selectedCryptoAsset.amount
                  ? communityDetails.selectedCryptoAsset.amount
                  : 'ANY AMOUNT'}
              </Text>{' '}
              of
              <Text
                style={{
                  fontFamily: 'Outfit-Bold',
                  color: appColor.kTextColor,
                }}
              >
                {' '}
                {communityDetails.selectedCryptoAsset.name
                  ? communityDetails.selectedCryptoAsset.name
                  : 'APT'}{' '}
              </Text>
              to be able to join the community
            </Text>

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
                By continuing, you'll create a token-gated community, granting
                entry only to holders of{' '}
                <Text style={{ fontFamily: 'Outfit-Bold' }}>[Token name] </Text>
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
                  setSelectedAssetBottomSheetVisibility(false);
                  onContinuewButtonPressed && onContinuewButtonPressed();
                  navigateTo &&
                    navigation.navigate(navigateTo, {
                      asset: {
                        nftImageUri: Image.resolveAssetSource(images.theter)
                          .uri,
                        type: communityAssetType,
                        amount: communityDetails.selectedCryptoAsset.amount
                          ? communityDetails.selectedCryptoAsset.amount
                          : undefined,
                        name: communityDetails.selectedCryptoAsset.name,
                        coinId: communityDetails.selectedCryptoAsset.coinId,
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
                    setSelectedAssetBottomSheetVisibility(false);
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

export default SelectedAssetBottomsheet;
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
