import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
  Pressable,
} from "react-native";
import { toastConfig } from "../../components/Feed/ShowToast";
import React, { useState, createContext, useContext } from "react";
import { sizes } from "../../utils";
const { height, width } = Dimensions.get("window");
import { appColor, fonts } from "../../constants";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import More from "../../../assets/images/svg/More";
import BarCode from "../../../assets/images/svg/Barcode";
import Bell from "../../../assets/images/svg/Bell";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useFonts } from "expo-font";
import ReportPanel from "../../components/Feed/ReportPanel";
import { FeedContent, UserPost, UserCommunityPost } from "../../models";
import ForYou from "../../components/Feed/ForYou";
import Community from "../../components/Feed/Community";
import { UserPosts, CommunityPost } from "../../components/Feed/DuumyData";
import { useNavigation } from "@react-navigation/native";
const size = new sizes(height, width);
import { DrawerActions } from "@react-navigation/native";
import ReceiveTokenModal from "../../components/Feed/ReceiveTokenModal";
import { useAppSelector, useAppDispatch } from "../../controller/hooks";
import {
  updateReceiveModalState,
  updateReportingModal,
  updateReportPostModal,
  updateReportUserModal,
  updateBlockUserModal,
} from '../../controller/FeedsController';
import ToastHook from '../../hooks/Feeds/ToastHook';
import ReportPostModal from '../../components/Feed/ReportPostModal';
import ReportUserModal from '../../components/Feed/ReportUserModal';
import BlockUserModal from '../../components/Feed/BlockUserModal';
import Toast from 'react-native-toast-message';
import NotificationBell from "../../components/Feed/NotificationBell";
const Main = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const [view, setSwitchView] = useState(true);
  const { showBlockToast, showReportUserToast, showReportPostToast } =
    ToastHook();
  const modals = useAppSelector((state) => ({
    reportPostModal: state.FeedsSliceController.ReportPostModal,
    reportPanel: state.FeedsSliceController.ReportingModal,
    reportUser: state.FeedsSliceController.ReportUserModal,
    blockUser: state.FeedsSliceController.BlockUserModal,
    myPostModal: state.FeedsSliceController.MyPostPanel,
    deletePost: state.FeedsSliceController.DeleteMyPostPanel,
  }));
  const isAnyModalOpen = Object.values(modals).some((value) => value === true);
  const handleView = () => {
    setSwitchView((previous) => !previous);
  };

  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }
  const closeModal = () => {
    dispatch(updateReceiveModalState(false));
  };
  const openModal = () => {
    dispatch(updateReceiveModalState(true));
  };
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <StatusBar style="light" backgroundColor={appColor.kgrayDark2} />
      <View style={styles.Header}>
        <View style={styles.Navigation}>
          <More onPress={openDrawer} />
          <Text style={styles.title}>TowneSquare</Text>
          <Feather
            name="search"
            color={appColor.kWhiteColor}
            size={size.fontSize(24)}
          />
          <NotificationBell />
          <BarCode onPress={openModal} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: size.getWidthSize(4),
          }}
        >
          <Pressable
            onPress={handleView}
            style={view ? styles.focusedTab : styles.tab}
          >
            <Text style={view ? styles.focusedtabText : styles.tabText}>
              For you
            </Text>
          </Pressable>
          <Pressable
            onPress={handleView}
            style={!view ? styles.focusedTab : styles.tab}
          >
            <Text style={!view ? styles.focusedtabText : styles.tabText}>
              Community
            </Text>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        {view ? (
          <FlatList
            data={UserPosts}
            renderItem={({ item }) => <ForYou data={item} />}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <FlatList
            data={CommunityPost}
            renderItem={({ item }) => <Community data={item} />}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
      <Pressable
        onPress={() => navigation.navigate('CreatePost' as never)}
        style={styles.FAB}
      >
        <AntDesign name="plus" size={25} color={appColor.kTextColor} />
      </Pressable>
      {isAnyModalOpen && <View style={styles.overlay} />}
      <ReportUserModal reportUser={showReportUserToast} />
      <ReportPanel />
      <ReportPostModal reportPost={showReportPostToast} />
      <BlockUserModal block={showBlockToast} />
      <Toast config={toastConfig} />
      <ReceiveTokenModal closeModal={closeModal} />
    </SafeAreaView>
  );
};

export default Main;
const styles = StyleSheet.create({
  Header: {
    height: size.heightSize(130),
    width: "100%",
    backgroundColor: appColor.kgrayDark2,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: size.getHeightSize(42) - Constants.statusBarHeight,
  },
  Navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: size.getWidthSize(16),
    flex: 1,
  },
  title: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: "Outfit-Regular",
    letterSpacing: 0.04,
    width: size.getWidthSize(152),
  },
  focusedTab: {
    backgroundColor: appColor.kSecondaryButtonColor,
    flex: 1,
    paddingVertical: size.getHeightSize(8),
    justifyContent: "center",
    marginHorizontal: size.getWidthSize(4),
    borderRadius: 40,
    height: size.getHeightSize(36),
  },
  focusedtabText: {
    color: appColor.kTextColor,
    textAlign: "center",
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(20),
    fontFamily: "Outfit-SemiBold",
  },
  tabText: {
    color: appColor.kTextColor,
    textAlign: "center",
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    fontFamily: "Outfit-Regular",
  },
  tab: {
    backgroundColor: "transparent",
    flex: 1,
    paddingVertical: size.getHeightSize(8),
    justifyContent: "center",
    paddingHorizontal: size.getWidthSize(4),
    borderRadius: 40,
  },
  FAB: {
    height: size.getHeightSize(56),
    width: size.getHeightSize(56),
    borderRadius: 50,
    backgroundColor: appColor.kSecondaryButtonColor,
    position: "absolute",
    bottom: size.getHeightSize(42),
    right: size.getWidthSize(18),
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
});
