import {
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../Components/Redux/hooks";
import { useNavigation } from "@react-navigation/native";
import { width, height } from "../../../../constants/utils";
import imageAssets from "../../../../constants/images";
import { updateTopicModalState } from "./controller/SpaceController";
import ChooseTopicModal from "./components/ChooseTopicModal";
import SpaceModal from "./components/SpaceModal";
import ShareModal from "./components/ShareModal";
import DismissKeyboard from "../../../../Components/DismissKeyboard";
import { updateLiveSpaceModal } from "./controller/SpaceController";
const CreateSpaceScreen = () => {
  const [spaceTopics, setSpaceTopics] = useState<string[]>([]);
  const [spaceDescription, setSpaceDescription] = useState<string>("");
  const updateTopics = (topic: string) => {
    if (spaceTopics.includes(topic)) return;
    setSpaceTopics((previousSelected) => [...previousSelected, topic]);
  };
  const removeTopics = (topic: string) => {
    const filteredTopics: Array<string> = [];
    for (let i = 0; i < spaceTopics.length; i++) {
      if (spaceTopics[i] !== topic) filteredTopics.push(spaceTopics[i]);
    }

    setSpaceTopics(filteredTopics);
  };
  const displayTopics = (topic: string) => {
    return spaceTopics.includes(topic) ? (
      <TouchableOpacity
        onPress={() => {
          removeTopics(topic);
        }}
      >
        <View
          style={{
            borderWidth: 1,
          }}
          className="bg-[#7F56D9]  items-center justify-center h-9 p-2 rounded-full mt-3 mr-2"
        >
          <Text className="text-[#D0D5DD]">{topic}</Text>
        </View>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        onPress={() => {
          updateTopics(topic);
        }}
      >
        <View
          style={{
            borderColor: "#363F72",
            borderWidth: 1,
          }}
          className="bg-[transparent]  items-center justify-center h-9 p-2 rounded-full mt-3 mr-2"
        >
          <Text className="text-[#D0D5DD]">{topic}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const dispatch = useAppDispatch();
  const topics = useAppSelector(
    (state) => state.spaceController.selectedTopics
  );
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-[#101323] flex-1 pl-3 pr-3">
      <StatusBar
        translucent
        backgroundColor={"transparent"}
        barStyle="light-content"
      />
      <DismissKeyboard>

      <>
      <View
        style={{
          height: 86,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Text className="text-white">Cancel</Text>
        <Text className="text-white font-semibold text-lg">
          Create your Space
        </Text>
        <Text></Text>
      </View>

      <Text className="text-[#98A2B3] mt-3">Let's talk about</Text>
      <TextInput
        placeholder="Describe your Space"
        cursorColor={"white"}
        onChangeText={setSpaceDescription}
        placeholderTextColor={"#475467"}
        style={{
          fontSize: 18,
          marginTop: 10,
          color: "white",
        }}
      />
      <View className="flex-row mt-10">
        <Entypo name="plus" color={"#7F56D9"} size={24} />
        <TouchableOpacity onPress={() => dispatch(updateTopicModalState())}>
          <Text className="text-[#7F56D9] ml-5 text-lg">Add Topic</Text>
        </TouchableOpacity>
      </View>
      <View>
        <ScrollView
          style={{
            height: height * 0.6,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {topics.length > 0 &&
              topics.map((item) => {
                return displayTopics(item);
              })}
          </View>
        </ScrollView>
      </View>

      <View
        style={{
          position: "absolute",
          top: height * 0.91,
        }}
        className="flex-row ml-3 "
      >
        {spaceTopics.length > 0 ? (
          <TouchableOpacity onPress={() => dispatch(updateLiveSpaceModal())}>
            <View
              style={{
                width: width * 0.71,
                height: 44,
                backgroundColor: "#7F56D9",
                borderRadius: 10,
                justifyContent: "center",
                marginRight: 7,
              }}
            >
              <Text className="text-white text-center font-semibold">
                Create
              </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <View
            style={{
              width: width * 0.71,
              height: 44,
              backgroundColor: "#42307D",
              borderRadius: 10,
              justifyContent: "center",
              marginRight: 7,
            }}
          >
            <Text className="text-[#7F56D9] text-center font-semibold">
              Create
            </Text>
          </View>
        )}
        <View
          style={{
            width: width * 0.17,
            height: 44,
            borderWidth: 1,
            borderColor: "#363F72",
            backgroundColor: "transparent",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 7,
          }}
        >
          <Image source={imageAssets.calenderClock} />
        </View>
      </View>
      <ChooseTopicModal />
      <ShareModal />
      <SpaceModal LivespaceTopics={spaceTopics} spaceTitle={spaceDescription} />
      </>
      </DismissKeyboard>
    </SafeAreaView>
  );
};

export default CreateSpaceScreen;
