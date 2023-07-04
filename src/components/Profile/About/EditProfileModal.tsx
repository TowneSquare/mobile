import React, { useRef, useMemo, useCallback } from "react";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import {
  Platform,
  Pressable,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import CustomHandler from "../../Feed/CustomHandler";
import { appColor } from "../../../constants";
import { sizes } from "../../../utils";
import { useAppSelector, useAppDispatch } from "../../../controller/hooks";
import { updateEditProfile } from "../../../controller/UserController";
import EditProfilePen from "../../../../assets/images/svg/EditProfile";
import GetVerifiedBadge from "../../../../assets/images/svg/GetVerifiedBadge";
import { EditProfileProps } from "../../../navigations/NavigationTypes";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
const EditProfileModal = () => {
  const dispatch = useAppDispatch();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const navigation = useNavigation();
  const EDIT_PROFILE = useAppSelector((state) => state.USER.editProfile);

  const closeModal = () => {
    bottomSheetRef.current?.close();
    dispatch(updateEditProfile(false));
  };

  const handleSheetChanges = useCallback((index: number) => {}, []);
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
  return (
    <BottomSheet
      onClose={closeModal}
      ref={bottomSheetRef}
      enablePanDownToClose={true}
      snapPoints={[Platform.OS === "ios" ? "30%" : "20%"]}
      handleComponent={CustomHandler}
      backdropComponent={renderBackdrop}
      index={EDIT_PROFILE ? 0 : -1}
      backgroundStyle={{
        backgroundColor: appColor.kgrayDark2,
      }}
      onChange={handleSheetChanges}
    >
      <Pressable
        style={styles.container}
        onPress={() => {
          navigation.navigate("EditProfile");
        }}
      >
        <EditProfilePen />
        <Text style={styles.text}>Edit Profile</Text>
      </Pressable>
      <Pressable style={styles.container}>
        <GetVerifiedBadge />
        <Text style={styles.text}>Get Verified</Text>
      </Pressable>
    </BottomSheet>
  );
};

export default EditProfileModal;
const styles = StyleSheet.create({
  container: {
    marginTop: size.heightSize(36),
    flexDirection: "row",
    gap: size.getWidthSize(8),
    paddingLeft: size.getWidthSize(16),
    alignItems: "center",
  },
  text: {
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    color: appColor.kTextColor,
    letterSpacing: size.getWidthSize(0.02),
    fontFamily: "Outfit-Medium",
  },
});
