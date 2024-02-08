import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
import { appColor } from '../../constants';
import FollowersTab from '../../screens/Profile/FollowersTab';
import FollowingTab from '../../screens/Profile/FollowingTab';
import CommunitiesTab from '../../screens/Profile/CommunitiesTab';
const Tab = createMaterialTopTabNavigator();
const ProfileFollowersTab = () => {
  const renderTabBarLabel = ({ focused, route }) => {
    return (
      <View style={[styles.focused]}>
        <Text style={[focused ? styles.focusedtabText : styles.tabText]}>
          {route.name}
        </Text>
      </View>
    );
  };
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        lazy: true,
        tabBarStyle: {
          backgroundColor: appColor.kgrayDark2,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderWidth: 0,
        },
        tabBarIndicatorStyle: {
          display: 'none',
        },
        tabBarIndicatorContainerStyle: {},
        tabBarLabelStyle: {
          fontSize: size.fontSize(14),
          lineHeight: size.getHeightSize(20),
          fontFamily: 'Outfit-SemiBold',
        },

        tabBarIndicator: () => null,
      })}
      tabBar={({ state, descriptors, navigation }) => (
        <View style={styles.labelContainer}>
          {state.routes.map((route: any, index: number) => {
            const { options } = descriptors[route.key];
            const label = options.tabBarLabel || options.title || route.name;
            const isFocused = state.index === index;
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  backgroundColor: !isFocused
                    ? 'transparent'
                    : appColor.kSecondaryButtonColor,
                  borderRadius: 20,
                  marginTop: size.getHeightSize(4),
                  flex: 1,
                }}
                key={route.key}
                onPress={() => {
                  navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true,
                  });

                  if (!isFocused) {
                    navigation.navigate(route.name);
                  }
                }}
              >
                {renderTabBarLabel({ focused: isFocused, route })}
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    >
      <Tab.Screen name="Followers" component={FollowersTab} />
      <Tab.Screen name="Following" component={FollowingTab} />
      <Tab.Screen name="Communities" component={CommunitiesTab} />
    </Tab.Navigator>
  );
};

export default ProfileFollowersTab;
const styles = StyleSheet.create({
  focusedtabText: {
    color: appColor.kTextColor,
    textAlign: 'center',
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(20),
    fontFamily: 'Outfit-SemiBold',
    justifyContent: 'center',
  },
  tabText: {
    color: appColor.kTextColor,
    textAlign: 'center',
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    fontFamily: 'Outfit-Regular',
    overflow: 'hidden',
  },
  focused: {
    paddingVertical: size.getHeightSize(8),
    justifyContent: 'center',
    borderRadius: 40,
    paddingHorizontal: size.getWidthSize(16),
    minHeight: size.getHeightSize(36),
  },
  labelContainer: {
    flexDirection: 'row',
    backgroundColor: appColor.kgrayDark2,
    borderRadius: 20,
    paddingBottom: size.getHeightSize(4),
    paddingHorizontal: size.getWidthSize(4),
    justifyContent: 'center',
  },
});
