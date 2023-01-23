import { Dimensions } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { store } from "./Components/Redux/store";
import { Provider } from "react-redux";
import Navigations from "./navigation/Navigations";
import sizeConfig from "./constants/sizeConfig";

export const SizeConfig = new sizeConfig(
  Dimensions.get("window").height,
  Dimensions.get("window").width
);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <TailwindProvider>
            <Navigations />
          </TailwindProvider>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
