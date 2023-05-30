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
import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';
const { height, width } = Dimensions.get('window');
import { sizes } from '../utils';
import Verified from '../images/svg/Verified';
import ContinueButton from '../components/ContinueButton';
import BackButton from '../components/BackButton';
import ProfileSetUpHeader from '../components/ProfileSetUpHeader';
import PolygonImage from '../images/svg/PolygonImage';
import Checked from '../images/svg/Checked';
const size = new sizes(height, width);
interface Communities {
  image: ReactNode;
  name: string;
  message?: string;
}
const ExploreCommunities = () => {
  const Communities: Array<Communities> = [
    {
      image: <PolygonImage />,
      name: 'Aptomingos',
      message: 'You have their NFT!',
    },
    {
      image: <PolygonImage />,
      name: 'Bruh Bears',
      message: 'You have their NFT!',
    },
    {
      image: <PolygonImage />,
      name: 'Pontem Space Pirates from Siberia',
      message: 'You have their NFT!',
    },
    {
      image: <PolygonImage />,
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
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
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
        backgroundColor: appColor.signUpBackground,
      }}
    >
      <StatusBar style="light" backgroundColor={appColor.signUpBackground} />
      <ProfileSetUpHeader
        SvgImage={<Community />}
        stepDescription="Choose PFP"
        title="Explore Communities"
        sub_title="Here are some communities you might be interested in"
        steps={5}
        subTitleWidth={304}
      />
      <View
        style={{
          width: size.getWidthSize(328),
          marginTop: size.getHeightSize(32),
          alignSelf: 'center',
          flex: 1,
        }}
      >
        <View
          style={{
            width: size.getWidthSize(328),
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: size.getHeightSize(8),
            height: size.getHeightSize(44),
            paddingHorizontal: size.getWidthSize(8),
          }}
        >
          <Text
            style={{
              fontSize: size.fontSize(18),
              fontFamily: 'Outfit-Regular',
              textAlign: 'center',
              lineHeight: size.getHeightSize(23),
              color: appColor.kTextColor,
              fontStyle: 'normal',
            }}
          >
            Suggested Communities
          </Text>
          <View
            style={{
              width: size.getWidthSize(65),
            }}
          >
            <Text
              onPress={() => setCommunities(Communities)}
              style={{
                fontSize: size.fontSize(16),
                fontFamily: 'Outfit-SemiBold',
                textAlign: 'center',
                color: appColor.kSecondaryButtonColor,
                lineHeight: size.getHeightSize(21),
              }}
            >
              Join all
            </Text>
          </View>
        </View>

        {/* ScrollView */}
        <View
          style={{
            flex: 1,
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {Communities.map((Community) => (
              <View
                style={{
                  flexDirection: 'row',
                  width: size.getWidthSize(328),
                  // height: size.getHeightSize(58),
                  borderRadius: 40,
                  paddingVertical: size.getHeightSize(8),
                  paddingHorizontal: size.getWidthSize(8),
                  alignItems: 'center',
                  // justifyContent: 'center',
                  marginBottom: size.getHeightSize(8),
                }}
              >
                {Community.image}
                <View
                  style={{
                    flex: 1,
                    marginLeft: size.getWidthSize(8),
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: size.getWidthSize(4.56),
                      width:size.getWidthSize(179)
                    }}
                  >
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={styles.username}
                    >
                      {Community.name}
                    </Text>
                    <Verified />
                  </View>

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
                    <Text style={styles.buttonText}>Joined</Text>
                  </Pressable>
                ) : (
                  <Pressable
                    onPress={() => addCommunity(Community)}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>Join</Text>
                  </Pressable>
                )}
              </View>
            ))}
          </ScrollView>
        </View>
      </View>

      <View
        style={{
          height: size.getHeightSize(124),
          marginBottom: size.getHeightSize(24),
        }}
      >
        <ContinueButton
          disabled={disableOnPress}
          navigateTo="ChooseProfilePics"
          marginTop={8}
        />
        <BackButton marginTop={16} />
      </View>
    </SafeAreaView>
  );
};

export default ExploreCommunities;
const styles = StyleSheet.create({
  button: {
    // width: size.getWidthSize(65),
    backgroundColor: appColor.kSecondaryButtonColor,
    borderRadius: 40,
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(4),
    justifyContent: 'center',
    height: size.getHeightSize(38),
  },
  buttonText: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Medium',
    textAlign: 'center',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(18),
  },
  username: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),

    // flexWrap: 'wrap',
    // position: 'relative',
  },
  message: {
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    color: appColor.kgrayColor,
    lineHeight: size.getHeightSize(18),
  },
  myCommunityButton: {
    backgroundColor: appColor.kGrayLight3,
    borderRadius: 40,
    height: size.getHeightSize(38),
    justifyContent: 'center',
    // width: size.getWidthSize(84),
    paddingVertical: size.getHeightSize(4),
    paddingHorizontal: size.getWidthSize(16),
  },
});
