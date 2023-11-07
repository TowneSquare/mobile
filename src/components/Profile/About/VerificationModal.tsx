import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Pressable,
  BackHandler,
} from 'react-native';
import { appColor } from '../../../constants';
import { sizes } from '../../../utils';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import Badge from '../../../../assets/images/svg/Badge';
import { useAppDispatch } from '../../../controller/hooks';
import { useRef, useEffect, useCallback, useMemo, useState } from 'react';
import { useAppSelector } from '../../../controller/hooks';
import CustomHandler from '../../Feed/CustomHandler';
import { updateVerificationModal } from '../../../controller/BottomSheetController';
import TwitterBG from '../../../../assets/images/svg/XBg';
import DiscordBG from '../../../../assets/images/svg/DiscordBG';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const VerificationModal = () => {
  const [isTwitterConected, setTwitterConnected] = useState(false);
  const [isDiscordConnected, setDiscordConnected] = useState(false);
  const dispatch = useAppDispatch();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);
  const visibility = useAppSelector(
    (state) => state.bottomSheetController.verificationModal
  );
  useEffect(() => {
    if (visibility === false) {
      bottomSheetRef.current?.close();
    } else {
      bottomSheetRef.current?.expand();
    }
  }, [visibility]);
  useEffect(() => {
    const handleBackButton = () => {
      if (visibility === true) {
        handleVisibility();

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
  const handleVisibility = () => {
    dispatch(updateVerificationModal(false));
  };
  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);
  const handleTwitterConnection = () => {
    setTwitterConnected(!isTwitterConected);
  };
  const handleDiscordConnection = () => {
    setDiscordConnected(!isDiscordConnected);
  };
  return (
    <>
      {!visibility ? (
        <></>
      ) : (
        <BottomSheet
          onClose={handleVisibility}
          ref={bottomSheetRef}
          snapPoints={animatedSnapPoints}
          handleHeight={animatedHandleHeight}
          contentHeight={animatedContentHeight}
          enablePanDownToClose={true}
          animateOnMount={true}
          backgroundStyle={{
            backgroundColor: appColor.kgrayDark2,
          }}
          handleComponent={() => <CustomHandler />}
          backdropComponent={renderBackdrop}
        >
          <BottomSheetView
            style={{
              paddingHorizontal: size.getWidthSize(16),
            }}
            onLayout={handleContentLayout}
          >
            <View
              style={{
                marginTop: size.getHeightSize(24),
                alignSelf: 'center',
              }}
            >
              <Badge />
            </View>
            {isTwitterConected || isDiscordConnected ? (
              <Text
                style={[
                  styles.details,
                  {
                    marginBottom: size.getHeightSize(32),
                    marginTop: size.getHeightSize(8),
                  },
                ]}
              >
                Prime Citizen
              </Text>
            ) : (
              <Text
                style={[styles.details, { marginTop: size.getHeightSize(32) }]}
              >
                Get verified and receive a Prime Citizen badge
                <Text style={styles.details}>!</Text>
              </Text>
            )}
            <Text
              style={[styles.description, { marginTop: size.getHeightSize(0) }]}
            >
              {isTwitterConected || isDiscordConnected
                ? ' Connect your second social account and get the '
                : 'Connect your Twitter & Discord accounts and get the '}
              <Text style={[styles.description, { fontFamily: 'Outfit-Bold' }]}>
                {(isTwitterConected || isDiscordConnected) && 'TowneSquare '}
                Prime Citizen badge<Text style={styles.details}>!</Text>
              </Text>
            </Text>
            <View
              style={{
                justifyContent: 'center',
                gap: size.getHeightSize(16),
                paddingHorizontal: size.getWidthSize(8),
                marginVertical: size.getHeightSize(40),
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <TwitterBG />
                <Text style={styles.socialText}>Twitter</Text>
                {isTwitterConected ? (
                  <Pressable
                    onPress={handleTwitterConnection}
                    style={styles.isConnected}
                  >
                    <Text style={styles.isConnectedText}>Connected</Text>
                  </Pressable>
                ) : (
                  <Pressable
                    onPress={handleTwitterConnection}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>Connect</Text>
                  </Pressable>
                )}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <DiscordBG />
                <Text style={styles.socialText}>Discord</Text>
                {isDiscordConnected ? (
                  <Pressable
                    onPress={handleDiscordConnection}
                    style={styles.isConnected}
                  >
                    <Text style={styles.isConnectedText}>Connected</Text>
                  </Pressable>
                ) : (
                  <Pressable
                    onPress={handleDiscordConnection}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>Connect</Text>
                  </Pressable>
                )}
              </View>
            </View>
            <View
              style={{
                paddingVertical: size.getHeightSize(12.5),
                marginBottom: size.getHeightSize(40),
              }}
            >
              <Text onPress={handleVisibility} style={styles.later}>
                I'll do it later
              </Text>
            </View>
          </BottomSheetView>
        </BottomSheet>
      )}
    </>
  );
};

export default VerificationModal;
const styles = StyleSheet.create({
  details: {
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
    letterSpacing: 0.4,
    marginBottom: size.getHeightSize(8),
  },
  description: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
  },
  isConnectedText: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Medium',
    textAlign: 'center',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(20),
    fontStyle: 'normal',
    letterSpacing: 0.32,
  },
  isConnected: {
    paddingVertical: size.getHeightSize(8),
    justifyContent: 'center',
    width: size.getWidthSize(113),
    backgroundColor: appColor.kGrayLight3,
    borderRadius: 40,
  },
  button: {
    backgroundColor: appColor.kSecondaryButtonColor,
    borderRadius: 40,
    justifyContent: 'center',

    // width: size.getWidthSize(100),
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(8),
  },
  buttonText: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Medium',
    textAlign: 'center',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(18),
  },
  socialText: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    paddingLeft: size.getWidthSize(16),
    color: appColor.kTextColor,
    flex: 1,
    lineHeight: size.getHeightSize(16),
    fontStyle: 'normal',
  },
  later: {
    fontSize: size.fontSize(18),
    fontFamily: 'Outfit-Medium',
    textAlign: 'center',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(23),
    letterSpacing: 0.36,
  },
});
