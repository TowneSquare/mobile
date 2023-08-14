import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
  Pressable,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
import { appColor, fonts } from '../../constants';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import More from '../../../assets/images/svg/More';
import BarCode from '../../../assets/images/svg/Barcode';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useFonts } from 'expo-font';
import NotificationBell from '../../components/Feed/NotificationBell';
import ReportPanel from '../../components/Feed/ReportPanel';
import MainTab from '../../navigations/MainTabNavigation';
import { useNavigation } from '@react-navigation/native';
const size = new sizes(height, width);
import { DrawerActions } from '@react-navigation/native';
import CustomToast from '../../shared/Feed/CustomToast';
import ReceiveTokenModal from '../../components/Feed/ReceiveTokenModal';
import { useAppSelector, useAppDispatch } from '../../controller/hooks';
import { updateReceiveModalState } from '../../controller/FeedsController';
import {
  updateShowCustomToast,
  updateToastToShow,
} from '../../controller/createPost';
import ReportPostModal from '../../components/Feed/ReportPostModal';
import ReportUserModal from '../../components/Feed/ReportUserModal';
import BlockUserModal from '../../components/Feed/BlockUserModal';
import { resetModals } from '../../controller/FeedsController';
import { batch } from 'react-redux';
type ToastType = 'none' | 'reportUser' | 'blockUser' | 'reportPost';
const Main = () => {
  useEffect(() => {
    dispatch(resetModals());
  }, []);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const toastType = useAppSelector(
    (state) => state.CreatePostController.toastType
  );


  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
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
  const handleToast = (type: ToastType) => {
    dispatch(updateToastToShow(type));
    dispatch(updateShowCustomToast(true));
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
            onPress={() => {
              navigation.navigate('SearchScreen' as any);
            }}
          />
          <NotificationBell />
          <BarCode onPress={openModal} />
        </View>
      </View>
      <MainTab />

      <Pressable
        onPress={() =>
          navigation.navigate('CreatePost' as any, { showToast: false })
        }
        style={styles.FAB}
      >
        <AntDesign name="plus" size={25} color={appColor.kTextColor} />
      </Pressable>
      <ReportUserModal handleToastView={() => handleToast('reportUser')} />
      <ReportPanel />
        <ReportPostModal handleToastView={() => handleToast('reportPost')} />
        <BlockUserModal handleToastView={() => handleToast('blockUser')} />
      <ReceiveTokenModal closeModal={closeModal} />
      {toastType !== 'none' && toastType !== 'publish' && (
        <CustomToast
          type="sucess"
          marginVertical={24}
          position="top"
          text={
            toastType === 'reportUser'
              ? 'JohnFlock is reported successfully'
              : toastType === 'blockUser'
              ? 'You have blocked JohnFlock'
              : toastType === 'reportPost'
              ? 'Post is reported successfully'
              : null
          }
          functions={[
            () => {
              dispatch(updateToastToShow('none')),
                dispatch(updateShowCustomToast(false));
            },
          ]}
        />
      )}
      {toastType === 'publish' && (
        <CustomToast
          type="sucess"
          marginVertical={24}
          position="top"
          text="Post is published successfully"
          functions={[
            () => {
              dispatch(updateToastToShow('none')),
                dispatch(updateShowCustomToast(false));
            },
          ]}
        />
      )}
    </SafeAreaView>
  );
};

export default Main;
const styles = StyleSheet.create({
  Header: {
    height: size.heightSize(64),
    width: '100%',
    backgroundColor: appColor.kgrayDark2,
    justifyContent: 'center',
  },
  Navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: size.getWidthSize(16),
  },
  title: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-Regular',
    letterSpacing: 0.04,
    width: size.getWidthSize(152),
  },

  FAB: {
    height: size.getHeightSize(56),
    width: size.getHeightSize(56),
    borderRadius: 50,
    backgroundColor: appColor.kSecondaryButtonColor,
    position: 'absolute',
    bottom: size.getHeightSize(42),
    right: size.getWidthSize(18),
    justifyContent: 'center',
    alignItems: 'center',

    elevation: 9,
    shadowColor: '#000000',
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.25,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
});
