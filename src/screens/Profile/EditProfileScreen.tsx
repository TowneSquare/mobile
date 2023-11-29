import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
} from 'react-native';
import { useState } from 'react';
import { appColor } from '../../constants';
import Info from '../../../assets/images/svg/Info';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
import { useAppDispatch, useAppSelector } from '../../controller/hooks';
import InfoBottomSheet from '../../components/Profile/EditProfile/InfoBottomSheet';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../shared/Feed/Header';
import NftBottomSheet from '../../components/Profile/EditProfile/NftBottomSheet';
import { updateNickname, updateUserBio } from '../../controller/UserController';
import { updateBio } from '../../controller/UserController';
import { EditProfileBottomSheetProvider } from '../../context/EditProfileBottomSheetContext';
const size = new sizes(height, width);
import ProfileImage from '../../components/Profile/About/ProfileImage';
import ChooseProfilePicsBottomSheet from '../../components/Profile/EditProfile/ChooseProfilePicsBottomSheet';
import SelectedCollectionBottomSheet from '../../components/Profile/EditProfile/SelectedCollectionBottomSheet';
const EditProfileScreen = () => {
  const [showDisplayNameBottomSheet, setShowDisplayNameBottomSheet] =
    useState(false);
  const [showDisplayUsername, setDisplayUsernameBottomSheet] = useState(false);
  const dispatch = useAppDispatch();
  const nickNameError = useAppSelector(
    (state) => state.USER.errors.nicknameError
  );
  const token = useAppSelector((state) => state.USER.didToken)
  const [bio, setBio] = useState('');

  const saveProfileUpdate = async () => {
    await dispatch(updateUserBio({bio, token}))
    await dispatch(updateBio(bio))
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <Header title="Edit Profile" />
      <EditProfileBottomSheetProvider>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <ProfileImage />
          <Text style={styles.removePFP}>Remove PFP</Text>
          <View style={styles.parentContainer}>
            <View style={styles.row}>
              <Text style={styles.text}>Display name</Text>
              <Info
                onPress={() =>
                  setShowDisplayNameBottomSheet((previous) => !previous)
                }
              />
            </View>
            <TextInput
              onChangeText={(text) => dispatch(updateNickname(text))}
              style={[
                styles.textInput,
                {
                  borderColor: nickNameError
                    ? appColor.kErrorText
                    : appColor.kGrayscale,
                },
              ]}
              cursorColor={appColor.klightPurple}
            />
            {nickNameError && (
              <View
                style={{
                  alignSelf: 'flex-start',
                }}
              >
                <Text style={styles.errorText}>
                  Username can be max. 30 characters long
                </Text>
              </View>
            )}
            <View style={styles.row}>
              <Text style={styles.text}>Username</Text>
              <Info
                onPress={() =>
                  setDisplayUsernameBottomSheet((previous) => !previous)
                }
              />
            </View>
            <View style={styles.username}>
              <Text style={styles.leadingText}>@</Text>
              <TextInput
                cursorColor={appColor.klightPurple}
                style={styles.usernameTextInput}
              />
            </View>
            <Text style={styles.text}>Bio</Text>
            <TextInput
              textAlignVertical="top"
              multiline
              cursorColor={appColor.klightPurple}
              style={styles.bioInput}
              onChangeText={setBio}
              value={bio}
            />
          </View>
          <Pressable
            onPress={() => saveProfileUpdate()}
            style={styles.buttonContainer}
          >
            <Text style={styles.save}>Save</Text>
          </Pressable>
        </ScrollView>
        <ChooseProfilePicsBottomSheet />
        <NftBottomSheet />
        <SelectedCollectionBottomSheet />
      </EditProfileBottomSheetProvider>
      <InfoBottomSheet
        heading="Display Name"
        showDisplayBottomSheet={showDisplayNameBottomSheet}
        contentMessage="A Display Name is how you want to be known to the community. It can be different from your real name"
        onCloseDisplayBottomSheet={() =>
          setShowDisplayNameBottomSheet((previous) => !previous)
        }
      />
      <InfoBottomSheet
        onCloseDisplayBottomSheet={() =>
          setDisplayUsernameBottomSheet((previous) => !previous)
        }
        heading="Username"
        showDisplayBottomSheet={showDisplayUsername}
        contentMessage="A Username is a name unique to you, and it is ow the community an reference you specifically in their conversation"
      />
    </SafeAreaView>
  );
};

export default EditProfileScreen;
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
  removePFP: {
    color: appColor.kSecondaryButtonColor,
    textAlign: 'center',
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-SemiBold',
    marginTop: size.getHeightSize(16),
  },
  parentContainer: {
    paddingHorizontal: size.getWidthSize(16),
    marginTop: size.getHeightSize(16),
  },
  row: {
    flexDirection: 'row',
    gap: size.getWidthSize(8),
    alignItems: 'center',
  },
  text: {
    color: appColor.kTextColor,
    fontFamily: 'Outfit-Regular',
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(24),
  },
  textInput: {
    borderWidth: 1,
    borderColor: appColor.kGrayscale,
    fontSize: size.fontSize(16),
    borderRadius: 40,
    color: appColor.kTextColor,
    fontFamily: 'Outfit-Regular',
    paddingVertical: size.getHeightSize(12),
    paddingHorizontal: size.getWidthSize(16),
    lineHeight: size.getHeightSize(24),
    marginTop: size.getHeightSize(8),
    backgroundColor: appColor.kGrayscaleDart,
    marginBottom: size.getHeightSize(16),
  },
  errorText: {
    marginTop: size.getHeightSize(8),
    color: appColor.kErrorText,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    marginLeft: size.getWidthSize(16),
    fontFamily: 'Outfit-Regular',
  },
  username: {
    flexDirection: 'row',
    borderRadius: 40,
    borderWidth: 1,
    paddingVertical: size.getHeightSize(12),
    borderColor: appColor.kGrayscale,
    paddingHorizontal: size.getWidthSize(16),
    backgroundColor: appColor.kGrayscaleDart,
    alignItems: 'center',
    marginBottom: size.getHeightSize(16),
    marginTop: size.getHeightSize(8),
  },
  leadingText: {
    fontSize: size.fontSize(16),
    color: appColor.kGrayLight3,
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(21),
  },
  usernameTextInput: {
    flex: 1,
    color: appColor.kTextColor,
    fontFamily: 'Outfit-Regular',
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(24),
  },
  bioInput: {
    paddingVertical: size.getHeightSize(12),
    paddingHorizontal: size.getWidthSize(16),
    marginTop: size.getHeightSize(8),
    backgroundColor: appColor.kGrayscaleDart,
    borderRadius: 16,
    borderColor: appColor.kGrayscale,
    borderWidth: 1,
    minHeight: size.getHeightSize(87),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(24),
  },
  buttonContainer: {
    backgroundColor: appColor.kSecondaryButtonColor,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: size.getHeightSize(12.5),
    paddingHorizontal: size.getWidthSize(16),
    borderRadius: 40,
    marginHorizontal: size.getWidthSize(16),
    marginTop: size.getHeightSize(32),
  },
  save: {
    color: appColor.kTextColor,
    fontFamily: 'Outfit-Medium',
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(23),
    letterSpacing: 0.36,
  },
});
