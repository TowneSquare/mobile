import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
  Pressable,
} from "react-native";
import React, { useState, useEffect, useRef, useCallback } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { AntDesign } from "@expo/vector-icons";
import {
  updateCollectionModal,
  updateSelectedCollection,
} from "../Controller/GroupController";
import COLORS from "../../../../../constants/Colors";
import { heightSize, screenHeight } from "../../../../../constants/sizes";
import SearchBar from "../../../../../Components/SearchBarComponent";
import imageAssets from "../../../../../constants/images";
import { height } from "../../../../../constants/utils";
import { GroupCollectionModel } from "../../../../../Components/Models/index";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../Components/Redux/hooks";

const SellectCollectionModal = () => {
  const [selected, setSelected] = useState<GroupCollectionModel>();
  const data: Array<GroupCollectionModel> = [
    {
      name: "Aptomigos1",
      image: imageAssets.NFTimage,
    },
    {
      name: "Aptomigos2",
      image: imageAssets.NFTimage,
    },
    {
      name: "Aptomigos3",
      image: imageAssets.NFTimage,
    },
    {
      name: "Aptomigos4",
      image: imageAssets.NFTimage,
    },
    {
      name: "Aptomigos5",
      image: imageAssets.NFTimage,
    },
    {
      name: "Aptomigos6",
      image: imageAssets.NFTimage,
    },
    {
      name: "Aptomigos7",
      image: imageAssets.NFTimage,
    },
    {
      name: "Aptomigos8",
      image: imageAssets.NFTimage,
    },
    {
      name: "Aptomigos9",
      image: imageAssets.NFTimage,
    },
  ];
  const isVisible = useAppSelector(
    (state) => state.GroupController.selectCollectionModal
  );

  const dispatch = useAppDispatch();

  const Collection = (item: GroupCollectionModel) => {
    return (
      <Pressable
        onPress={() => {
          setSelected(item);
          console.log("here");
        }}
        style={{
          height: heightSize(60),
          backgroundColor: item.name === selected?.name ? "#42307D" : undefined,
        }}
        className="flex-row mt-3 rounded-md items-center px-4"
      >
        <Image
          style={{ height: 38, width: 38, borderRadius: 24 }}
          source={item.image}
        />
        <Text className="text-white flex-1 font-small ml-4 text-base">
          {item.name}
        </Text>
        {item.name === selected?.name && (
          <Text className="text-[#B692F6] text-base ">Selected</Text>
        )}
      </Pressable>
    );
  };
  return (
    <Modal
      transparent={true}
      onRequestClose={() => {
        selected && dispatch(updateSelectedCollection(selected));
        dispatch(updateCollectionModal());
      }}
      visible={isVisible}
    >
      <View style={styles.modalContent}>
        <View>
          <View style={styles.barIcon} />
          <View style={{}} className={`ml-3 mr-3 `}>
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
              }}
              className={`flex-row h-11  mt-5`}
            >
              <View></View>
              <Text className="text-white text-center text-base font-semibold  ">
                Select Collection
              </Text>
              <TouchableOpacity
                onPress={() => {
                  selected && dispatch(updateSelectedCollection(selected));
                  dispatch(updateCollectionModal());
                }}
              >
                <AntDesign name="close" size={22} color={COLORS.WHITE} />
              </TouchableOpacity>
            </View>
            <SearchBar
              placeholder="Search"
              borderRadius={10}
              color="#4E5BA6"
              margintop={4}
            />
            <View style={{ height: screenHeight(0.8) }} className=" mt-5 mb-10">
              <FlatList
                data={data}
                renderItem={({ item }) => Collection(item)}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SellectCollectionModal;
const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: COLORS.GRAYBLUE800,
    paddingTop: 12,
    paddingHorizontal: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: height,
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  barIcon: {
    width: 60,
    height: 5,
    alignSelf: "center",
    backgroundColor: COLORS.GRAYBLUE500,
    borderRadius: 3,
  },
});
