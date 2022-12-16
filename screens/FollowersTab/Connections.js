import { View, Text, Dimensions,ScrollView,StatusBar, TouchableOpacity,Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const Connections = () => {
  
  return (
    <SafeAreaView
    className="bg-[#101323]"
    >
        <StatusBar
        translucent
        backgroundColor={"transparent"}
        barStyle="light-content"
      />
    <ScrollView
    style={{
        height:height
    }}
    >
      {data.map((item, index) => {
        return (
          <View
            key={index}
            className="flex-row h-12 mt-4 items-center bg-transparent "
            style={{
              marginRight: 10,
              marginLeft: 10,
              width: "95%",
              paddingLeft: 10,
            }}
          >
            <Image source={item.image} />
            <View className="ml-5 flex-1">
              <Text
                style={{
                  fontFamily: "SEMIBOLD",
                }}
                className="text-white"
              >
                {item.name}
              </Text>
              <Text
                style={{
                  fontFamily: "SEMIBOLD",
                }}
                className="text-white"
              >
                {item.userName}
              </Text>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => {
                  setSelection(index);
                }}
                className="flex-row h-12 w-20 items-center pr-4 bg-[#8C74FF20]  rounded-full"
              >
                <Text
                  style={{
                    fontFamily: "SEMIBOLD",
                  }}
                  className=" pl-3 text-center text-white font-extrabold text-sm"
                >
                  Unfollow
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </ScrollView>
    </SafeAreaView>
  );
};

export default Connections;
