import { View, Dimensions, Pressable, Image } from 'react-native';
import { useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appColor, fonts, images } from '../../constants';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { sizes } from '../../utils';
import VideoPlayerSvg from '../../../assets/images/svg/VideoPlayerSvg';
import { useNavigation } from '@react-navigation/native';
const { height, width } = Dimensions.get('window');
import { useFonts } from 'expo-font';
import Constants from 'expo-constants';
const size = new sizes(height, width);
import PostActions from '../../components/Feed/PostActions';
import { VideoPlayerProps } from '../../navigations/NavigationTypes';
import { Video, ResizeMode } from 'expo-av';

const VideoPlayer = ({ route }: VideoPlayerProps) => {
  const {
    videoUrl = 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
  } = route.params;
  const videoRef = useRef(null);

  const navigation = useNavigation();
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
      <StatusBar style="light" backgroundColor={appColor.feedBackground} />

      <Pressable
        style={{
          height: size.getHeightSize(102 - Constants.statusBarHeight),
          alignItems: 'flex-start',
          paddingBottom: size.getHeightSize(12),
          justifyContent: 'flex-end',
          paddingHorizontal: size.getWidthSize(16),
        }}
        onPress={navigation.goBack}
      >
        <AntDesign
          name="arrowleft"
          color={appColor.kWhiteColor}
          size={size.fontSize(22)}
        />
      </Pressable>
      <View style={{ flex: 1 }} />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* <Image
          source={images.videoImage}
          resizeMode="cover"
          style={{
            width: "100%",
            height: size.heightSize(347),
          }}
        /> */}
        <Video
          // source={{
          //   uri: userPost.videoUrl[0]
          //     ? userPost.videoUrl[0]
          //     : Image.resolveAssetSource(images.Aptomingos).uri,
          // }}
          source={{
            uri: videoUrl,
          }}
          ref={videoRef}
          useNativeControls
          style={{
            width: '100%',
            height: size.heightSize(347),
          }}
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          shouldPlay={true}
        />
      </View>
      {/* <VideoPlayerSvg /> */}
      <View
        style={{
          flex: 1,
        }}
      />
      <View
        style={{
          marginBottom: size.getHeightSize(31),
        }}
      >
        {/* <PostActions
          noOfComments={'99k'}
          noOfLikes={'99k'}
          noOfRetweet={'99k'}
          paddingHorizontal={16}
          showShareIcon
        /> */}
      </View>
    </SafeAreaView>
  );
};

export default VideoPlayer;
