import { View, Text, TextInput, StyleSheet } from "react-native";
import React, {FC, useState, useEffect } from "react";
import { Icon } from "react-native-elements";
import { useFonts } from "expo-font";
import FONTS from "../constants/Fonts";
import { Int32 } from "react-native/Libraries/Types/CodegenTypes";
import { heightSize } from "../constants/sizes";
interface Props{
 
  margintop:number
  placeholder:string
  borderRadius: number
  color:string

}
interface mapType{
  [key:string]:string
}
const SearchBar:FC<Props> = (props) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    fetchNfts(projects);
  }, []);
  const projects = [
    {
      NAME: "TownSquare1",
      PURPOSE: "NFTS",
      DEVELOPER: "TEST",
    },
    {
      NAME: "TownSquare2",
      PURPOSE: "COINS",
      DEVELOPER: "TEST",
    },
    {
      NAME: "TownSquare3",
      PURPOSE: "CARDS",
      DEVELOPER: "TEST",
    },
  ];

  const searchFilterFunction = (search:string) => {
    if (search) {
      const newData = data.filter((item:mapType) => {
        const itemData = item.NAME ? item.NAME.toUpperCase() : "".toUpperCase();
        const textData = search.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
    } else {
      setFilteredData(data);
    }
  };

  const fetchNfts = (project:any) => {
    setData(project);
    setFilteredData(project);
   
  };
  let [fontsLoaded] = useFonts({
    EXTRABOLD: FONTS.EXTRABOLD,
    LIGHT: FONTS.LIGHT,
    SEMIBOLD: FONTS.SEMIBOLD,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View>
      <View
        style={{
          marginTop: props.margintop,
          borderWidth: 1,
          borderBottomWidth: 1,
          flexDirection: "row",
          justifyContent: "center",
          borderColor: props.color,
          borderRadius: props.borderRadius,
          alignItems: "center",
          paddingLeft:3
        }}
      >
        <Icon tvParallaxProperties={undefined} name="search" size={20} type={"feather"} color={props.color} />
        <TextInput
          style={{
            paddingLeft: 15,
            color: "white",
            height: heightSize(25),
            width: "90%",
            marginVertical: 10,
            borderColor: "white",
            fontFamily: "SEMIBOLD",
           
            fontSize:16
          }}
          placeholder={props.placeholder}
          placeholderTextColor={props.color}
          
          onChangeText={(text) => searchFilterFunction(text)}
        />
      </View>
      {/* {filteredData.map((item, index) => {
        console.log(item.DEVELOPER);
        return (
          <View key={index} className="mt-3 pt-2 pl-4 pr-3 pb-2 bg-red">
            <Text className="text-white">item.NAME</Text>
            <Text className="text-white">item.PURPOSE</Text>
            <Text className="text-white">item.DEVELOPER</Text>
          </View>
        );
      })} */}
    </View>
  );
};

export default SearchBar;
