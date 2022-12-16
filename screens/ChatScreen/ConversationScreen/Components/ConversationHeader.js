import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Feather } from "@expo/vector-icons";
import COLORS from "../../../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const ConversationHeader = (props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View
        style={{
          alignItems: "center",
          paddingHorizontal: 8,
        }}
        className={`h-20 flex-row  bg-[${COLORS.APPCOLOR}]`}
      >
        <TouchableOpacity className={`mr-3`} onPress={navigation.goBack}>
          <Ionicons name="chevron-back" color="white" size={22} />
        </TouchableOpacity>
        <Image
          className={`mr-4`}
          style={{ height: 48, width: 48, borderRadius: 24 }}
          source={{ uri: props.imageSource }}
        />
        <View className={`flex-1 `}>
          <Text className={`text-white font-bold text-lg`}>
            {props.displayName}
          </Text>
          <Text className={`text-[${COLORS.GRAYBLUEOPACITY300}] text-lg`}>
            @{props.displayName}
          </Text>
        </View>
        <Feather name="more-vertical" size={22} color={COLORS.WHITE} />
      </View>
    </SafeAreaView>
  );
};

export default ConversationHeader;
