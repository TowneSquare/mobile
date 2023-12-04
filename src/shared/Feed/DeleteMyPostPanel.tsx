import { View, Text, Dimensions, Pressable, BackHandler } from "react-native";
import { useRef, useEffect, useMemo, useCallback } from "react";
import { useFonts } from "expo-font";
import { appColor, fonts } from "../../constants";
import { sizes } from "../../utils";
import CustomHandler from "../../components/Feed/CustomHandler";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from "@gorhom/bottom-sheet";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
import Thrash from "../../../assets/images/svg/Thrash";
import { useAppDispatch, useAppSelector } from "../../controller/hooks";
import { updateDeletePostPanel } from "../../controller/FeedsController";
import { deletePost } from "../../controller/UserController";
const DeleteMyPostPanel = () => {
  const dispatch = useAppDispatch();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const deleteModal = useAppSelector(
    (state) => state.FeedsSliceController.DeleteMyPostPanel
  );
  const { token, postId } = useAppSelector((state) => ({
    token: state.USER.didToken,
    postId: state.FeedsSliceController.ReportingModal.postId,
  }));
  useEffect(() => {
    if (deleteModal === false) {
      bottomSheetRef.current?.close();
    }
  }, [deleteModal]);
  const initialSnapPoints = useMemo(() => ["CONTENT_HEIGHT"], []);
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
  useEffect(() => {
    const handleBackButton = () => {
      if (deleteModal === true) {
        closeModal();
        return true;
      } else {
        return false;
      }
    };
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
    };
  }, [deleteModal]);
  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);
  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
    "Outfit-SemiBold": fonts.OUTFIT_SEMIBOLD,
  });
  const closeModal = () => {
    dispatch(updateDeletePostPanel(false));
    bottomSheetRef.current?.close();
  };

  const DeletePost = () => {
    //dispatch(deletePost({postId, token}))
    closeModal()
  }

  return (
    <>
      {!deleteModal ? (
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
          handleComponent={() => <CustomHandler />}
          backdropComponent={renderBackdrop}
        >
          <BottomSheetView onLayout={handleContentLayout}>
            <Thrash
              style={{
                alignSelf: "center",
                marginTop: size.getHeightSize(24),
              }}
            />
            <Text
              style={{
                fontSize: size.fontSize(20),
                lineHeight: size.getHeightSize(24),
                color: appColor.kTextColor,
                letterSpacing: size.getWidthSize(0.04),
                fontFamily: "Outfit-SemiBold",
                textAlign: "center",
                marginTop: size.getHeightSize(8),
                marginHorizontal: size.getWidthSize(16),
              }}
            >
              Are you sure you want to delete your Post?
            </Text>
            <View style={{ flex: 1 }} />
            <Pressable
              onPress={DeletePost}
              style={{
                backgroundColor: appColor.kErrorText,
                marginHorizontal: size.getWidthSize(16),
                borderRadius: 40,
                marginTop: size.getHeightSize(24),
              }}
            >
              <Text
                style={{
                  fontSize: size.fontSize(18),
                  lineHeight: size.getHeightSize(23),
                  color: appColor.kTextColor,
                  letterSpacing: size.getWidthSize(0.02),
                  fontFamily: "Outfit-Medium",
                  textAlign: "center",
                  paddingVertical: size.getHeightSize(12.5),
                }}
              >
                Delete Post
              </Text>
            </Pressable>

            <Text
              onPress={closeModal}
              style={{
                fontSize: size.fontSize(18),
                lineHeight: size.getHeightSize(23),
                color: appColor.kTextColor,
                letterSpacing: size.getWidthSize(0.02),
                fontFamily: "Outfit-Medium",
                textAlign: "center",
                marginBottom: size.getHeightSize(46),
                marginTop: size.getHeightSize(8),
                paddingVertical: size.getHeightSize(4),
              }}
            >
              Cancel
            </Text>
          </BottomSheetView>
        </BottomSheet>
      )}
    </>
  );
};

export default DeleteMyPostPanel;
