import {
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  StyleSheet,
  Pressable,
  ImageSourcePropType,
  ScrollView,
} from 'react-native';
import React, { ReactNode, useState, useEffect } from 'react';
import { appColor, fonts, images } from '../constants';
import { StatusBar } from 'expo-status-bar';
import Community from '../images/svg/Community';
import Community1 from '../images/svg/Community1';
import Community2 from '../images/svg/Community2';
import Community3 from '../images/svg/Community3';
import Community4 from '../images/svg/Community4';
import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';
const { height, width } = Dimensions.get('window');
import { sizes } from '../utils';
import ContinueButton from '../components/ContinueButton';
import BackButton from '../components/BackButton';
import ProfileSetUpHeader from '../components/ProfileSetUpHeader';
const size = new sizes(height, width);
interface Communities {
  image: ReactNode;
  name: string;
  message?: string;
}
const ExploreCommunities = () => {
  const Communities: Array<Communities> = [
    {
      image: <Community1 />,
      name: 'Aptomingos',
      message: 'You have their NFT!',
    },
    {
      image: <Community2 />,
      name: 'Bruh Bears',
      message: 'You have their NFT!',
    },
    {
      image: <Community3 />,
      name: 'Pontem Space Pirates from Siberia',
      message: 'You have their NFT!',
    },
    {
      image: <Community4 />,
      name: 'Aptos Monkey',
    },
  ];
  const [communities, setCommunities] = useState<Communities[]>([]);
  const [disableOnPress, setOnPress] = useState(false);
  useEffect(() => {
    if (communities.length > 0) {
      setOnPress(false);
    } else setOnPress(true);
  }, [communities]);
  let [isLoaded] = useFonts({
    'Urbanist-Bold': fonts.EXTRABOLD,
    UrbanistSemiBold: fonts.SEMIBOLD,
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
  });
  if (!isLoaded) {
    return null;
  }
  const addCommunity = (community: Communities) => {
    const follows = [...communities, community];
    setCommunities(follows);
  };
  const removeCommunity = (communityToRemove: Communities) => {
    const filteredCommunity = communities.filter(
      (follower) => follower.name !== communityToRemove.name
    );
    setCommunities(filteredCommunity);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.kDisabledColor,
      }}
    >
      <StatusBar style="light" backgroundColor={appColor.kDisabledColor} />
      <ProfileSetUpHeader
        SvgImage={<Community />}
        stepDescription="Choose PFP"
        title="Explore Communities"
        sub_title="Here are some communities you might be interested in"
        steps={5}
      />
      <View
        style={{
          width: size.sWidth(0.9),
          marginTop: size.vMargin(40),
          alignSelf: 'center',
          flex: 1,
          marginBottom: size.vMargin(40),
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            width: size.sWidth(0.9),
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: size.vMargin(40),
          }}
        >
          <Text
            style={{
              fontSize: size.fontSize(19),
              fontFamily: 'Outfit-Medium',
              textAlign: 'center',
              color: appColor.kTextColor,
            }}
          >
            Suggested Communities
          </Text>
          <Text
            style={{
              fontSize: size.fontSize(19),
              fontFamily: 'Outfit-Medium',
              textAlign: 'center',
              color: appColor.kSecondaryButtonColor,
            }}
          >
            Join all
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          {/* ScrollView */}
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                justifyContent: 'space-between',
                height: 300,
              }}
            >
              {Communities.map((Community) => (
                <View
                  style={{
                    flexDirection: 'row',
                    width: size.sWidth(0.9),
                    alignItems: 'center',
                  }}
                >
                 {Community.image}
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                    }}
                  >
                    <Text style={styles.username}>{Community.name}</Text>
                    {Community.message && (
                      <Text style={styles.message}>{Community.message}</Text>
                    )}
                  </View>
                  {communities.some(
                    (myCommuinty) => myCommuinty.name === Community.name
                  ) ? (
                    <Pressable
                      onPress={() => removeCommunity(Community)}
                      style={styles.myCommunityButton}
                    >
                      <Text style={styles.buttonText}>JOINED</Text>
                    </Pressable>
                  ) : (
                    <Pressable
                      onPress={() => addCommunity(Community)}
                      style={styles.button}
                    >
                      <Text style={styles.buttonText}>JOIN</Text>
                    </Pressable>
                  )}
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
      <View
        style={{
          alignSelf: 'baseline',
          alignItems: 'center',
          width: '100%',
          height: 150,
        }}
      >
        <ContinueButton
          disabled={disableOnPress}
          navigateTo="ChooseProfilePics"
          marginTop={2}
        />
        <BackButton marginTop={50} />
      </View>
    </SafeAreaView>
  );
};

export default ExploreCommunities;
const styles = StyleSheet.create({
  button: {
    backgroundColor: appColor.kSecondaryButtonColor,
    borderRadius: 20,
    paddingHorizontal: size.hMargin(50),
    paddingVertical: size.vMargin(10),
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: size.fontSize(19),
    fontFamily: 'Outfit-Medium',
    textAlign: 'center',
    color: appColor.kTextColor,
  },
  username: {
    fontSize: size.fontSize(19),
    fontFamily: 'Outfit-Medium',
    paddingLeft: size.hMargin(50),
    color: appColor.kTextColor,
  },
  message: {
    fontSize: size.fontSize(19),
    fontFamily: 'Outfit-Medium',
    paddingLeft: size.hMargin(50),
    color: appColor.kgrayColor,
  },
  myCommunityButton: {
    backgroundColor: appColor.kSecondaryColor,
    borderRadius: 20,
    paddingHorizontal: size.hMargin(50),
    paddingVertical: size.vMargin(10),
    justifyContent: 'center',
  },
});
