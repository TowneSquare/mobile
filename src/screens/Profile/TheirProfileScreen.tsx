import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  Pressable,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useReducer, useState, useMemo, useEffect } from 'react';
import { appColor } from '../../constants';
import SuperStarBottomSheet from '../../components/Profile/About/SuperStarBottomSheet';
import Header from '../../components/Profile/Header';
import { useAppDispatch, useAppSelector } from '../../controller/hooks';
import TheirProfileBottomSheet from '../../components/Profile/About/TheirProfileBottomSheet';
import ProfileTabNavigation from '../../navigations/InApp/ProfileTabNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { updateSuperStarBottomSheet } from '../../controller/BottomSheetController';
import BlockUserModal from '../../components/Feed/BlockUserModal';
import ReportPanel from '../../components/Feed/ReportPanel';
import ReportPostModal from '../../components/Feed/ReportPostModal';
import ReportUserModal from '../../components/Feed/ReportUserModal';
import CheckedIcon from '../../../assets/images/svg/CheckedIcon';
import FollowIcon from '../../../assets/images/svg/FollowIcon';
import MessageIcon from '../../../assets/images/svg/MessageIcon';
import ProfileTipIcon from '../../../assets/images/svg/ProfileTipIcon';
import ProfileCard from '../../components/Profile/About/ProfileCard';
import { sizes } from '../../utils';
import { TheirProfileScreenProps } from '../../navigations/NavigationTypes';
import {
  updateTipBottomSheet,
  updateToast,
} from '../../controller/FeedsController';
import ViewSuperStarsModal from '../../components/Profile/About/ViewSuperStarsModal';
import ForYou from '../../components/Feed/ForYou';
import Replies from '../../components/Profile/Replies';
import { getCreatedTime } from '../../utils/helperFunction';
import axios from 'axios';
import { APTOS_NAME_URL } from '../../../config/env';
import { getUserAptosName } from '../../api';
import {
  followUser,
  getUserData,
  unFollowUser,
} from '../../controller/UserController';
import { UserData } from '../../controller/UserController';
const { height, width } = Dimensions.get('window');
import { getUserInfo } from '../../api';
import { PostData } from '../../controller/createPost';
import ShowLoader from '../../shared/ShowLoader';
import { useQuery } from 'react-query';
import { BACKEND_URL } from '../../../config/env';
import {
  serverTimestamp,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { firestoreDB } from '../../../config/firebase.config';
import {
  createUniqueChatId,
  addContactToFirestore,
} from '../../utils/ChatUtils';
const size = new sizes(height, width);

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
const TheirProfileScreen = ({
  route,
  navigation: { navigate },
}: TheirProfileScreenProps) => {
  const dispatch = useAppDispatch();
  const [view, setView] = useState<number>(2);
  const { userId, username, nickname } = route.params;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [aptosName, setAptosName] = useState<string>('.apt');
  // const [token, setToken] = useState('');
  const profile = useAppSelector((state) => state.USER.UserData);
  const { userFollowing, user, token } = useAppSelector((state) => ({
    userFollowing: state.USER.UserData.following,
    token: state.USER.didToken,
    user: state.USER.UserData._id,
  }));

  const title = username;
  const COMMUNITIES = '10';
  const APTOS_DOMAIN_NAME = '';
  const fetchUserInfo = async (): Promise<UserData> => {
    const user_token = await AsyncStorage.getItem('user_token');
    return await axios
      .get(`${BACKEND_URL}user/${userId}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => response.data);
  };

  function useUserInfo() {
    return useQuery({ queryKey: ['userInfo'], queryFn: fetchUserInfo });
  }
  const userInfo = useUserInfo();
  const [following, setFollowing] = useState(
    userFollowing.some((following) => following.toUserId == userInfo.data?._id)
  );

  const handleFollow = () => {
    setFollowing(true);
    dispatch(followUser({ toUserIds: [userId], token }));
    dispatch(getUserData({ userId: user, token }));
  };

  const handleUnFollow = () => {
    setFollowing(false);
    dispatch(unFollowUser({ token, followId: userId }));
    dispatch(getUserData({ userId: user, token }));
  };

  const [superStarModal, useDispatch] = useReducer(selectedSuperStarsReducer, {
    showSuperStarModal: false,
    imageUri: '',
  });

  console.log(userFollowing, 'userFollowing');

  // const following = userFollowing.some(
  //     (following) => following._id == userInfo.data._id
  //   );

  const getUserAptosName = async (address: string) => {
    try {
      const res = await axios.get(`${APTOS_NAME_URL}${address}`);
      const aptosName: string = res?.data;
      setAptosName(aptosName);
    } catch (error) {
      setAptosName('.apt');
      return 'unavailable';
    }
  };

  useEffect(() => {
    //getUserAptosName(userInfo.data?.aptosWallet)

    (async function () {
      const token = await AsyncStorage.getItem('user_token');
      // setToken(token);
      // dispatch(getUserData({ userId: user, token }));
      setFollowing(
        userFollowing.some(
          (following) => following.toUserId == userInfo.data?._id
        )
      );
    })();
  }, []);

  const POST = () => {
    if (userInfo?.data?.posts?.length == 0) {
      return [];
    }
    return userInfo?.data?.posts.map((res) => ({
      _id: res?._id,
      title: res?.title || '',
      description: res?.description,
      imageUrls: res?.imageUrls || [],
      videoUrls: res?.videoUrls || [],
      nftImageUrl: res?.nftImageUrl,
      nftCollection: res?.nftCollection,
      nftTokenId: res?.nftTokenId,
      userId: res?.userId,
      repost: res?.repost,
      createdAt: res?.createdAt,
      likes: res?.likes,
      reposts: res?.reposts,
      comments: res?.comments,
      customer: {
        _id: res?.customer?._id,
        issuer: res?.customer?.issuer || '',
        aptosWallet: userInfo.data?.aptosWallet,
        nickname: userInfo.data?.nickname,
        username: userInfo.data?.username,
        email: res?.customer?.email || '',
        referralCode: res?.customer?.referralCode || '',
        profileImage: userInfo.data?.profileImage || '',
        createdAt: res?.createdAt,
      },
      sellNFTPrice: res?.sellNFTPrice,
      originalCustomer: res?.originalCustomer,
      originalPostId: res?.originalPostId,
      originalCustomerId: res?.originalCustomerId,
    }));
  };

  const Posts = () => {
    return POST()?.map((userpost) => (
      <ForYou key={userpost._id} data={userpost} shouldPFPSwipe={false} />
    ));
  };

  console.log(userInfo.isFetched, userInfo?.data?.createdAt, 'theirProile');
  const UserReplies = () => {
    return userInfo.data?.comments.map((userpost) => (
      <Replies
        key={userpost._id}
        data={userpost}
        nickname={userInfo.data?.nickname}
        username={userInfo.data?.username}
        myPost
        shouldPFPSwipe={false}
      />
    ));
  };

  const Media = () => {
    return POST()
      .filter((userpost) => userpost.imageUrls[0] || userpost.videoUrls[0])
      .map((userpost) => (
        <ForYou key={userpost._id} data={userpost} shouldPFPSwipe={false} />
      ));
  };

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
  const createChat = async () => {
    setIsLoading(true);
    const timestamp = serverTimestamp();
    let id = createUniqueChatId(userId, profile._id);
    await addContactToFirestore(profile._id, userId);
    await addContactToFirestore(userId, profile._id);
    // let id = `${userData._id}_${myId}`;
    const _doc = {
      _id: id,
      members: [
        {
          _id: userId,
          name: username,
        },
        {
          _id: profile._id,
          name: profile.username,
        },
      ],
      memberIds: [userId, profile._id],
      activeMembers: [userId, profile._id],
      chatName: username,
      lastMessage: {
        text: '',
        createdAt: timestamp,
        sender: {
          _id: '',
          name: '',
        },
      },
      unreadCount: 0, // Initialize unread count to 0
    };

    const chatRef = doc(firestoreDB, 'chats', id);
    getDoc(chatRef)
      .then(async (docSnapshot) => {
        if (docSnapshot.exists()) {
          console.log(
            '================== Checking for active members ================'
          );
          console.log(docSnapshot.data().activeMembers);
          //Check if there are active members in the chat,
          if (!docSnapshot.data().activeMembers) {
            console.log('No active members in chat');
            await updateDoc(chatRef, {
              activeMembers: [userId, profile._id],
            });
          }
          setIsLoading(false);
          console.log(`SnapshotId:${docSnapshot.id}`);
          return navigate('Conversation', {
            chatId: docSnapshot.id,
            name: username,
            nickname: nickname,
            pfp: userInfo.data?.profileImage,
          });
        } else {
          setDoc(chatRef, _doc)
            .then(() => {
              setIsLoading(false);
              navigate('Conversation', {
                chatId: id,
                name: username,
                nickname: nickname,
                pfp: userInfo.data?.profileImage,
              });
            })
            .catch((err) => {
              setIsLoading(false);
              dispatch(
                updateToast({
                  displayToast: true,
                  toastMessage: 'Something went wrong',
                  toastType: 'info',
                })
              );
            });
        }
      })
      .catch((err) => {
        setIsLoading(false);
        dispatch(
          updateToast({
            displayToast: true,
            toastMessage: 'Something went wrong',
            toastType: 'info',
          })
        );
      });
    setIsLoading(false);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <Header title={title} typeOfProfile="theirProfile" />
      {/* <ProfileTabNavigation typeOfProfile="theirProfile" /> */}
      {userInfo.isSuccess ? (
        <ScrollView>
          <ProfileCard
            NAME={username}
            NICKNAME={nickname}
            APTOS_DOMAIN_NAME={aptosName}
            DATE={getCreatedTime(userInfo.data?.createdAt)}
            COMMUNITIES={COMMUNITIES}
            FOLLOWERS={userInfo.data?.followers?.length.toString()}
            FOLLOWING={userInfo.data?.following?.length.toString()}
            POST={userInfo.data?.posts?.length.toString()}
            profileImageUri={userInfo?.data.profileImage}
            BADGES={userInfo.data?.badge}
          />
          <View style={styles.view}>
            <Pressable
              onPress={following ? handleUnFollow : handleFollow}
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
              <MessageIcon
                height={size.getHeightSize(24)}
                width={size.getHeightSize(25)}
                onPress={createChat}
              />
            </View>
            <View style={styles.iconView}>
              <ProfileTipIcon
                size={size.getHeightSize(24)}
                onPress={() => {
                  dispatch(
                    updateTipBottomSheet({
                      status: true,
                      profileImage: userInfo.data?.profileImage,
                      username: userInfo.data?.username,
                      wallet: userInfo.data?.aptosWallet,
                      nickname: userInfo.data?.nickname,
                    })
                  );
                }}
              />
            </View>
          </View>
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
              {userInfo.data?.bio ? (
                <Text style={styles.aboutText}>{userInfo.data?.bio}</Text>
              ) : (
                <Text
                  style={{ ...styles.aboutText, color: appColor.grayLight }}
                >
                  No Bio
                </Text>
              )}
            </View>
          </View>
          {userInfo.data?.superstars?.nftInfoArray.length > 0 ? (
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
                {userInfo?.data?.superstars.nftInfoArray.map((item, index) => (
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
                    key={index}
                  >
                    <Image
                      style={{
                        marginRight: size.getWidthSize(6),
                        width: size.getHeightSize(130),
                        height: size.getHeightSize(130),
                        borderRadius: 8,
                      }}
                      source={{ uri: item.nftImageUrl }}
                    />
                  </Pressable>
                ))}
              </ScrollView>
            </>
          ) : (
            <></>
          )}
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
          <TheirProfileBottomSheet />
          <SuperStarBottomSheet
            handleVisibility={() => {
              dispatch(updateSuperStarBottomSheet(false));
            }}
            typeOfProfile="theirProfile"
          />
          <ReportUserModal />
          <ReportPanel />
          <ReportPostModal />
          <BlockUserModal />
          <ViewSuperStarsModal
            visibility={superStarModal.showSuperStarModal}
            close={() =>
              useDispatch({
                type: 'CLOSE',
              })
            }
            imageUri={superStarModal.imageUri}
          />
        </ScrollView>
      ) : (
        <></>
      )}
      <ShowLoader isLoading={isLoading} />
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
    marginTop: size.getHeightSize(24),
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
});

export default TheirProfileScreen;
