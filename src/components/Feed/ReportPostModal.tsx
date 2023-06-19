import {
    View,
    Text,
    StyleSheet,
    Platform,
    Image,
    Dimensions,
    Pressable,
  } from 'react-native';
  import React, { useRef, useEffect } from 'react';
  import { useFonts } from 'expo-font';
  import { appColor, fonts, images } from '../../constants';
  import { sizes } from '../../utils';
  import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
  import CustomHandler from './CustomHandler';
  import ReportFlag from '../../../assets/images/svg/ReportFlag';
  import { useAppDispatch, useAppSelector } from '../../controller/hooks';
  import { updateReportPostModal } from '../../controller/FeedsController';
  const { height, width } = Dimensions.get('window');
  const size = new sizes(height, width);
  interface Props {
    reportPost: () => void;
  }
  const ReportPostModal = ({ reportPost }: Props) => {
    const dispatch = useAppDispatch();
    const reportPostModal = useAppSelector(
      (state) => state.FeedsSliceController.ReportPostModal
    );
    const bottomSheetRef = useRef<BottomSheet>(null);
    useEffect(() => {
      if (reportPostModal === false) {
        bottomSheetRef.current?.close();
      }
    }, [reportPostModal]);
    let [isLoaded] = useFonts({
      'Outfit-Bold': fonts.OUTFIT_BOLD,
      'Outfit-Medium': fonts.OUTFIT_NORMAL,
      'Outfit-Regular': fonts.OUTFIT_REGULAR,
      'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
    });
    const closeModal = () => {
      dispatch(updateReportPostModal(false));
    };
    return (
      <BottomSheet
        onClose={closeModal}
        handleComponent={CustomHandler}
        ref={bottomSheetRef}
        enablePanDownToClose={true}
        index={reportPostModal ? 0 : -1}
        snapPoints={[Platform.OS === 'ios' ? '40' : '40']}
        backgroundStyle={{
          backgroundColor: appColor.kgrayDark2,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <ReportFlag
            style={{
              alignSelf: 'center',
              marginTop: size.getHeightSize(24),
            }}
          />
          <Text
            style={{
              fontSize: size.fontSize(20),
              lineHeight: size.getHeightSize(24),
              color: appColor.kTextColor,
              letterSpacing: size.getWidthSize(0.04),
              fontFamily: 'Outfit-SemiBold',
              textAlign: 'center',
              marginTop: size.getHeightSize(8),
              marginHorizontal: size.getWidthSize(16),
            }}
          >
            Are you sure you want to report this post?
          </Text>
          <View style={{ flex: 1 }} />
          <Pressable
            onPress={reportPost}
            style={{
              backgroundColor: appColor.kSecondaryButtonColor,
              marginHorizontal: size.getWidthSize(16),
              borderRadius: 40,
              marginTop: size.getHeightSize(24),
            }}
          >
            <Text
              style={{
                fontSize: size.fontSize(18),
                lineHeight: size.getHeightSize(23),
                color: appColor.kTextColor,
                letterSpacing: size.getWidthSize(0.02),
                fontFamily: 'Outfit-Medium',
                textAlign: 'center',
                paddingVertical: size.getHeightSize(12.5),
              }}
            >
              Report post
            </Text>
          </Pressable>
  
          <Text
            onPress={closeModal}
            style={{
              fontSize: size.fontSize(18),
              lineHeight: size.getHeightSize(23),
              color: appColor.kTextColor,
              letterSpacing: size.getWidthSize(0.02),
              fontFamily: 'Outfit-Medium',
              textAlign: 'center',
              marginBottom: size.getHeightSize(46),
              marginTop: size.getHeightSize(12.5),
            }}
          >
            Cancel
          </Text>
        </View>
      </BottomSheet>
    );
  };
  
  export default ReportPostModal;
  