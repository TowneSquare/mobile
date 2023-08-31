import { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  Dimensions,
  SafeAreaView,
  FlatList,
} from "react-native";
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import TransitionBackButton from "../../components/SignUp/TransitionBackButton";
import { appColor, fonts } from "../../constants";
import { sizes } from "../../utils";
import TranslationForwardButton from "../../components/SignUp/TranslationForwardButton";
import Verify from "../../components/SignUp/ConnectSocialsAndVerify/Verify";
import { EmailLoginProps } from "../../navigations/NavigationTypes";
import ChooseUsernameContent from "../../components/SignUp/ChooseUsername/UsernameContent";
import ConnectSocials from "../../components/SignUp/ConnectSocials/ConnectSocials";
import FindFriends from "../../components/SignUp/FindFriends/FindFriends";
import ExploreCommunities from "../../components/SignUp/ExploreCommunities/ExploreCommunities";
import ChooseProfilePics from "../../components/SignUp/ChooseProfilePics/ChooseProfilePics";
import UploadImageModal from "../../components/SignUp/ChooseProfilePics/UploadImageModal";
import EmailContent from "../../components/SignUp/EmailSignup/EmailContent";
import ChooseNFT from "../../components/SignUp/ChooseProfilePics/ChooseNFT";
import SelectedCollection from "../../components/SignUp/ChooseProfilePics/SelectedCollection";
import { useNavigation } from "@react-navigation/native";
import {
  updateAccountInfo,
  updateDidToken,
} from "../../controller/UserController";
import { signup } from "../../api";
import { useAppDispatch, useAppSelector } from "../../controller/hooks";
import { updateDidToken } from "../../controller/UserController";

const { width, height } = Dimensions.get("window");
const size = new sizes(height, width);
let PADDING = size.getWidthSize(26);
let newWidth = width - 2 * PADDING;

const EmailLogin = ({ magic }: EmailLoginProps) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [disable, setDisable] = useState(false);
  const [viewIndex, setViewIndex] = useState(0);

  const userName = useAppSelector(
    (state) => state.USER.details.username
  );
  const nickName = useAppSelector(
    (state) => state.USER.details.Nickname
  );
  const email = useAppSelector(
    (state) => state.USER.details.email
  );

  useEffect(() => {
    switch (viewIndex){
      case 0: setDisable(email.length < 1 ? true : false); break;
      case 1: setDisable(nickName.length < 1 || userName.length < 1? true : false); break;
    }
  }, [userName, nickName, email, viewIndex]);

  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList<any>>(null);
  const views = [<EmailContent />, <ChooseUsernameContent />, <Verify />, <ConnectSocials />, <FindFriends />, <ExploreCommunities />, <ChooseProfilePics />];
  const onViewChangeRef = useRef(({ viewableItems }: any) => {
    setViewIndex(viewableItems[0]?.index);
  });

  const handleNextSlide = async () => {
    if (viewIndex == 0) {
      const token = await magic.auth.loginWithEmailOTP({ email });
      dispatch(updateDidToken(token));
    }
    const newIndex = viewIndex + 1;
    if (newIndex < views.length && flatListRef.current) {
      flatListRef.current.scrollToIndex({ index: newIndex, animated: true });
    } else {
      navigation.navigate("Congratulations");
    }
  };

  const handlePreviousSlide = () => {
    const newIndex = viewIndex - 1;
    if (newIndex >= 0 && flatListRef.current) {
      flatListRef.current.scrollToIndex({ index: newIndex, animated: true });
    } else {
      navigation.goBack();
    }
  };

  const stagePosition = Animated.divide(scrollX, width);
  const progressWidth = stagePosition.interpolate({
    inputRange: [0, 1, 2, 3, 4, 5, 6],
    outputRange: [newWidth / 7, (newWidth / 7) * 2, (newWidth / 7) * 3, (newWidth / 7) * 4, (newWidth / 7) * 5, (newWidth / 7) * 6, newWidth],
    extrapolate: "clamp",
  });

  let stageTitle = (index: number) => {
    switch (index) {
      case 0:
        return "Choose your username";
      case 1:
        return "Connect Socials & Verify";
      case 2:
        return "Select Socials";
      case 3:
        return "Find your friends";
      case 4:
        return "Explore communities";
      case 5:
        return "Choose PFP";
      default:
        return "Hang on! You're all done after this.";
    }
  };

  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }

  const login = async () => {
    const token = await magic.auth.loginWithEmailOTP({ email });
    console.log("Magic Token: ", token);
    dispatch(updateDidToken(token));
    const result = await signup(token);
    console.log("Singup: ", result);
    navigation.navigate("ChooseUsernameSlide");
  };

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
            width: size.getWidthSize(257),
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
        onViewableItemsChanged={onViewChangeRef.current}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item }: any) => {
          return (
            <View
              style={{
                width: width,
                backgroundColor: "transparent",
                flex: 1,
              }}
            >
              {item}
            </View>
          );
        }}
      />
      <View
        style={{
          height: size.getHeightSize(124),
          marginBottom: size.getHeightSize(24),
        }}
      >
        <TranslationForwardButton
          disable={disable}
          action={() => {
            handleNextSlide();
          }}
        />
        <TransitionBackButton
          action={() => {
            handlePreviousSlide();
          }}
        />
      </View>
      <UploadImageModal />
      <ChooseNFT />
      <SelectedCollection />
    </SafeAreaView>
  );
};

export default EmailLogin;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: appColor.signUpBackground,
  },
});