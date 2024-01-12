import {
  Text,
  Image,
  Pressable,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useContext } from 'react';
import { images, appColor } from '../../../constants';
import { useAppSelector } from '../../../controller/hooks';
import { sizes } from '../../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
import { EditProfilePictureContext } from '../../../context/EditProfileBottomSheetContext';
const ProfileImage = () => {
  const profilePics = useAppSelector(
    (state) => state.USER.UserData.profileImage
  );
  const { setProfilePictureBottomSheet } = useContext(
    EditProfilePictureContext
  );
  return (
    <Pressable
      onPress={() => setProfilePictureBottomSheet(true)}
      style={styles.imageContainer}
    >
      <Image
        style={styles.imageStyle}
        source={{
          uri: profilePics
            ? profilePics
            : Image.resolveAssetSource(images.profilepicture).uri,
        }}
        resizeMode="cover"
      />
      <Text style={styles.change}>Change</Text>
    </Pressable>
  );
};

export default ProfileImage;
const styles = StyleSheet.create({
  imageContainer: {
    height: size.getHeightSize(120),
    width: size.getHeightSize(120),
    alignSelf: 'center',
    marginTop: size.getHeightSize(32),
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    opacity: 0.3,
    borderRadius: 200,
  },
  change: {
    color: appColor.kTextColor,
    textAlign: 'center',
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-SemiBold',
    position: 'absolute',
    top: size.getHeightSize(49.5),
    left: 0,
    right: 0,
  },
});
