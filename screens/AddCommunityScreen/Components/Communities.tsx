import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import React, {FC, useState, useEffect } from "react";
import { Icon } from "react-native-elements";
import { useFonts } from "expo-font";
import FONTS from "../../../constants/Fonts";
interface Props{
  placeholder:string
  name:string
 onPress:()=>void
 logo:string
}
interface mapType{
  id:number
  name:string
  collectionname:string
  logo:any
  collectionName:string
  
}
import data from "./DummyData"
const { height, width } = Dimensions.get("window");
const Communities:FC<Props> = (props) => {
  const [NFTCommunities, setNFTCommunities] = useState<any> ([]);
  const [filteredNFTS, setFilteredNFTS] = useState<any >([]);
  const [selected, setSelection] = useState<any>([]);
  useEffect(() => {
    fetchCommunities(data);
  }, []);

  const fetchCommunities = (data:any) => {
    setNFTCommunities(data);
    setFilteredNFTS(data);
    console.log(data);
  };
  let [fontsLoaded] = useFonts({
    EXTRABOLD: FONTS.EXTRABOLD,
    LIGHT: FONTS.LIGHT,
    SEMIBOLD: FONTS.SEMIBOLD,
  });

  if (!fontsLoaded) {
    return null;
  }
  const searchFilterFunction = (search:string) => {
    if (search) {
      const newData = NFTCommunities?.filter((item:mapType) => {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = search.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredNFTS(newData);
    } else {
      setFilteredNFTS(NFTCommunities);
    }
  };

  return (
    <View
      style={{
        height: height * 0.6,
      }}
      className=""
    >
      <View
        style={{
          marginTop: 10,
          borderWidth: 1,
          borderBottomWidth: 1,
          flexDirection: "row",
          justifyContent: "center",
          borderColor: "white",
          borderRadius: 14,
          alignItems: "center",
          paddingLeft: 3,
          marginRight: 10,
          marginLeft: 10,
        }}
      >
        <Icon tvParallaxProperties={undefined} name="search" size={20} type="feather" color={"white"} />
        <TextInput
          style={{
            paddingLeft: 15,
            color: "white",
            height: 25,
            width: "85%",
            marginVertical: 10,
            marginRight: 5,
            borderColor: "white",
           
          }}
          placeholder={props.placeholder}
          placeholderTextColor={"white"}
          onChangeText={(text) => searchFilterFunction(text)}
        />
      </View>
      {/* Communities */}
      <ScrollView>
        {filteredNFTS?.map((item:mapType, index:any) => {
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
              <Image source={item.logo} />
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
                  {item.collectionName}
                </Text>
              </View>

              <View>
                <TouchableOpacity
                
                  onPress={() => {
                    setSelection(index);
                  }}
                >
                  <View className="flex-row h-12 w-20 items-center pr-4 bg-[#8C74FF20]  rounded-full">
                  <Icon tvParallaxProperties={undefined} type="feather" name="plus" color="white" size={24} />
                  <Text
                    style={{
                      fontFamily: "SEMIBOLD",
                    }}
                    className=" pl-3 text-center text-white font-extrabold text-sm"
                  >
                    join
                  </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Communities;
