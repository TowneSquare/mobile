import {
    View,
    Text,
    StyleSheet,
    Platform,
    Image,
    Dimensions,
    Pressable,
  } from 'react-native';
  import React, { useRef } from 'react';
  import { useFonts } from 'expo-font';
  import { appColor, fonts, images } from '../../constants';
  import { sizes } from '../../utils';
  import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
  import CustomHandler from './CustomHandler';
  import { useAppDispatch, useAppSelector } from '../../controller/hooks';
  import Flag from '../../../assets/images/svg/Flag';
  import Block from '../../../assets/images/svg/Block';
  import * as Animatable from 'react-native-animatable';
  import {
    updateReportingModal,
    updateReportPostModal,
    updateReportUserModal,
    updateBlockUserModal,
  } from '../../controller/FeedsController';
  const { height, width } = Dimensions.get('window');
  const size = new sizes(height, width);
  const ReportPanel = () => {
    const dispatch = useAppDispatch();
    const reportModal = useAppSelector(
      (state) => state.FeedsSliceController.ReportingModal
    );
    const bottomSheetRef = useRef<BottomSheet>(null);
    let [isLoaded] = useFonts({
      'Outfit-Bold': fonts.OUTFIT_BOLD,
      'Outfit-Medium': fonts.OUTFIT_NORMAL,
      'Outfit-Regular': fonts.OUTFIT_REGULAR,
      'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
    });
    const closeModal = () => {
      bottomSheetRef.current?.close();
      dispatch(updateReportingModal(false));
    };
   
    return (
      <BottomSheet
        onClose={closeModal}
        handleComponent={CustomHandler}
        ref={bottomSheetRef}
        enablePanDownToClose={true}
        index={reportModal ? 0 : -1}
        snapPoints={[Platform.OS === 'ios' ? '30%' : '30%']}
        backgroundStyle={{
          backgroundColor: appColor.kgrayDark2,
        }}
      >
        <Pressable
          onPress={() => {
            closeModal();
            dispatch(updateReportPostModal(true));
          }}
          style={styles.container}
        >
          <Flag />
          <Text style={styles.text}>Report Post</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            closeModal();
            dispatch(updateReportUserModal(true));
          }}
          style={styles.container}
        >
          <Flag />
          <Text style={styles.text}>Report User</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            closeModal();
            dispatch(updateBlockUserModal(true));
          }}
          style={styles.container}
        >
          <Block />
          <Text style={styles.text}>Block user</Text>
        </Pressable>
      </BottomSheet>
    );
  };
  
  export default ReportPanel;
  const styles = StyleSheet.create({
    container: {
      marginTop: size.heightSize(36),
      flexDirection: 'row',
      gap: size.getWidthSize(8),
      paddingLeft: size.getWidthSize(16),
      alignItems: 'center',
    },
    text: {
      fontSize: size.fontSize(18),
      lineHeight: size.getHeightSize(23),
      color: appColor.kTextColor,
      letterSpacing: size.getWidthSize(0.02),
      fontFamily: 'Outfit-Medium',
    },
  });
  