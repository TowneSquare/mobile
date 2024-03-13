import React from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IntroView from "../../../components/Community/CreateCommunity/IntroView";
import { appColor } from "../../../constants";
import { CreateCommunityScreenProps } from "../../../navigations/NavigationTypes";
import { sizes } from "../../../utils";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
const CreateCommunityScreen = ({ navigation }: CreateCommunityScreenProps) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <View style={styles.header}>
        <Text
          onPress={navigation.goBack}
          style={[styles.headerText, { color: appColor.primaryLight }]}
        >
          Cancel
        </Text>
        <Text style={styles.headerText}>Create community</Text>
        <Text style={[styles.headerText, { color: appColor.kgrayDark2 }]}>
          Cancel
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignSelf: "center",
          width: size.getWidthSize(328),
        }}
      >
        <IntroView />
      </View>
      <View>
        <Pressable
          onPress={() => navigation.navigate("CommunitySetupScreen")}
          style={styles.continueButton}
        >
          <Text style={styles.continueText}>Continue</Text>
        </Pressable>
        {/* <View style={styles.backButton}>
          <Text style={styles.backText}>Back</Text>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default CreateCommunityScreen;
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: appColor.kgrayDark2,
    paddingVertical: size.getHeightSize(15),
    height: size.getHeightSize(64),
    paddingHorizontal: size.getWidthSize(16),
  },
  headerText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: "Outfit-Regular",
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
    textAlign: "center",
  },
  continueButton: {
    backgroundColor: appColor.kWhiteColor,
    alignSelf: "center",
    width: size.getWidthSize(328),
    borderRadius: 40,
    minHeight: size.getHeightSize(48),
    justifyContent: "center",
    marginTop: size.getHeightSize(8),
    paddingVertical: size.getHeightSize(12.5),
    marginBottom: size.getHeightSize(32),
  },
  continueText: {
    textAlign: "center",
    color: appColor.kButtonTextColor,
    fontSize: size.fontSize(18),
    fontFamily: "Outfit-Medium",
    fontStyle: "normal",
    lineHeight: size.getHeightSize(23),
    letterSpacing: 0.02,
  },
  backButton: {
    alignSelf: "center",
    width: size.getWidthSize(328),
    borderRadius: 40,
    minHeight: size.getHeightSize(48),
    justifyContent: "center",
    marginTop: size.getHeightSize(8),
    marginBottom: size.getHeightSize(16),
    paddingVertical: size.getHeightSize(12.5),
  },
  backText: {
    fontStyle: "normal",
    textAlign: "center",
    color: appColor.kTextColor,
    fontSize: size.fontSize(18),
    fontFamily: "Outfit-Medium",

    lineHeight: size.getHeightSize(23),
    letterSpacing: 0.02,
  },
});
