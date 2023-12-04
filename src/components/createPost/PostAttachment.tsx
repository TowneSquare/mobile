import { View, Dimensions, StyleSheet, Image, Pressable, Alert } from 'react-native';
const { height, width } = Dimensions.get('window');
import { useFonts } from 'expo-font';
import { appColor, fonts, images } from '../../constants';
import { sizes } from '../../utils';
import PostImage from '../../../assets/images/svg/PostImage';
import PostGif from '../../../assets/images/svg/PostGif';
import PostNft from '../../../assets/images/svg/PostNft';
import PostCamera from '../../../assets/images/svg/PostCamera';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector, useAppDispatch } from '../../controller/hooks';
import { updateToast } from '../../controller/FeedsController';
import { updateMedia, updateGifBottomSheet } from '../../controller/createPost';
import { updateAttachNftType } from '../../controller/FeedsController';
import {
  launchImageLibraryAsync,
  MediaTypeOptions,
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
  useMediaLibraryPermissions,
  MediaLibraryPermissionResponse,
} from "expo-image-picker";
const size = new sizes(height, width);
const PostAttachment = () => {
  const dispatch = useAppDispatch();
  const { mediaValue, attachedNft } = useAppSelector((state) => ({
    mediaValue: state.CreatePostController.posts.media,
    attachedNft: state.CreatePostController.posts.nft,
  }));
  const disabled =
    (mediaValue && mediaValue.length > 1) || attachedNft !== null;
  const navigation = useNavigation();
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
    'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
  });

  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  const [mediaPermissionStatus, requestMediaPermission] =
    useMediaLibraryPermissions();

    async function verifyPermission() {
    if (cameraPermissionInformation?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }
    if (cameraPermissionInformation?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient permission!",
        "You need to grant camera access to use this app"
      );
      return false;
    }
    return true;
  }

  const MediaLibraryPermission = async () => {
    if (mediaPermissionStatus.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestMediaPermission();

      return permissionResponse.status;
    }

    if (mediaPermissionStatus?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient permission!",
        "You need to grant media access to use this app"
      );
      return false;
    }
    return true;
  };

  const pickImageOrVideo = async () => {
    const hasPermission = await MediaLibraryPermission();
    if (!hasPermission) {
      return;
    }

    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      // setImage(result.assets[0].uri);
      dispatch(updateMedia(result.assets[0].uri));
    }
  };

  const takeVideoOrImage = async () => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }
    let result = await launchCameraAsync({
      mediaTypes: MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      // setImage(result.assets[0].uri);
      dispatch(updateMedia(result.assets[0].uri));
    }
  };
  if (!isLoaded) {
    return null;
  }
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: size.getHeightSize(4),
        paddingHorizontal: size.getWidthSize(8),
        width: '100%',
        backgroundColor: appColor.kgrayDark2,
      }}
    >
      <Pressable
        onPress={() => {
          // dispatch(
          //   disabled
          //     ? updateToast({
          //         displayToast: true,
          //         toastMessage:
          //           'Remove the attached NFT in order to add images, videos, GIFs or other NFTs.',
          //         toastType: 'info',
          //         position: 'bottom',
          //         alignItems: 'flex-start',
          //       })
          //     : updateMedia(Image.resolveAssetSource(images.feedImage2).uri)
          // );
          disabled
            ? dispatch(
                updateToast({
                  displayToast: true,
                  toastMessage:
                    "Remove the attached NFT in order to add images, videos, GIFs or other NFTs.",
                  toastType: "info",
                  position: "bottom",
                  alignItems: "flex-start",
                })
              )
            : takeVideoOrImage();
        }}
        style={styles.iconContainer}
      >
        <PostCamera
          style={{
            opacity: disabled ? 0.7 : 1,
          }}
        />
      </Pressable>
      <Pressable
        style={styles.iconContainer}
        onPress={() => {
          disabled
            ? dispatch(
                updateToast({
                  displayToast: true,
                  toastMessage:
                    "Remove the attached NFT in order to add images, videos, GIFs or other NFTs.",
                  toastType: "info",
                  position: "bottom",
                  alignItems: "flex-start",
                })
              )
            : pickImageOrVideo();
        }}
      >
        <PostImage
          style={{
            opacity: disabled ? 0.7 : 1,
          }}
        />
      </Pressable>
      <Pressable
        style={styles.iconContainer}
        onPress={() => {
          dispatch(
            disabled
              ? updateToast({
                  displayToast: true,
                  toastMessage:
                    'Remove the attached NFT in order to add images, videos, GIFs or other NFTs.',
                  toastType: 'info',
                  position: 'bottom',
                  alignItems: 'flex-start',
                })
              : updateGifBottomSheet(true)
          );
        }}
      >
        <PostGif
          style={{
            opacity: disabled ? 0.7 : 1,
          }}
        />
      </Pressable>
      <Pressable
        style={styles.iconContainer}
        onPress={() => {
          if (disabled === true) {
            dispatch(
              updateToast({
                displayToast: true,
                toastMessage:
                  'Remove the attached NFT in order to add images, videos, GIFs or other NFTs.',
                toastType: 'info',
                position: 'bottom',
                alignItems: 'flex-start',
              })
            );
          } else {
            dispatch(updateAttachNftType('createPost')),
            navigation.navigate('NftCollectionScreen');
          }
        }}
      >
        <PostNft
          style={{
            opacity: disabled ? 0.7 : 1,
          }}
        />
      </Pressable>
    </View>
  );
};

export default PostAttachment;
const styles = StyleSheet.create({
  iconContainer: {
    width: size.getWidthSize(40),
    height: size.getWidthSize(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
