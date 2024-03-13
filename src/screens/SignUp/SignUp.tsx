import AsyncStorage from '@react-native-async-storage/async-storage';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  useSafeAreaInsets
} from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import Loader from '../../../assets/svg/Loader';
import {
  checkSignup, getTokenBywalletaddress, signup,
  updateConnectedSocial,
  uploadProfileImage
} from '../../api';
import ChooseNFT from '../../components/SignUp/ChooseProfilePics/ChooseNFT';
import ChooseProfilePics from '../../components/SignUp/ChooseProfilePics/ChooseProfilePics';
import SelectedCollection from '../../components/SignUp/ChooseProfilePics/SelectedCollection';
import UploadImageModal from '../../components/SignUp/ChooseProfilePics/UploadImageModal';
import ChooseUsernameContent from '../../components/SignUp/ChooseUsername/UsernameContent';
import ConnectSocials from '../../components/SignUp/ConnectSocials/ConnectSocials';
import Verify from '../../components/SignUp/ConnectSocialsAndVerify/Verify';
import FindFriends from '../../components/SignUp/FindFriends/FindFriends';
import ReferralView from '../../components/SignUp/Referral/ReferralView';
import SignupTransitionBackButton from '../../components/SignUp/SignupTransitionBackButton';
import TranslationForwardButton from '../../components/SignUp/TranslationForwardButton';
import { appColor, fonts } from '../../constants';
import { updateToast } from '../../controller/FeedsController';
import { disableContinueButton, updateDidToken, updateUserId } from '../../controller/UserController';
import { useAppSelector } from '../../controller/hooks';
import { SignUpProps } from '../../navigations/NavigationTypes';
import { storeDeviceTokenToFireStore } from '../../services/PushNotification';
import { setLoginSession, sizes } from '../../utils';
const { width, height } = Dimensions.get('window');
const size = new sizes(height, width);
let PADDING = size.getWidthSize(26);
let newWidth = width - 2 * PADDING;
type WalletCredentials = {
  address: string;
  token?: string;
  shouldGenerateTokenfromAddress: boolean;
};
type RootStackParamList = {
  SignUp: { walletCredentials?: WalletCredentials };
};
type SignUpRouteProp = RouteProp<RootStackParamList, 'SignUp'>;
const SignUp = ({ magic }: SignUpProps) => {
  const navigation = useNavigation();
  const route = useRoute<SignUpRouteProp>();
  const { address, shouldGenerateTokenfromAddress } =
    route.params?.walletCredentials;
  const [isSignupSuccesful, setSignupSuccess] = useState(false);
  const [userId, setUserId] = useState('');
  const [token, setToken] = useState('');
  const loaderRef = useRef();
  const padding = useSafeAreaInsets();
  const {
    nickNameError,
    nickNameLength,
    profilePics,
    referralCode,
    socialInfo,
    userNameLength,
    usernameError,
    nickname,
    username,
    deviceToken,
  } = useAppSelector((state) => ({
    usernameError: state.USER.signUpData.errors.usernameError,
    nickNameError: state.USER.signUpData.errors.nicknameError,
    userNameLength: state.USER.signUpData.username.length,
    nickNameLength: state.USER.signUpData.nickname.length,
    profilePics: state.USER.signUpData.profileImage,
    referralCode: state.USER.signUpData.referralCode,
    socialInfo: state.USER.signUpData.socialInfo,
    username: state.USER.signUpData.username,
    nickname: state.USER.signUpData.nickname,
    deviceToken: state.USER.userDeviceToken,
  }));

  const continueButtonDisable = useAppSelector(
    (state) => state.USER.isSignUpContinueButtonDisable
  );
  useEffect(() => {
    async function getToken() {
      // Get token from the wallet address
      const userToken = await getTokenBywalletaddress(address);

      // update user token in redux
      dispatch(updateDidToken(userToken.token));

      // update user token in async storage
      await AsyncStorage.setItem('user_token', userToken.token);
      setToken(userToken.token);
    }

    // Update token in usestate and async storage
    async function updateToken(usrtoken: string) {
      await AsyncStorage.setItem('user_token', usrtoken);
      setToken(usrtoken);
    }

    // Check if token should be generated from the wallet address
    if (shouldGenerateTokenfromAddress) {
      // Get token from the wallet address
      getToken();
    } else {
      // Update token from the route params
      updateToken(route.params?.walletCredentials.token);
    }
  }, []);
  const dispatch = useDispatch();

  // Views for the sign up process
  const views = [
    <ReferralView />,
    <ChooseUsernameContent />,
    <Verify />,
    <ConnectSocials magic={magic} signMethod={'SignUp'} />,
    <FindFriends token={token} />,
    // <ExploreCommunities />,
    <ChooseProfilePics userAddress={address} />,
  ];

  // Animation for the progress bar
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList<any>>(null);
  const [viewIndex, setViewIndex] = useState(0);

  // Get user from redux
  const user = useAppSelector((state) => state.USER);

  // Create form data for uploading profile image
  const createFormData = () => {
    const data = new FormData();
    data.append('file', {
      name: user.signUpData.username,
      type: 'Image/' + get_url_extension(profilePics),
      uri: profilePics,
    } as any);
    return data;
  };

  // Get file extension from the url
  function get_url_extension(url) {
    return url.split(/[#?]/)[0].split('.').pop().trim();
  }

  // Show loader
  const showLoader = (show = true) => {
    if (loaderRef.current && show)
      (loaderRef.current as any).setNativeProps({ style: { display: 'flex' } });

    if (loaderRef.current && !show)
      (loaderRef.current as any).setNativeProps({ style: { display: 'none' } });
  };

  // Handle next slide
  const handleNextSlide = async () => {
    const newIndex = viewIndex + 1;

    if (viewIndex == 0) {
      try {
        // show loader
        dispatch(disableContinueButton(true));

        // check if user is already signed up
        const res = await checkSignup(token);

        // if user is already signed up, set login session and navigate to congratulations screen
        if (res.isExist && res.isExist == true) {
          await setLoginSession(res.wallet, res.userId);
          deviceToken &&
            (await storeDeviceTokenToFireStore(res.userId, deviceToken));

          await AsyncStorage.setItem('user_id', res.userId);
          dispatch(updateUserId(res.userId));
          dispatch(disableContinueButton(false));
          navigation.navigate('Congratulations');

          return;
        } else {
          dispatch(disableContinueButton(false));
        }
      } catch (e) {
        showLoader(false);
        dispatch(disableContinueButton(false));
        return;
      }
    }

    // if new index is less than the length of the views, navigate to the next slide
    if (newIndex < views.length && flatListRef.current) {
      if (newIndex == 2) {
        dispatch(disableContinueButton(true));

        // get issuer from user metadata
        const issuer = user.metadata !== undefined ? user.metadata.issuer : '';

        // sign up user
        const res = await signup(
          token,
          issuer,
          address,
          nickname,
          username,
          ''
        );

        // if user is signed up successfully, set login session, update device token to firestore
        if (!res.error && res.success != false) {
          await setLoginSession(res.wallet, res.userId);
          setUserId(res.userId);
          await AsyncStorage.setItem('user_id', res.userId);
          deviceToken &&
            (await storeDeviceTokenToFireStore(res.userId, deviceToken));
          // setToken(user.didToken);
        }
        // if error occurs, show error toast
        else if (res.error) {
          const errorObject = JSON.parse(res.error);
          const errorMessage = errorObject.message;
          dispatch(
            updateToast({
              toastType: 'info',
              displayToast: true,
              toastMessage: errorMessage,
            })
          );
          dispatch(disableContinueButton(false));
          return;
        } else {
          dispatch(
            updateToast({
              toastType: 'success',
              displayToast: true,
              toastMessage: 'Something went wrong',
            })
          );
          dispatch(disableContinueButton(false));
          return;
        }
        dispatch(disableContinueButton(false));
      }
      // if new index is 3, update connected socials
      else if (newIndex == 4) {
        const result = await updateConnectedSocial(userId, token, socialInfo);
      }

      setViewIndex((previous) => previous + 1);
      flatListRef.current.scrollToIndex({ index: newIndex, animated: true });
    } else {
      // if new index is 5, upload profile image
      dispatch(disableContinueButton(true));
      const res = await uploadProfileImage(token, createFormData());
      dispatch(disableContinueButton(false));
      navigation.navigate('Congratulations');
    }
  };

  const onViewChangeRef = useRef(({ viewableItems }: any) => {
    setViewIndex(viewableItems[0]?.index);
  });

  const handlePreviousSlide = () => {
    setViewIndex((previous) => previous - 1);
    const newIndex = viewIndex - 1;

    if (newIndex >= 0 && flatListRef.current) {
      flatListRef.current.scrollToIndex({ index: newIndex, animated: true });
    } else {
      navigation.goBack();
    }
  };

  // Animation for the progress bar
  const stagePosition = Animated.divide(scrollX, width);
  const progressWidth = stagePosition.interpolate({
    inputRange: [0, 1, 2, 3, 4, 5],
    outputRange: [
      newWidth / 6,
      (newWidth / 6) * 2,
      (newWidth / 6) * 3,
      (newWidth / 6) * 4,
      (newWidth / 6) * 5,
      newWidth,
    ],
    extrapolate: 'clamp',
  });

  let stageTitle = (index: number) => {
    switch (index) {
      case 0:
        return 'Connect Socials & Verify';
      case 1:
        return 'Connect Socials & Verify';
      case 2:
        return 'Select socials';
      case 3:
        return 'Find your friends';
      case 4:
        return 'Choose PFP';
      default:
        return "Hang on! You're all done after this.";
    }
  };
  let disable;
  switch (viewIndex) {
    case 0:
      disable = false;
      break;
    case 1:
      disable =
        usernameError ||
        nickNameError ||
        userNameLength < 1 ||
        nickNameLength < 1;
      break;
    case 5:
      disable = typeof profilePics === 'undefined' ? true : false;
      break;
    default:
      break;
  }
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }

  return (
    <View
      style={[
        styles.container,
        {
          flex: 1,
          paddingTop: padding.top,
        },
      ]}
    >
      <View
        style={{
          marginTop: size.getHeightSize(42),
          paddingHorizontal: PADDING,
        }}
      >
        <Text
          style={{
            color: appColor.kTextColor,
            marginBottom: size.getHeightSize(8),
            fontFamily: 'Outfit-Regular',
            fontSize: size.fontSize(14),
            lineHeight: size.getHeightSize(18),
            width: newWidth,
          }}
        >
          Next step: {stageTitle(viewIndex)}
        </Text>

        <Animated.View
          style={{
            height: size.getHeightSize(2),
            backgroundColor: appColor.kStatusBarNaviDark,
            width: newWidth,
          }}
        >
          <Animated.View
            style={{
              height: size.getHeightSize(2),
              backgroundColor: appColor.kSecondaryButtonColor,
              width: progressWidth,
            }}
          />
        </Animated.View>
      </View>
      {continueButtonDisable && (
        <TouchableOpacity
          disabled
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: '#000000a0',
            zIndex: 999,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Loader />
        </TouchableOpacity>
      )}
      <View
        style={{
          flex: 1,
          width: width,
        }}
      >
        <KeyboardAwareScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              width: width,
              alignItems: 'center',
              flex: 1,
            }}
          >
            <FlatList
              scrollEnabled={false}
              ref={flatListRef}
              data={views}
              horizontal
              pagingEnabled
              scrollEventThrottle={16}
              snapToAlignment="center"
              showsHorizontalScrollIndicator={false}
              bounces={false}
              // onViewableItemsChanged={onViewChangeRef.current}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: false }
              )}
              renderItem={({ item }: any) => {
                return (
                  <View
                    style={{
                      width: width,
                      flex: 1,
                    }}
                  >
                    {item}
                  </View>
                );
              }}
            />
          </View>
          <View
            style={{
              marginBottom: size.getHeightSize(16),
              gap: size.getHeightSize(8),
              flex: 1,
            }}
          >
            <TranslationForwardButton
              action={() => {
                handleNextSlide();
              }}
              disable={disable || !token}
            />
            {viewIndex === 0 && (
              <Text onPress={handleNextSlide} style={styles.refferal}>
                I don't have a referral code
              </Text>
            )}
            <SignupTransitionBackButton
              action={() => {
                handlePreviousSlide();
              }}
              index={viewIndex}
              next={() => {
                navigation.navigate('Congratulations');
              }}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
      <UploadImageModal />
      <ChooseNFT />
      <SelectedCollection />
    </View>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  container: {
    // paddingTop: size.getHeightSize(56),
    backgroundColor: appColor.signUpBackground,
  },
  refferal: {
    paddingVertical: size.getHeightSize(12.5),
    fontSize: size.fontSize(18),
    color: appColor.kTextColor,
    textAlign: 'center',
    marginLeft: size.getWidthSize(6),
    lineHeight: size.getHeightSize(23),
    fontFamily: 'Outfit-Medium',
  },
});
