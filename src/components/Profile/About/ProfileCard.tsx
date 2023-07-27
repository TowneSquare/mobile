import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  Pressable,
  ImageBackground,
} from 'react-native';
import React from 'react';
import { appColor } from '../../../constants';
import { useFonts } from 'expo-font';
import { fonts } from '../../../constants';
import { images } from '../../../constants';
import { sizes } from '../../../utils';
import Info from '../../../../assets/images/svg/Info';
import { useAppSelector } from '../../../controller/hooks';
import PurpleBadge from '../../../../assets/images/svg/PurpleBadge';
import GreenBadge from '../../../../assets/images/svg/GreenBadge';
import BlueBadge from '../../../../assets/images/svg/BlueBadge';
import TowneSquareProfileLogo from '../../../../assets/images/svg/TowneSquareProfileLogo';
import { LinearGradient } from 'expo-linear-gradient';
import TownesquareGradient from '../../../../assets/images/svg/TownesquareGradient';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  NAME: string;
  NICKNAME: string;
  APTOS_DOMAIN_NAME: string;
  DATE: string;
  FOLLOWING: string;
  FOLLOWERS: string;
  COMMUNITIES: string;
  POST: string;
}

const ProfileCard = ({
  APTOS_DOMAIN_NAME,
  NAME,
  NICKNAME,
  DATE,
  COMMUNITIES,
  FOLLOWERS,
  FOLLOWING,
  POST,
}: Props) => {
  const profilePics = useAppSelector(
    (state) => state.USER.details.profileImage
  );
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  return (
    <View style={[styles.view1]}>
      <View style={{}}>
        <View
          style={{
            position: 'relative',
            backgroundColor: '#9D9D9D',

            borderRadius: 10,
          }}
        >
          <View
            style={{
              position: 'relative',
              backgroundColor: '#060606',

              borderRadius: 10,
              marginTop: size.getHeightSize(1),
            }}
          >
            <LinearGradient
              colors={[
                '#3D4043',
                '#292D30',
                '#313436',
                '#292B2C',
                '#292A2C',
                '#111214',
              ]}
              locations={[0.0152, 0.3642, 0.479, 0.5846, 0.724, 1]}
              start={[-0.18, 0.01]}
              end={[0.7, 0.99]}
              style={{
                paddingHorizontal: size.getWidthSize(16),
                paddingVertical: size.getHeightSize(16),

                borderRadius: 10,
                marginBottom: size.getHeightSize(2),
              }}
            >
              <Image
                source={images.profileVector}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  marginTop: size.getHeightSize(16),
                  height: size.getHeightSize(185),
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}
                resizeMode="cover"
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingLeft: size.getWidthSize(1.5),
                    gap: size.getWidthSize(4),
                  }}
                >
                  <TowneSquareProfileLogo />
                  <TownesquareGradient
                    style={{ marginTop: size.getHeightSize(3) }}
                  />
                </View>
                <View
                  style={{ flexDirection: 'row', gap: size.getWidthSize(8) }}
                >
                  <PurpleBadge />
                  <GreenBadge />
                  <BlueBadge />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: size.getWidthSize(12),
                  marginTop: size.getHeightSize(16),
                }}
              >
                {profilePics ? (
                  <View style={styles.imageShadow}>
                    <Image
                      style={styles.image}
                      source={{ uri: profilePics }}
                      resizeMode="cover"
                    />
                  </View>
                ) : (
                  <Image
                    style={{ borderRadius: 50 }}
                    source={images.pfp_avatar}
                  />
                )}

                <View style={{}}>
                  <Text
                    style={{
                      color: appColor.kTextColor,
                      fontFamily: 'Outfit-SemiBold',
                      fontSize: size.fontSize(16),
                      lineHeight: size.getHeightSize(21),
                    }}
                  >
                    {NAME}
                  </Text>
                  <Text
                    style={{
                      color: appColor.kGrayscale,
                      fontSize: size.fontSize(16),
                      fontFamily: 'Outfit-Regular',
                      lineHeight: size.getHeightSize(21),
                    }}
                  >
                    @{NICKNAME}
                  </Text>
                  <Text
                    style={{
                      color: appColor.kSecondaryButtonColor,
                      fontFamily: 'Outfit-SemiBold',
                      fontSize: size.fontSize(16),
                    }}
                  >
                    {APTOS_DOMAIN_NAME}
                  </Text>
                </View>
              </View>
              <View style={{ marginTop: 25, alignItems: 'flex-end' }}>
                <Text
                  style={{
                    fontFamily: 'Outfit-SemiBold',
                    color: '#E1E1E1',
                    fontSize: size.fontSize(14),
                    letterSpacing: 0.44,
                  }}
                >{`REGISTERED SINCE ${DATE}`}</Text>
              </View>
            </LinearGradient>
          </View>
        </View>
      </View>

      <View style={styles.view2}>
        <View style={styles.view2Box}>
          <Text style={styles.view2TextUp}>{FOLLOWING}</Text>
          <Text style={styles.view2TextDown}>Following</Text>
        </View>
        <View style={styles.view2Box}>
          <Text style={styles.view2TextUp}>{FOLLOWERS}</Text>
          <Text style={styles.view2TextDown}>Followers</Text>
        </View>
        <View style={styles.view2Box}>
          <Text style={styles.view2TextUp}>{POST}</Text>
          <Text style={styles.view2TextDown}>Post</Text>
        </View>
        <View style={styles.view2Box}>
          <Text style={styles.view2TextUp}>{COMMUNITIES}</Text>
          <Text style={styles.view2TextDown}>Communities</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileCard;
const styles = StyleSheet.create({
  view1: {
    borderRadius: 10,
    marginTop: size.getHeightSize(16),
    // borderTopWidth: 1,
    // shadowColor: appColor.kGrayscale,
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.5,
    // shadowRadius: 20,
    // elevation: 51,
    backgroundColor: appColor.kgrayDark2,
  },
  text: {
    color: appColor.kGrayscale,
    fontFamily: 'Outfit-Bold',
    paddingLeft: 5,
  },
  shadowProp: {
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  view2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: size.getHeightSize(8),
    marginHorizontal: size.getWidthSize(8),
    paddingHorizontal: size.getWidthSize(8),
  },
  view2Box: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2TextUp: {
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
    fontSize: size.fontSize(16),
  },
  view2TextDown: {
    fontFamily: 'Outfit-Regular',
    color: appColor.kGrayscale,
    fontSize: size.fontSize(14),
  },
  aboutDiv: {
    marginVertical: 20,
  },
  aboutHeader: {
    color: appColor.kTextColor,
    fontFamily: 'Outfit-Bold',
    fontSize: size.fontSize(20),
    paddingBottom: 10,
  },
  aboutText: {
    color: appColor.kTextColor,
    fontFamily: 'Outfit-Regular',
  },
  focusedTab: {
    backgroundColor: appColor.kSecondaryButtonColor,
    flex: 1,
    paddingVertical: size.getHeightSize(8),
    justifyContent: 'center',
    marginHorizontal: size.getWidthSize(4),
    borderRadius: 40,
    height: size.getHeightSize(39),
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
  imageContainer: {},
  image: {
    width: size.getHeightSize(84),
    height: size.getHeightSize(84),
    borderRadius: 200,
    marginBottom: size.getHeightSize(2),
  },
  imageShadow: {
    width: size.getHeightSize(84),
    borderRadius: 200,
    backgroundColor: 'white',
  },
});
