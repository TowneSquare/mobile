import {
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  BackHandler,
} from 'react-native';
import { useCallback, useRef, useEffect } from 'react';
import {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import ShareIcon from '../../../assets/images/svg/ShareIcon';
import CopyIcon from '../../../assets/images/svg/CopyIcon';
import { useFonts } from 'expo-font';
import { appColor, fonts } from '../../constants';
import { sizes } from '../../utils';
import BottomSheet, {
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import * as Animatable from 'react-native-animatable';
const { height, width } = Dimensions.get('window');
import { useAppSelector, useAppDispatch } from '../../controller/hooks';
import CustomHandler from './CustomHandler';
import ReceiveBarCode from '../../../assets/images/svg/ReceiveBarCode';
import QRCode from 'react-native-qrcode-svg';
interface Props {
  closeModal: () => void;
}
const size = new sizes(height, width);
const ReceiveTokenModal = ({ closeModal }: Props) => {
  const dispatch = useAppDispatch();
  const ReceiveModalVisibility = useAppSelector(
    (state) => state.FeedsSliceController.ReceiveModalState
  );

  const bottomSheetRef = useRef<BottomSheet>(null);
  const animatedIndex = useSharedValue(0);
  useEffect(() => {
    if (ReceiveModalVisibility === false) {
      bottomSheetRef.current?.close();
    }
  }, [ReceiveModalVisibility]);
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
    'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
  });
  const contentStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          animatedIndex.value,
          [0, 0.08],
          [40, 0],
          Extrapolation.CLAMP
        ),
      },
    ],
    opacity: interpolate(
      animatedIndex.value,
      [0, 0.08],
      [0, 1],
      Extrapolation.CLAMP
    ),
  }));
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
      if (ReceiveModalVisibility === true) {
        closeModal();
        bottomSheetRef.current?.close();
        return true;
      } else {
        return false;
      }
    };
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [ReceiveModalVisibility]);
  return (
    <>
      {!ReceiveModalVisibility ? (
        <></>
      ) : (
        <BottomSheet
          onClose={closeModal}
          handleComponent={CustomHandler}
          ref={bottomSheetRef}
          enablePanDownToClose={true}
          backdropComponent={renderBackdrop}
          index={ReceiveModalVisibility ? 0 : -1}
          snapPoints={[Platform.OS === 'ios' ? '81.2%' : '81.2%']}
          backgroundStyle={{
            backgroundColor: appColor.kgrayDark2,
          }}
        >
          <Animatable.View
            animation={'fadeInUp'}
            delay={500}
            easing={'ease-in-out'}
            duration={400}
            style={{
              flex: 1,
            }}
          >
            <ReceiveBarCode
              style={{
                alignSelf: 'center',
                marginTop: size.getHeightSize(24),
              }}
            />
            <Text style={styles.ReceiveToken}>Receive Token</Text>
            <View style={styles.QRCodeContainer}>
              <QRCode
                size={size.getHeightSize(160)}
                value={'AEEWppRWXMtvDysp9RzSWUMqpNB2isq3gviAMqcJkcjC'}
              />
            </View>
            <View
              style={{
                marginHorizontal: size.getWidthSize(16),
                marginTop: size.getHeightSize(32),
              }}
            >
              <Text style={styles.myAddress}>My address</Text>
              <Text style={styles.address}>
                AEEWppRWXMtvDysp9RzSWUMqpNB2isq3gviAMqcJkcjC
              </Text>
              <Text style={styles.addressDescription}>
                This is a Aptos wallet. Please only send assets on the Aptos
                blockchain.
              </Text>
            </View>
            <View style={{ flex: 1 }} />
            <View
              style={{
                marginBottom: size.getHeightSize(32),
              }}
            >
              <View style={styles.copyButton}>
                <CopyIcon />
                <Text style={styles.copyText}>Copy</Text>
              </View>
              <View style={styles.shareButton}>
                <ShareIcon />
                <Text style={styles.shareText}>Share</Text>
              </View>
            </View>
          </Animatable.View>
        </BottomSheet>
      )}
    </>
  );
};

export default ReceiveTokenModal;
const styles = StyleSheet.create({
  ReceiveToken: {
    textAlign: 'center',
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-SemiBold',
    letterSpacing: 0.04,
    marginTop: size.getHeightSize(8),
  },
  QRCodeContainer: {
    marginTop: size.getHeightSize(32),
    height: size.getHeightSize(182),
    width: size.getWidthSize(181.52),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  myAddress: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Regular',
  },
  address: {
    color: appColor.primaryLight,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-SemiBold',

    marginTop: size.getHeightSize(4),
  },
  addressDescription: {
    color: appColor.grayLight,
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    fontFamily: 'Outfit-Regular',

    marginTop: size.getHeightSize(16),
  },
  copyButton: {
    backgroundColor: appColor.kSecondaryButtonColor,
    marginHorizontal: size.getWidthSize(16),
    gap: size.getWidthSize(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    paddingVertical: size.getHeightSize(12.5),
  },
  copyText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    fontFamily: 'Outfit-Medium',
    letterSpacing: 0.02,
  },
  shareButton: {
    backgroundColor: appColor.kWhiteColor,
    marginHorizontal: size.getWidthSize(16),
    gap: size.getWidthSize(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    paddingVertical: size.getHeightSize(12.5),
    marginTop: size.getHeightSize(8),
  },
  shareText: {
    color: appColor.kGrayscaleDart,
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    fontFamily: 'Outfit-Medium',
    letterSpacing: 0.02,
  },
});
