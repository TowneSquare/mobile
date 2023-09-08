import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { appColor } from "../../../constants";
import { sizes } from "../../../utils";
import { useFonts } from "expo-font";
import { fonts } from "../../../constants";
import { Switch } from "react-native-switch";

const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);

interface Props {
  title: string;
  description: string;
  warningDescription?:string
}

const CommunityPermissionCard = ({
  title,
  description,
  warningDescription
}: Props) => {
  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
  });
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Switch
          onValueChange={toggleSwitch}
          value={isEnabled}
          activeText=""
          inActiveText=""
          backgroundActive={appColor.kSecondaryButtonColor}
          backgroundInactive={appColor.kgrayDark2}
          circleSize={24}
          switchBorderRadius={24}
        />
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "flex-start",
          width: "85%",
          marginTop: size.getHeightSize(6),
        }}
      >
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.warningDescription}>{warningDescription}</Text>
      </View>
    </View>
  );
};

export default CommunityPermissionCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: size.getHeightSize(3),
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: appColor.kWhiteColor,
    fontSize: size.fontSize(16),
    fontFamily: "Outfit-Medium",
  },
  description: {
    color: appColor.kgrayColor,
    fontSize: size.fontSize(16),
    fontFamily: "Outfit-Regular",
    lineHeight: size.getHeightSize(21),
  },
  warningDescription:{
    color:appColor.warning,
    fontSize: size.fontSize(16),
    fontFamily: "Outfit-Medium",
    lineHeight: size.getHeightSize(21),
  }
});
