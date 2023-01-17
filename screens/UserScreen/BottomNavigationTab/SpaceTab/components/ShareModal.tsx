import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  Pressable,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../Components/Redux/hooks";
import { Avatar } from "react-native-elements";
import COLORS from "../../../../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import SearchBar from "../../../../../Components/SearchBarComponent";
import React, { useState } from "react";
import DismissKeyboard from "../../../../../Components/DismissKeyboard";
import { updateShareModal } from "../controller/SpaceController";
import styles from "../../DiscoverTab/Components/UserWalletComponents/ModalStyle";
import imageAssets from "../../../../../constants/images";
import { height, width } from "../../../../../constants/utils";
const ShareModal = () => {
  const [selectedUser, selectUser] = useState<string[]>([]);
  interface User {
    id: string;
    name: string;
    userName: string;
    profilePics: object;
  }
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector((state) => state.spaceController.shareModal);
  const inviteAll = () => {
    const invited = [];
    for (const user in users) {
      invited.push(users[user].id);
    }
    selectUser(invited);
  };
  const users: Array<User> = [
    {
      id: "1",
      name: "Aptomingos",
      userName: "@Aptomigos",
      profilePics: imageAssets.inviteUsersdp,
    },
    {
      id: "2",
      name: "User12234",
      userName: "@x23ss",
      profilePics: imageAssets.inviteUsersdp,
    },
    {
      id: "3",
      name: "User12234",
      userName: "@df932",
      profilePics: imageAssets.inviteUsersdp,
    },
    {
      id: "4",
      name: "User12234",
      userName: "@monke213",
      profilePics: imageAssets.inviteUsersdp,
    },
    {
      id: "5",
      name: "User12234",
      userName: "@daomaster",
      profilePics: imageAssets.inviteUsersdp,
    },
    {
      id: "6",
      name: "User12234",
      userName: "@0xds",
      profilePics: imageAssets.inviteUsersdp,
    },
    {
      id: "7",
      name: "Aptomingos",
      userName: "@Aptomigos",
      profilePics: imageAssets.inviteUsersdp,
    },
    {
      id: "8",
      name: "Aptomingos",
      userName: "@Aptomigos",
      profilePics: imageAssets.inviteUsersdp,
    },
    {
      id: "9",
      name: "Aptomingos",
      userName: "@Aptomigos",
      profilePics: imageAssets.inviteUsersdp,
    },
  ];
  const renderData = (user: User) => {
    const addUsersToSelect = (userId: string) => {
      if (selectedUser.includes(userId)) return;
      selectUser((previousSelection) => [...previousSelection, userId]);
    };
    const deselect = (userId: string): void => {
      const filteredUsers: Array<string> = [];
      for (let i = 0; i < selectedUser.length; i++) {
        if (selectedUser[i] !== userId) filteredUsers.push(selectedUser[i]);
      }

      selectUser(filteredUsers);
    };
    return selectedUser.includes(user.id) ? (
      <Pressable
        onPress={() => deselect(user.id)}
        className="flex-row items-center rounded-lg bg-[#42307D] mt-3"
      >
        <Avatar source={user.profilePics} size={60} />
        <View className="ml-3">
          <Text className="text-white text-lg font-semibold mb">
            {user.name}
          </Text>
          <Text className="text-[#D6BBFB] text-base ">{user.userName}</Text>
        </View>
      </Pressable>
    ) : (
      <Pressable
        onPress={() => addUsersToSelect(user.id)}
        className="flex-row items-center mt-3"
      >
        <Avatar source={user.profilePics} size={60} />
        <View className="ml-3">
          <Text className="text-white text-lg font-semibold mb">
            {user.name}
          </Text>
          <Text className="text-[#D6BBFB] text-base ">{user.userName}</Text>
        </View>
      </Pressable>
    );
  };
  return (
    <Modal
      transparent={true}
      animationType="slide"
      onRequestClose={() => {
        dispatch(updateShareModal());
        selectUser([]);
      }}
      visible={isVisible}
    >
      <DismissKeyboard>
        <View style={styles.modalContent}>
          <View>
            <View style={styles.barIcon} />
            <View className={`ml-5  mr-5`}>
              <View
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                className={`flex-row  h-11 mt-5`}
              >
                <AntDesign name="close" size={22} color={COLORS.GRAYBLUE800} />
                <Text className="text-white text-base ">Invite People</Text>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(updateShareModal());
                    selectUser([]);
                  }}
                >
                  <AntDesign name="close" size={22} color={COLORS.WHITE} />
                </TouchableOpacity>
              </View>
              <SearchBar
                placeholder="Search"
                borderRadius={10}
                color="#B3B8DB"
                margintop={4}
              />
              <View className="flex-row mt-4 mb-4">
                <AntDesign name="plus" color={"#B692F6"} size={22} />
                <TouchableOpacity
                  onPress={() => {
                    inviteAll();
                  }}
                >
                  <Text className="text-[#B692F6] ml-3  font-semibold text-base">
                    Invite All
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  height: height * 0.63,
                  marginBottom: 10,
                }}
              >
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={users}
                  renderItem={({ item }) => renderData(item)}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingTop: 10,
                paddingHorizontal: 10,
                borderTopWidth: 1,
                borderTopColor: "#101323",
                height: 84,
                width: width,
              }}
            >
              <View className=" bg-[#363F72] rounded-lg h-11 mr-3 flex-1 pl-4 justify-center">
                <Text className="text-white text-sm ">
                  We are hosting LIVE SPACE, join us!
                </Text>
              </View>
              <View className="h-11 justify-center mr-2">
                <MaterialIcons name="send" size={28} color="#F2F0FF" />
              </View>
            </View>
          </View>
        </View>
      </DismissKeyboard>
    </Modal>
  );
};

export default ShareModal;
