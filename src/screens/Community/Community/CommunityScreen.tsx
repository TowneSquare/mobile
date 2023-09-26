import React from 'react';
import { Text, View, StyleSheet, Dimensions, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appColor, fonts, images } from '../../../constants';
import { StatusBar } from 'expo-status-bar';
import CommunityTab from '../../../components/Community/Community/CommunityTab/CommunityTab';
import Camera from '../../../../assets/images/svg/Camera';
import { useFonts } from 'expo-font';
import BellIcon from '../../../../assets/images/svg/BellIcon';
import { Avatar } from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';
import CommunityStepCard from '../../../components/Community/Community/CommunityStepCard';
import { sizes } from '../../../utils';
import CommunityAvatar from '../../../../assets/images/svg/CommunityAvatar';
import CommunityHeader from '../../../shared/Community/CommunityHeader';
import CommunityFeed from '../../../components/Community/Community/CommunityFeed';
import CommunityAbout from '../../../components/Community/Community/CommunityAbout';
import { CommunityScreenProps } from '../../../navigations/NavigationTypes';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

const CommunityScreen = ({ navigation }: CommunityScreenProps) => {
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  const N0_OF_MEMBERS = 1;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <StatusBar style="light" backgroundColor={appColor.signUpBackground} />
      <CommunityHeader title="Community X" />
      <View
        style={{
          flex: 1,
        }}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <View style={styles.imgPlaceHolder}>
            <View style={styles.view1}>
              <Camera />
              <Text style={styles.upload}>Upload</Text>
            </View>
          </View>
          <View style={styles.view2}>
            <View>
              <CommunityAvatar
                size={size.getHeightSize(75)}
                style={styles.avatar}
              />
            </View>
            <Text style={styles.communityName}>Community X</Text>
            <BellIcon size={size.getHeightSize(20)} />
          </View>

          <View style={styles.stack}>
            <Avatar source={images.profileImage} rounded size={24} />
            <Text style={styles.member}>
              {N0_OF_MEMBERS > 1
                ? `${N0_OF_MEMBERS} members`
                : `${N0_OF_MEMBERS} member`}
            </Text>
          </View>
          <CommunityStepCard />
          <View
            style={{
              flex: 1,
              marginTop: size.getHeightSize(16),
            }}
          >
            <CommunityTab views={[<CommunityFeed />, <CommunityAbout />]} />
          </View>
        </ScrollView>
      </View>
      <Pressable
        onPress={() => navigation.navigate('CommunityInfoScreen')}
        style={[
          styles.createButton,
          {
            bottom: size.getHeightSize(116),
          },
        ]}
      >
        <AntDesign
          name="plus"
          color={appColor.kWhiteColor}
          size={size.fontSize(24)}
        />
        <Text style={styles.createText}>Join Community</Text>
      </Pressable>
      <Pressable
        onPress={() =>
          navigation.navigate('CreatePost', {
            whichPost: 'communityPost',
          })
        }
        style={styles.createButton}
      >
        <AntDesign
          name="plus"
          color={appColor.kWhiteColor}
          size={size.fontSize(24)}
        />
        <Text style={styles.createText}>Create Post</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imgPlaceHolder: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColor.grayDark,
    height: size.getHeightSize(124),
  },

  tab: {
    backgroundColor: 'transparent',
    flex: 1,
    paddingVertical: size.getHeightSize(12),
    justifyContent: 'center',
    paddingHorizontal: size.getWidthSize(4),
    borderRadius: 40,
  },
  view1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  upload: {
    color: appColor.klightPurple,
    fontFamily: 'Outfit-Regular',
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(24),
  },
  view2: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: size.getWidthSize(10),
    marginTop: size.getHeightSize(6),
    paddingRight: size.getWidthSize(16),
  },
  avatar: {
    position: 'absolute',
    bottom: size.getHeightSize(-24),
    marginLeft: size.getWidthSize(16),
  },
  communityName: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
    fontFamily: 'Outfit-Bold',
    marginLeft: size.getWidthSize(85),
    flex: 1,
  },
  stack: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: size.getHeightSize(18),
    gap: size.getWidthSize(8),
    marginLeft: size.getWidthSize(26),
  },
  member: {
    color: appColor.kWhiteColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Regular',
  },
  createButton: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    bottom: size.getHeightSize(42),
    right: size.getWidthSize(18),
    minHeight: size.getHeightSize(56),
    backgroundColor: appColor.kSecondaryButtonColor,
    borderRadius: 50,
    paddingHorizontal: size.getWidthSize(16),
    gap: size.getWidthSize(8),
  },
  createText: {
    color: appColor.kWhiteColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Regular',
  },
});

export default CommunityScreen;
