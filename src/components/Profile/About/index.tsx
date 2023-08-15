import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  Pressable,
  FlatList,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { appColor } from '../../../constants';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useFonts } from 'expo-font';
import { fonts } from '../../../constants';
import { images } from '../../../constants';
import { sizes } from '../../../utils';
import Info from '../../../../assets/images/svg/Info';
import MessageIcon from '../../../../assets/images/svg/MessageIcon';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { UserPosts } from '../../Feed/DuumyData';
import ForYou from '../../Feed/ForYou';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector, useAppDispatch } from '../../../controller/hooks';
import { updateSuperStarBottomSheet } from '../../../controller/BottomSheetController';
import EditProfileModal from './EditProfileModal';
import ProfileCard from './ProfileCard';
import FollowIcon from '../../../../assets/images/svg/FollowIcon';
const Tab = createMaterialTopTabNavigator();
import SuperStarBottomSheet from './SuperStarBottomSheet';
import ViewSuperStarsModal from './ViewSuperStarsModal';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

const About = ({ route }) => {
  const typeOfProfile = route.params.typeOfProfile as
    | 'myProfile'
    | 'theirProfile';
  const { selectedSuperStars, bio, profilePics } = useAppSelector((state) => ({
    bio: state.USER.bio,
    selectedSuperStars: state.USER.selectedSuperStars,
    profilePics: state.USER.details.profileImage,
  }));
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });

  const { navigate } = useNavigation();

  const dispatch = useAppDispatch();
  const [view, setView] = useState<number>(2);

  const NAME = 'Real JC';
  const NICKNAME = 'jczhang';
  const APTOS_DOMAIN_NAME = 'jczhang.apt';
  const DATE = '03/07/2023';
  const FOLLOWING = '2,499';
  const FOLLOWERS = '28,872';
  const POST = '189';
  const COMMUNITIES = '22';

  const onlyUserPost = UserPosts.filter(
    (userPost) => userPost.nickname == NICKNAME
  );

  const Posts = () => {
    return onlyUserPost.map((userpost) => (
      <ForYou key={userpost.id} data={userpost} myPost />
    ));
  };

  const Replies = () => {
    return onlyUserPost.map((userpost) => (
      <ForYou key={userpost.id} data={userpost} myPost />
    ));
  };

  const Media = () => {
    return onlyUserPost.map((userpost) => (
      <ForYou key={userpost.id} data={userpost} myPost />
    ));
  };

  const POST_MEDIA_REPLIES = () => {
    if (view == 2) {
      return Posts();
    }
    if (view == 1) {
      return Replies();
    }
    if (view == 1) {
      return Media();
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: appColor.feedBackground,
        // paddingHorizontal: 15,
      }}
    >
      <ScrollView>
        <ProfileCard
          NAME={NAME}
          NICKNAME={NICKNAME}
          APTOS_DOMAIN_NAME={APTOS_DOMAIN_NAME}
          DATE={DATE}
          COMMUNITIES={COMMUNITIES}
          FOLLOWERS={FOLLOWERS}
          FOLLOWING={FOLLOWING}
          POST={POST}
        />

        {typeOfProfile === 'theirProfile' && (
          <View
            style={{
              paddingHorizontal: size.getWidthSize(42),
              flexDirection: 'row',

              alignItems: 'center',
              marginTop: size.getHeightSize(24),
              alignSelf: 'center',
              gap: size.getWidthSize(16),
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                width: size.getWidthSize(130),
                paddingVertical: size.getHeightSize(4),
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: appColor.kSecondaryButtonColor,
                borderRadius: 40,
                gap: size.getWidthSize(8),
              }}
            >
              <FollowIcon />
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'Outfit-Medium',
                  fontSize: size.fontSize(16),
                  color: appColor.kWhiteColor,
                  letterSpacing: 0.32,
                  lineHeight: size.getHeightSize(20),
                }}
              >
                Follow
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: size.getWidthSize(130),
                paddingVertical: size.getHeightSize(4),
                alignItems: 'center',
                backgroundColor: appColor.kWhiteColor,
                borderRadius: 40,
                gap: size.getWidthSize(8),
                justifyContent: 'center',
              }}
            >
              <MessageIcon />
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'Outfit-Medium',
                  fontSize: size.fontSize(16),
                  color: appColor.blackColor,
                  letterSpacing: 0.32,
                  lineHeight: size.getHeightSize(20),
                }}
              >
                Send
              </Text>
            </View>
          </View>
        )}

        <View style={styles.aboutDiv}>
          <Text
            style={[
              styles.aboutHeader,
              { marginBottom: size.getHeightSize(12) },
            ]}
          >
            About
          </Text>
          <View>
            <Text style={styles.aboutText}>{bio}</Text>
          </View>
        </View>
        <View>
          <View
            style={[
              styles.superStarView,
              {
                marginBottom:
                  typeOfProfile === 'myProfile'
                    ? size.getHeightSize(14)
                    : size.getHeightSize(14),
              },
            ]}
          >
            <View
              style={{
                flexDirection: 'row',
                gap: size.getWidthSize(8),
                alignItems: 'center',
              }}
            >
              <Text style={styles.aboutHeader}>
                {typeOfProfile === 'myProfile' && 'My '}Super Stars
              </Text>
              <Info
                onPress={() => {
                  dispatch(updateSuperStarBottomSheet(true));
                }}
              />
            </View>

            {typeOfProfile === 'theirProfile' ? (
              <></>
            ) : selectedSuperStars.length > 0 ? (
              <Pressable
                onPress={() => {
                  navigate('SuperStarCollectionScreen');
                }}
              >
                <Text style={styles.edit}>Edit</Text>
              </Pressable>
            ) : (
              <></>
            )}
          </View>
          {selectedSuperStars.length > 0 ? (
            <>
              <ScrollView
                style={{
                  marginLeft: size.getWidthSize(16),
                }}
                horizontal={true}
                contentContainerStyle={{
                  paddingRight: size.getWidthSize(10),
                }}
              >
                {selectedSuperStars.map((item) => (
                  <Image
                    style={{
                      marginRight: size.getWidthSize(6),
                      width: size.getHeightSize(130),
                      height: size.getHeightSize(130),
                      borderRadius: 8,
                    }}
                    key={item.id}
                    source={{ uri: item.uri }}
                  />
                ))}
              </ScrollView>
            </>
          ) : typeOfProfile === 'theirProfile' ? (
            <></>
          ) : (
            <View style={styles.setNft}>
              <View style={{}}>
                <Text style={styles.setNftText}>
                  When you set you preferred
                </Text>
                <Text style={styles.setNftText}>NFTs, they will show here</Text>
              </View>
              <Pressable
                style={styles.setNftButton}
                onPress={() => {
                  navigate('SuperStarCollectionScreen');
                }}
              >
                <Text style={styles.setNftButtonText}>Set NFTs</Text>
              </Pressable>
            </View>
          )}
        </View>

        <View style={styles.tabView}>
          <Pressable
            style={view == 2 ? styles.focusedTab : styles.tab}
            onPress={() => {
              setView(2);
            }}
          >
            <Text style={view == 2 ? styles.focusedtabText : styles.tabText}>
              Posts
            </Text>
          </Pressable>
          <Pressable
            style={view == 1 ? styles.focusedTab : styles.tab}
            onPress={() => {
              setView(1);
            }}
          >
            <Text style={view == 1 ? styles.focusedtabText : styles.tabText}>
              Replies
            </Text>
          </Pressable>
          <Pressable
            style={view == 0 ? styles.focusedTab : styles.tab}
            onPress={() => setView(0)}
          >
            <Text style={view == 0 ? styles.focusedtabText : styles.tabText}>
              Media
            </Text>
          </Pressable>
        </View>
        <View>{POST_MEDIA_REPLIES()}</View>
      </ScrollView>
      <ViewSuperStarsModal />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view1: {
    backgroundColor: appColor.kgrayDark2,
    marginTop: 15,
    borderRadius: 40,
    borderColor: 'white',
    padding: 15,
  },
  text: {
    color: appColor.kGrayscale,
    fontFamily: 'Outfit-Bold',
    paddingLeft: 5,
  },

  view2Box: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2TextUp: {
    fontFamily: 'Outfit-Bold',
    color: appColor.kTextColor,
  },
  view2TextDown: {
    fontFamily: 'Outfit-Regular',
    color: appColor.kGrayscale,
  },
  aboutDiv: {
    marginVertical: size.getHeightSize(24),
    marginHorizontal: size.getWidthSize(16),
  },
  aboutHeader: {
    color: appColor.kTextColor,
    fontFamily: 'Outfit-Bold',
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
  },
  aboutText: {
    color: appColor.kTextColor,
    fontFamily: 'Outfit-Regular',
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(20),
  },
  focusedTab: {
    backgroundColor: appColor.kSecondaryButtonColor,
    flex: 1,
    paddingVertical: size.getHeightSize(8),
    justifyContent: 'center',
    marginHorizontal: size.getWidthSize(4),
    borderRadius: 40,
    minHeight: size.getHeightSize(36),
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
  imageContainer: {
    height: size.getHeightAndWidth(140),
    width: size.getHeightAndWidth(140),
    borderRadius: 200,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  superStarView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: size.getWidthSize(16),
  },
  edit: {
    color: appColor.kSecondaryButtonColor,
    fontFamily: 'Outfit-SemiBold',
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
  },
  setNft: {
    flexDirection: 'row',
    paddingVertical: size.getHeightSize(16),
    paddingHorizontal: size.getWidthSize(16),
    justifyContent: 'space-between',
    borderStyle: 'dashed',
    borderColor: appColor.kGrayLight3,
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: size.getWidthSize(16),
  },
  setNftText: {
    color: appColor.kGrayscale,
    fontFamily: 'Outfit-Regular',
    fontSize: size.fontSize(14),
  },
  setNftButton: {
    backgroundColor: appColor.kWhiteColor,
    borderRadius: 30,
    paddingHorizontal: size.getWidthSize(16),
    justifyContent: 'center',
  },
  setNftButtonText: {
    textAlign: 'center',
    fontFamily: 'Outfit-Medium',
    fontSize: size.fontSize(16),
    color: appColor.kGrayscaleDart,
    letterSpacing: 0.32,
    lineHeight: size.getHeightSize(20),
  },
  tabView: {
    flexDirection: 'row',
    backgroundColor: appColor.kgrayDark2,
    borderRadius: 40,
    marginTop: size.getHeightSize(32),
    marginHorizontal: size.getWidthSize(16),
    width: size.getWidthSize(344),
    paddingVertical: size.getHeightSize(4),
    marginBottom: size.getHeightSize(8),
    alignSelf: 'center',
  },
});

export default About;
