import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import COLORS from "../../../../../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
const WalletDropDown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("SOLANA");
  const [items, setItems] = useState([
    {
      label: "Solana   SOL",
      value: "SOLANA",
      icon: () => (
        <Image
          source={require("../../../../../../assets/PNG/solanalogo1.png")}
        />
      ),
    },
  ]);

  return (
    <View>
      <DropDownPicker
        style={{
          backgroundColor: "#293056",
        }}
        listItemContainer={{
          height: 100,
        }}
        textStyle={{
          fontSize: 15,
          color: "white",
        }}
        iconContainerStyle={{
          marginVertical: 3,
        }}
        customItemContainerStyle={{
          marginBottom: 10,
        }}
        dropDownContainerStyle={{
          backgroundColor: "#293056",
          padding: 10,
        }}
        closeIconStyle={{
          width: 30,
          height: 30,
        }}
        listItemLabelStyle={{
          color: "white",
        }}
        ArrowUpIconComponent={() => (
          <AntDesign name="up" size={16} color={COLORS.WHITE} />
        )}
        ArrowDownIconComponent={() => (
          <AntDesign name="down" size={16} color={COLORS.WHITE} />
        )}
        showTickIcon={false}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        listMode="SCROLLVIEW"
      />
    </View>
  );
};

export default WalletDropDown;
