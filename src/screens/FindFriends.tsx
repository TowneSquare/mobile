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
import React, { useState, useEffect } from 'react';
import { appColor, fonts, images } from '../constants';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';
const { height, width } = Dimensions.get('window');
import { sizes } from '../utils';
import ContinueButton from '../components/ContinueButton';
import BackButton from '../components/BackButton';
import ProfileSetUpHeader from '../components/ProfileSetUpHeader';
const size = new sizes(height, width);
interface Friend {
  image: ImageSourcePropType;
  name: string;
  username: string;
}
const FindFriends = () => {
  const friends: Array<Friend> = [
    {
      image: images.friend1,
      name: 'User Name',
      username: '@username1',
    },
    {
      image: images.friend2,
      name: 'User Name',
      username: '@username2',
    },
    {
      image: images.friend3,
      name: 'User Name',
      username: '@username3',
    },
    {
      image: images.friend4,
      name: 'User Name',
      username: '@username4',
    },
  ];

  const [following, setFollowers] = useState<Friend[]>([]);
  const [disableOnPress, setOnPress] = useState(false);
  useEffect(() => {
    if (following.length > 0) {
      setOnPress(false);
    } else setOnPress(true);
  }, [following]);
  let [isLoaded] = useFonts({
    'Urbanist-Bold': fonts.EXTRABOLD,
    UrbanistSemiBold: fonts.SEMIBOLD,
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
  });
  if (!isLoaded) {
    return null;
  }
  const addFollowers = (follow: Friend) => {
    const follows = [...following, follow];
    setFollowers(follows);
  };
  const removeFollowers = (followerToRemove: Friend) => {
    const filteredFollowers = following.filter(
      (follower) => follower.username !== followerToRemove.username
    );
    setFollowers(filteredFollowers);
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
        image={images.hadnwave}
        stepDescription="Explore Communities"
        title="Find your friends"
        sub_title="See the following for your friend that are on TowneSquare! Give them a big high five"
        steps={4}
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
            Suggested Friends
          </Text>
          <Text
            style={{
              fontSize: size.fontSize(19),
              fontFamily: 'Outfit-Medium',
              textAlign: 'center',
              color: appColor.kSecondaryButtonColor,
            }}
          >
            Follow all
          </Text>
        </View>

        {/* ScrollView */}
        <View
          style={{
            flex: 1,
          }}
        >
          <ScrollView 
          showsVerticalScrollIndicator={false}>
            <View
              style={{
                justifyContent: 'space-between',
                height: 300,
              }}
            >
              {friends.map((friend) => (
                <View
                  style={{
                    flexDirection: 'row',
                    width: size.sWidth(0.9),
                  }}
                >
                  <Image source={friend.image} />
                  <View
                    style={{
                      flex: 1,
                    }}
                  >
                    <Text style={styles.username}>{friend.name}</Text>
                    <Text style={styles.subusername}>{friend.username}</Text>
                  </View>
                  {following.some(
                    (myFollower) => myFollower.username === friend.username
                  ) ? (
                    <Pressable
                      onPress={() => removeFollowers(friend)}
                      style={styles.followingButton}
                    >
                      <Text style={styles.buttonText}>FOLLOWING</Text>
                    </Pressable>
                  ) : (
                    <Pressable
                      onPress={() => addFollowers(friend)}
                      style={styles.button}
                    >
                      <Text style={styles.buttonText}>FOLLOW</Text>
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
          navigateTo="ExploreCommunities"
          marginTop={2}
        />
        <BackButton marginTop={50} />
      </View>
    </SafeAreaView>
  );
};

export default FindFriends;
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
  subusername: {
    fontSize: size.fontSize(19),
    fontFamily: 'Outfit-Medium',
    paddingLeft: size.hMargin(50),
    color: appColor.kgrayColor,
  },
  followingButton: {
    backgroundColor: appColor.kSecondaryColor,
    borderRadius: 20,
    paddingHorizontal: size.hMargin(50),
    paddingVertical: size.vMargin(10),
    justifyContent: 'center',
  },
});
