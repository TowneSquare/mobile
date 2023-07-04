import React, { useRef, useState, useCallback } from "react";
import {
  SafeAreaView,
  Pressable,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  TextInput,
  ScrollView,
  Platform,
} from "react-native";
import { useAppDispatch, useAppSelector } from "../../../controller/hooks";
import {
  updateUploadModalRenderCount,
  updateUploadImageModalOpen,
} from "../../../controller/BottomSheetController";
import { sizes } from "../../../utils";
import { EditProfileProps } from "../../../navigations/NavigationTypes";
import { appColor } from "../../../constants";
import { Entypo } from "@expo/vector-icons";
import Info from "../../../../assets/images/svg/Info";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import CustomHandler from "../../Feed/CustomHandler";

const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
const EditProfile = ({ navigation }: EditProfileProps) => {
  const dispatch = useAppDispatch();
  const [showDisplayBottomSheet, setShowDisplayBottomSheet] =
    useState<boolean>(false);
  const [showUsernameBottomSheet, setShowUsernameBottomSheet] =
    useState<boolean>(false);
  const profilePics = useAppSelector(
    (state) => state.USER.details.profileImage
  );
  const uploadImageModal = useAppSelector(
    (state) => state.bottomSheetController.uploadImageModalOpen
  );
  const NftModal = useAppSelector(
    (state) => state.bottomSheetController.NftModalOpen
  );
  const selectedCollectionModal = useAppSelector(
    (state) => state.bottomSheetController.selectedCollectionModal
  );
  const bottomSheetRef = useRef<BottomSheet>(null);
  const onCloseDisplayBottomSheet = () => {
    setShowDisplayBottomSheet(false);
  };
  const onCloseUsernameBottomSheet = () => {
    setShowUsernameBottomSheet(false);
  };

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
  const DisplayNameBottomSheet = () => {
    return (
      <BottomSheet
        onClose={onCloseDisplayBottomSheet}
        ref={bottomSheetRef}
        enablePanDownToClose={true}
        snapPoints={[Platform.OS === "ios" ? "25%" : "25%"]}
        index={showDisplayBottomSheet ? 0 : -1}
        handleComponent={CustomHandler}
        backdropComponent={renderBackdrop}
        backgroundStyle={{
          backgroundColor: appColor.kgrayDark2,
        }}
      >
        <View>
          <Text
            style={{
              color: appColor.kTextColor,
              fontFamily: "Outfit-Bold",
              textAlign: "center",
              marginTop: 20,
              fontSize: size.fontSize(19),
            }}
          >
            Display Name
          </Text>
          <Text
            style={{
              color: appColor.kTextColor,
              fontFamily: "Outfit-Regular",
              textAlign: "left",
              fontSize: size.fontSize(17),
              marginHorizontal: 20,
            }}
          >
            A Display Name is how you want to be known in the community. It can
            be different from you real name.
          </Text>
        </View>
      </BottomSheet>
    );
  };
  const UserNameBottomSheet = () => {
    return (
      <BottomSheet
        onClose={onCloseUsernameBottomSheet}
        ref={bottomSheetRef}
        enablePanDownToClose={true}
        snapPoints={[Platform.OS === "ios" ? "25%" : "25%"]}
        index={showUsernameBottomSheet ? 0 : -1}
        handleComponent={CustomHandler}
        backdropComponent={renderBackdrop}
        backgroundStyle={{
          backgroundColor: appColor.kgrayDark2,
        }}
      >
        <View>
          <Text
            style={{
              color: appColor.kTextColor,
              fontFamily: "Outfit-Bold",
              textAlign: "center",
              marginTop: 20,
              fontSize: size.fontSize(19),
            }}
          >
            Username
          </Text>
          <Text
            style={{
              color: appColor.kTextColor,
              fontFamily: "Outfit-Regular",
              textAlign: "left",
              fontSize: size.fontSize(17),
              marginHorizontal: 20,
            }}
          >
            A Username is a name unique to you, and it is how the community can
            reference you specifically in their conversation
          </Text>
        </View>
      </BottomSheet>
    );
  };
  return (
    <SafeAreaView style={{ backgroundColor: appColor.feedBackground, flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          {profilePics ? (
            <View>
              <Pressable
                style={styles.imageContainer}
                onPress={() => {
                  dispatch(updateUploadModalRenderCount(1));
                  dispatch(updateUploadImageModalOpen(true));
                }}
              >
                <Image
                  style={styles.image}
                  source={{ uri: profilePics }}
                  resizeMode="contain"
                />
              </Pressable>
            </View>
          ) : (
            <Pressable
              onPress={() => {
                dispatch(updateUploadModalRenderCount(1));
                dispatch(updateUploadImageModalOpen(true));
              }}
              style={{
                height: size.getHeightAndWidth(140),
                width: size.getHeightAndWidth(140),
                alignItems: "center",
                backgroundColor:
                  uploadImageModal || NftModal || selectedCollectionModal
                    ? appColor.kGrayscaleWithOPacity
                    : appColor.kGrayLight3,
                alignSelf: "center",
                borderRadius: 200,
                borderWidth: 3,
                borderColor:
                  uploadImageModal || NftModal || selectedCollectionModal
                    ? appColor.kWhiteColorWithOpacity
                    : appColor.kWhiteColor,
                justifyContent: "center",
              }}
            >
              <Entypo
                name="plus"
                color={
                  uploadImageModal || NftModal || selectedCollectionModal
                    ? appColor.kWhiteColorWithOpacity
                    : appColor.kWhiteColor
                }
                size={size.fontSize(30)}
              />
            </Pressable>
          )}
        </View>
        <View>
          <Text
            style={{
              color: appColor.kSecondaryButtonColor,
              fontFamily: "Outfit-Bold",
              textAlign: "center",
              fontSize: size.fontSize(16),
            }}
          >
            Remove PFP
          </Text>
        </View>
        <View style={{ marginTop: 15 }}>
          <View style={{ flexDirection: "row", marginLeft: 15 }}>
            <Text
              style={{
                color: appColor.kTextColor,
                fontFamily: "Outfit-Regular",
                fontSize: size.fontSize(17),
                marginRight: 10,
              }}
            >
              Display name
            </Text>
            <Pressable
              onPress={() => {
                setShowDisplayBottomSheet(true);
              }}
            >
              <Info />
            </Pressable>
          </View>
          <TextInput style={styles.input} cursorColor={"white"} />
        </View>
        <View style={{ marginTop: 15 }}>
          <View style={{ flexDirection: "row", marginLeft: 15 }}>
            <Text
              style={{
                color: appColor.kTextColor,
                fontFamily: "Outfit-Regular",
                fontSize: size.fontSize(17),
                marginRight: 10,
              }}
            >
              Username
            </Text>
            <Pressable
              onPress={() => {
                setShowUsernameBottomSheet(true);
              }}
            >
              <Info />
            </Pressable>
          </View>
          <TextInput style={styles.input} cursorColor={"white"} />
        </View>
        <View style={{ marginTop: 15 }}>
          <View style={{ flexDirection: "row", marginLeft: 15 }}>
            <Text
              style={{
                color: appColor.kTextColor,
                fontFamily: "Outfit-Regular",
                fontSize: size.fontSize(17),
                marginRight: 10,
              }}
            >
              Bio
            </Text>
          </View>
          <TextInput
            editable
            multiline={true}
            numberOfLines={4}
            maxLength={100}
            textAlignVertical="top"
            style={styles.multilineInput}
            cursorColor={"white"}
          />
        </View>

        <View>
          <Pressable style={styles.btn}>
            <Text
              style={{
                color: appColor.kTextColor,
                fontFamily: "Outfit-Bold",
                textAlign: "center",
              }}
            >
              Save
            </Text>
          </Pressable>
        </View>
      </ScrollView>
      <DisplayNameBottomSheet />
      <UserNameBottomSheet />
    </SafeAreaView>
  );
};

export default EditProfile;
const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginBottom: 25,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  imageContainer: {
    height: size.getHeightAndWidth(140),
    width: size.getHeightAndWidth(140),
    borderRadius: 200,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    borderRadius: 40,
    color: "white",
    fontFamily: "Outfit-Bold",
  },
  multilineInput: {
    margin: 10,
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    borderRadius: 25,
    color: "white",
    fontFamily: "Outfit-Regular",
  },
  btn: {
    padding: 15,
    backgroundColor: appColor.kSecondaryButtonColor,
    marginHorizontal: 15,
    margin: 10,
    borderRadius: 40,
  },
});
