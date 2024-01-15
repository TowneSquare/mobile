import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Pressable,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Petra from "../../../assets/images/svg/Petra";
import { updateBottomSheet } from "../../controller/BottomSheetController";
import Pontem from "../../../assets/images/svg/Pontem";
import { useAppDispatch } from "../../controller/hooks";
import { updateToast } from "../../controller/FeedsController";
import Fewcha from "../../../assets/images/svg/Fewcha";
import Rise from "../../../assets/images/svg/Rise";
import Martian from "../../../assets/images/svg/Martian";
import { appColor, images } from "../../constants";
import { StatusBar } from "expo-status-bar";
import CompleteSignUpModal from "../../components/SignUp/CompleteSignUpModal";
import { sizes } from "../../utils";
import { handlWalletConnect } from "../../utils/connectWallet";
import { useState } from "react";
import BackButton from "../../components/SignUp/BackButton";
import LetGoButton from "../../components/SignUp/LetGoButton";
import { ChooseWalletProps } from "../../navigations/NavigationTypes";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
type Wallet = "pontem" | "rise" | "petra";
const ChooseWallet = ({ navigation, route }: ChooseWalletProps) => {
  const [selectedWallet, setSelectedWallet] = useState<Wallet>(undefined);
  const petraWalletConnection = route.params?.response;
  const dispatch = useAppDispatch();
  if (selectedWallet === "petra" && petraWalletConnection === "approved") {
    dispatch(updateBottomSheet(true));
    dispatch(
      updateToast({
        toastType: "success",
        displayToast: true,
        toastMessage: "You have successfully connected your wallet",
      })
    );
  }
  const handleWalletConnect = (wallet: Wallet) => {
    setSelectedWallet(wallet);
    dispatch(updateBottomSheet(true));
  };
  return (
    <>
      <StatusBar style="light" />
      <ImageBackground
        style={styles.bgImage}
        resizeMode="cover"
        source={images.ChooseWallet}
      >
        <View style={styles.view1}>
          <Text style={styles.text1}>Choose your wallet</Text>
          <View
            style={{
              height: size.getHeightSize(108),
            }}
          />
          <LetGoButton navigateTo="DrawerNavigation" />
          <View style={styles.view2}>
            <Pressable
              onPress={() => {
                handleWalletConnect("pontem");
              }}
              style={[styles.wallet, { paddingRight: size.getWidthSize(13) }]}
            >
              <View style={styles.rows}>
                <Pontem />
                <Text style={styles.leadingText}>Pontem</Text>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                color={appColor.kWhiteColor}
                size={size.fontSize(25)}
              />
            </Pressable>
            <Pressable
              onPress={() => {
                handleWalletConnect("rise");
              }}
              style={[styles.wallet, { paddingRight: size.getWidthSize(13) }]}
            >
              <View style={styles.rows}>
                <Rise />
                <Text style={styles.leadingText}>Rise</Text>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                color={appColor.kWhiteColor}
                size={size.fontSize(25)}
              />
            </Pressable>
            <Pressable
              onPress={() => {
                handleWalletConnect("petra");
              }}
              style={[styles.wallet, { paddingRight: size.getWidthSize(13) }]}
            >
              <View style={styles.rows}>
                <Petra />
                <Text style={styles.leadingText}>Petra</Text>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                color={appColor.kWhiteColor}
                size={size.fontSize(25)}
              />
            </Pressable>
            <View
              style={[styles.wallet, { backgroundColor: appColor.kgrayDark2 }]}
            >
              <View style={styles.rows}>
                <Fewcha />
                <Text style={styles.leadingText}>Fewcha</Text>
              </View>
              <Text style={styles.text}>Coming soon</Text>
            </View>
            <View
              style={[styles.wallet, { backgroundColor: appColor.kgrayDark2 }]}
            >
              <View style={[styles.rows]}>
                <Martian />
                <Text style={styles.leadingText}>Martian</Text>
              </View>
              <Text style={styles.text}>Coming soon</Text>
            </View>
          </View>
          <View style={{ flex: 1 }} />
          <View
            style={{
              height: size.getHeightSize(124),
              marginBottom: size.getHeightSize(24),
            }}
          >
            <View style={{ height: size.getHeightSize(48) }} />

            <BackButton onPress={navigation.goBack} marginTop={16} />
          </View>
        </View>

        <CompleteSignUpModal
          signupstate={petraWalletConnection}
          callBack={() => {
            if (petraWalletConnection === "approved") {
              dispatch(
                updateToast({
                  toastType: "success",
                  displayToast: true,
                  toastMessage: "You have successfully signed in!",
                })
              );
              navigation.navigate("SignUp");
            } else {
              handlWalletConnect(selectedWallet);
            }
          }}
          buttonText={
            selectedWallet === "petra" && petraWalletConnection === "approved"
              ? "Sign in and continue"
              : "Connect wallet"
          }
        />
      </ImageBackground>
    </>
  );
};

export default ChooseWallet;
const styles = StyleSheet.create({
  text1: {
    marginTop: size.getHeightSize(72),
    color: appColor.kTextColor,
    fontStyle: "normal",
    fontSize: size.fontSize(32),
    fontFamily: "Outfit-Bold",
    textAlign: "center",
    lineHeight: size.getHeightSize(40),
  },
  wallet: {
    paddingLeft: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(8),
    height: size.getHeightSize(56),
    width: size.getWidthSize(327),
    backgroundColor: appColor.kGrayLight3,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 40,
    alignItems: "center",
    display: "flex",
    paddingRight: size.getWidthSize(23),
  },
  rows: {
    flexDirection: "row",
    alignItems: "center",
  },
  leadingText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: "Outfit-SemiBold",
    textAlign: "center",
    lineHeight: size.getHeightSize(21),
    fontStyle: "normal",
    marginLeft: size.getWidthSize(8),
  },
  text: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    fontFamily: "Outfit-Regular",
    textAlign: "center",
    lineHeight: size.getHeightSize(18),
  },
  bgImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  view1: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    paddingTop: size.getHeightSize(72),
  },
  view2: {
    height: size.getHeightSize(312),
    justifyContent: "space-between",
    width: size.getWidthSize(359),
    alignItems: "center",
  },
});
