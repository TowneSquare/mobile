import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Posts from '../components/Search/Posts';
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

        tabBarIndicatorContainerStyle: {},
        tabBarLabel: ({ focused }) => (
          <View
            style={{
              backgroundColor: focused
                ? appColor.kSecondaryButtonColor
                : 'transparent',
              paddingVertical: size.getHeightSize(8),
              justifyContent: 'center',
              borderRadius: 40,
              width: size.getWidthSize(80),
            }}
          >
            <Text style={focused ? styles.focusedtabText : styles.tabText}>
              {route.name}
            </Text>
          </View>
        ),
        tabBarIndicator: () => null,
      })}
    >
      {isSearchFieldFocused !== 'hide_for_you_tab' && (
        <Tab.Screen options={{}} name="For you" component={ForYouTab} />
      )}
      <Tab.Screen name="People" component={PeopleTab} />
      <Tab.Screen name="Communities" component={CommuintiesTab} />
      <Tab.Screen name="Posts" component={Posts} />
    </Tab.Navigator>
  );
};
export default SearchPostTab;

const styles = StyleSheet.create({
  Header: {
    height: size.heightSize(140),
    width: '100%',
    backgroundColor: appColor.kgrayDark2,
    paddingTop: size.getHeightSize(65) - Constants.statusBarHeight,
  },
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
  searchfield: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
    marginHorizontal: size.getWidthSize(16),
    backgroundColor: appColor.kgrayDark2,
  },
});
