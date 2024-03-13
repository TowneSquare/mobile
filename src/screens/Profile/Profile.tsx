import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import EditProfileModal from '../../components/Profile/About/EditProfileModal';
import SuperStarBottomSheet from '../../components/Profile/About/SuperStarBottomSheet';
import VerificationModal from '../../components/Profile/About/VerificationModal';
import Header from '../../components/Profile/Header';
import { appColor, fonts } from '../../constants';
import { updateSuperStarBottomSheet } from '../../controller/BottomSheetController';
import { useAppDispatch, useAppSelector } from '../../controller/hooks';
import ProfileTabNavigation from '../../navigations/InApp/ProfileTabNavigation';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const Profile = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const USERDATA = useAppSelector((state) => state.USER.UserData);
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <StatusBar style="light" backgroundColor={appColor.signUpBackground} />
      <Header
        onMoreIconPress={openDrawer}
        title={USERDATA.username}
        typeOfProfile="myProfile"
      />
      <ProfileTabNavigation typeOfProfile="myProfile" />
      <SuperStarBottomSheet
        handleVisibility={() => {
          dispatch(updateSuperStarBottomSheet(false));
        }}
        typeOfProfile="myProfile"
      />
      <EditProfileModal />
      <VerificationModal />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: appColor.kgrayDark2,
    color: appColor.kTextColor,
    textAlign: 'center',
  },
  focusedTab: {
    backgroundColor: appColor.kSecondaryButtonColor,
  },
});

export default Profile;
