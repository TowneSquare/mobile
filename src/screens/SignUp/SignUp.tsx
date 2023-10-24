import { useState, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  Dimensions,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { appColor, fonts } from "../../constants";
import { sizes } from "../../utils";
import TranslationForwardButton from "../../components/SignUp/TranslationForwardButton";
import Verify from "../../components/SignUp/ConnectSocialsAndVerify/Verify";
import { SignUpProps } from "../../navigations/NavigationTypes";
import ChooseUsernameContent from "../../components/SignUp/ChooseUsername/UsernameContent";
import ConnectSocials from "../../components/SignUp/ConnectSocials/ConnectSocials";
import FindFriends from "../../components/SignUp/FindFriends/FindFriends";
import ExploreCommunities from "../../components/SignUp/ExploreCommunities/ExploreCommunities";
import ChooseProfilePics from "../../components/SignUp/ChooseProfilePics/ChooseProfilePics";
import UploadImageModal from "../../components/SignUp/ChooseProfilePics/UploadImageModal";
import ChooseNFT from "../../components/SignUp/ChooseProfilePics/ChooseNFT";
import SelectedCollection from "../../components/SignUp/ChooseProfilePics/SelectedCollection";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SignupTransitionBackButton from "../../components/SignUp/SignupTransitionBackButton";
import { useAppSelector } from "../../controller/hooks";
import { getAllUser, signup } from "../../api";
const { width, height } = Dimensions.get("window");
const size = new sizes(height, width);
let PADDING = size.getWidthSize(26);
let newWidth = width - 2 * PADDING;

const SignUp = ({ navigation }: SignUpProps) => {
  const {
    usernameError,
    nickNameError,
    userNameLength,
    nickNameLength,
    profilePics,
  } = useAppSelector((state) => ({
    usernameError: state.USER.errors.usernameError,
    nickNameError: state.USER.errors.nicknameError,
    userNameLength: state.USER.details.username.length,
    nickNameLength: state.USER.details.Nickname.length,
    profilePics: state.USER.details.profileImage,
  }));

  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList<any>>(null);
  const [viewIndex, setViewIndex] = useState(0);
  const user = useAppSelector((state) => state.USER);

  const handleNextSlide = async () => {
    if (viewIndex + 1 < views.length && flatListRef.current) {
      setViewIndex((previous) => previous + 1);

      flatListRef.current.scrollToIndex({ index: viewIndex + 1, animated: true });
    } else {
      const result = await getAllUser(user.didToken);

      const res = await signup(
        user.didToken,
        user.metadata.issuer,
        user.accountInfo.address,
        user.details.Nickname,
        user.details.username,
        user.metadata.email
      );
      console.log(res)
      if (!res.error && res.success != false) {
        
        navigation.navigate("Congratulations");
      }
    }
  };
  const views = [
    <ChooseUsernameContent />,
    <Verify />,
    <ConnectSocials />,
    <FindFriends />,
    <ExploreCommunities />,
    <ChooseProfilePics />,
  ];
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
    extrapolate: "clamp",
  });

  let stageTitle = (index: number) => {
    switch (index) {
      case 0:
        return "Connect Socials & Verify";
      case 1:
        return "Select Socials";
      case 2:
        return "Find your friends";
      case 3:
        return "Explore communities";
      case 4:
        return "Choose PFP";
      default:
        return "Hang on! You're all done after this.";
    }
  };
  let disable;
  switch (viewIndex) {
    case 0:
      disable =
        usernameError ||
        nickNameError ||
        userNameLength < 1 ||
        nickNameLength < 1;
      break;
    case 5:
      disable = typeof profilePics === "undefined" ? true : false;
      break;
    default:
      break;
  }
  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
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
            fontFamily: "Outfit-Regular",
            fontSize: size.fontSize(14),
            lineHeight: size.getHeightSize(18),
            width: newWidth
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
              alignItems: "center",
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
            }}
          >
            <TranslationForwardButton
              action={() => {
                handleNextSlide();
              }}
              disable={disable}
            />
            <SignupTransitionBackButton
              action={() => {
                handlePreviousSlide();
              }}
              index={viewIndex}
              next={handleNextSlide}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
      <UploadImageModal />
      <ChooseNFT />
      <SelectedCollection />
    </SafeAreaView>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: size.getHeightSize(56),
    backgroundColor: appColor.signUpBackground,
  },
});
