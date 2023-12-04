import {
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
} from 'react-native';
import { useFonts } from 'expo-font';
import { images, fonts, appColor } from '../../../constants';
const { height, width } = Dimensions.get('window');
import { useAppDispatch, useAppSelector } from '../../../controller/hooks';
import {
  updateProfilePics,
} from '../../../controller/BottomSheetController';
import { updateProfileImage } from '../../../controller/UserController';
import { sizes } from '../../../utils';
import { batch } from 'react-redux';
const size = new sizes(height, width);
const ProfilePicsCollection = () => {
  const profilePicture = useAppSelector(
    (state) => state.bottomSheetController.profilePics
  );
  const profilePics = useAppSelector(
    (state) => state.USER.listOfNft
  );
  const dispatch = useAppDispatch();
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: size.getWidthSize(328),
        justifyContent: 'space-between',
        alignSelf: 'center',
        paddingHorizontal: size.getWidthSize(16),
      }}
    >
      {profilePics.map((profile) => (
        <Pressable
          style={{
            marginBottom: size.getHeightSize(16),
            borderWidth:
              profilePicture.id && profile.id === profilePicture.id ? 8 : 0,
            borderRadius: 20,
            borderColor:
              typeof profilePicture === 'undefined'
                ? 'undefined'
                : appColor.kSecondaryButtonColor,
            overflow: 'hidden',
            width: size.getWidthSize(140),
            height: size.getHeightSize(140),
          }}
          onPress={() => {
            batch(() => {
              dispatch(updateProfilePics(profile));
              dispatch(
                updateProfileImage(Image.resolveAssetSource({ uri: profile.image }).uri)
              );
            });
          }}
          key={profile.id}
        >
          {profile.image && (
            <Image
              style={{
                width: size.getWidthSize(140),
                height: size.getHeightSize(140),
              }}
              source={{ uri: profile.image }}
              resizeMode="cover"
            />
          )}
          <View
            style={{
              width: size.getWidthSize(124),
              position: 'absolute',
              backgroundColor: '#121212',
              bottom:
                profilePicture.id && profile.id === profilePicture.id
                  ? size.getHeightSize(0)
                  : size.getHeightSize(8),
              left:
                profilePicture.id && profile.id === profilePicture.id
                  ? size.getWidthSize(0)
                  : size.getWidthSize(8),
              right: 0,
              justifyContent: 'center',
              borderRadius: 8,
              paddingVertical: size.getHeightSize(8),
              paddingHorizontal: size.getWidthSize(10),
              opacity: 0.9,
            }}
          >
            <Text
              style={{
                color: appColor.kTextColor,
                fontSize: size.fontSize(16),
                fontFamily: 'Outfit-Regular',
                lineHeight: size.getHeightSize(18),
              }}
            >
              {profile.name}
            </Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default ProfilePicsCollection;
