import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  Animated,
  Pressable,
  Platform,
} from 'react-native';
import React, { useRef, useEffect, useState } from 'react';
import { appColor } from '../../constants';
import { sizes } from '../../utils';
import { useAppDispatch } from '../../controller/hooks';
import ViewShot from 'react-native-view-shot';

import {
  saveToDownloadFolder,
  requestMediaLibraryPermission,
} from '../../utils';
import { updateToast } from '../../controller/FeedsController';

const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  visibility: boolean;
  children: React.ReactNode;
  close: () => void;
  referralCode: string;
}
const DownloadPoster = ({
  children,
  visibility,
  close,
  referralCode,
}: Props) => {
  const dispatch = useAppDispatch();
  const scaleValue = useRef(new Animated.Value(0))?.current;
  const viewShotRef = useRef<ViewShot>(null);

  useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: visibility ? 1 : 0,
      duration: 350,
      useNativeDriver: true,
    }).start();
  }, [visibility]);
  const handleCapture = async () => {
    const permision = requestMediaLibraryPermission();
    if (!permision) {
      close();
      dispatch(
        updateToast({
          displayToast: true,
          toastMessage: 'Please allow permission to save image',
          toastType: 'info',
          alignItems: 'center',
        })
      );
      return;
    }
    try {
      if (viewShotRef.current) {
        const uri = await viewShotRef.current.capture();
        const isDownloaded = await saveToDownloadFolder(uri, referralCode);
        close();
        isDownloaded
          ? dispatch(
              updateToast({
                displayToast: true,
                toastMessage: 'Poster Downloaded!',
                toastType: 'success',
                alignItems: 'center',
              })
            )
          : dispatch(
              updateToast({
                displayToast: true,
                toastMessage: 'Failed to download poster!',
                toastType: 'info',
                alignItems: 'center',
              })
            );
      }
    } catch (error) {
      close();
      dispatch(
        updateToast({
          displayToast: true,
          toastMessage: 'Failed to download poster!',
          toastType: 'info',
          alignItems: 'center',
        })
      );
    }
  };
  return (
    <Modal
      onRequestClose={close}
      presentationStyle="pageSheet"
      visible={visibility}
      animationType="slide"
    >
      <View
        style={{
          backgroundColor: appColor.feedBackground,
          flex: 1,
        }}
      >
        <Animated.View
          style={{
            backgroundColor: appColor.feedBackground,
            flex: 1,
            transform: [{ scale: scaleValue }],
          }}
        >
          <View style={styles.viewShot}>
            <ViewShot ref={viewShotRef} options={{ format: 'png', quality: 1 }}>
              {children}
            </ViewShot>
          </View>
          <View style={styles.buttonView}>
            <Pressable onPress={handleCapture} style={styles.button}>
              <Text style={styles.buttonText}>Download image</Text>
            </Pressable>
            <Text onPress={close} style={styles.buttonText}>
              Cancel
            </Text>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default DownloadPoster;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    minHeight: size.getHeightSize(48),
    borderRadius: 40,
    backgroundColor: appColor.kSecondaryButtonColor,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: size.fontSize(18),
    fontFamily: 'Outfit-Medium',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(23),
    textAlign: 'center',
    letterSpacing: 0.36,
  },
  buttonView: {
    paddingHorizontal: size.getWidthSize(16),
    backgroundColor: appColor.feedBackground,
    paddingBottom: size.getHeightSize(65),
    gap: size.getHeightSize(33),
  },
  viewShot: {
    flex: 1,
    paddingHorizontal: size.getWidthSize(16),
    backgroundColor: appColor.feedBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
