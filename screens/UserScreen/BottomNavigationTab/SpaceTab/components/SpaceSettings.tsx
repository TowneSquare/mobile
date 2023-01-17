import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { useAppDispatch } from "../../../../../Components/Redux/hooks";
import imageAssets from "../../../../../constants/images";
import { height, width } from "../../../../../constants/utils";
import { updateShareModal } from "../controller/SpaceController";
const SpaceSettings = () => {
  const [showHands, setShowHands] = useState<boolean>(false);
  const [volumeOff, setVolumeOff] = useState<boolean>(false);
  const [muteMic, setMuteMic] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  return (
    <View
      className=""
      style={{
        position: "absolute",
        top: height * 0.89,
        height: 84,
        width: width,
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingTop: 10,
        paddingHorizontal: 5,
        borderTopWidth: 1,
        borderTopColor: "#101323",
      }}
    >
      <Pressable
        onPress={() => dispatch(updateShareModal())}
        style={{
          width: 50,
          height: 42,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 1,
          borderTopColor: "#101323",
        }}
      >
        <Image source={imageAssets.shareSpace} />
      </Pressable>
      <View
        style={{
          flexDirection: "row",
          borderWidth: 1,
          borderTopColor: "#101323",
          height: 42,
          borderRadius: 10,
        }}
      >
        <Pressable
          onPress={() => setShowHands((previous) => !previous)}
          style={{
            backgroundColor: showHands ? "#DC6803" : undefined,
            width: 50,
            height: 41,
            borderRightWidth: 1,
            borderTopLeftRadius: showHands ? 10 : undefined,
            borderBottomLeftRadius: showHands ? 10 : undefined,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={showHands ? imageAssets.expandHands : imageAssets.hands}
          />
        </Pressable>
        <Pressable
          onPress={() => setVolumeOff((previous) => !previous)}
          style={{
            backgroundColor: volumeOff ? "#7F56D9" : undefined,
            width: 50,
            height: 41,
            justifyContent: "center",
            alignItems: "center",
            borderRightWidth: 1,
            borderTopColor: "#101323",
          }}
        >
          <Image
            source={volumeOff ? imageAssets.volumeOff : imageAssets.fullVolume}
          />
        </Pressable>
        <Pressable
          onPress={() => setMuteMic((previous) => !previous)}
          style={{
            backgroundColor: muteMic ? "#7F56D9" : undefined,
            width: 50,
            height: 41,
            borderRadius: 8,
            justifyContent: "center",
            borderTopLeftRadius: muteMic ? 0 : undefined,
            borderBottomLeftRadius: muteMic ? 0 : undefined,
            alignItems: "center",
          }}
        >
          <Image source={imageAssets.mic} />
        </Pressable>
      </View>
      <View
        style={{
          width: 58,
          height: 42,
          borderRadius: 8,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text className="text-white font-semibold text-base">01:34:12</Text>
      </View>
      <Pressable
        style={{
          backgroundColor: "#D92D20",
          width: 50,
          height: 42,
          borderRadius: 8,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text className="text-[#F2F0FF] font-semibold text-base">End</Text>
      </Pressable>
    </View>
  );
};

export default SpaceSettings;
