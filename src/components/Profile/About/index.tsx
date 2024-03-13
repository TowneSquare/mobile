import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  Pressable,
} from 'react-native';
import CheckedIcon from '../../../../assets/images/svg/CheckedIcon';
import { appColor } from '../../../constants';
import { useState, useReducer, useMemo, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { fonts } from '../../../constants';
import { sizes } from '../../../utils';
import Info from '../../../../assets/images/svg/Info';
import MessageIcon from '../../../../assets/images/svg/MessageIcon';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ForYou from '../../Feed/ForYou';
import { batch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector, useAppDispatch } from '../../../controller/hooks';
import { updateSuperStarBottomSheet } from '../../../controller/BottomSheetController';
import ProfileCard from './ProfileCard';
import { useAptosName } from '../../../api/hooks';
import ProfileTipIcon from '../../../../assets/images/svg/ProfileTipIcon';
import FollowIcon from '../../../../assets/images/svg/FollowIcon';
import { updateTipBottomSheet } from '../../../controller/FeedsController';
const Tab = createMaterialTopTabNavigator();
import ViewSuperStarsModal from './ViewSuperStarsModal';
import {
  getUserData,
  updateUserData,
} from '../../../controller/UserController';
import { getOnlyUserPost } from '../../../controller/createPost';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { firestoreDB } from '../../../../config/firebase.config';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
import { ChatsModel } from '../../../models/chats';
import Replies from '../Replies';
import { getCreatedTime } from '../../../utils/helperFunction';

type SuperStarReducerState = {
  showSuperStarModal: boolean;
  imageUri: string;
};
type SuperStarReducerAction = {
  type: 'SHOW' | 'CLOSE';
  payload?: {
    showSuperStarModal: boolean;
    imageUri: string;
  };
};
const selectedSuperStarsReducer = (
  state: SuperStarReducerState,
  action: SuperStarReducerAction
) => {
  switch (action.type) {
    case 'SHOW':
      return {
        showSuperStarModal: action.payload.showSuperStarModal,
        imageUri: action.payload.imageUri,
      };
    case 'CLOSE':
      return {
        showSuperStarModal: false,
        imageUri: '',
      };

    default:
      return state;
  }
};

const About = ({ route }) => {
  const [superStarModal, useDispatch] = useReducer(selectedSuperStarsReducer, {
    showSuperStarModal: false,
    imageUri: '',
  });
  const [following, follow] = useState(false);
  // const [showSuperStarModal, setModalVisibility] = useState(false);
  const typeOfProfile = route.params.typeOfProfile as
    | 'myProfile'
    | 'theirProfile';
  const { selectedSuperStars, bio, profilePics } = useAppSelector((state) => ({
    bio: state.USER.UserData.bio,
    selectedSuperStars: state.USER.UserData.superstars,
    profilePics: state.USER.UserData.profileImage,
  }));
  const dispatch = useAppDispatch();

  // const token = useAppSelector((state) => state.USER.didToken);
  const userId = useAppSelector((state) => state.USER.UserData._id);
  const USERDATA = useAppSelector((state) => state.USER.UserData);

  // useMemo(() => {
  //   dispatch(getUserData({ userId, token: token }));
  // }, [userId]);
  async function getUserDataFromStorage() {
    if (!USERDATA) {
    }
    const userData = await AsyncStorage.getItem('userData')?.then((data) =>
      JSON.parse(data)
    );
    console.log(userData);
    const token = await AsyncStorage.getItem('user_token');
    if (userData) {
      batch(() => {
        dispatch(updateUserData(userData));
        dispatch(getUserData({ userId: userData._id, token: token }));
        dispatch(getOnlyUserPost({ userId: userData._id, token: token }));
      });
    } else {
      dispatch(getUserData({ userId: USERDATA._id, token: token }));
      dispatch(getOnlyUserPost({ userId: USERDATA._id, token: token }));
    }
  }
  useEffect(() => {
    getUserDataFromStorage();
  }, []);

  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });

  const { navigate } = useNavigation();

  const [view, setView] = useState<number>(2);

  const NAME = USERDATA.username || 'Real JC';
  const NICKNAME = USERDATA.nickname || 'jczhang';
  const APTOS_DOMAIN_NAME =
    useAptosName({ userAddress: USERDATA?.aptosWallet }).data?.name || '.apt';
  const DATE = getCreatedTime(USERDATA.createdAt);
  const FOLLOWING = USERDATA.following.length || '0';
  const FOLLOWERS = USERDATA.followers.length || '0';
  const POST = USERDATA.posts.length || '0';
  const COMMUNITIES = '22';

  const onlyUserPost = useAppSelector(
    (state) => state.CreatePostController.OnlyUserPost
  );

  const Posts = () => {
    console.log(onlyUserPost, 'onlyUserPost');
    if (onlyUserPost.length > 0) {
      return onlyUserPost.map((userpost) => (
        <ForYou
          currentScreen={'' as null}
          key={userpost._id}
          data={userpost}
          shouldPFPSwipe={false}
        />
      ));
    } else {
      return (
        <View style={styles.emptyPostView}>
          <Text style={styles.emptyPostText}>You didn't create any posts</Text>
          <Text style={styles.emptyPostText2}>
            When you create posts, they will show here
          </Text>
          <Pressable
            onPress={() => {
              navigate('CreatePost', {
                whichPost: 'singlePost',
              });
            }}
            style={styles.buttonView}
          >
            <Text style={styles.createPostText}>Create post</Text>
          </Pressable>
        </View>
      );
    }
  };

  const UserReplies = () => {
    return USERDATA.comments.map((userpost) => (
      // <Replies
      //   key={userpost._id}
      //   data={userpost}
      //   nickname={USERDATA.nickname}
      //   username={USERDATA.username}
      //   myPost
      //   shouldPFPSwipe={false}
      // />
      <View>
        <Text>Changes in Progress</Text>
      </View>
    ));
  };

  const Media = () => {
    if (onlyUserPost.length > 1) {
      return onlyUserPost
        .filter((userpost) => userpost.imageUrls[0] || userpost.videoUrls[0])
        .map((userpost) => (
          <ForYou
            currentScreen={'' as null}
            key={userpost._id}
            data={userpost}
            shouldPFPSwipe={false}
          />
        ));
    } else {
      return (
        <View style={styles.emptyPostView}>
          <Text style={styles.emptyPostText}>You didn't create any posts</Text>
          <Text style={styles.emptyPostText2}>
            When you create posts, they will show here
          </Text>
          <Pressable
            onPress={() => {
              navigate('CreatePost', {
                whichPost: 'singlePost',
              });
            }}
            style={styles.buttonView}
          >
            <Text style={styles.createPostText}>Create post</Text>
          </Pressable>
        </View>
      );
    }
  };

  // const Media = () => {
  //   return onlyUserPost.map((userpost) => (
  //     <ForYou
  //       key={userpost._id}
  //       data={userpost}
  //       myPost
  //       shouldPFPSwipe={false}
  //     />
  //   ));
  // };

  const POST_MEDIA_REPLIES = () => {
    if (view == 2) {
      return Posts();
    }
    if (view == 1) {
      return UserReplies();
    }
    if (view == 0) {
      return Media();
    }
  };

  const handleFollow = () => {
    following && navigate('FollowersScreen', { screen: 'Following' });
    follow((previous) => !previous);
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: appColor.feedBackground,
        flex: 1,
      }}
    >
      <ScrollView>
        <ProfileCard
          NAME={NAME}
          NICKNAME={NICKNAME}
          APTOS_DOMAIN_NAME={APTOS_DOMAIN_NAME}
          DATE={DATE}
          COMMUNITIES={COMMUNITIES}
          FOLLOWERS={FOLLOWERS.toString()}
          FOLLOWING={FOLLOWING.toString()}
          POST={POST.toString()}
          profileImageUri={profilePics}
          BADGES={USERDATA?.badge}
        />
        {/* {typeOfProfile === 'theirProfile' && (
          <View style={styles.view}>
            <Pressable
              onPress={handleFollow}
              style={[
                styles.followView,
                {
                  backgroundColor: following
                    ? appColor.kGrayLight3
                    : appColor.kSecondaryButtonColor,
                  paddingHorizontal: following
                    ? size.getWidthSize(13.5)
                    : size.getWidthSize(25),
                },
              ]}
            >
              {following ? (
                <CheckedIcon size={size.getHeightSize(24)} />
              ) : (
                <FollowIcon size={size.getHeightSize(24)} />
              )}
              <Text style={styles.followText}>
                {following ? 'Following' : 'Follow'}
              </Text>
            </Pressable>
            <View style={styles.iconView}>
              <MessageIcon onPress={createChat} />
            </View>
            <View style={styles.iconView}>
              <ProfileTipIcon
                size={size.getHeightSize(24)}
                onPress={() => {
                  //dispatch(updateTipBottomSheet(true));
                }}
              />
            </View>
          </View>
        )} */}
        <View style={styles.aboutDiv}>
          <Text
            style={[
              styles.aboutHeader,
              { marginBottom: size.getHeightSize(12) },
            ]}
          >
            About
          </Text>
          {bio ? (
            <View>
              <Text style={styles.aboutText}>{bio}</Text>
            </View>
          ) : (
            <Text
              onPress={() => navigate('EditProfileScreen')}
              style={styles.addSomething}
            >
              Add something about you
            </Text>
          )}
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
            ) : selectedSuperStars?.nftInfoArray?.length > 0 ? (
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
          {selectedSuperStars?.nftInfoArray.length > 0 ? (
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
                {selectedSuperStars.nftInfoArray.map((item) => (
                  <Pressable
                    onPress={() => {
                      useDispatch({
                        type: 'SHOW',
                        payload: {
                          showSuperStarModal: true,
                          imageUri: item.nftImageUrl,
                        },
                      });
                    }}
                  >
                    <Image
                      style={{
                        marginRight: size.getWidthSize(6),
                        width: size.getHeightSize(130),
                        height: size.getHeightSize(130),
                        borderRadius: 8,
                      }}
                      key={item.nftTokenId}
                      source={{ uri: item.nftImageUrl }}
                    />
                  </Pressable>
                ))}
              </ScrollView>
            </>
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
      <ViewSuperStarsModal
        visibility={superStarModal.showSuperStarModal}
        close={() =>
          useDispatch({
            type: 'CLOSE',
          })
        }
        imageUri={superStarModal.imageUri}
      />
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
  view: {
    paddingHorizontal: size.getWidthSize(42),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: size.getHeightSize(24),
    alignSelf: 'center',
    gap: size.getWidthSize(16),
  },
  followView: {
    flexDirection: 'row',
    paddingVertical: size.getHeightSize(4),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appColor.kSecondaryButtonColor,
    borderRadius: 40,
    gap: size.getWidthSize(8),
    paddingHorizontal: size.getWidthSize(25),
    minHeight: size.getHeightSize(34),
  },
  followText: {
    textAlign: 'center',
    fontFamily: 'Outfit-Medium',
    fontSize: size.fontSize(16),
    color: appColor.kWhiteColor,
    letterSpacing: 0.32,
    lineHeight: size.getHeightSize(20),
  },
  iconView: {
    flexDirection: 'row',
    paddingVertical: size.getHeightSize(4),
    alignItems: 'center',
    backgroundColor: appColor.kWhiteColor,
    borderRadius: 40,
    gap: size.getWidthSize(8),
    justifyContent: 'center',
    paddingHorizontal: size.getWidthSize(16),
  },
  emptyPostView: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: size.getHeightSize(64),
    marginBottom: size.getHeightSize(64),
  },
  emptyPostText: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    textAlign: 'center',
  },
  emptyPostText2: {
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(17.64),
    fontFamily: 'Outfit-Regular',
    color: appColor.kGrayscale,
    textAlign: 'center',
  },
  buttonView: {
    paddingVertical: size.getHeightSize(12),
    paddingHorizontal: size.getWidthSize(16),
    borderRadius: 40,
    backgroundColor: appColor.kSecondaryButtonColor,
    alignSelf: 'center',
    marginTop: size.getHeightSize(23),
  },
  createPostText: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    textAlign: 'center',
  },
  addSomething: {
    color: appColor.kSecondaryButtonColor,
    fontFamily: 'Outfit-Medium',
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(20),
  },
});

export default About;
