import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  Pressable,
} from 'react-native';
const { height, width } = Dimensions.get('window');
import { useFonts } from 'expo-font';
import { useState } from 'react';
import { appColor, fonts, images } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import HashTags from '../../components/createPost/HashTags';
import { sizes } from '../../utils';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CreatePostCommunityIcon from '../../../assets/images/svg/CreatePostCommunityIcon';
import CreatePostAptosIcon from '../../../assets/images/svg/CreatePostAptosIcon';
import { updateToast } from '../../controller/FeedsController';
import AtMention from '../../components/createPost/AtMention';
import FieldInput from '../../components/createPost/FieldInput';
import { useAppSelector, useAppDispatch } from '../../controller/hooks';
import PostAttachment from '../../components/createPost/PostAttachment';
import AttachedNftContainer from '../../components/createPost/AttachedNftContainer';
const size = new sizes(height, width);
import CommunityPostPrivacyBottomSheet from '../../components/Community/CreatePost/CommunityPostPrivacyBottomSheet';
import SwapPost from '../../components/createPost/SwapPost';
import FloorPricePost from '../../components/createPost/FloorPricePost';
import AptosPanel from '../../components/createPost/AptosPanel';
import Media from '../../components/createPost/Media';
import GifBottomSheet from '../../components/createPost/GifBottomSheet';
import { Avatar } from 'react-native-elements';
import { useNavigation, StackActions } from '@react-navigation/native';
import { clearPostData } from '../../controller/createPost';
import { ScrollView } from 'react-native-gesture-handler';
import { CreatePostProps } from '../../navigations/NavigationTypes';
const CreatePost = ({ route }: CreatePostProps) => {
  const whichPost = route.params.whichPost;
  const [
    showCommunityPostPrivacyBottomSheet,
    setShowCommunityPostPrivacyBottomSheet,
  ] = useState(false);
  const { showAtMentions, showHashTags, showAPTPanel, showApt, media, nft } =
    useAppSelector((state) => ({
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
    }));
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

  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
    'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
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
      <View style={styles.header}>
        <Text onPress={navigation.goBack} style={styles.cancel}>
          Cancel
        </Text>
        <Pressable
          onPress={() => {
            navigation.dispatch(StackActions.pop(1));

            dispatch(clearPostData());
            dispatch(
              updateToast({
                displayToast: true,
                toastMessage: 'Post is published successfully',
                toastType: 'success',
              })
            );
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
            source={images.createPostPfp}
            size={size.getHeightSize(40)}
          />
          <FieldInput whichPost={whichPost} />
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          {nft && <AttachedNftContainer />}
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
