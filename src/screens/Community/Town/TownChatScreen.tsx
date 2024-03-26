import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import ChatTab from '../../../components/Community/Town/ChatTab';
import ChatAboutTab from '../../../components/Community/Town/ChatAboutTab';
import { SafeAreaView } from 'react-native-safe-area-context';
import { sizes } from '../../../utils';
import { Avatar } from 'react-native-elements';
import TopTabNavigator from '../../../navigations/InApp/TopTabNavigator';
import { images } from '../../../constants';
import { appColor } from '../../../constants';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

let TabContents = [
  {
    name: 'Chat',
    content: ChatTab,
  },
  {
    name: 'About',
    content: ChatAboutTab,
  },
];

const TownChatScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <View style={styles.header}>
        <AntDesign
          name="arrowleft"
          color={appColor.kWhiteColor}
          size={size.fontSize(24)}
          //   onPress={navigation.goBack}
        />
        <View style={styles.view1}>
          <Avatar
            source={images.siothian}
            size={size.getHeightSize(40)}
            rounded
          />
          <Text style={styles.text1}>CoolSIOths</Text>
        </View>
        <Feather
          name="more-horizontal"
          color={appColor.kWhiteColor}
          size={size.fontSize(24)}
          //   onPress={navigation.goBack}
        />
      </View>
      <TopTabNavigator components={TabContents} fullRadius={false} />
    </SafeAreaView>
  );
};

export default TownChatScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(20),
    backgroundColor: appColor.kgrayDark2,
  },
  headerText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
  },
  view1: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
  },
  text1: {
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Regular',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(24),
  },
});
