import {
  View,
  Text,
  Dimensions,
  Pressable,
  StyleSheet,
  Alert,
  BackHandler,
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
import {
  launchImageLibraryAsync,
  MediaTypeOptions,
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from 'expo-image-picker';
import Cat from '../../../assets/images/svg/Cat';
import Photo from '../../../assets/images/svg/Photo';
import Camera from '../../../assets/images/svg/Camera';
import { MaterialIcons } from '@expo/vector-icons';
import CustomHandler from '../../components/Feed/CustomHandler';
import { sizes } from '../../utils';
import { appColor, fonts } from '../../constants';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
type ContextType<T> = React.Context<T | undefined>;
interface Props<T> {
  context: ContextType<T>;
}
type UploadImageBottomSheetContextType = {
  isChooseProfilePictureVisible: boolean;
  setProfilePictureBottomSheet: (state: boolean) => void;
  setCollectionBottomSheet: (state: boolean) => void;
};
const UploadImageBottomSheet = <T,>({ context }: Props<T>) => {
  const {
    isChooseProfilePictureVisible,
    setCollectionBottomSheet,
    setProfilePictureBottomSheet,
  } = useContext(context) as UploadImageBottomSheetContextType;

  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior={'none'}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.8}
      />
    ),
    []
  );
  isChooseProfilePictureVisible === false
    ? bottomSheetRef.current?.close()
    : bottomSheetRef.current?.expand;
  useEffect(() => {
    const handleBackButton = () => {
      if (isChooseProfilePictureVisible === true) {
        setProfilePictureBottomSheet(false);
        return true;
      } else {
        return false;
      }
    };
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [isChooseProfilePictureVisible]);
  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);
  async function verifyPermission() {
    if (cameraPermissionInformation?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }
    if (cameraPermissionInformation?.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient permission!',
        'You need to grant camera access to use this app'
      );
      return false;
    }
    return true;
  }
  const takePhoto = async () => {
    let result = await launchCameraAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
    });

    if (result.assets != null) {
      //   dispatch(updateProfileImage(result.assets[0].uri));
      //   setProfilePictureBottomSheet(false);
    }
  };
  const pickImage = async () => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }

    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.assets != null) {
      //   dispatch(updateProfileImage(result?.assets[0].uri));
      //   setProfilePictureBottomSheet(false);
    }
  };
  return (
    <>
      {!isChooseProfilePictureVisible ? (
        <></>
      ) : (
        <BottomSheet
          onClose={() => setProfilePictureBottomSheet(false)}
          ref={bottomSheetRef}
          snapPoints={animatedSnapPoints}
          handleHeight={animatedHandleHeight}
          contentHeight={animatedContentHeight}
          enablePanDownToClose={false}
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
            <View
              style={{
                justifyContent: 'space-between',
                marginTop: size.getHeightSize(32),
                width: size.getWidthSize(328),
                alignSelf: 'center',
                gap: size.getHeightSize(8),
              }}
            >
              <Pressable
                onPress={() => {
                  setProfilePictureBottomSheet(false);
                  setCollectionBottomSheet(true);
                }}
                style={[
                  styles.container,
                  {
                    // backgroundColor:
                    //   collectionLength === 0
                    //     ? '#66666660'
                    //     : appColor.kGrayLight3,
                  },
                ]}
              >
                <View style={styles.innerStyle}>
                  <Cat />
                  <Text style={styles.Text}>NFT</Text>
                </View>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  color={appColor.kWhiteColor}
                  size={size.fontSize(23)}
                />
              </Pressable>
              <View style={styles.container}>
                <Pressable style={styles.innerStyle} onPress={pickImage}>
                  <Photo />
                  <Text style={styles.Text}>Existing photo</Text>
                </Pressable>

                <MaterialIcons
                  name="keyboard-arrow-right"
                  color={appColor.kWhiteColor}
                  size={size.fontSize(23)}
                />
              </View>
              <View style={styles.container}>
                <Pressable style={styles.innerStyle} onPress={takePhoto}>
                  <Camera />
                  <Text style={styles.Text}>Take Photo</Text>
                </Pressable>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  color={appColor.kWhiteColor}
                  size={size.fontSize(23)}
                />
              </View>
            </View>
            <View
              style={{
                height: size.getHeightSize(44),
                marginTop: size.getHeightSize(16),
                justifyContent: 'center',

                marginBottom: size.getHeightSize(16),
              }}
            >
              <Text
                style={styles.cancel}
                onPress={() => setProfilePictureBottomSheet(false)}
              >
                Cancel
              </Text>
            </View>
          </BottomSheetView>
        </BottomSheet>
      )}
    </>
  );
};

export default UploadImageBottomSheet;
const styles = StyleSheet.create({
  container: {
    width: size.getWidthSize(328),
    height: size.getHeightSize(48),
    backgroundColor: appColor.kGrayLight3,
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 40,
    paddingVertical: size.getHeightSize(8),
    paddingHorizontal: size.getWidthSize(16),
    alignItems: 'center',
  },
  innerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  Text: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    lineHeight: size.getHeightSize(21),
    marginLeft: size.getWidthSize(8),
  },
  cancel: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(18),
    fontFamily: 'Outfit-Medium',
    lineHeight: size.getHeightSize(23),
    textAlign: 'center',
    letterSpacing: 0.02,
  },
});
