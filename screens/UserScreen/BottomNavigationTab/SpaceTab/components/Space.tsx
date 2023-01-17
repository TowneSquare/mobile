import { View, Text, Image,Pressable } from "react-native";
import React,{useState} from "react";
import { Octicons, Ionicons } from "@expo/vector-icons";
import { Avatar } from "react-native-elements";
import { width } from "../../../../../constants/utils";
import imageAssets from "../../../../../constants/images";
interface Props {
  isLive: boolean;
}
const Space: React.FC<Props> = (props) => {
  const [enableNotification, setNotification]=useState<boolean>(false)
  const updateNotification=()=>{
    setNotification((previoustate)=>!previoustate)
  }
  return (
    <View
      style={{
        width: width * 0.94,
        height: 187,
        backgroundColor:props.isLive?"#42307D": "#293056",
        borderRadius: 10,
        marginLeft: 10,
        marginBottom: 8,
      }}
    >
      <View className="flex-row ml-3 items-center mr-3 mt-2">
        <Avatar rounded size={60} source={imageAssets.spaceImage} />
        <View className="flex-1 ml-2">
          <Text className="text-white mb-2 font-semibold text-base">Aptos</Text>
          <View className="flex-row">
            <Image source={imageAssets.spacePublicIcon} />
            <Text className="text-[#D0D5DD] ml-1">Public</Text>
          </View>
        </View>
        {props.isLive ? (
          <>
            <View className="bg-[#039855] justify-center w-11 h-6 rounded">
              <Text className="text-center text-white">LIVE</Text>
            </View>
          </>
        ) : (
          <>
            <Pressable 
            onPress={updateNotification}
            style={{
              backgroundColor:enableNotification?"#DC6803":"#363F72"
            }}
            className={`justify-center items-center w-9 h-9 rounded`}>
              <Ionicons
                name="notifications-outline"
                color={"white"}
                size={22}
              />
            </Pressable>
          </>
        )}
      </View>
      <Text className="text-white font-extrabold text-lg ml-5">
        DEVS SPOKE. WE LISTENED.
      </Text>
      <View className="flex-row justify-between ml-5 mr-3 mt-3 mb-1">
        <Text className="text-xs text-white">21.12.2022</Text>
        <Text className="text-xs text-white">07:45 PM (UTC+2)</Text>
        <View className="flex-row">
          <Octicons name="person" color={"white"} size={18} />
          <Text className="text-xs text-white ml-2 mr-2">1234</Text>
        </View>
      </View>
      {props.isLive ? (
        <>
          <View className="flex-row ml-5 mr-5">
            <View
              style={{
                width: width * 0.4,
                height: 44,
                backgroundColor: "#363F72",
                borderRadius: 10,
                justifyContent: "center",
                marginRight: 7,
              }}
            >
              <Text className="text-white text-center font-semibold">
                Share
              </Text>
            </View>
            <View
              style={{
                width: width * 0.4,
                height: 44,
                backgroundColor: "#7F56D9",
                borderRadius: 10,
                justifyContent: "center",
                marginLeft: 7,
              }}
            >
              <Text className="text-white text-center font-semibold">
                Participate
              </Text>
            </View>
          </View>
        </>
      ) : (
        <>
          <View
            style={{
              width: width * 0.86,
              height: 44,
              backgroundColor: "#363F72",
              borderRadius: 10,
              alignSelf:'center',
              justifyContent:'center'
              
            }}
          >
            <Text className="text-white text-center font-semibold">Share</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default Space;
