import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const Collections = () => {
  const [selected, setSelection] = useState("null");
  const [collectionsToShow, setCollectionsToShow] = useState("null");
  const COLLECTIONS = [
    {
      item: require("../../../../../assets/PNG/collection1.png"),
      title: "Okay bear 1",
    },
    {
      item: require("../../../../../assets/PNG/DeGods1.png"),
      title: "DeGods 1",
    },
    {
      item: require("../../../../../assets/PNG/collection1.png"),
      title: "Okay bear 1",
    },
    {
      item: require("../../../../../assets/PNG/DeGods1.png"),
      title: "DeGods 1",
    },
  ];

  const DEGODS = [
    {
      item: require("../../../../../assets/PNG/DeGods1.png"),
      title: "#DeGods",
    },
    {
      item: require("../../../../../assets/PNG/DeGods2.png"),
      title: "#DeGods",
    },
    {
      item: require("../../../../../assets/PNG/DeGods3.png"),
      title: "#DeGods",
    },
    {
      item: require("../../../../../assets/PNG/DeGods4.png"),
      title: "#DeGods",
    },
  ];
  switch (collectionsToShow) {
    case "null":
      return (
        <View className="h-96 w-full mb-36 mt-5" style={{}}>
          <View
            className="h-11 pl-5 flex-row bg-[#293056]"
            style={{
              borderRadius: 8,
              alignItems: "center",
            }}
          >
            <Text className="text-white flex-1" style={{}}>
              Collections (23)
            </Text>

            <Text className="text-[#B692F6] mr-5 font-semibold" style={{}}>
              View All
            </Text>
          </View>
          <View className=" h-full w-full">
            <View
              style={{
                backgroundColor: "transparent",
                height: "100%",
                borderRadius: 10,

                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {COLLECTIONS.map((data, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      width: "50%",
                      height: "50%",
                      padding: 5,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        setSelection(index);
                        setCollectionsToShow(index);
                     
                      }}
                    >
                      <View>
                        <Image
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: 10,
                          }}
                          source={data.item}
                        />
                        <View
                          className="w-full h-full absolute"
                          style={{
                            justifyContent: "flex-end",
                          }}
                        >
                          <View
                            className="bg-[#101323] h-8 w-20 ml-2 mb-2"
                            style={{
                              justifyContent: "center",
                              borderRadius: 8,
                            }}
                          >
                            <Text className="text-white text-center" style={{}}>
                              {data.title}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      );
    case selected:
      return (
        <View className="h-96 w-full mb-36 mt-5" style={{}}>
          <View
            className="h-11 flex-row pl-5 bg-[#293056]"
            style={{
              borderRadius: 8,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setCollectionsToShow("null");
              }}
            >
              <Ionicons name="chevron-back" color="white" size={22} />
            </TouchableOpacity>
            <Text className="text-white ml-3" style={{}}>
              #DeGods
            </Text>
          </View>
          <View className=" h-full w-full">
            <View
              style={{
                backgroundColor: "transparent",
                height: "100%",
                borderRadius: 10,

                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {DEGODS.map((data, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      width: "50%",
                      height: "50%",
                      padding: 5,
                    }}
                  >
                    <View>
                      <Image
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 10,
                        }}
                        source={data.item}
                      />
                      <View
                        className="w-full h-full absolute"
                        style={{
                          justifyContent: "flex-end",
                        }}
                      >
                        <View
                          className="bg-[#101323] h-8 w-20 ml-2 mb-2"
                          style={{
                            justifyContent: "center",
                            borderRadius: 8,
                          }}
                        >
                          <Text className="text-white text-center" style={{}}>
                            {data.title}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      );
  }
};

export default Collections;
