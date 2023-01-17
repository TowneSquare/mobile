import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Modal,
} from "react-native";
import { Avatar } from "react-native-elements";
import React from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../Components/Redux/hooks";
import SpaceSettings from "./SpaceSettings";
import { updateLiveSpaceModal } from "../controller/SpaceController";
import styles from "../../DiscoverTab/Components/UserWalletComponents/ModalStyle";
import imageAssets from "../../../../../constants/images";
import { height, width } from "../../../../../constants/utils";
interface Props {
  LivespaceTopics: string[];
  spaceTitle?: string;
}
const SpaceModal: React.FC<Props> = (props) => {
  const displayTopics = (topic: string) => {
    return (
      <View className="bg-[#363F72]  items-center justify-center h-9 p-2 rounded-full mt-3 mr-2">
        <Text className="text-[#D0D5DD]">{topic}</Text>
      </View>
    );
  };
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector((state) => state.spaceController.spaceModal);
  return (
    <Modal
      transparent={true}
      animationType="slide"
      onRequestClose={() => {
        dispatch(updateLiveSpaceModal());
      }}
      visible={isVisible}
    >
      <View style={styles.modalContent}>
        <View>
          <View style={styles.barIcon} />
          <View className={`ml-5  mr-5`}>
            <View
              style={{
                borderBottomColor: "#8C74FF40",

                borderBottomWidth: 1,
              }}
              className="flex-row items-center mt-3 mb-5 pb-3"
            >
              <Avatar rounded size={60} source={imageAssets.monkeDao} />
              <View className="flex-1 ml-3">
                <Text className="text-[#B5B3BC] text-sm font-semibold">
                  COMMUNITY
                </Text>
                <Text className="text-white font-semibold mt-1 text-base">
                  Aptos Land
                </Text>
              </View>
              <View className="justify-center rounded-lg bg-[#D92D20] w-11 h-6 items-center">
                <Text className="text-white ">LIVE</Text>
              </View>
            </View>

            <View>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                  maxHeight: height * 0.3,
                  marginBottom: 5,
                }}
              >
                {props.spaceTitle && (
                  <Text className="text-[#FCFCFD]  text-lg font-semibold ">
                    {props.spaceTitle}
                  </Text>
                )}
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",

                    marginBottom: 10,
                  }}
                >
                  {props.LivespaceTopics.length > 0 &&
                    props.LivespaceTopics.map((item) => {
                      return displayTopics(item);
                    })}
                </View>
              </ScrollView>
            </View>
            <View className="flex-row item-center mb-3">
              <Text className="text-white font-semibold text-base">Host</Text>
              <Text className="text-[#98A2B3] text-base ml-4 font-semibold">
                1
              </Text>
            </View>
            <Avatar rounded size={60} source={imageAssets.hostImage} />
            <Text className="text-[#D6BBFB] font-medium mt-2 mb-3 text-sm">
              realjczh...
            </Text>
            <View className="flex-row item-center mb-3">
              <Text className="text-white font-semibold text-base">
                Co-Host
              </Text>
              <Text className="text-[#98A2B3] text-base ml-4 font-semibold">
                0
              </Text>
            </View>
            <View className="flex-row item-center mb-3">
              <Text className="text-white font-semibold text-base">
                Speakers
              </Text>
              <Text className="text-[#98A2B3] text-base ml-4 font-semibold">
                0
              </Text>
            </View>
            <View className="flex-row item-center mb-3">
              <Text className="text-white font-semibold text-base">
                Listeners
              </Text>
              <Text className="text-[#98A2B3] text-base ml-4 font-semibold">
                0
              </Text>
            </View>
          </View>
        </View>
        <SpaceSettings />
      </View>
    </Modal>
  );
};

export default SpaceModal;
