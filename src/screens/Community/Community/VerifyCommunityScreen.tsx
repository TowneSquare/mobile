import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  LogBox,
  Dimensions,
} from 'react-native';
import { VerifyCommunityScreenProps } from '../../../navigations/NavigationTypes';
import Header from '../../../shared/Feed/Header';
import { appColor, images, fonts } from '../../../constants';
import { sizes } from '../../../utils';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import XBg from '../../../../assets/images/svg/XBg';
import { Avatar } from 'react-native-elements';
import Info from '../../../../assets/images/svg/Info';
import CommunityVerifyIcon from '../../../../assets/images/svg/CommunityVerifyIcon';
import { useAppDispatch, useAppSelector } from '../../../controller/hooks';
import ConnectedIcon from '../../../../assets/images/svg/ConnectedIcon';
import { updateVerificationStatus } from '../../../controller/CommunityController';
export enum VerifyCommunityState {
  NOT_APPROVED,
  PENDING,
  APPROVED,
}
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const VerifyCommunityScreen = ({ navigation, route }) => {
  const [connected, setConnection] = useState(false);
  const [verified, setVerification] = useState(false);
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

  const dispatch = useAppDispatch();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const verificationStatus = useAppSelector(
    (state) => state.COMMUNITY.verificationStatus
  );

  const VerifyCommunity = () => {
    dispatch(updateVerificationStatus(VerifyCommunityState.PENDING));
    delay(100000);
    dispatch(updateVerificationStatus(VerifyCommunityState.APPROVED));
    // RemoveCard(index)
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <Header title="Verify Community" />
      <CommunityVerifyIcon
        size={size.getHeightSize(100)}
        style={{
          alignSelf: 'center',
          marginTop: size.getHeightSize(32),
        }}
      />
      <View
        style={{
          marginHorizontal: size.getWidthSize(16),
        }}
      >
        <Text
          style={{
            color: appColor.kTextColor,
            fontFamily: 'Outfit-Bold',
            fontSize: size.fontSize(29),
            lineHeight: size.getHeightSize(37),
            marginTop: size.getHeightSize(8),
            textAlign: 'center',
          }}
        >
          Verify Community X!
        </Text>
        <View
          style={{
            marginTop: size.getHeightSize(32),
            gap: size.getHeightSize(16),
            alignSelf: 'center',
          }}
        >
          <Text style={styles.text}>
            Verify your community and let users know that it’s authentic! More
            benefits coming soon!
          </Text>
          <Text style={styles.text}>
            In order to verify the community you need to connect community’s
            official Twitter account.
          </Text>
          <Text style={styles.text}>
            Verified communities will get a Verified badge once approved.
          </Text>
        </View>
        {/* Connected */}
        <Text
          style={{
            color: appColor.kWhiteColor,
            fontFamily: 'Outfit-Bold',
            fontSize: size.fontSize(20),
            marginTop: size.getHeightSize(32),
            letterSpacing: 0.4,
            lineHeight: size.getHeightSize(24),
            alignSelf: 'center',
          }}
        >
          Connect community's official Twitter account
        </Text>
        {!connected ? (
          <>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: size.getHeightSize(16),
                paddingHorizontal: size.getWidthSize(8),
              }}
            >
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: size.getWidthSize(16),
                }}
              >
                <XBg size={size.getHeightSize(45)} />
                <Text
                  style={{
                    color: appColor.kWhiteColor,
                    fontFamily: 'Outfit-SemiBold',
                    fontSize: size.fontSize(16),
                    lineHeight: size.getHeightSize(16),
                  }}
                >
                  X
                </Text>
              </View>
              <Pressable
                style={{
                  backgroundColor: appColor.kSecondaryButtonColor,
                  borderRadius: 40,
                  minHeight: size.getHeightSize(34),
                  paddingVertical: size.getHeightSize(7),
                  paddingHorizontal: size.getWidthSize(16),
                }}
                onPress={() => {
                  setConnection(true);
                }}
              >
                <Text
                  style={{
                    color: appColor.kWhiteColor,
                    fontFamily: 'Outfit-Medium',
                    fontSize: size.fontSize(16),
                    textAlign: 'center',
                    letterSpacing: 0.32,
                    lineHeight: size.getHeightSize(20),
                  }}
                >
                  Connect
                </Text>
              </Pressable>
            </View>
          </>
        ) : (
          <>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: size.getHeightSize(16),
                paddingHorizontal: size.getWidthSize(8),
              }}
            >
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: size.getWidthSize(16),
                }}
              >
                <Avatar
                  source={images.profileImage}
                  rounded
                  size={size.getHeightSize(44)}
                />
                <Text
                  style={{
                    color: appColor.kWhiteColor,
                    fontFamily: 'Outfit-SemiBold',
                    fontSize: size.fontSize(16),
                    maxWidth: size.getWidthSize(161),
                    lineHeight: size.getHeightSize(21),
                  }}
                >
                  [Community Twitter profile]
                </Text>
              </View>
              {verified ? (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: size.getWidthSize(8),
                  }}
                >
                  <ConnectedIcon size={size.getHeightSize(24)} />
                  <Text
                    style={{
                      color: appColor.kTextColor,
                      fontFamily: 'Outfit-Medium',
                      fontSize: size.fontSize(16),
                      letterSpacing: 0.32,
                      lineHeight: size.getHeightSize(20),
                    }}
                  >
                    Connected
                  </Text>
                </View>
              ) : (
                <View>
                  <Text
                    style={{
                      color: appColor.kGrayscale,
                      fontFamily: 'Outfit-Medium',
                      fontSize: size.fontSize(16),
                      letterSpacing: 0.32,
                      lineHeight: size.getHeightSize(20),
                    }}
                  >
                    Reviewing
                  </Text>
                </View>
              )}
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: size.getHeightSize(32),
                paddingVertical: size.getHeightSize(16),
                paddingHorizontal: size.getWidthSize(16),
                gap: size.getWidthSize(16),
                borderWidth: 1,
                borderColor: appColor.grayLight,
                borderRadius: 8,
                alignItems: 'flex-start',
              }}
            >
              <Info />
              <Text
                style={{
                  color: appColor.kWhiteColor,
                  fontFamily: 'Outfit-Regular',
                  fontSize: 16,
                  fontWeight: '400',
                  flex: 1,
                }}
              >
                You will receive a notification once the TowneSquare team has
                reviewed your request. Need help? Contact support
              </Text>
            </View>
          </>
        )}

        <>
          {/* <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 16,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar source={images.profileImage} rounded size={44} />
              <Text
                style={{
                  color: appColor.kWhiteColor,
                  fontFamily: "Outfit-Bold",
                  fontSize: 16,
                  fontWeight: "600",
                  marginLeft: 16,
                  width: 136,
                }}
              >
                [Community Twitter profile]
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Image source={images.CommunityVerified}/>
              <Text
                style={{
                  color: appColor.kGrayscale,
                  fontFamily: "Outfit-Medium",
                  fontSize: 16,
                  fontWeight: "500",
                  marginLeft: 8,
                }}
              >
                Connected
              </Text>
            </View>
          </View> */}
        </>
      </View>
      <View
        style={{
          flex: 1,
        }}
      />
      <View
        style={{
          marginBottom: size.getHeightSize(16),
          paddingVertical: size.getHeightSize(13.5),
        }}
      >
        <Text
          style={{
            color: appColor.kWhiteColor,
            fontSize: size.fontSize(16),
            fontFamily: 'Outfit-SemiBold',
            textAlign: 'center',
            lineHeight: size.getHeightSize(21),
          }}
        >
          Need help? Contact support
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default VerifyCommunityScreen;

const styles = StyleSheet.create({
  text: {
    color: appColor.kTextColor,
    fontFamily: 'Outfit-Regular',
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
  },
});
