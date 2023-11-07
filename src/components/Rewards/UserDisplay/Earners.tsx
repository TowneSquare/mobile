import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { appColor, images } from '../../../constants';
import { sizes } from '../../../utils';

import { Avatar } from 'react-native-elements';
import Queen from '../../../../assets/images/svg/Queen';
import FirstEarnerIcon from '../../../../assets/images/svg/FirstEarnerIcon';
import { LinearGradient } from 'expo-linear-gradient';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  username: string;
  name: string;
  rank: number;
}
const colors = ['#FEC84B', '#FECB60', '#FDCD76', '#F79009'];
const numberOfColors = colors.length;
const stepSize = 1 / (numberOfColors - 1);
const locations = Array.from(
  { length: numberOfColors },
  (_, index) => index * stepSize
);
const Earners = ({ name, rank, username }: Props) => {
  let content: JSX.Element;
  switch (rank) {
    case 1:
      content = (
        <LinearGradient
          colors={colors}
          locations={[0.0101, 0.1669, 0.2476, 0.8256]}
          style={styles.gradient}
        >
          <View
            style={[
              styles.view,
              {
                backgroundColor: appColor.feedBackground,
                paddingVertical: size.getHeightSize(13.5),
                borderRadius: 10,
              },
            ]}
          >
            <LinearGradient
              locations={[0.0101, 0.1669, 0.2476, 0.8256]}
              colors={colors}
              style={[
                styles.numberView,
                {
                  borderWidth: size.getHeightSize(1.125),
                  borderColor: '#FEDF89',
                },
              ]}
            >
              <Text style={styles.numberText}>{rank}</Text>
            </LinearGradient>
            <View style={styles.parentContainer}>
              <FirstEarnerIcon
                size={size.getHeightSize(22)}
                style={styles.firstEarner}
              />
              <Avatar
                rounded
                size={size.getHeightSize(32)}
                source={images.profileImage}
              />
              <View style={styles.nameConatiner}>
                <View style={styles.container}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.name}
                  >
                    User Name
                  </Text>
                  <Queen />
                </View>
                <Text style={styles.username}>@username</Text>
              </View>
            </View>
            <Text style={styles.reward}>$3,921.99</Text>
          </View>
        </LinearGradient>
      );
      break;
    case 2:
      content = (
        <LinearGradient
          colors={['#D7D9DB', '#9098A3']}
          locations={[-0.3276, 0.736]}
          style={styles.gradient}
        >
          <View
            style={[
              styles.view,
              {
                backgroundColor: appColor.feedBackground,
                paddingVertical: size.getHeightSize(13.5),
                borderRadius: 10,
              },
            ]}
          >
            <LinearGradient
              colors={['#D7D9DB', '#9098A3']}
              locations={[-0.3276, 0.736]}
              style={[
                styles.numberView,
                {
                  borderWidth: size.getHeightSize(1.125),
                  borderColor: '#FFFFFF',
                },
              ]}
            >
              <Text style={styles.numberText}>{rank}</Text>
            </LinearGradient>
            <View style={styles.parentContainer}>
              <Avatar
                rounded
                size={size.getHeightSize(32)}
                source={images.profileImage}
              />
              <View style={styles.nameConatiner}>
                <View style={styles.container}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.name}
                  >
                    User Name
                  </Text>
                  <Queen />
                </View>
                <Text style={styles.username}>@username</Text>
              </View>
            </View>
            <Text style={styles.reward}>$3,921.99</Text>
          </View>
        </LinearGradient>
      );
      break;
    case 3:
      content = (
        <LinearGradient
          colors={['#FFB08E', '#F75F09']}
          locations={[0.0101, 0.8256]}
          style={styles.gradient}
        >
          <View
            style={[
              styles.view,
              {
                backgroundColor: appColor.feedBackground,
                paddingVertical: size.getHeightSize(13.5),
                borderRadius: 10,
              },
            ]}
          >
            <LinearGradient
              colors={['#FFB08E', '#F75F09']}
              locations={[0.0101, 0.8256]}
              style={[
                styles.numberView,
                {
                  borderWidth: size.getHeightSize(1.125),
                  borderColor: '#FFDFCD',
                },
              ]}
            >
              <Text style={styles.numberText}>{rank}</Text>
            </LinearGradient>
            <View style={styles.parentContainer}>
              <Avatar
                rounded
                size={size.getHeightSize(32)}
                source={images.profileImage}
              />
              <View style={styles.nameConatiner}>
                <View style={styles.container}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.name}
                  >
                    User Name
                  </Text>
                  <Queen />
                </View>
                <Text style={styles.username}>@username</Text>
              </View>
            </View>
            <Text style={styles.reward}>$3,921.99</Text>
          </View>
        </LinearGradient>
      );
      break;
    default:
      content = (
        <View style={styles.view}>
          <View style={styles.numberView}>
            <Text style={styles.numberText}>{rank}</Text>
          </View>
          <View style={styles.parentContainer}>
            <Avatar
              rounded
              size={size.getHeightSize(32)}
              source={images.profileImage}
            />
            <View style={styles.nameConatiner}>
              <View style={styles.container}>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={styles.name}
                >
                  User Name
                </Text>
                <Queen />
              </View>
              <Text style={styles.username}>@username</Text>
            </View>
          </View>
          <Text style={styles.reward}>$3,921.99</Text>
        </View>
      );
  }
  return content;
};

export default Earners;
const styles = StyleSheet.create({
  parentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  nameConatiner: {
    flex: 1,
    marginLeft: size.getWidthSize(8),
  },
  name: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
  },
  username: {
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    color: appColor.kgrayColor,
    lineHeight: size.getHeightSize(18),
  },
  container: {
    flexDirection: 'row',
    gap: size.getWidthSize(4),
    width: size.getWidthSize(153),
    alignItems: 'center',
  },
  view: {
    width: '100%',
    paddingVertical: size.getHeightSize(8),
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
    paddingHorizontal: size.getWidthSize(12),
  },
  numberView: {
    width: size.getWidthSize(26),
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: appColor.kGrayLight3,
  },
  numberText: {
    color: appColor.kTextColor,
    letterSpacing: 0.44,
    fontSize: size.fontSize(11),
    lineHeight: size.getHeightSize(18),
    fontFamily: 'Outfit-SemiBold',
  },
  reward: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Medium',
  },
  gradient: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
    padding: size.getWidthSize(2),
    borderRadius: 10,
  },
  firstEarner: {
    position: 'absolute',
    top: size.getHeightSize(-14),
    left: size.getWidthSize(-2.75),
    zIndex: 1,
  },
});
