import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Posts from '../screens/SearchPost/Posts';
import ForYouTab from '../screens/SearchPost/ForYouTab';
import PeopleTab from '../screens/SearchPost/PeopleTab';
import CommuintiesTab from '../screens/SearchPost/CommuintiesTab';
import { sizes } from '../utils';
const { height, width } = Dimensions.get('window');
import { useAppSelector } from '../controller/hooks';
const size = new sizes(height, width);
import { appColor, fonts } from '../constants';
import Constants from 'expo-constants';
const Tab = createMaterialTopTabNavigator();

const SearchPostTab = () => {
  const isSearchFieldFocused = useAppSelector(
    (state) => state.SearchPostController.searchFocus
  );
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
      {isSearchFieldFocused !== 'hide_for_you_tab' && (
        <Tab.Screen options={{}} name="For you" component={ForYouTab} />
      )}
      <Tab.Screen name="Posts" component={Posts} />
      <Tab.Screen name="People" component={PeopleTab} />
      <Tab.Screen name="Communities" component={CommuintiesTab} />
    </Tab.Navigator>
  );
};
export default SearchPostTab;

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
  },
  labelContainer: {
    flexDirection: 'row',
    backgroundColor: appColor.kgrayDark2,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: 'space-around',
    paddingBottom: size.getHeightSize(4),
  },
});
