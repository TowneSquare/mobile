import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { appColor, fonts } from "../../../../constants";
import CommunityFeedImgPlaceHolder from "../../../../../assets/images/svg/CommunityFeedImgPlaceHolder";
import { useFonts } from "expo-font";

function CommunityFeed() {
  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
  });
  return (
    <SafeAreaView
      style={{
        backgroundColor: appColor.feedBackground,
      }}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 100,
        }}
      >
        <CommunityFeedImgPlaceHolder />
        <View
          style={{
            marginTop: 20,
            marginHorizontal: 20,
          }}
        >
          <Text
            style={{
              color: appColor.kWhiteColor,
              fontSize: 16,
              fontWeight: "600",
              textAlign: "center",
              fontFamily: "Outfit-Bold",
            }}
          >
            Community Posts will show up here
          </Text>
          <Text
            style={{
              color: appColor.kWhiteColor,
              fontSize: 16,
              paddingTop: 8,
              fontWeight: "400",
              textAlign: "center",
              fontFamily: "Outfit-Regular",
              lineHeight: 21,
            }}
          >
            Create the first post and get the conversation going!
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 100,
        }}
      >
        <CommunityFeedImgPlaceHolder />
        <View
          style={{
            marginTop: 20,
            marginHorizontal: 20,
          }}
        >
          <Text
            style={{
              color: appColor.kWhiteColor,
              fontSize: 16,
              fontWeight: "600",
              textAlign: "center",
              fontFamily: "Outfit-Bold",
            }}
          >
            Community Posts will show up here
          </Text>
          <Text
            style={{
              color: appColor.kWhiteColor,
              fontSize: 16,
              paddingTop: 8,
              fontWeight: "400",
              textAlign: "center",
              fontFamily: "Outfit-Regular",
              lineHeight: 21,
            }}
          >
            Create the first post and get the conversation going!
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 100,
        }}
      >
        <CommunityFeedImgPlaceHolder />
        <View
          style={{
            marginTop: 20,
            marginHorizontal: 20,
          }}
        >
          <Text
            style={{
              color: appColor.kWhiteColor,
              fontSize: 16,
              fontWeight: "600",
              textAlign: "center",
              fontFamily: "Outfit-Bold",
            }}
          >
            Community Posts will show up here
          </Text>
          <Text
            style={{
              color: appColor.kWhiteColor,
              fontSize: 16,
              paddingTop: 8,
              fontWeight: "400",
              textAlign: "center",
              fontFamily: "Outfit-Regular",
              lineHeight: 21,
            }}
          >
            Create the first post and get the conversation going!
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 100,
        }}
      >
        <CommunityFeedImgPlaceHolder />
        <View
          style={{
            marginTop: 20,
            marginHorizontal: 20,
          }}
        >
          <Text
            style={{
              color: appColor.kWhiteColor,
              fontSize: 16,
              fontWeight: "600",
              textAlign: "center",
              fontFamily: "Outfit-Bold",
            }}
          >
            Community Posts will show up here
          </Text>
          <Text
            style={{
              color: appColor.kWhiteColor,
              fontSize: 16,
              paddingTop: 8,
              fontWeight: "400",
              textAlign: "center",
              fontFamily: "Outfit-Regular",
              lineHeight: 21,
            }}
          >
            Create the first post and get the conversation going!
          </Text>
        </View>
      </View>
      {/* <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop:20,
          marginBottom:100
        }}
      >
        <CommunityFeedImgPlaceHolder />
        <View
          style={{
            marginTop: 20,
            marginHorizontal:20
          }}
        >
          <Text
            style={{
              color: appColor.kWhiteColor,
              fontSize: 16,
              fontWeight: "600",
              textAlign:"center",
              fontFamily:"Outfit-Bold"
            }}
          >
            Community Posts will show up here
          </Text>
          <Text
            style={{
              color: appColor.kWhiteColor,
              fontSize: 16,
              paddingTop:8,
              fontWeight: "400",
              textAlign:"center",
              fontFamily:"Outfit-Regular",
              lineHeight:21
            }}
          >
            Create the first post and get the conversation going!
          </Text>
        </View>
      </View> */}
      {/* <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop:20,
          marginBottom:100
        }}
      >
        <CommunityFeedImgPlaceHolder />
        <View
          style={{
            marginTop: 20,
            marginHorizontal:20
          }}
        >
          <Text
            style={{
              color: appColor.kWhiteColor,
              fontSize: 16,
              fontWeight: "600",
              textAlign:"center",
              fontFamily:"Outfit-Bold"
            }}
          >
            Community Posts will show up here
          </Text>
          <Text
            style={{
              color: appColor.kWhiteColor,
              fontSize: 16,
              paddingTop:8,
              fontWeight: "400",
              textAlign:"center",
              fontFamily:"Outfit-Regular",
              lineHeight:21
            }}
          >
            Create the first post and get the conversation going!
          </Text>
        </View>
      </View> */}
    </SafeAreaView>
  );
}

export default CommunityFeed;
