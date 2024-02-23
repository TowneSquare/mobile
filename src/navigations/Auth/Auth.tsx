import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { Easing, Animated } from 'react-native';
import { RootStackParamList } from './../NavigationTypes';
import SignUp from '../../screens/SignUp/SignUp';
import FirstScreen from '../../screens/SignUp/FirstScreen';
import EmailLogin from '../../screens/SignUp/EmailLogin';
import ChooseWallet from '../../screens/SignUp/ChooseWallet';
import Congratulations from '../../screens/SignUp/Congratulations';
const AuthNavigation = ({ screenProps }: { screenProps: any }) => {
  const Stack = createStackNavigator<RootStackParamList>();
  const magicProps: any = {
    magic: screenProps,
  };
  const config = {
    animation: Animated.timing,
    config: {
      duration: 200,
      easing: Easing.linear,
      // Placeholder value; adjust according to your needs
    },
  };

  const closeconfig = {
    animation: 'timing',
    config: {
      duration: 200,
      easing: Easing.linear,
    },
  };
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        transitionSpec: {
          open: config as any,
          close: closeconfig as any,
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="FirstScreen" options={{ headerShown: false }}>
        {() => <FirstScreen {...magicProps} />}
      </Stack.Screen>
      <Stack.Screen
        name="ChooseWallet"
        component={ChooseWallet}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="SignUp" options={{ headerShown: false }}>
        {() => <SignUp {...magicProps} />}
      </Stack.Screen>

      <Stack.Screen name="EmailLogin" options={{ headerShown: false }}>
        {() => <EmailLogin {...magicProps} />}
      </Stack.Screen>
      <Stack.Screen
        name="Congratulations"
        component={Congratulations}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
