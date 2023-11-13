import {
  Dimensions,
  ImageBackground,
  Text,
  StyleSheet,
  View,
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
}
const Poster2 = ({ referralCode }: Props) => {
  return (
    <View style={styles.view}>
      <ImageBackground source={images.poster2} style={styles.backgroundImage}>
        <View
          style={{
            borderWidth: 1.031,
            paddingVertical: size.getHeightSize(3.09),
            paddingHorizontal: size.getWidthSize(3.09),
            borderColor: appColor.kTextColor,
            borderRadius: 4.126,
            marginTop: size.getHeightSize(10.57),
            width: size.getWidthSize(168.447),
            alignSelf: 'center',
          }}
        >
          <Text style={styles.text}>Join me on Townesquare!</Text>
        </View>
        <Text style={styles.text2}>
          The social “everything” app that allows you to make and earn!
        </Text>
        <View style={styles.view2}>
          <Text style={styles.text3}>REFERRAL CODE</Text>
          <Text style={styles.code}>{referralCode.toUpperCase()}</Text>
          <View style={styles.view4}>
            <Text style={styles.description}>Use my referral code and get</Text>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
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
              ></View>
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
            <Text style={styles.description}>TS Points when you signup!</Text>
          </View>
        </View>
        <View style={{ flex: 1 }} />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
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
          <AppleStoreIcon
            width={size.getWidthSize(43.6)}
            height={size.getHeightSize(12.94)}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Poster2;
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
    marginTop: size.getHeightSize(16),
  },
  backgroundImage: {
    width: size.getWidthSize(263.33),
    height: size.getHeightSize(197.5),
    paddingHorizontal: size.getWidthSize(5),
  },
  text: {
    fontSize: size.fontSize(10),
    fontFamily: 'Outfit-Bold',
    color: '#4A2F83',
    lineHeight: size.getHeightSize(12),
    textAlign: 'center',
    paddingVertical: size.getHeightSize(6.19),
    backgroundColor: '#00EEFD',
    borderRadius: 4.126,
  },
  text2: {
    fontSize: size.fontSize(9.258),
    fontFamily: 'Outfit-Medium',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(12),
    textAlign: 'center',
    width: size.getWidthSize(150),
    alignSelf: 'center',
    marginVertical: size.getHeightSize(13.52),
  },
  view2: {
    paddingVertical: size.getHeightSize(8.23),
    paddingHorizontal: size.getWidthSize(8.23),
    borderRadius: 4.886,
    borderWidth: 1.031,
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
  text3: {
    fontSize: size.fontSize(5.143),
    fontFamily: 'Outfit-Regular',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(6),
    textAlign: 'center',
  },
  code: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Medium',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(19),
    textAlign: 'center',
  },
  view4: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: size.getHeightSize(4.11),
  },

  description: {
    fontSize: size.fontSize(9.258),
    fontFamily: 'Outfit-Medium',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(11),
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
    fontSize: size.fontSize(8.417),
    fontFamily: 'Outfit-Medium',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(11),
  },
});
