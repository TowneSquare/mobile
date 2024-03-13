import { StackActions, useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Avatar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CreatePostAptosIcon from '../../../assets/images/svg/CreatePostAptosIcon';
import { createPost } from '../../api';
import CommunityPostPrivacyBottomSheet from '../../components/Community/CreatePost/CommunityPostPrivacyBottomSheet';
import AptosPanel from '../../components/createPost/AptosPanel';
import AtMention from '../../components/createPost/AtMention';
import AttachedNftContainer from '../../components/createPost/AttachedNftContainer';
import FieldInput from '../../components/createPost/FieldInput';
import FloorPricePost from '../../components/createPost/FloorPricePost';
import GifBottomSheet from '../../components/createPost/GifBottomSheet';
import HashTags from '../../components/createPost/HashTags';
import Media from '../../components/createPost/Media';
import PostAttachment from '../../components/createPost/PostAttachment';
import SwapPost from '../../components/createPost/SwapPost';
import { appColor, fonts, images } from '../../constants';
import { updateToast } from '../../controller/FeedsController';
import { clearPostData } from '../../controller/createPost';
import { useAppDispatch, useAppSelector } from '../../controller/hooks';
import { CreatePostProps } from '../../navigations/NavigationTypes';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
// import {
//   Aptos,
//   AptosConfig,
//   InputSubmitTransactionData,
//   Network,
// } from "@aptos-labs/ts-sdk";
// import {
//   useWallet,
//   InputTransactionData,
// } from "@aptos-labs/wallet-adapter-react";
const CreatePost = ({ route }: CreatePostProps) => {
  //const aptosConfig = new AptosConfig();
  // const aptos = new Aptos();
  const whichPost = route.params.whichPost;
  const [
    showCommunityPostPrivacyBottomSheet,
    setShowCommunityPostPrivacyBottomSheet,
  ] = useState(false);
  const {
    showAtMentions,
    showHashTags,
    showAPTPanel,
    showApt,
    media,
    nft,
    token,
  } = useAppSelector((state) => ({
    showAtMentions: state.CreatePostController.showAtMentionContainer,
    showHashTags: state.CreatePostController.showHashTags,
    showAPTPanel: state.CreatePostController.showAptosPanel,
    showApt: state.CreatePostController.posts.community,
    message: state.CreatePostController.posts.message,
    media: state.CreatePostController.posts.media,
    tags: state.CreatePostController.posts.tags,
    community: state.CreatePostController.posts.community,
    nft: state.CreatePostController.posts.nft,
    post: state.CreatePostController.posts,
    token: state.USER.didToken,
  }));
  const profilePics = useAppSelector(
    (state) => state.USER.UserData.profileImage
  );
  const textInput = useAppSelector(
    (state) => state.CreatePostController.inputText
  );
  const dispatch = useAppDispatch();
  const postPrivacy = useAppSelector(
    (state) => state.CreatePostController.communityPostPrivacy
  );
  const shouldShowAptosPanel = showAPTPanel;
  const shouldShowAtMention = showAtMentions;
  const shouldShowHashTags = showHashTags;
  const shouldShowSwapApt = showApt === 'Aptos';
  const shouldShowAptMonkey = showApt === 'Aptos Monkeys';
  const shouldShowPostAttachment =
    !showAPTPanel && !showAtMentions && !showHashTags;
  const navigation = useNavigation();

  // const { account } = useWallet();

  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
    'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
  });
  // const get = async () => {
  //   const result = await aptos.getOwnedDigitalAssets({
  //     ownerAddress: `0x3bc474f3c3c37c9cdb6643c04e5004e5e03b17b1a4200ef807cd990f65b0e194`,
  //   });
  //   console.log(result, "nft");
  // };
  // useEffect(() => {
  //   get();
  // }, []);

  if (!isLoaded) {
    return null;
  }

  // const transaction: InputTransactionData = {
  //   data: {
  //     function: `0x3::token_coin_swap::list_token_for_swap`,
  //     functionArguments: [],
  //   },
  // };

  var photo = {
    uri: media,
    type: 'image/jpeg',
    name: 'photo.jpg',
  };

  // const createFormData = (uri:any) => {
  //   const fileName = uri.split("/").pop();
  //   const fileType = fileName.split(".").pop();
  //   const formData = new FormData();

  //   // formData.append("image", {
  //   //   name: fileName,
  //   //   uri,
  //   //   type: `image/${fileType}`,
  //   // });
  //   formData.append('name',fileName)
  //   formData.append('type', fileType)
  //   formData.append('uri', media)
  //   return formData;
  // };

  const createFormData = () => {
    console.log(media);
    const data = new FormData();
    if (media) {
      data.append('file', {
        name: media?.split('/').pop(),
        type: 'Image/' + get_url_extension(media),
        uri: media,
      } as any);
    }

    data.append('description', textInput);
    data.append('sellNFTPrice', nft.sellNFTPrice);
    data.append('nftTokenId', nft.nftTokenId);
    data.append('nftCollection', nft.nftCollection);
    data.append('nftImageUrl', nft.nftImageUrl);
    console.log(data, 'data');
    return data || '';
  };

  function get_url_extension(url: string) {
    return url?.split(/[#?]/)[0].split('.').pop().trim();
  }

  console.log(createFormData(), media, 'fileee');

  const handleCreatePost = async () => {
    const res = await createPost(token, createFormData());
    console.log('@@@@@@@@@@@@@@@@@', res);
    if (res.id) {
      dispatch(
        updateToast({
          displayToast: true,
          toastMessage: 'Post is published successfully',
          toastType: 'success',
        })
      );
    } else {
      dispatch(
        updateToast({
          displayToast: true,
          toastMessage: 'Something went wrong while posting please try again',
          toastType: 'info',
        })
      );
    }
  };

  const cancel = () => {
    navigation.goBack()
    dispatch(clearPostData())
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <View style={styles.header}>
        <Text onPress={cancel} style={styles.cancel}>
          Cancel
        </Text>
        <Pressable
          onPress={async () => {
            navigation.dispatch(StackActions.pop(1));
            handleCreatePost();
          }}
          style={styles.publishButton}
        >
          <Text style={styles.publishText}>Publish</Text>
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.fieldInputContainer}>
          <Avatar
            rounded
            source={profilePics ? { uri: profilePics } : images.defaultAvatar}
            size={size.getHeightSize(40)}
          />
          <FieldInput whichPost={whichPost} />
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          {nft.nftImageUrl && <AttachedNftContainer />}
          {media && <Media />}
          {shouldShowSwapApt && <SwapPost />}
          {shouldShowAptMonkey && <FloorPricePost />}
          <View style={{ flex: 1 }} />
        </View>
      </ScrollView>
      <KeyboardAvoidingView>
        {shouldShowAptosPanel && (
          <View style={styles.tagConatiners}>
            <AptosPanel />
          </View>
        )}
        {shouldShowAtMention && (
          <View style={styles.tagConatiners}>
            <AtMention />
          </View>
        )}
        {shouldShowPostAttachment && (
          <>
            {whichPost === 'communityPost' && (
              <Pressable
                onPress={() => setShowCommunityPostPrivacyBottomSheet(true)}
                style={styles.privacyPost}
              >
                <CreatePostAptosIcon size={size.getHeightSize(24)} />
                {postPrivacy === 'public' ? (
                  <Text style={styles.typeOfPost}>Public</Text>
                ) : (
                  <Text style={styles.typeOfPost}>Community only</Text>
                )}
                <MaterialIcons
                  name="arrow-drop-down"
                  color={appColor.primaryLight}
                  size={size.fontSize(24)}
                />
              </Pressable>
            )}
            <PostAttachment />
          </>
        )}
        {shouldShowHashTags && (
          <View style={styles.tagConatiners}>
            <HashTags />
          </View>
        )}
      </KeyboardAvoidingView>
      <GifBottomSheet />
      <CommunityPostPrivacyBottomSheet
        onClose={() => setShowCommunityPostPrivacyBottomSheet(false)}
        visibility={showCommunityPostPrivacyBottomSheet}
      />
    </SafeAreaView>
  );
};

export default CreatePost;
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: size.getWidthSize(16),
    height: size.getHeightSize(64),
    backgroundColor: appColor.kgrayDark2,
    justifyContent: 'space-between',
    paddingVertical: size.getHeightSize(12),
  },
  cancel: {
    color: appColor.kSecondaryButtonColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(20),
    fontFamily: 'Outfit-Medium',
    letterSpacing: 0.04,
    minWidth: size.getWidthSize(51),
  },
  publishButton: {
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(7),
    backgroundColor: appColor.kSecondaryButtonColor,
    borderRadius: 40,
    minWidth: size.getWidthSize(85),
  },
  publishText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(20),
    letterSpacing: 0.02,
    fontFamily: 'Outfit-Medium',
    textAlign: 'center',
  },

  fieldInputContainer: {
    flexDirection: 'row',
    gap: size.getWidthSize(8),
    marginHorizontal: size.getWidthSize(16),
    marginTop: size.getHeightSize(8),
    alignItems: 'flex-start',
  },
  tagConatiners: {
    maxHeight: size.getHeightSize(260),
    backgroundColor: appColor.kgrayDark2,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  toastText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(18),
  },
  toastContainer: {
    backgroundColor: appColor.kgrayDark2,
    borderRadius: 4,
    width: size.getWidthSize(340),
    marginTop: size.getHeightSize(35),
    borderWidth: size.getWidthSize(1),
    borderColor: appColor.kGrayLight3,
  },
  toastRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginHorizontal: size.getWidthSize(16),
    gap: size.getWidthSize(4),
    marginVertical: size.getHeightSize(16),
    width: size.getWidthSize(286),
    alignSelf: 'center',
  },
  absolutePosition: {
    width: '100%',
  },
  typeOfPost: {
    color: appColor.primaryLight,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(21),
  },
  privacyPost: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: size.getHeightSize(8),
    paddingHorizontal: size.getWidthSize(16),
    borderRadius: 40,
    alignSelf: 'flex-start',
    marginBottom: size.getHeightSize(16),
    gap: size.getWidthSize(8),
    backgroundColor: 'rgba(184, 130, 255, 0.30)',
    marginLeft: size.getWidthSize(16),
  },
});
