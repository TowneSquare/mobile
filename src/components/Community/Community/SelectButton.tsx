import { Text, Pressable, Dimensions, StyleSheet } from "react-native";
import React, { useState } from "react";
const { height, width } = Dimensions.get("window");
import { useFonts } from "expo-font";
import { appColor, fonts } from "../../../constants";
import { sizes } from "../../../utils";
import { useAppDispatch, useAppSelector } from "../../../controller/hooks";
import {
  addInviteMembers,
  removeInviteMembers,
} from "../../../controller/CommunityController";
import { InviteStatus } from "../../../controller/CommunityController";
const size = new sizes(height, width);
interface Props {
  InviteState: InviteStatus;
  id: Number;
}
const SelectButton = ({ InviteState, id }: Props) => {
  const [select, setSelect] = useState(false);
  const dispatch = useAppDispatch();
  const handleSelect = () => {
    setSelect((previous) => !previous);
    if (select == false) {
      dispatch(addInviteMembers(id));
    }
    if (select == true) {
      dispatch(removeInviteMembers(id));
    }
  };
  return InviteState == InviteStatus.INVITE_PENDING ? (
    <Pressable style={styles.PendingButton}>
      <Text
        style={{
          color: appColor.kWhiteColor,
        }}
      >
        Pending
      </Text>
    </Pressable>
  ) : (
    <Pressable
      onPress={handleSelect}
      style={select ? styles.SelectedButton : styles.SelectButton}
    >
      <Text style={styles.selectText}>{select ? "Selected" : "Select"}</Text>
    </Pressable>
  );
};

export default SelectButton;
const styles = StyleSheet.create({
  SelectButton: {
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(4),
    backgroundColor: appColor.kSecondaryButtonColor,
    borderRadius: 40,
    justifyContent: "center",
    minHeight: size.getHeightSize(34),
  },
  SelectedButton: {
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(4),
    backgroundColor: appColor.kGrayLight3,
    borderRadius: 40,
    justifyContent: "center",
    minHeight: size.getHeightSize(34),
  },
  PendingButton: {
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(4),
    backgroundColor: appColor.kGrayLight3,
    borderRadius: 40,
    justifyContent: "center",
    minHeight: size.getHeightSize(34),
    opacity: 0.5,
  },
  selectText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(20),
    letterSpacing: 0.32,
    fontFamily: "Outfit-Medium",
    textAlign: "center",
  },
});
