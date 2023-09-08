import React from "react";
import { View, Dimensions, StyleSheet, Text, Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { appColor } from "../../constants";
import { sizes } from "../../utils";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);

interface Props {
  title: string;
  buttonText: string;
  enabled: boolean;
}

const AddAdminsHeader = ({ title, buttonText, enabled }: Props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <AntDesign
        name="arrowleft"
        color={appColor.kWhiteColor}
        size={size.fontSize(24)}
        onPress={navigation.goBack}
      />
      <Text style={styles.title}>{title}</Text>
      <Pressable>
        <Text
          style={{
            fontSize: size.fontSize(16),
            fontFamily: "Outfit-Regular",
            textAlign: "center",
            color:appColor.primaryLight,
            opacity: enabled ? 1 : 0.5
          }}
        >
          {buttonText}
        </Text>
      </Pressable>
    </View>
  );
};

export default AddAdminsHeader;

const styles = StyleSheet.create({
  title: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: "Outfit-Regular",
    textAlign: "center",
  },
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingVertical: size.getHeightSize(20),
    paddingHorizontal: size.getWidthSize(16),
    backgroundColor: appColor.kgrayDark2,
    justifyContent: "space-between",
  },
});
