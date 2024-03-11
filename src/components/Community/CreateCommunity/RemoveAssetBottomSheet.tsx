import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from "@gorhom/bottom-sheet";
import { useFonts } from "expo-font";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";
import {
  BackHandler,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";
import BlockIcon from "../../../../assets/images/svg/BlockIcon";
import { appColor, fonts } from "../../../constants";
import { SetCommunityContext } from "../../../context/SetUpCommunityContext";
import { sizes } from "../../../utils";
import CustomHandler from "../../Feed/CustomHandler";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
const RemoveAssetBottomSheet = () => {
  const {
    removeAssetBottomSheetVisibility,
    setRemoveAssetBottomSheetVisibility,
  } = useContext(SetCommunityContext);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const initialSnapPoints = useMemo(() => ["CONTENT_HEIGHT"], []);

  removeAssetBottomSheetVisibility === false
    ? bottomSheetRef.current?.close()
    : bottomSheetRef.current?.expand();
  useEffect(() => {
    const handleBackButton = () => {
      if (removeAssetBottomSheetVisibility === true) {
        setRemoveAssetBottomSheetVisibility(false);
        return true;
      } else {
        return false;
      }
    };
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
    };
  }, [removeAssetBottomSheetVisibility]);
  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);
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
  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
    "Outfit-SemiBold": fonts.OUTFIT_SEMIBOLD,
  });

  const closeModal = () => {
    setRemoveAssetBottomSheetVisibility(false);
    bottomSheetRef.current?.close();
  };
  return (
    <>
      {!removeAssetBottomSheetVisibility ? (
        <></>
      ) : (
        <BottomSheet
          onClose={closeModal}
          ref={bottomSheetRef}
          snapPoints={animatedSnapPoints}
          handleHeight={animatedHandleHeight}
          contentHeight={animatedContentHeight}
          enablePanDownToClose={true}
          animateOnMount={true}
          backgroundStyle={{
            backgroundColor: appColor.kgrayDark2,
          }}
          handleComponent={()=><CustomHandler/>}
          backdropComponent={renderBackdrop}
        >
          <BottomSheetView onLayout={handleContentLayout}>
            <BlockIcon
              style={{
                alignSelf: "center",
                marginTop: size.getHeightSize(24),
              }}
            />
            <Text style={styles.contentDescription}>
              Are you sure you want to remove selected asset?
            </Text>
            <Text style={styles.contentMessage}>
              You will lose all parameters selected previously.
            </Text>
            <Pressable
              onPress={() => {
                closeModal();
              }}
              style={styles.blockButton}
            >
              <Text style={styles.blockButtonText}>Remove</Text>
            </Pressable>

            <Text onPress={closeModal} style={styles.cancel}>
              Cancel
            </Text>
          </BottomSheetView>
        </BottomSheet>
      )}
    </>
  );
};

export default RemoveAssetBottomSheet;
const styles = StyleSheet.create({
  cancel: {
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    color: appColor.kTextColor,
    letterSpacing: size.getWidthSize(0.02),
    fontFamily: "Outfit-Medium",
    textAlign: "center",
    marginBottom: size.getHeightSize(46),
    marginTop: size.getHeightSize(8),
    paddingVertical: size.getHeightSize(4),
  },
  blockButtonText: {
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    color: appColor.kTextColor,
    letterSpacing: size.getWidthSize(0.02),
    fontFamily: "Outfit-Medium",
    textAlign: "center",
    paddingVertical: size.getHeightSize(12.5),
  },
  blockButton: {
    backgroundColor: appColor.kErrorText,
    marginHorizontal: size.getWidthSize(16),
    borderRadius: 40,
    marginTop: size.getHeightSize(24),
  },
  contentDescription: {
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    color: appColor.kTextColor,
    letterSpacing: size.getWidthSize(0.04),
    fontFamily: "Outfit-SemiBold",
    textAlign: "center",
    marginTop: size.getHeightSize(8),
    marginHorizontal: size.getWidthSize(16),
  },
  contentMessage: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    color: appColor.kTextColor,
    fontFamily: "Outfit-Regular",
    textAlign: "center",
    marginTop: size.getHeightSize(8),
    marginHorizontal: size.getWidthSize(16),
  },
});
