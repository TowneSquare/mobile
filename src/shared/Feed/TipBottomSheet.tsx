import {
  View,
  Text,
  Dimensions,
  Pressable,
  StyleSheet,
  BackHandler,
  ActivityIndicator,
  Animated,
} from "react-native";
import { useCallback, useMemo, useRef, useEffect, useState } from "react";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetTextInput,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from "@gorhom/bottom-sheet";
import SuccesGreenIcon from "../../../assets/images/svg/SuccessGreenIcon";
import InfoIcon from "../../../assets/images/svg/InfoIcon";
import * as Animatable from "react-native-animatable";
import { Avatar } from "react-native-elements";
import { useAppDispatch, useAppSelector } from "../../controller/hooks";
import CustomHandler from "../../components/Feed/CustomHandler";
import { appColor, images } from "../../constants";
import { sizes } from "../../utils";
import Aptos from "../../../assets/images/svg/Aptos";
import { updateTipBottomSheet } from "../../controller/FeedsController";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
enum STATUS {
  idle,
  loading,
  success,
}

const TipBottomSheet = () => {
  const dispatch = useAppDispatch();
  // const visibility = useAppSelector(
  //   (state) => state.FeedsSliceController.tipBottomSheet.status
  // );

  const { visibility, username, profileImage, wallet, nickname } =
    useAppSelector((state) => ({
      visibility: state.FeedsSliceController.tipBottomSheet.status,
      username: state.FeedsSliceController.tipBottomSheet.username,
      profileImage: state.FeedsSliceController.tipBottomSheet.profileImage,
      wallet: state.FeedsSliceController.tipBottomSheet.wallet,
      nickname: state.FeedsSliceController.tipBottomSheet.nickname,
    }));
  const bottomSheetRef = useRef<BottomSheet>(null);
  const initialSnapPoints = useMemo(() => ["CONTENT_HEIGHT"], []);
  const [tip, setTip] = useState<string | undefined>("0.1");
  const [tipStatus, setTipStatus] = useState<STATUS>(STATUS.idle);
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior={"close"}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.5}
      />
    ),
    []
  );
  visibility
    ? bottomSheetRef.current?.expand()
    : bottomSheetRef.current?.close();
  useEffect(() => {
    const handleBackButton = () => {
      if (visibility === true) {
        dispatch(
          updateTipBottomSheet({
            status: false,
            profileImage: "",
            username: "",
            wallet: "",
            nickname: "",
          })
        );
        return true;
      } else {
        return false;
      }
    };
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
    };
  }, [visibility]);

  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);
  const startLoading = () => {
    setTipStatus(STATUS.loading);
    setTimeout(() => {
      setTipStatus(STATUS.success);
    }, 4000);
  };
  function onClose() {
    dispatch(
      updateTipBottomSheet({
        status: false,
        profileImage: "",
        username: "",
        wallet: "",
        nickname: "",
      })
    );
    setTip("0.1");
    setTipStatus(STATUS.idle);
  }
  return (
    <>
      {!visibility ? (
        <></>
      ) : (
        <BottomSheet
          onClose={onClose}
          ref={bottomSheetRef}
          snapPoints={animatedSnapPoints}
          handleHeight={animatedHandleHeight}
          contentHeight={animatedContentHeight}
          enablePanDownToClose={true}
          animateOnMount={true}
          backgroundStyle={{
            backgroundColor: appColor.kgrayDark2,
          }}
          handleComponent={() => <CustomHandler />}
          backdropComponent={renderBackdrop}
        >
          <BottomSheetView
            style={{
              paddingHorizontal: size.getWidthSize(16),
            }}
            onLayout={handleContentLayout}
          >
            <View
              style={{
                alignSelf: "center",
                marginTop: size.getHeightSize(24),
              }}
            >
              <Avatar
                source={{ uri: profileImage }}
                size={size.getHeightSize(84)}
              />
            </View>
            <Text style={styles.name}>Tip FakeJC</Text>
            <Text style={styles.username}>@jcgangbang</Text>
            {tipStatus !== STATUS.success && (
              <Text style={styles.description}>
                Show support to FakeJC and make their day.
              </Text>
            )}
            {tipStatus !== STATUS.success && (
              <View
                style={{
                  opacity: tipStatus === STATUS.loading ? 0.5 : 1,
                }}
              >
                <View style={styles.inputContainer}>
                  <BottomSheetTextInput
                    value={tip}
                    editable={tipStatus !== STATUS.loading}
                    style={styles.textInput}
                    cursorColor={appColor.primaryLight}
                    placeholderTextColor={appColor.kGrayLight3}
                    onChangeText={(text) => setTip(text)}
                    keyboardType="numeric"
                  />
                  <Aptos />
                  <Text style={styles.APT}>APT</Text>
                </View>
                <View style={styles.rowContainer}>
                  <Pressable
                    onPress={() => setTip("0.1")}
                    style={tip === "0.1" ? styles.row : styles.idleContainer}
                  >
                    <Text
                      style={tip === "0.1" ? styles.text2 : styles.idleText}
                    >
                      0.1 APT
                    </Text>
                  </Pressable>
                  <Pressable
                    onPress={() => setTip("0.5")}
                    style={tip === "0.5" ? styles.row : styles.idleContainer}
                  >
                    <Text
                      style={tip === "0.5" ? styles.text2 : styles.idleText}
                    >
                      0.5 APT
                    </Text>
                  </Pressable>
                  <Pressable
                    onPress={() => setTip("1")}
                    style={tip === "1" ? styles.row : styles.idleContainer}
                  >
                    <Text style={tip === "1" ? styles.text2 : styles.idleText}>
                      1 APT
                    </Text>
                  </Pressable>
                </View>
              </View>
            )}
            {tipStatus === STATUS.loading && (
              <Animatable.View
                animation="slideInUp"
                duration={500}
                style={styles.infoView}
              >
                <InfoIcon size={size.getHeightSize(24)} />
                <Text style={styles.infoText}>
                  Sign the transaction in your wallet to complete the payment
                </Text>
              </Animatable.View>
            )}
            {tipStatus === STATUS.success && (
              <View style={styles.sentView}>
                <SuccesGreenIcon size={size.getHeightSize(24)} />
                <Text style={styles.sentText}>
                  <Text style={{ fontFamily: "Outfit-Bold" }}>{tip} APT</Text>{" "}
                  have been sent!
                </Text>
              </View>
            )}
            <View style={styles.buttonView}>
              {tipStatus === STATUS.loading || tipStatus === STATUS.success ? (
                <Animatable.View>
                  <Pressable
                    onPress={() => {
                      tipStatus === STATUS.success ? onClose() : startLoading();
                    }}
                    style={styles.sendTipButton}
                    disabled={tipStatus === STATUS.loading}
                  >
                    {tipStatus === STATUS.loading ? (
                      <ActivityIndicator
                        size={"small"}
                        color={appColor.kWhiteColor}
                      />
                    ) : (
                      <Text style={styles.tipText}>Great!</Text>
                    )}
                  </Pressable>
                </Animatable.View>
              ) : (
                <Pressable onPress={startLoading} style={styles.sendTipButton}>
                  <Text style={styles.tipText}>{`Send tip (${tip} APT)`}</Text>
                </Pressable>
              )}
              {tipStatus !== STATUS.success && (
                <View style={styles.cancelButton}>
                  <Text
                    onPress={() =>
                      dispatch(
                        updateTipBottomSheet({
                          status: false,
                          profileImage: "",
                          username: "",
                          wallet: "",
                          nickname: "",
                        })
                      )
                    }
                    style={styles.cancelText}
                  >
                    Cancel
                  </Text>
                </View>
              )}
            </View>
          </BottomSheetView>
        </BottomSheet>
      )}
    </>
  );
};

export default TipBottomSheet;
const styles = StyleSheet.create({
  container: {
    marginTop: size.heightSize(36),
    flexDirection: "row",
    gap: size.getWidthSize(8),

    alignItems: "center",
  },
  text: {
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    color: appColor.kTextColor,
    letterSpacing: 0.36,
    fontFamily: "Outfit-Medium",
  },
  inputContainer: {
    flexDirection: "row",
    alignSelf: "flex-start",
    gap: size.getWidthSize(4),
    marginTop: size.getHeightSize(32),
    width: size.getWidthSize(312),
    alignItems: "center",
  },
  textInput: {
    width: size.getWidthSize(224),
    height: size.getHeightSize(48),
    borderWidth: 1,
    borderRadius: 40,
    borderColor: appColor.kGrayscale,
    backgroundColor: appColor.kGrayscaleDart,
    marginRight: size.getWidthSize(16),
    paddingHorizontal: size.getWidthSize(16),
    fontSize: size.fontSize(16),
    fontFamily: "Outfit-Regular",
    color: appColor.kTextColor,
    paddingVertical: size.getHeightSize(12),
  },
  APT: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: "Outfit-SemiBold",
    letterSpacing: 0.04,
    textTransform: "uppercase",
    marginLeft: size.getWidthSize(8),
  },
  row: {
    width: size.getWidthSize(96),
    minHeight: size.getHeightSize(36),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: appColor.kSecondaryButtonColor,
    borderRadius: 40,
  },
  text2: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(20),
    fontFamily: "Outfit-SemiBold",
  },
  idleText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(20),
    fontFamily: "Outfit-Regular",
  },
  idleContainer: {
    width: size.getWidthSize(96),
    minHeight: size.getHeightSize(36),
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 40,
    borderWidth: 1,
    borderColor: appColor.kGrayLight3,
  },
  name: {
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    color: appColor.kTextColor,
    letterSpacing: 0.4,
    fontFamily: "Outfit-SemiBold",
    marginTop: size.getHeightSize(16),
    textAlign: "center",
  },
  username: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    color: appColor.kGrayscale,
    fontFamily: "Outfit-Regular",
    textAlign: "center",
  },
  description: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    color: appColor.kTextColor,
    fontFamily: "Outfit-Regular",
    textAlign: "center",
    marginTop: size.getHeightSize(16),
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: size.getWidthSize(16),
    alignSelf: "center",
    marginTop: size.getHeightSize(16),
    marginBottom: size.getHeightSize(32),
  },
  infoView: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: size.getWidthSize(8),
    paddingHorizontal: size.getWidthSize(24),
    paddingVertical: size.getHeightSize(16),
    backgroundColor: appColor.feedBackground,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: appColor.grayDark,
    marginBottom: size.getHeightSize(32),
  },
  infoText: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    color: appColor.kTextColor,
    fontFamily: "Outfit-Regular",
    flex: 1,
  },
  buttonView: {
    marginBottom: size.getHeightSize(32),
    gap: size.getHeightSize(8),
  },
  sendTipButton: {
    minHeight: size.getHeightSize(48),
    borderRadius: 40,
    backgroundColor: appColor.kSecondaryButtonColor,
    alignItems: "center",
    justifyContent: "center",
  },
  tipText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    fontFamily: "Outfit-Medium",
    letterSpacing: 0.36,
  },
  cancelButton: {
    minHeight: size.getHeightSize(48),
    alignItems: "center",
    justifyContent: "center",
  },
  cancelText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    fontFamily: "Outfit-Medium",
    letterSpacing: 0.36,
  },
  sentView: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: size.getHeightSize(72),
    gap: size.getWidthSize(8),
    paddingHorizontal: size.getWidthSize(24),
    paddingVertical: size.getHeightSize(16),
    backgroundColor: appColor.feedBackground,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: appColor.grayDark,
    marginBottom: size.getHeightSize(32),
    marginTop: size.getHeightSize(16),
  },
  sentText: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    color: appColor.kTextColor,
    letterSpacing: 0.4,
    fontFamily: "Outfit-Regular",
    flex: 1,
  },
});
