import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
import { useState, useRef } from 'react';
const { height, width } = Dimensions.get('window');
import { useFonts } from 'expo-font';
import { appColor, fonts } from '../../constants';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import Comments from '../../components/SinglePostView/Comments';
import AddCommentTextInput from '../../components/SinglePostView/AddCommentTextInput';
import { sizes } from '../../utils';
const size = new sizes(height, width);
import { useNavigation } from '@react-navigation/native';
import { SinglePostProps } from '../../navigations/NavigationTypes';
import SinglePostContent from '../../components/SinglePostView/SinglePostContent';
import { useAppDispatch } from '../../controller/hooks';
const SinglePost = ({ route }: SinglePostProps) => {
  const props = route.params;
  const scrollViewRef = useRef<ScrollView>(null);
  const textInputRef = useRef<TextInput>(null);
  const [replyingTo, setReplyingTo] = useState(false);
  const navigation = useNavigation();

  const data = {
    id: '9',
    pfp: '',
    username: 'Username',
    nickname: 'username',
    timepost: '5m',
    comments: '99k',
    retweet: '99k',
    like: '99k',
    type: 'swap-option-included',
    content: {
      message: 'Just joined TowneSquare, a new web3 social platform!',
      messageTag: 'APT',
      collectionName: '',
      logo: '',
      price: 8.46,
    },
  };
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }

  const handleCommentPress = () => {
    textInputRef.current?.focus();
    setReplyingTo(true);
    textInputRef.current?.clear();
    if (scrollViewRef.current) {
      const commentIndex = 4;
      const yOffset = commentIndex * 100;
      scrollViewRef.current.scrollTo({ y: yOffset, animated: true });
    }
  };
  const handleBlur = () => {
    setReplyingTo(false);
    textInputRef.current?.clear();
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <StatusBar style="light" backgroundColor={appColor.kgrayDark2} />
      <View style={styles.header}>
        <AntDesign
          name="arrowleft"
          color={appColor.kWhiteColor}
          size={size.fontSize(24)}
          onPress={navigation.goBack}
        />
        <Text style={styles.headerText}>Post</Text>
        <View />
      </View>
      <ScrollView contentContainerStyle={styles.scrollView} ref={scrollViewRef}>
        <SinglePostContent data={data} />
        <Comments handleCommentButton={handleCommentPress} />
        <Comments handleCommentButton={handleCommentPress} myPost />
      </ScrollView>

      <AddCommentTextInput
        showReplyingTo={replyingTo}
        handleBlur={handleBlur}
        textRef={textInputRef}
      />
      {/* {isAnyModalOpen && <View style={styles.overlay} />} */}
    </SafeAreaView>
  );
};

export default SinglePost;
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(20),
    backgroundColor: appColor.kgrayDark2,
    justifyContent: 'space-between',
  },
  headerText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
  },
  scrollView: {
    paddingBottom: size.getHeightSize(32),
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
});
