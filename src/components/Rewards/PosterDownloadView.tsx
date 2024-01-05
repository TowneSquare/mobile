import {
  Dimensions,
  ImageBackground,
  Text,
  StyleSheet,
  View,
  Pressable,
} from 'react-native';
import { appColor, images } from '../../constants';
import { sizes } from '../../utils';
import PointsIcon from '../../../assets/images/svg/Reward/PointsIcon';
import AppleStoreIcon from '../../../assets/images/svg/Reward/AppleStoreIcon';
import PlayStoreIcon from '../../../assets/images/svg/Reward/PlaystoreIcon';
import TowneSquareLogo from '../../../assets/images/svg/Reward/TownesquareLogo';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  referralCode: string;
  posterToDownload: 'poster1' | 'poster2';
}
const PosterDownloadView = ({ referralCode, posterToDownload }: Props) => {
  let content: JSX.Element;
  switch (posterToDownload) {
    case 'poster1':
      content = (
        <View style={styles.view}>
          <ImageBackground
            source={images.poster1}
            style={styles.backgroundImage}
          >
            <Text style={styles.text}>Join me on Townesquare!</Text>
            <View style={styles.view5}>
              <Text style={styles.text2}>
                The social “everything” app that allows you to make and earn!
              </Text>
            </View>
            <View style={styles.view2}>
              <Text style={styles.text3}>REFERRAL CODE</Text>
              <Text style={styles.code}>{referralCode.toUpperCase()}</Text>
              <View style={styles.view4}>
                <Text style={styles.description}>
                  Use my referral code and get
                </Text>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    marginTop: size.getHeightSize(4.27),
                  }}
                >
                  <View style={styles.refferalView}></View>
                  <View
                    style={[
                      styles.refferalView,
                      {
                        transform: [{ rotate: '-5.495deg' }],
                        position: 'absolute',
                      },
                    ]}
                  />
                  <View
                    style={[
                      styles.refferalView,
                      {
                        transform: [{ rotate: '6.11deg' }],
                        position: 'absolute',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: size.getWidthSize(2.28),
                      },
                    ]}
                  >
                    <Text style={styles.point}>500</Text>
                    <PointsIcon size={size.getHeightSize(6.99)} />
                  </View>
                </View>
                <Text style={styles.description}>
                  TS Points when you signup!
                </Text>
              </View>
            </View>
            <View style={{ flex: 1 }} />

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                marginBottom: size.getHeightSize(4.29),
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: size.getWidthSize(3.44),
                  flex: 1,
                }}
              >
                <TowneSquareLogo size={size.getHeightSize(15.424)} />
                <Text style={styles.name}>townesquare</Text>
              </View>
              <PlayStoreIcon
                width={size.getWidthSize(50.98)}
                height={size.getHeightSize(15.1)}
                style={{
                  marginRight: size.getWidthSize(4.15),
                }}
              />
              <View
                style={{
                  gap: size.getHeightSize(2.2),
                }}
              >
                <Text style={styles.comingsoon}>COMING SOON</Text>
                <AppleStoreIcon
                  width={size.getWidthSize(50.98)}
                  height={size.getHeightSize(15.1)}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
      );
      break;

    case 'poster2':
      content = (
        <View style={poster2Styles.view}>
          <ImageBackground
            source={images.poster2}
            style={poster2Styles.backgroundImage}
          >
            <View
              style={{
                borderWidth: 1.031,
                paddingVertical: size.getHeightSize(3.09),
                paddingHorizontal: size.getWidthSize(3.09),
                borderColor: appColor.kTextColor,
                borderRadius: 4.526,
                marginTop: size.getHeightSize(10.57),
                width: size.getWidthSize(168.447),
                alignSelf: 'center',
              }}
            >
              <Text style={poster2Styles.text}>Join me on Townesquare!</Text>
            </View>
            <Text style={poster2Styles.text2}>
              The social “everything” app that allows you to make and earn!
            </Text>
            <View style={poster2Styles.view2}>
              <Text style={styles.text3}>REFERRAL CODE</Text>
              <Text style={styles.code}>{referralCode.toUpperCase()}</Text>
              <View style={styles.view4}>
                <Text style={styles.description}>
                  Use my referral code and get
                </Text>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    marginTop: size.getHeightSize(4.27),
                  }}
                >
                  <View style={poster2Styles.refferalView}></View>
                  <View
                    style={[
                      poster2Styles.refferalView,
                      {
                        transform: [{ rotate: '-5.495deg' }],
                        position: 'absolute',
                      },
                    ]}
                  ></View>
                  <View
                    style={[
                      poster2Styles.refferalView,
                      {
                        transform: [{ rotate: '6.11deg' }],
                        position: 'absolute',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: size.getWidthSize(2.28),
                      },
                    ]}
                  >
                    <Text style={styles.point}>500</Text>
                    <PointsIcon size={size.getHeightSize(6.99)} />
                  </View>
                </View>
                <Text style={styles.description}>
                  TS Points when you signup!
                </Text>
              </View>
            </View>
            <View style={{ flex: 1 }} />

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                marginBottom: size.getHeightSize(4.29),
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: size.getWidthSize(2.96),
                  flex: 1,
                }}
              >
                <TowneSquareLogo size={size.getHeightSize(13.64)} />
                <Text style={styles.name}>townesquare</Text>
              </View>
              <PlayStoreIcon
                width={size.getWidthSize(43.6)}
                height={size.getHeightSize(12.94)}
                style={{
                  marginRight: size.getWidthSize(4.15),
                }}
              />
              <View
                style={{
                  gap: size.getHeightSize(2.2),
                }}
              >
                <Text style={styles.comingsoon}>COMING SOON</Text>
                <AppleStoreIcon
                  width={size.getWidthSize(50.98)}
                  height={size.getHeightSize(15.1)}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
      );
      break;
  }

  return content;
};

export default PosterDownloadView;

const styles = StyleSheet.create({
  refferalView: {
    width: size.getWidthSize(44.442),
    minHeight: size.getHeightSize(17.644),
    borderRadius: 10,
    borderWidth: 0.666,
    borderColor: appColor.primaryLight,
    backgroundColor: appColor.feedBackground,
    transform: [{ rotate: '-15.895deg' }],
  },
  view: {
    // paddingHorizontal: size.getWidthSize(16),
  },
  backgroundImage: {
    width: size.getWidthSize(307.33),
    height: size.getHeightSize(230.5),
    paddingHorizontal: size.getWidthSize(5),
  },
  text: {
    fontSize: size.fontSize(11.705),
    fontFamily: 'Outfit-Bold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(14),
    textAlign: 'center',
    marginTop: size.getHeightSize(23.11),
  },
  text2: {
    fontSize: size.fontSize(10.805),
    fontFamily: 'Outfit-Medium',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(12.966),
    textAlign: 'center',
  },
  view5: {
    width: size.getWidthSize(175.276),
    alignSelf: 'center',
    marginTop: size.getHeightSize(2.51),
    minHeight: size.getHeightSize(54),
    marginBottom: size.getHeightSize(5.1),
    justifyContent: 'center',
  },
  view2: {
    paddingVertical: size.getHeightSize(9.6),
    paddingHorizontal: size.getWidthSize(8.23),
    borderRadius: 5.702,
    borderWidth: 0.3,
    borderColor: 'rgba(255, 255, 255, 0.92)',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5.1432294845581055,
    },
    shadowOpacity: 0.14,
    shadowRadius: 5.1432294845581055,
    width: size.getWidthSize(214.73),
    alignSelf: 'center',
  },
  text3: {
    fontSize: size.fontSize(6),
    fontFamily: 'Outfit-Regular',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(7),
    textAlign: 'center',
  },
  code: {
    fontSize: size.fontSize(18.608),
    fontFamily: 'Outfit-Medium',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(22),
    textAlign: 'center',
  },
  view4: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: size.getHeightSize(4.8),
  },

  description: {
    fontSize: size.fontSize(10.805),
    fontFamily: 'Outfit-Medium',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(13),
    flex: 1,
    textAlign: 'center',
  },
  point: {
    fontSize: size.fontSize(9.258),
    fontFamily: 'Outfit-Medium',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(11),
    textAlign: 'center',
  },
  name: {
    fontSize: size.fontSize(9.823),
    fontFamily: 'Outfit-Medium',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(11),
  },
  comingsoon: {
    fontSize: size.fontSize(4.202),
    fontFamily: 'Outfit-Medium',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(5),
    textAlign: 'center',
    letterSpacing: 0.042,
  },
});
const poster2Styles = StyleSheet.create({
  refferalView: {
    width: size.getWidthSize(44.442),
    minHeight: size.getHeightSize(17.644),
    borderRadius: 10,
    borderWidth: 0.666,
    borderColor: appColor.primaryLight,
    backgroundColor: appColor.feedBackground,
    transform: [{ rotate: '-15.895deg' }],
  },
  view: {
    // paddingHorizontal: size.getWidthSize(16),
  },
  backgroundImage: {
    width: size.getWidthSize(307.33),
    height: size.getHeightSize(230.5),
    paddingHorizontal: size.getWidthSize(5),
  },
  text: {
    fontSize: size.fontSize(11.705),
    fontFamily: 'Outfit-Bold',
    color: '#4A2F83',
    lineHeight: size.getHeightSize(14),
    textAlign: 'center',
    paddingVertical: size.getHeightSize(6.8),
    backgroundColor: '#00EEFD',
    borderRadius: 4.526,
  },
  text2: {
    fontSize: size.fontSize(10.805),
    fontFamily: 'Outfit-Medium',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(12.966),
    textAlign: 'center',
    width: size.getWidthSize(175.276),
    alignSelf: 'center',
    marginVertical: size.getHeightSize(15.52),
  },
  view2: {
    paddingVertical: size.getHeightSize(9.6),
    paddingHorizontal: size.getWidthSize(8.23),
    borderRadius: 5.702,
    borderWidth: 0.3,
    borderColor: '#65F6FF',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5.1432294845581055,
    },
    shadowOpacity: 0.14,
    shadowRadius: 5.1432294845581055,
    width: size.getWidthSize(214.73),
    alignSelf: 'center',
  },
});
