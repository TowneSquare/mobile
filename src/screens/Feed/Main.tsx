import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
import { appColor, fonts } from '../../constants';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import More from '../../images/svg/More';
import BarCode from '../../images/svg/Barcode';
import Bell from '../../images/svg/Bell';
import Feather from '@expo/vector-icons/Feather';
import { useFonts } from 'expo-font';
import { FeedContent, UserPost, UserCommunityPost } from '../../models';
import ForYou from '../../components/Feed/ForYou';
import Community from '../../components/Feed/Community';
import { UserPosts, CommunityPost } from '../../components/Feed/DuumyData';
const size = new sizes(height, width);
const Main = () => {
  const [view, setSwitchView] = useState<boolean>(false);
  const handleView = () => {
    setSwitchView(!view);
  };
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <StatusBar style="light" backgroundColor={appColor.kgrayDark2} />
      <View style={styles.Header}>
        <View style={styles.Navigation}>
          <More />
          <Text style={styles.title}>TowneSquare</Text>
          <Feather
            name="search"
            color={appColor.kWhiteColor}
            size={size.fontSize(24)}
          />
          <Bell />
          <BarCode />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: size.getWidthSize(4),
          }}
        >
          <Pressable
            onPress={handleView}
            style={view ? styles.focusedTab : styles.tab}
          >
            <Text style={view ? styles.focusedtabText : styles.tabText}>
              For you
            </Text>
          </Pressable>
          <Pressable
            onPress={handleView}
            style={!view ? styles.focusedTab : styles.tab}
          >
            <Text style={!view ? styles.focusedtabText : styles.tabText}>
              Community
            </Text>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        {view ? (
          <FlatList
            data={UserPosts}
            renderItem={({ item }) => <ForYou data={item} />}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <FlatList
            data={CommunityPost}
            renderItem={({ item }) => <Community data={item} />}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Main;
const styles = StyleSheet.create({
  Header: {
    height: size.heightSize(130),
    width: '100%',
    backgroundColor: appColor.kgrayDark2,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: size.getHeightSize(42) - Constants.statusBarHeight,
  },
  Navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: size.getWidthSize(16),
    flex: 1,
  },
  title: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-Regular',
    letterSpacing: 0.04,
    width: size.getWidthSize(152),
  },
  focusedTab: {
    backgroundColor: appColor.kSecondaryButtonColor,
    flex: 1,
    paddingVertical: size.getHeightSize(8),
    justifyContent: 'center',
    marginHorizontal: size.getWidthSize(4),
    borderRadius: 40,
    height: size.getHeightSize(36),
  },
  focusedtabText: {
    color: appColor.kTextColor,
    textAlign: 'center',
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(20),
    fontFamily: 'Outfit-SemiBold',
  },
  tabText: {
    color: appColor.kTextColor,
    textAlign: 'center',
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    fontFamily: 'Outfit-Regular',
  },
  tab: {
    backgroundColor: 'transparent',
    flex: 1,
    paddingVertical: size.getHeightSize(8),
    justifyContent: 'center',
    paddingHorizontal: size.getWidthSize(4),
    borderRadius: 40,
  },
});
