import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
const { height, width } = Dimensions.get('window');
import { sizes } from '../../utils';
const size = new sizes(height, width);
import ChannelIcon from '../../../assets/images/svg/ChannelIcon';
import { DrawerActions } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import ChanelPlusIcon from '../../../assets/images/svg/ChannelPlusIcon';
import ChannelGroupImage1 from '../../../assets/images/svg/ChannelGroupImage1';
import ChannelImage2 from '../../../assets/images/svg/ChannelImage2';
import ChannelImage3 from '../../../assets/images/svg/ChannelImage3';
import ChannelImage4 from '../../../assets/images/svg/ChannelImage4';
import ChannelImage5 from '../../../assets/images/svg/ChannelImage5';
import ArrowRight from '../../../assets/images/svg/ArrowRight';
import PlusIcon from '../../../assets/images/svg/PLusIcon';
import { useAppDispatch } from '../../controller/hooks';
import { updateCreateChannelBottomSheetVisibility } from '../../controller/CommunityController';
import { appColor, images } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import ChannelList from './ChannelList';
import Constants from 'expo-constants';

const CommunityDrawerContent = () => {
  const dispatch = useAppDispatch();
  const closeDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appColor.kgrayDark2,
      }}
    >
      <View style={styles.headerContainer}>
        <AntDesign
          name="arrowleft"
          color={appColor.kWhiteColor}
          size={size.fontSize(24)}
          onPress={closeDrawer}
        />
        <Text style={styles.headerTitle}>My communities</Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'flex-start',
        }}
      >
        <View
          style={{
            paddingTop: size.getHeightSize(16),
            backgroundColor: appColor.feedBackground,
          }}
        >
          <ScrollView>
            <View style={styles.iconColumn}>
              <ChannelIcon size={size.getHeightSize(48)} />
              <ChanelPlusIcon size={size.getHeightSize(48)} />
            </View>
            <View
              style={{
                flex: 1,
                paddingTop: size.getHeightSize(12),
                gap: size.getHeightSize(4),
                alignItems: 'center',
              }}
            >
              <ChannelGroupImage1 size={size.getHeightSize(48)} />
              <ChannelImage2 size={size.getHeightSize(48)} />
              <ChannelImage3 size={size.getHeightSize(48)} />
              <ChannelImage4 size={size.getHeightSize(48)} />
              <ChannelImage5 size={size.getHeightSize(48)} />
              <ChannelGroupImage1 size={size.getHeightSize(48)} />
              <ChannelImage2 size={size.getHeightSize(48)} />
              <ChannelImage3 size={size.getHeightSize(48)} />
              <ChannelImage4 size={size.getHeightSize(48)} />
              <ChannelImage5 size={size.getHeightSize(48)} />
              <ChannelGroupImage1 size={size.getHeightSize(48)} />
              <ChannelImage2 size={size.getHeightSize(48)} />
              <ChannelImage3 size={size.getHeightSize(48)} />
              <ChannelImage4 size={size.getHeightSize(48)} />
              <ChannelImage5 size={size.getHeightSize(48)} />
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <ScrollView
            style={{
              flex: 1,
            }}
          >
            <View
              style={{
                height: size.getHeightSize(116),
                width: '100%',
              }}
            >
              <Image
                source={images.SiothianCommunity}
                style={{
                  height: '100%',
                  width: '100%',
                }}
                resizeMode="cover"
              />
            </View>
            <Text style={styles.communityName}>Community X</Text>
            <View style={styles.view3}>
              <View
                style={{
                  flexDirection: 'row',
                }}
              >
                <Image style={styles.imageStyle} source={images.profileImage} />
                <Image
                  style={styles.image2}
                  source={images.myfeedProfileImage}
                />
                <Image style={styles.image3} source={images.stackImage} />
              </View>
              <Text style={styles.memberNo}>13k members</Text>
            </View>
            <View style={styles.homeContainer}>
              <Text style={styles.homeText}>Home</Text>
              <ArrowRight size={size.getHeightSize(24)} />
            </View>
            <View style={styles.channelContainer}>
              <Text style={styles.channelText}>CHANNELS</Text>
              <PlusIcon
                onPress={() =>
                  dispatch(updateCreateChannelBottomSheetVisibility(true))
                }
                size={size.getHeightSize(24)}
              />
            </View>
            <View
              style={{
                gap: size.getHeightSize(29.5),
                marginTop: size.getHeightSize(17),
              }}
            >
              <ChannelList />
              <ChannelList />
              <ChannelList />
              <ChannelList />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default CommunityDrawerContent;
const styles = StyleSheet.create({
  headerContainer: {
    marginTop: Constants.statusBarHeight,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: size.getHeightSize(20),
    paddingHorizontal: size.getWidthSize(16),
    gap: size.getWidthSize(8),
  },
  headerTitle: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
    flex: 1,
    letterSpacing: 0.4,
  },
  iconColumn: {
    gap: size.getHeightSize(12),
    borderBottomWidth: size.getHeightSize(2),
    borderBottomColor: appColor.kgrayDark2,
    paddingBottom: size.getHeightSize(12),
    paddingHorizontal: size.getWidthSize(8),
    marginHorizontal: size.getWidthSize(8),
  },
  communityName: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-Bold',
    textAlign: 'left',
    paddingHorizontal: size.getWidthSize(16),
    marginVertical: size.getHeightSize(8),
  },
  view3: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: size.getWidthSize(16),
    gap: size.getWidthSize(8),
  },
  imageStyle: {
    height: size.getHeightSize(26),
    width: size.getHeightSize(26),
    borderWidth: 2,
    borderColor: appColor.blackColor,
    borderRadius: 100,
  },
  image2: {
    position: 'absolute',
    height: size.getHeightSize(26),
    width: size.getHeightSize(26),
    left: size.getWidthSize(10),
    borderWidth: 2,
    borderColor: appColor.blackColor,
    borderRadius: 100,
  },
  image3: {
    position: 'absolute',
    height: size.getHeightSize(26),
    width: size.getHeightSize(26),
    left: size.getWidthSize(20),
    borderWidth: 2,
    borderColor: appColor.blackColor,
    borderRadius: 100,
  },
  memberNo: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Regular',
    marginLeft: size.getWidthSize(16),
  },
  homeContainer: {
    marginTop: size.getHeightSize(18),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: appColor.grayDark,
    paddingHorizontal: size.getWidthSize(16),
    flexDirection: 'row',
    gap: size.getWidthSize(8),
    paddingVertical: size.getWidthSize(13.5),
    alignItems: 'center',
  },
  homeText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Regular',
    textAlign: 'left',
    flex: 1,
  },
  channelContainer: {
    borderColor: appColor.grayDark,
    paddingHorizontal: size.getWidthSize(16),
    flexDirection: 'row',
    gap: size.getWidthSize(8),
    paddingTop: size.getWidthSize(16),
    alignItems: 'center',
    paddingBottom: size.getWidthSize(8),
  },
  channelText: {
    color: appColor.kGrayscale,
    fontSize: size.fontSize(13),
    lineHeight: size.getHeightSize(16),
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'left',
    flex: 1,
  },
  channelView: {
    paddingHorizontal: size.getWidthSize(16),
    flexDirection: 'row',
    gap: size.getWidthSize(8),
    marginTop: size.getWidthSize(8),
    alignItems: 'flex-start',
  },
  channelName: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'left',
    flex: 1,
  },
  channelTitleView: {
    gap: size.getHeightSize(17),
    paddingHorizontal: size.getWidthSize(16),
    marginTop: size.getHeightSize(12.5),
  },
  channelTitle: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Medium',
  },
});
