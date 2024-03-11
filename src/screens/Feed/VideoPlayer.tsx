import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ResizeMode, Video } from 'expo-av';
import Constants from 'expo-constants';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { Dimensions, Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appColor, fonts } from '../../constants';
import { VideoPlayerProps } from '../../navigations/NavigationTypes';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

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
