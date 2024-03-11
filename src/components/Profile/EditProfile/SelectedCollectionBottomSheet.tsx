// Choose Profile Picture NFT Image
import {
  View,
  Text,
  Dimensions,
  Pressable,
  StyleSheet,
  Alert,
  BackHandler,
} from "react-native";
import {
  useCallback,
  useMemo,
  useRef,
  useEffect,
  useState,
  useContext,
} from "react";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { useAppSelector, useAppDispatch } from "../../../controller/hooks";
import * as Animatable from "react-native-animatable";
import { appColor } from "../../../constants";
import { sizes } from "../../../utils";
import { EditProfilePictureContext } from "../../../context/EditProfileBottomSheetContext";
import ProfilePicsCollection from "../../SignUp/ChooseProfilePics/ProfilePicsCollection";
import { updateProfileImage } from "../../../controller/UserController";
import { updateProfilePics } from "../../../controller/BottomSheetController";
import axios from "axios";
import { BACKEND_URL } from "../../../../config/env";
import { setProfilePhotoWithNFTImage } from "../../../api";
import AsyncStorage from "@react-native-async-storage/async-storage";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
const SelectedCollectionBottomSheet = () => {
  const dispatch = useAppDispatch();
  const {
    setCollectionBottomSheet,
    setSelectedCollectionVisible,
    isSelectedCollectionBottomSheetVisible,
  } = useContext(EditProfilePictureContext);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const initialSnapPoints = useMemo(() => ["CONTENT_HEIGHT"], []);
  const [snapPoint, setSnap] = useState("67%");
  const profilePics = useAppSelector(
    (state) => state.bottomSheetController.profilePics.image
  );
  const { assets, userToken } = useAppSelector((state) => ({
    assets: state.bottomSheetController.listOfNftCollections,
    userToken: state.USER.didToken,
  }));
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior={"none"}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.5}
      />
    ),
    []
  );
  useEffect(() => {
    const handleBackButton = () => {
      if (isSelectedCollectionBottomSheetVisible === true) {
        setSelectedCollectionVisible(false);
        return true;
      } else {
        return false;
      }
    };
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
    };
  }, [isSelectedCollectionBottomSheetVisible]);
  // const animatedIndex = useSharedValue(0);
  // const contentStyle = useAnimatedStyle(() => ({
  //   transform: [
  //     {
  //       translateY: interpolate(
  //         animatedIndex.value,
  //         [0, 0.08],
  //         [40, 0],
  //         Extrapolation.CLAMP
  //       ),
  //     },
  //   ],
  //   opacity: interpolate(
  //     animatedIndex.value,
  //     [0, 0.08],
  //     [0, 1],
  //     Extrapolation.CLAMP
  //   ),
  // }));

  const handleSetProfilePhotoWithNFTImage = async () => {
    const token = await AsyncStorage.getItem("user_token");
    const res = await setProfilePhotoWithNFTImage(token, profilePics);
  };
  return (
    <>
      {!isSelectedCollectionBottomSheetVisible ? (
        <></>
      ) : (
        <BottomSheet
          onClose={() => {
            setCollectionBottomSheet(false);
          }}
          ref={bottomSheetRef}
          snapPoints={[snapPoint]}
          index={isSelectedCollectionBottomSheetVisible ? 0 : -1}
          enablePanDownToClose={false}
          animateOnMount={true}
          backgroundStyle={{
            backgroundColor: appColor.kgrayDark2,
          }}
          backdropComponent={renderBackdrop}
          handleComponent={() => {
            return <></>;
          }}
        >
          <Text style={styles.title}>{assets[0].collection}</Text>

          <BottomSheetScrollView
            style={{}}
            showsVerticalScrollIndicator={false}
            onScroll={() => setSnap("90%")}
          >
            <Animatable.View
              animation={"fadeInUp"}
              delay={500}
              easing={"ease-in-out"}
              duration={400}
              // style={contentStyle}
            >
              <ProfilePicsCollection />
            </Animatable.View>
          </BottomSheetScrollView>
          <View
            style={{
              height: size.getHeightSize(116),
              marginBottom: size.getHeightSize(16),
            }}
          >
            <Pressable
              onPress={() => {
                setSnap("67%");
                handleSetProfilePhotoWithNFTImage();
                setSelectedCollectionVisible(false);
              }}
              disabled={!profilePics ? true : false}
              style={{
                alignSelf: "center",
                width: size.getWidthSize(328),
                borderRadius: 40,
                // height: size.getHeightSize(48),
                justifyContent: "center",
                marginTop: size.getHeightSize(8),
                backgroundColor: !profilePics
                  ? appColor.kWhiteColorWithOpacity
                  : appColor.kWhiteColor,
                paddingVertical: size.getHeightSize(12.5),
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: appColor.kButtonTextColor,
                  fontSize: size.fontSize(18),
                  fontFamily: "Outfit-SemiBold",
                  lineHeight: size.getHeightSize(23),

                  letterSpacing: 0.01,
                }}
              >
                Choose
              </Text>
            </Pressable>
            <View style={styles.backButton}>
              <Text
                onPress={() => {
                  setSnap("67%");
                  setSelectedCollectionVisible(false);
                  setCollectionBottomSheet(true);
                  dispatch(
                    updateProfilePics({
                      image: "",
                      name: "",
                      id: "",
                    })
                  );
                }}
                style={styles.back}
              >
                Back
              </Text>
            </View>
          </View>
        </BottomSheet>
      )}
    </>
  );
};

export default SelectedCollectionBottomSheet;
const styles = StyleSheet.create({
  text: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: "Outfit-Regular",
    textAlign: "center",

    lineHeight: size.getHeightSize(21),
    marginBottom: size.getHeightSize(32),
    marginTop: size.getHeightSize(8),
  },
  innerStyle: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  title: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(29),
    fontFamily: "Outfit-Bold",
    textAlign: "center",
    marginTop: size.getHeightSize(29),
    lineHeight: size.getHeightSize(37),
    marginBottom: size.getHeightSize(32),
  },
  backButton: {
    justifyContent: "center",
    height: size.getHeightSize(48),
    marginTop: size.getHeightSize(8),
    paddingVertical: size.getHeightSize(12.5),
    marginBottom: size.getHeightSize(20),
  },
  back: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(18),
    fontFamily: "Outfit-SemiBold",
    textAlign: "center",
    lineHeight: size.getHeightSize(23),
  },
});
