import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { sizes } from '../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
import { appColor, fonts } from '../constants';

type Component = {
  name: string;
  content: React.FC<JSX.Element>;
};
interface Props {
  components: Component[];
  fullRadius: boolean;
}
const Tab = createMaterialTopTabNavigator();
const TopTabNavigator = ({ components, fullRadius }: Props) => {
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
          borderTopLeftRadius: fullRadius ? 20 : 0,
          borderTopRightRadius: fullRadius ? 20 : 0,
          borderWidth: 0,
          width: '100%',
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
        <View style={fullRadius ? styles.fullRadius : styles.labelContainer}>
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
                  marginHorizontal: size.getWidthSize(4),
                  minHeight: size.getHeightSize(36),
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
      {components.map((comp, index: number) => {
        return (
          <Tab.Screen key={index} name={comp.name} component={comp.content} />
        );
      })}
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
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
    paddingVertical: size.getHeightSize(9),
    justifyContent: 'center',
    borderRadius: 40,
    paddingHorizontal: size.getWidthSize(16),
  },
  labelContainer: {
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingBottom: size.getHeightSize(4),
    marginHorizontal: size.getWidthSize(8),
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: appColor.kgrayDark2,
  },
  fullRadius: {
    flexDirection: 'row',
    backgroundColor: appColor.kgrayDark2,
    borderRadius: 20,
    paddingBottom: size.getHeightSize(4),
    marginHorizontal: size.getWidthSize(8),
    width: '100%',
    alignSelf: 'center',
  },
});
