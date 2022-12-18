import { View, Text, Image } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
const WalletBalanceContainer = () => {
  return (
    <LinearGradient
          colors={["#1D2939", "#475467"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className={`h-28 flex-row mt-4 bg-[#1D2939] `}
          style={{
            paddingVertical: 5,
            borderRadius: 12,
          }}
        >
          <View
            className={` pt-1 pl-3 flex-1 pb-3 w-48`}
            style={{
              justifyContent: "space-between",
            }}
          >
            <Text className={`text-white font-bold text-3xl`}>26,231 USD</Text>
            <View className={`flex-row`} style={{}}>
              <View
                className={`flex-row`}
                style={{
                  alignItems: "flex-end",
                }}
              >
                <Ionicons
                  name="ios-arrow-up-sharp"
                  color={"#12B76A"}
                  size={16}
                />
                <Text className={`text-[#027A48] pl-1 pr-3`}>0.3%</Text>
              </View>

              <Text style={{}} className={`text-white `}>
                Last 24 hours
              </Text>
            </View>
          </View>
          <Image
            style={{ alignSelf: "flex-end" }}
            className={`mb-3 mr-3`}
            source={require("../../../../../../assets/PNG/chart.png")}
          />
        </LinearGradient>
  )
}

export default WalletBalanceContainer