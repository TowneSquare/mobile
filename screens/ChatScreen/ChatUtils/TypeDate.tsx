import { View, Text } from 'react-native'
import React from 'react'
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const TypeDate = (message:any) => {
    function getDisplayDate(array:Array<number>) {
        const year = array[0];
        const month = array[1];
        const day = array[2];
        let today:Date =  new Date()
        today.setHours(0);
        today.setMinutes(0);
        today.setSeconds(0);
        today.setMilliseconds(0);
        const compDate = new Date(year, month - 1, day);
        let diff = today.getTime() - compDate.getTime();
        if (compDate.getTime() == today.getTime()) {
          return "Today";
        } else if (diff <= 24 * 60 * 60 * 1000) {
          return "Yesterday";
        } else {
          return compDate.toDateString();
        }
      }
      return (
        <View className={``}>
          <View
            style={{
              width: "100%",
              height: 0.5,
              backgroundColor: "#293056",
              top: 20,
            }}
          />
          <View
            className={`mt-3`}
            style={{
              width: 100,
              height: 20,
              backgroundColor: "#101323",
              position: "relative",
              alignSelf: "center",
            }}
          >
            <View>
              <Text className={`text-white relatve text-center `}>
                {getDisplayDate(message.date.split("-"))}
              </Text>
            </View>
          </View>
        </View>
      );
}

export default TypeDate