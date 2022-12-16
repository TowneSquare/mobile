import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Button, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import FONTS from "../../../constants/Fonts";
const ContnueButton = (props) => {

  let dim = props.dim;
  const navigation = useNavigation();
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
      {props.dim == true ? (
        <View>
          <View className="bottom-0  h-12 w-36 bg-[#0368FF70] flex-row items-center rounded-xl space-x-4 ">
            <Text  style={{
                    fontFamily: "SEMIBOLD",
                  }} className="text-white pl-4 text-base ">
              CONTINUE
            </Text>
            <Icon type="antdesign" name="right" color="white" size={15} />
          </View>
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(props.screen, props.route);
          }}
        >
          <View className="bottom-0  h-12 w-36 bg-[#0368FF] flex-row items-center rounded-xl space-x-4 ">
            <Text  style={{
                    fontFamily: "SEMIBOLD",
                  }} className="text-white pl-4 text-base ">
              CONTINUE
            </Text>
            <Icon type="antdesign" name="right" color="white" size={15} />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ContnueButton;
