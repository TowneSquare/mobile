import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appColor, images } from '../../../constants';
import { updateHasCreatedCommunity } from '../../../controller/CommunityController';
import { useAppDispatch } from '../../../controller/hooks';
import { sizes } from '../../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

const CreateCommunitySuccessScreen = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  return (
    <SafeAreaView>
      <ImageBackground
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        resizeMode="cover"
        source={images.background3}
      >
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: size.getWidthSize(16),
          }}
        >
          <Text style={styles.context2}>Welcome to</Text>
          <View
            style={{
              marginTop: size.getHeightSize(20),
              height: size.getHeightSize(131.125),
              width: size.getWidthSize(133.509),
              alignSelf: 'center',
            }}
          >
            <Image
              source={images.MainAvatar}
              style={{
                alignSelf: 'center',
                height: '100%',
                width: '100%',
                borderRadius: 8,
              }}
            />
          </View>
          <Text style={styles.title}>Community X</Text>
          <Text
            style={{
              color: appColor.primaryLight,
              fontSize: size.fontSize(29),
              fontFamily: 'Outfit-Bold',
              textAlign: 'center',
              marginTop: size.getHeightSize(48),
              lineHeight: size.getHeightSize(37),
            }}
          >
            Well done!
          </Text>
          <Text
            style={{
              color: appColor.kTextColor,
              fontSize: size.fontSize(20),
              fontFamily: 'Outfit-Bold',
              textAlign: 'center',
              marginTop: size.getHeightSize(16),
              lineHeight: size.getHeightSize(24),
              letterSpacing: 0.4,
            }}
          >
            Community created successfully!
          </Text>
          <Text
            style={{
              color: appColor.kTextColor,
              fontSize: size.fontSize(16),
              fontFamily: 'Outfit-Regular',
              textAlign: 'center',
              marginTop: size.getHeightSize(48),
              lineHeight: size.getHeightSize(21),
            }}
          >
            Engage, share, and grow with like-minded members. Your journey
            begins here!
          </Text>
          <Pressable
            onPress={() => {
              dispatch(updateHasCreatedCommunity(true));
              navigation.dispatch(
                CommonActions.navigate({
                  name: 'DrawerNavigation',
                  params: {
                    screen: 'Tabs',
                    params: {
                      screen: 'Community',
                    },
                  },
                })
              );
            }}
            style={{
              backgroundColor: appColor.kWhiteColor,
              alignSelf: 'center',

              borderRadius: 40,
              marginTop: size.heightSize(48),
              justifyContent: 'center',
              paddingVertical: size.getHeightSize(14),
              paddingHorizontal: size.widthSize(59),
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                color: appColor.kButtonTextColor,
                fontSize: size.fontSize(16),
                fontFamily: 'Outfit-SemiBold',

                letterSpacing: 0.16,
                lineHeight: size.getHeightSize(20),
              }}
            >
              LET'S GOOO!
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default CreateCommunitySuccessScreen;
const styles = StyleSheet.create({
  context2: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Bold',
    textAlign: 'center',
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
  },
  title: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(32),
    fontFamily: 'Outfit-Bold',
    textAlign: 'center',
    marginTop: size.getHeightSize(20),
    lineHeight: size.getHeightSize(40),
  },
});
