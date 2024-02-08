import { Dimensions, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { appColor, fonts } from '../../constants';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
import { useAppDispatch, useAppSelector } from '../../controller/hooks';
import { useFonts } from 'expo-font';
import Header from '../../components/Profile/Header';

import VerificationModal from '../../components/Profile/About/VerificationModal';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerActions } from '@react-navigation/native';
import SuperStarBottomSheet from '../../components/Profile/About/SuperStarBottomSheet';
import EditProfileModal from '../../components/Profile/About/EditProfileModal';
import ProfileTabNavigation from '../../navigations/InApp/ProfileTabNavigation';
import { updateSuperStarBottomSheet } from '../../controller/BottomSheetController';
import { useNavigation } from '@react-navigation/native';
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
