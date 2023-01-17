import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useImperativeHandle, forwardRef, useState } from "react";
import { AddTopics } from "../controller/SpaceController";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../Components/Redux/hooks";
import { MaterialIcons } from "@expo/vector-icons";

const Topics = (props: any, ref: any) => {
  const dispatch = useAppDispatch();
  const data = [
    {
      id: "1",
      Title: "Trending",
      topics: ["Selected Topic", "My Topic", "Music", "People", "Religion"],
    },
    {
      id: "2",
      Title: "Defi",
      topics: [
        "NFTS",
        "Decentralized Finance",
        "E Wallets",
        "Blockchain",
        "Topic to Select",
      ],
    },
    {
      id: "3",
      Title: "Gaming",
      topics: ["Chess", "Football", "BasketBall", "Tennis", "Sport News"],
    },
    {
      id: "4",
      Title: "NFT",
      topics: ["Web3", "NFT Games", "Topic", "NFT00", "NFT1"],
    },
    {
      id: "5",
      Title: "Animation",
      topics: [
        "Selected Topic",
        "Suggested Topic",
        "Custom Animations",
        "Projection",
        "Animes",
      ],
    },
  ];

  const [showTopics, setShowTopics] = useState<boolean>(false);
  const [shownTopics, updateShownTopics] = useState<string[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  useImperativeHandle(ref, () => ({
    saveTopics: () => {
      saveTopics();
    },
  }));
  const saveTopics = () => {
    dispatch(AddTopics(selectedTopics));
  };
  const removeSelectedTopic = (title: string) => {
    const filteredTopics: Array<string> = [];
    for (let i = 0; i < selectedTopics.length; i++) {
      if (selectedTopics[i] !== title) filteredTopics.push(selectedTopics[i]);
    }

    setSelectedTopics(filteredTopics);
  };
  const selectTopic = (title: string) => {
    if (selectedTopics.includes(title)) {
      return;
    }
    setSelectedTopics((prevSelectedTopic) => [...prevSelectedTopic, title]);
  };

  const updateShowTopics = () => {
    setShowTopics((previousState) => !previousState);
  };
  const Topic = (topic: string) => {
    return selectedTopics.includes(topic) ? (
      <TouchableOpacity
        onPress={() => {
          removeSelectedTopic(topic);
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
          selectTopic(topic);
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderColor: "#363F72",
          }}
          className="bg-[transparent] items-center justify-center h-9 p-2 rounded-full mt-3 mr-2"
        >
          <Text className="text-[#D0D5DD]">{topic}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const removeShown = (id: string) => {
    const filtered: Array<string> = [];
    for (let i = 0; i < shownTopics.length; i++) {
      if (shownTopics[i] !== id) filtered.push(shownTopics[i]);
    }
    updateShownTopics(filtered);
  };
  return (
    <FlatList
      scrollEnabled={false}
      data={data}
      renderItem={({ item }) => (
        <>
          <View className="flex-row items-center mt-5">
            <Text className="text-[#D0D5DD] flex-1 font-medium text-base">
              {item.Title}
            </Text>
            <Text className="text-[#D0D5DD] mr-3">{1}</Text>
            <TouchableOpacity
              onPress={() => {
                updateShowTopics();
                shownTopics.includes(item.id)
                  ? removeShown(item.id)
                  : updateShownTopics((previousShownTopics) => [
                      ...previousShownTopics,
                      item.id,
                    ]);
              }}
            >
              <MaterialIcons
                name={
                  shownTopics.includes(item.id)
                    ? "keyboard-arrow-down"
                    : "keyboard-arrow-right"
                }
                size={26}
                color="#D0D5DD"
              />
            </TouchableOpacity>
          </View>
          {shownTopics.includes(item.id) ? (
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
              <FlatList
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                numColumns={Math.ceil(item.topics.length / 2)}
                data={item.topics}
                renderItem={({ item }) => Topic(item)}
              />
            </ScrollView>
          ) : undefined}
        </>
      )}
    />
  );
};

export default forwardRef(Topics);
