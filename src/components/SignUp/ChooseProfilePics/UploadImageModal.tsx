import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  Alert,
  BackHandler,
} from 'react-native';
import { useRef, useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import Photo from '../../../../assets/images/svg/Photo';
import BottomSheet from '@gorhom/bottom-sheet';
import Handler from '../Handler';
import {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {
  updateUploadImageModalOpen,
  updateUploadModalRenderCount,
  updateNftOpen,
  updateNftRender,
} from '../../../controller/BottomSheetController';
import Cat from '../../../../assets/images/svg/Cat';
import { useFonts } from 'expo-font';
import { appColor, fonts } from '../../../constants';
import { sizes } from '../../../utils';
import Camera from '../../../../assets/images/svg/Camera';
import { useAppDispatch, useAppSelector } from '../../../controller/hooks';
import {
  launchImageLibraryAsync,
  MediaTypeOptions,
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { updateProfileImage } from "../../../controller/UserController";
import { useUserNFT } from "../../../api/hooks";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);

const UploadImageModal = () => {
  const [bottomSheetOpen, setBottomSheetOpen] = useState<boolean>(false);
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();
  const dispatch = useAppDispatch();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const { isVisible, renderCount, userAddress } = useAppSelector(
    (state) => ({
      isVisible: state.bottomSheetController.uploadImageModalOpen,
      renderCount: state.bottomSheetController.uploadModalRenderCount,
      collectionLength: state.bottomSheetController.listOfNftCollections.length,
      userAddress: state.USER.UserData.aptosWallet
    })
  );
  useEffect(() => {
    dispatch(updateUploadModalRenderCount(0));
  }, []);
  useEffect(() => {
    if (isVisible === true && renderCount > 0) {
      setBottomSheetOpen(true);
      bottomSheetRef.current?.expand();
    } else {
      bottomSheetRef.current?.close();
      setBottomSheetOpen(false);
    }
  }, [isVisible]);
  useEffect(() => {
    const handleBackButton = () => {
      if (isVisible === true && renderCount > 0) {
        dispatch(updateUploadModalRenderCount(0));
        dispatch(updateUploadImageModalOpen(false));
        return true;
      } else {
        return false;
      }
    };
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [isVisible]);
  // const animatedIndex = useSharedValue(0);
  // const contentStyle = useAnimatedStyle(() => ({
  //   transform: [
  //     {
  //       translateY: interpolate(
  //         animatedIndex.value,
  //         [0, 0.08],
  //         [40, 0],
  //         Extrapolation.CLAM(P
  //       ) 
  //     },
  //   ],
  //   opacity: interpolate(
  //     animatedIndex.value,
  //     [0, 0.08],
  //     [0, 1],
  //     Extrapolation.CLAMP
  //   ),
  // }));

  const userNFT = useUserNFT({
    userAddress
  })

  let [isLoaded] = useFonts({
    'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
  });
  if (!isLoaded) {
    return null;
  }

  async function verifyPermission() {
    if (cameraPermissionInformation?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (cameraPermissionInformation?.status === PermissionStatus.DENIED) {
      const permissionResponse = await requestPermission();
      console.log(permissionResponse);
      if (permissionResponse.granted === false) {
        Alert.alert(
          'Insufficient permission!',
          'You need to grant camera access to use this app'
        );
      }
      return permissionResponse.granted;
    }
    return true;
  }
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
      dispatch(updateProfileImage({
        imageUri:result?.assets[0].uri,
        collectionName:"",
        creatorAddress:''
      }));
      dispatch(updateUploadImageModalOpen(false));
    }
  };

  const takePhoto = async () => {
    let result = await launchCameraAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
    });

    if (result.assets != null) {
      dispatch(updateProfileImage({
        imageUri:result.assets[0].uri,
      }));
      dispatch(updateUploadImageModalOpen(false));
    }
  };
  console.log('==================');

  return (
    <BottomSheet
      onClose={() => {
        dispatch(updateUploadModalRenderCount(0));
        dispatch(updateUploadImageModalOpen(false));
      }}
      ref={bottomSheetRef}
      enablePanDownToClose={true}
      index={bottomSheetOpen ? 0 : -1}
      snapPoints={['35']}
      handleComponent={Handler}
      backgroundStyle={{
        backgroundColor: appColor.kgrayDark2,
      }}
    >
      <Animatable.View
        animation={'fadeInUp'}
        delay={500}
        easing={'ease-in-out'}
        duration={400}
        // style={contentStyle}
      >
        <View
          style={{
            height: size.getHeightSize(160),
            justifyContent: 'space-between',
            marginTop: size.getHeightSize(32),
            width: size.getWidthSize(328),
            alignSelf: 'center',
          }}
        >
          <Pressable
            disabled={userNFT?.data?.data?.length === 0}
            onPress={() => {
              dispatch(updateUploadModalRenderCount(0));
              dispatch(updateUploadImageModalOpen(false));
              dispatch(updateNftRender(1));
              dispatch(updateNftOpen(true));
            }}
            style={[
              styles.container,
              {
                backgroundColor:
                  userNFT?.data?.data?.length === 0 ? "#66666660" : appColor.kGrayLight3,
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
          }}
        >
          <Text
            style={{
              color: appColor.kTextColor,
              fontSize: size.fontSize(18),
              fontFamily: 'Outfit-Medium',
              lineHeight: size.getHeightSize(23),
              textAlign: 'center',
              letterSpacing: 0.02,
            }}
            onPress={() => {
              dispatch(updateUploadModalRenderCount(0));
              dispatch(updateUploadImageModalOpen(false));
            }}
          >
            Back
          </Text>
        </View>
      </Animatable.View>
    </BottomSheet>
  );
};

export default UploadImageModal;

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
});
