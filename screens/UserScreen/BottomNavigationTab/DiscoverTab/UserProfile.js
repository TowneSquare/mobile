import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  ScrollView,
  Dimensions,
} from "react-native";
import MemberList from "./Components/UserProfileComponents/Members";
import SIOthians from "./Components/UserProfileComponents/SIOthians";
import Collections from "./Components/Collections";
import { Icon, Avatar } from "react-native-elements";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
const width = Dimensions.get("window").width;
import React, { useState } from "react";
import COLORS from "../../../../constants/Colors";
const height = Dimensions.get("window").height;

const UserProfile = (props) => {
  const navigation = props.nav;
  const [isEnabled, setIsEnabled] = useState(false);
  const [showNFTCollection, setshowNFTCollection] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  const toggleNFTSwitch = () => {
    setshowNFTCollection((previousState) => !previousState);
  };

  return (
    <View className="ml-3 mr-3">
      <View
        className=" h-50 flex-row"
        style={{
          // justifyContent: "space-around",
          alignItems: "center",
          paddingLeft: 10,
        }}
      >
        <Avatar
          containerStyle={{}}
          rounded
          size={100}
          source={require("../../../../assets/PNG/NFT3.png")}
        />
        <View
          className=" ml-10"
          style={{
            width: 200,
          }}
        >
          <Text className={`text-base text-[${COLORS.WHITE}] font-semibold`}>
            Realjczhang
          </Text>
          <Text className={`text-sm font-normal text-[${COLORS.WHITE}] pt-1`}>
            @y00ts
          </Text>
          <Text className={`font-normal text-sm text-[${COLORS.WHITE}] pt-1`}>
            Wallet Address
          </Text>
          <View
            className="flex-row"
            style={{
              //justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              className={`text-base mr-5 pt-1 text-[${COLORS.LIGHTPURPLE}] font-semibold`}
            >
              21oLUSAA.......Z4oZ
            </Text>
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={22}
              color="white"
            />
          </View>
          <Text className={`text-sm font-semibold text-[${COLORS.WHITE}] pt-1`}>
            Solana Domain
          </Text>
          <Text
            className={`text-base pt-1 text-[${COLORS.LIGHTPURPLE}]  font-semibold`}
          >
            jczhang.sol
          </Text>
        </View>
      </View>
      <View
        className="flex-row "
        style={{
          justifyContent: "space-between",
          // marginLeft:10,
          // marginRight:10,
          marginTop: 30,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("FollowersScreen", {
              selected: "Followers",
            });
          }}
        >
          <Text className={`text-[${COLORS.TEXTLIGHTPURPLECOLOR}]`}>
            <Text className={`text-[${COLORS.WHITE}]`}>12K </Text>
            Followers
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("FollowersScreen", {
              selected: "Connections",
            });
          }}
        >
          <Text className={`text-[${COLORS.TEXTLIGHTPURPLECOLOR}]`}>
            <Text className={`text-[${COLORS.WHITE}]`}>12K </Text>
            Connections
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ChatList");
          }}
        >
          <View
            className={`h-11 w-24 bg-[${COLORS.LIGHTPURPLE}] flex-row`}
            style={{
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
            }}
          >
            <AntDesign name="mail" size={22} color={COLORS.WHITE} />
            <View
              className={`bg-[white] ml-3`}
              style={{
                borderRadius: 5,
                alignItems: "center",
                width: 30,
              }}
            >
              <Text
                className={`text-[${COLORS.TEXTGRAYBLUEOPACITY300}] text-center `}
              >
                154
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <Text className={`text-[${COLORS.WHITE}] font-semibold pb-2`}>
        About me
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Text
          className={`text-[${COLORS.TEXTLIGHTPURPLECOLOR}] font-normal text-sm`}
          style={{ flex: 1, flexWrap: "wrap" }}
        >
          {""}
          Proud Owner of SMB #3708. Founder and CEO of TowneSquare. Serial
          entrepreneur in web3 since 2017. Previous Qilin Protocol (seed leb
          Multicoin). Cofounder of Metopia.
        </Text>
      </View>
      <View
        className="flex-row "
        style={{
          alignItems: "center",
        }}
      >
        <Text className={`text-[${COLORS.WHITE}] flex-1  font-extrabold`}>
          Membership
        </Text>
        {isEnabled ? (
          <Text className={`text-[#9E77ED]`}>Hide</Text>
        ) : (
          <Text className={`text-[#717BBC]`}>Show</Text>
        )}
        <Switch
          trackColor={{
            false: `#293056`,
            true: `#42307D`,
          }}
          thumbColor={isEnabled ? "#9E77ED" : "#4E5BA6"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <Text className={`text-[${COLORS.TEXTLIGHTPURPLECOLOR}]`}>
        You are a part of the following communities
      </Text>
      <MemberList />
      <Text className={`text-[${COLORS.WHITE}] font-semibold text-lg mt-3`}>
        SIOthians
      </Text>
      <SIOthians />
      <View
        className="flex-row pt-3"
        style={{
          alignItems: "center",
        }}
      >
        <Text className={`text-[${COLORS.WHITE}] flex-1  font-extrabold`}>
          NFT Collection
        </Text>
        {showNFTCollection ? (
          <Text className={`text-[#9E77ED]`}>Hide</Text>
        ) : (
          <Text className={`text-[${COLORS.GRAYBLUEOPACITY}]`}>Show</Text>
        )}
        <Switch
          trackColor={{
            false: `#293056`,
            true: `#42307D`,
          }}
          thumbColor={showNFTCollection ? "#9E77ED" : "#4E5BA6"}
          onValueChange={toggleNFTSwitch}
          value={showNFTCollection}
        />
      </View>
      <View className="" style={{ flexDirection: "row" }}>
        <Text
          className={`text-[${COLORS.GRAYBLUEOPACITY300}]  font-normal text-sm`}
          style={{ flex: 1, flexWrap: "wrap" }}
        >
          {""}
          You can choose to display your NFTs as part of your profile or choose
          to make them private
        </Text>
      </View>

      <Collections />
    </View>
  );
};

export default UserProfile;
