import React, { useState } from "react";
import { Text, View, Image, StyleSheet, Pressable, LogBox } from "react-native";
import { VerifyCommunityScreenProps } from "../../navigations/NavigationTypes";
import Header from "../../shared/Feed/Header";
import { appColor, images, fonts } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import TwitterBG from "../../../assets/images/svg/TwitterBg";
import { Avatar } from "react-native-elements";
import Info from "../../../assets/images/svg/Info";
import { useAppDispatch, useAppSelector } from "../../controller/hooks";
import { updateVerificationStatus } from "../../controller/CommunityController";
export enum VerifyCommunityState {
  NOT_APPROVED,
  PENDING,
  APPROVED,
}
const VerifyCommunityScreen = ({ navigation, route }) => {
  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
  });

  LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

    const dispatch = useAppDispatch();


  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));


  const verificationStatus = useAppSelector(
    (state) => state.COMMUNITY.verificationStatus
  )

  const VerifyCommunity = () => {
    dispatch(updateVerificationStatus(VerifyCommunityState.PENDING))
    delay(100000)
    dispatch(updateVerificationStatus(VerifyCommunityState.APPROVED))
    // RemoveCard(index)
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <Header title="Verify Community" />
      <View
        style={{
          marginHorizontal: 16,
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 32,
          }}
        >
          {/* <Image source={images.VerifyCommunity} /> */}
          <Text
            style={{
              color: appColor.kWhiteColor,
              fontFamily: "Outfit-Medium",
              fontSize: 29,
              fontWeight: "700",
            }}
          >
            Verify Community X
          </Text>
        </View>
        <View style={{}}>
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
        <View
          style={{
            marginTop: 32,
          }}
        >
          <Text
            style={{
              color: appColor.kWhiteColor,
              fontFamily: "Outfit-Bold",
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            Connect community’s official Twitter account
          </Text>
        </View>
        {verificationStatus == VerifyCommunityState.NOT_APPROVED ? (
          <View
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
              <TwitterBG />
              <Text
                style={{
                  color: appColor.kWhiteColor,
                  fontFamily: "Outfit-Bold",
                  fontSize: 16,
                  fontWeight: "600",
                  marginLeft: 16,
                }}
              >
                X
              </Text>
            </View>
            <Pressable
              style={{
                backgroundColor: appColor.kSecondaryButtonColor,
                borderRadius: 40,
              }}
              onPress={() => {
                VerifyCommunity()
              }}
            >
              <Text
                style={{
                  color: appColor.kWhiteColor,
                  fontFamily: "Outfit-Regular",
                  fontSize: 16,
                  fontWeight: "600",
                  textAlign: "center",
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                }}
              >
                Connect
              </Text>
            </Pressable>
          </View>
        ) : verificationStatus === VerifyCommunityState.PENDING ? (
          <>
            <View
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
              <View>
                <Text
                  style={{
                    color: appColor.kGrayscale,
                    fontFamily: "Outfit-Medium",
                    fontSize: 16,
                    fontWeight: "500",
                  }}
                >
                  Reviewing
                </Text>
              </View>
            </View>
            <View style={{
              display:"flex",
              flexDirection:"row",
              justifyContent:"space-between",
              marginTop:32
            }}>
              <Info/>
              <Text
                style={{
                  color: appColor.kWhiteColor,
                  fontFamily: "Outfit-Regular",
                  fontSize: 16,
                  fontWeight: "400",
                  textAlign:"justify"
                }}
              >
                You will receive a notification once the TowneSquare team has
                reviewed your request. Need help? Contact support
              </Text>
            </View>
          </>
        ) : (
          <>
           <View
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
              <View style={{
                display:"flex",
                flexDirection:"row"
              }}>
                  {/* <Image source={images.CommunityVerified}/> */}
                <Text
                  style={{
                    color: appColor.kGrayscale,
                    fontFamily: "Outfit-Medium",
                    fontSize: 16,
                    fontWeight: "500",
                    marginLeft:8
                  }}
                >
                  Connected
                </Text>
              </View>
            </View>
          </>
        )}
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 32,
          left: 0,
          right: 0,
        }}
      >
        <Pressable
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: appColor.kWhiteColor,
              fontSize: 16,
              fontFamily: "Outfit-Medium",
              fontWeight: "500",
            }}
          >
            Need help?
          </Text>
          <Text
            style={{
              color: appColor.primaryLight,
              fontSize: 16,
              fontFamily: "Outfit-Medium",
              fontWeight: "500",
            }}
          >
            {" "}
            Contact support
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default VerifyCommunityScreen;

const styles = StyleSheet.create({
  text: {
    color: appColor.kWhiteColor,
    fontFamily: "Outfit-Regular",
    fontSize: 16,
    lineHeight: 21,
    marginTop: 16,
  },
});
