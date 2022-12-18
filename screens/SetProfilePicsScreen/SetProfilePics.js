import { View, Text, StatusBar, Dimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Background from "./Components/Background";
import SearchBar from "../../Components/SearchBarComponent";
import BackButton from "./Components/BackButton";
import ContnueButton from "./Components/ContnueButton";
import { useFonts } from "expo-font";
import FONTS from "../../constants/Fonts";
const height = Dimensions.get("window").height;
const SetProfilePics = () => {
  let [fontsLoaded] = useFonts({
    EXTRABOLD: FONTS.EXTRABOLD,
    LIGHT: FONTS.LIGHT,
    SEMIBOLD: FONTS.SEMIBOLD,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView className=" bg-[#0F111E]">
      <StatusBar
        translucent
        backgroundColor={"transparent"}
        barStyle="light-content"
      />
      <Background>
        <View
          className="mt-10 pl-5"
          style={{
            height: height * 0.25,
            alignItems: "flex-start",
          }}
        >
          <Text
            style={{
              fontFamily: "EXTRABOLD",
            }}
            className="text-[#F2F0FF]  pt-1  text-3xl "
          >
            Final step!
          </Text>
          <Text
            style={{
              fontFamily: "EXTRABOLD",
            }}
            className="text-[#F2F0FF]  pt-1  text-3xl "
          >
            Choose your profile
          </Text>
          <Text
            style={{
              fontFamily: "EXTRABOLD",
            }}
            className="text-[#F2F0FF] pt-1  text-3xl "
          >
            picture
          </Text>
          <Text
            style={{
              fontFamily: "SEMIBOLD",
            }}
            className="text-[#F2F0FF] pt-1   text-base "
          >
            Make an PFP NFT in your wallet your profile
          </Text>
          <Text
            style={{
              fontFamily: "SEMIBOLD",
            }}
            className="text-[#F2F0FF] pt-2  text-base "
          >
            picture. If this is a new wallet and has no
          </Text>
          <Text
            style={{
              fontFamily: "SEMIBOLD",
            }}
            className="text-[#F2F0FF] pt-2  pb-3 text-base "
          >
            NFT. don't worry, you can set it up later
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            height: height * 0.1,
          }}
          className="ml-3 mr-3"
        >
          <SearchBar
            borderRadius={50}
            placeholder="Search by name/number"
            margintop={20}
            color="#B5B3BC"
          />
        </View>
        <View
          style={{
            height: height * 0.6,
          }}
        >
          <View
            className="ml-3 mr-3 mb-5 rounded-xl mt-5"
            style={{
              justifyContent: "center",
              borderWidth: 1,
              borderColor: "white",
              height: height * 0.4,
            }}
          >
            <Text
              style={{
                fontFamily: "LIGHT",
              }}
              className="text-[#B5B3BC]  text-center"
            >
              This wallet has no NFT, dont't worry,
            </Text>
            <Text
              style={{
                fontFamily: "LIGHT",
              }}
              className="text-[#B5B3BC]  text-center"
            >
              you can set it up later
            </Text>
          </View>
          <View
            className=" mr-3 ml-3 pb-4 mb-10 flex-1"
            style={{
              // alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <View
              className="flex-row"
              style={{
                justifyContent: "space-between",
              }}
            >
              <BackButton />
              <ContnueButton screen="" />
            </View>
          </View>
        </View>
      </Background>
    </SafeAreaView>
  );
};

export default SetProfilePics;
