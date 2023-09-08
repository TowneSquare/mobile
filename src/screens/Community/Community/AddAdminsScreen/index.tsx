import React from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { appColor, fonts } from "../../../../constants";
import AntDesign from "@expo/vector-icons/AntDesign";
import { sizes } from "../../../../utils";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import AddAdminsHeader from "../../../../shared/Community/AddAdminsHeader";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);

const AddAdminsScreen = () => {
  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
  });
  const navigation = useNavigation();
  const MEMBERS_COUNT = 1;
  return (
    <SafeAreaView
      style={{
        backgroundColor: appColor.feedBackground,
        flex: 1,
      }}
    >
      <AddAdminsHeader title="Admin" buttonText="Create" enabled={false} />
      <View
        style={{
          paddingHorizontal: size.getWidthSize(20),
          paddingTop: size.getHeightSize(26),
        }}
      >
        <Text
          style={{
            color: appColor.kWhiteColor,
            fontSize: size.fontSize(20),
            fontFamily: "Outfit-Medium",
            lineHeight: size.getHeightSize(24),
          }}
        >
          Role name
        </Text>
      </View>
      <View style={[styles.container]}>
        <TextInput
          cursorColor={appColor.primaryLight}
          placeholderTextColor={appColor.kGrayLight3}
          style={[styles.textInput]}
        />
      </View>
      <Pressable
        style={{
          paddingHorizontal: size.getWidthSize(22),
          paddingTop: size.getHeightSize(26),
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onPress={() => {
          navigation.navigate("PermissionsScreen");
        }}
      >
        <Text
          style={{
            color: appColor.kWhiteColor,
            fontSize: size.fontSize(16),
            fontFamily: "Outfit-Medium",
            lineHeight: size.getHeightSize(21),
          }}
        >
          Permissions
        </Text>
        <AntDesign
          name="right"
          color={appColor.kWhiteColor}
          size={size.fontSize(16)}
        />
      </Pressable>
      <View style={styles.lineStyle}></View>
      <View
        style={{
          paddingHorizontal: size.getWidthSize(20),
          paddingTop: size.getHeightSize(26),
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: appColor.kTextColor,
            fontSize: size.fontSize(16),
            fontFamily: "Outfit-Regular",
          }}
        >{`MEMBERS (${MEMBERS_COUNT})`}</Text>
        <Pressable
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign
            name="plus"
            color={appColor.primaryLight}
            size={size.fontSize(24)}
            style={{
              marginRight: size.getHeightSize(8)
            }}
          />
          <Text
            style={{
              color: appColor.primaryLight,
              fontSize: size.fontSize(18),
              fontFamily: "Outfit-Regular",
            }}
          >
            Add members
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default AddAdminsScreen;
const styles = StyleSheet.create({
  container: {
    borderRadius: 40,
    borderWidth: 1,
    width: size.getWidthSize(328),
    alignSelf: "center",
    borderColor: appColor.kGrayscale,
    marginTop: size.getHeightSize(16),
    paddingHorizontal: size.getWidthSize(16),
    flexDirection: "row",
    alignItems: "center",
    gap: size.getWidthSize(8),
    backgroundColor: appColor.kGrayscaleDart,
  },
  textInput: {
    lineHeight: size.getHeightSize(24),
    fontSize: size.fontSize(16),
    fontFamily: "Outfit-Regular",
    color: appColor.kTextColor,
    flex: 1,
    paddingVertical: size.getHeightSize(12),
    height: size.getHeightSize(48),
  },
  lineStyle: {
    borderColor: appColor.kGrayLight3,
    borderWidth: size.getWidthSize(1),
    marginTop: size.getHeightSize(24),
  },
});
