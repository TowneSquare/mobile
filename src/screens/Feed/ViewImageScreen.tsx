import { View, Dimensions, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appColor, fonts, images } from '../../constants';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { sizes } from '../../utils';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
const { height, width } = Dimensions.get('window');
import { useFonts } from 'expo-font';
const size = new sizes(height, width);
import PostActions from '../../components/Feed/PostActions';
const ViewImageScreen = () => {
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
        <Image
          source={images.feedImage1}
          resizeMode="cover"
          style={{
            width: '100%',
            height: size.heightSize(347),
          }}
        />
      </View>
      <View style={{ flex: 1 }} />
      <View
        style={{
          marginBottom: size.getHeightSize(31),
        }}
      >
        <PostActions
          noOfComments={'99k'}
          noOfLikes={'99k'}
          noOfRetweet={'99k'}
          paddingHorizontal={16}
          showShareIcon
        />
      </View>
    </SafeAreaView>
  );
};

export default ViewImageScreen;
