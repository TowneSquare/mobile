import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import InitializeSocket from "./src/utils/InitializeSocket";
import { NavigationContainer } from "@react-navigation/native";
import Navigations from "./src/navigations/Navigations";
import { Provider } from "react-redux";
import { store } from "./src/controller/store";
import { Magic } from "@magic-sdk/react-native-expo";
import { API_KEY } from "./config/env";
import { OAuthExtension } from "@magic-ext/react-native-expo-oauth";
import { AptosExtension } from "@magic-ext/aptos";
import { APTOS_NODE_URL } from "./constants";
import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";
import ToastWrapper from "./src/shared/Feed/OverlayWrapper";
import { RootStackParamList } from "./src/navigations/NavigationTypes";
import CreateChannelBottomSheet from "./src/components/DrawerContent/CreateChannelBottomSheet";
import SelectUsersBottomsheet from "./src/components/ProfileSendToken/SelectUsersBottomsheet";
import LogoutBottomsheet from "./src/components/Feed/LogoutBottomsheet";
const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      FirstScreen: "FirstScreen",
      ChooseWallet: "ChooseWallet",
      SignUp: "SignUp",
      EmailLogin: "EmailLogin",
      Congratulations: "*",
    },
  },
};

export default function App() {
  const magic = new Magic(API_KEY, {
    extensions: [
      new OAuthExtension(),
      new AptosExtension({
        nodeUrl: APTOS_NODE_URL,
      }),
    ],
  });
  const magicProps = {
    magic,
  };

  return (
    <GestureHandlerRootView style={styles.gestureHandler}>
      <Provider store={store}>
        <magic.Relayer />
        <NavigationContainer linking={linking}>
          <Navigations magicProps={magicProps} />
          <CreateChannelBottomSheet />
          <SelectUsersBottomsheet />
          <LogoutBottomsheet />
        </NavigationContainer>
        <ToastWrapper />
        <InitializeSocket />
        {/* <View style={styles.overlay} /> */}
      </Provider>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  gestureHandler: {
    flex: 1,
  },
});
