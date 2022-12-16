import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import COLORS from "../../../../constants/Colors";
import { Button, Menu, Divider, Provider } from "react-native-paper";
import { Feather } from "@expo/vector-icons";

const ListOptions = (props) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <Provider>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Feather
              name="more-vertical"
              size={22}
              color={"white"}
              onPress={openMenu}
            />
          }
        >
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
      </View>
    </Provider>
  );
};

export default ListOptions;
