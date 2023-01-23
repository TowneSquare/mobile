import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import { screenHeight, heightSize } from "../../../constants/sizes";

const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];

const DropdownComponent = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    return (
      <Text className="text-white" style={[styles.label]}>
        Selct Country
      </Text>
    );
  };

  return (
    <View>
      <View style={styles.labelContainer}>
        <Text className="text-white ">Select your Country</Text>
      </View>
      <View>
        <Dropdown
          style={[
            styles.dropdown,
            {
              width: "100%",
              borderColor: "white",
            },
          ]}
          value={value}
          valueField="value"
          labelField="label"
          onChange={(item) => {
           
          }}
          searchPlaceholder="Search"
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          itemTextStyle={{
            color: "white",
          }}
          maxHeight={heightSize(300)}
          containerStyle={{
            backgroundColor: "#0F111E",
            position: "absolute",
            borderRadius: 10,
          }}
          placeholder="Select country"
          statusBarIsTranslucent
        />
      </View>
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
  },
  labelContainer: {
    backgroundColor: "#0F111E",
    alignSelf: "flex-start",
    paddingHorizontal: 3,
    marginStart: 27,
    zIndex: 1,
    elevation: 1,

    shadowColor: "transparent",
    position: "absolute",
    top: -9,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
    color: "white",
  },
  label: {
    position: "absolute",
    backgroundColor: "#0F111E",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: "white",
    padding: 10,
    height: 40,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "white",
    padding: 10,
  },
  iconStyle: {
    width: 20,
    height: 20,
    color: "white",
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    borderRadius: 10,
    color: "white",
  },
});
