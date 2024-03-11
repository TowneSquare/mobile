import { StackActions } from "@react-navigation/native";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TransitionView from "../../../components/Community/CreateCommunity/TransitionView";
import { appColor } from "../../../constants";
import SetUpCommunityContext from "../../../context/SetUpCommunityContext";
import { CommunitySetupScreenProps } from "../../../navigations/NavigationTypes";
import { sizes } from "../../../utils";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
const CommunitySetupScreen = ({ navigation }: CommunitySetupScreenProps) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <View style={styles.header}>
        <Text
          onPress={() => navigation.dispatch(StackActions.pop(2))}
          style={[styles.headerText, { color: appColor.primaryLight }]}
        >
          Cancel
        </Text>
        <Text style={styles.headerText}>Create community</Text>
        <Text style={[styles.headerText, { color: appColor.kgrayDark2 }]}>
          Cancel
        </Text>
      </View>
      <SetUpCommunityContext>
        <TransitionView />
      </SetUpCommunityContext>
    </SafeAreaView>
  );
};

export default CommunitySetupScreen;
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

    paddingVertical: size.getHeightSize(12.5),
    marginBottom: size.getHeightSize(8),
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
