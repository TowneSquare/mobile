import React, {useRef, useMemo, useCallback} from 'react'
import BottomSheet, { BottomSheetScrollView, BottomSheetBackdrop, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Platform, Pressable, Text, StyleSheet, Dimensions } from 'react-native';
import CustomHandler from '../../Feed/CustomHandler';
import { appColor } from '../../../constants';
import { sizes } from '../../../utils';
import { useAppSelector , useAppDispatch} from '../../../controller/hooks';
import { updateEditProfile } from '../../../controller/UserController';

const { height, width } = Dimensions.get('window');
  const size = new sizes(height, width);
const EditProfile = () => {
    const dispatch = useAppDispatch();
    const bottomSheetRef = useRef<BottomSheet>(null)
     const EDIT_PROFILE = useAppSelector(
      (state) => state.USER.editProfile
    );

     const closeModal = () => {
      bottomSheetRef.current?.close()
      dispatch(updateEditProfile(false));
    };
    const renderBackdrop = useCallback(
       (props:any) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior={"close"}
        disappearsOnIndex={1}
        appearsOnIndex={2}
      />
    ),
    []
  );
  return (
    <BottomSheet
        onClose={closeModal}
        ref={bottomSheetRef}
        enablePanDownToClose={true}
        snapPoints={[Platform.OS === 'ios' ? '80%' : '80%']}
        handleComponent={CustomHandler}
        index={EDIT_PROFILE ? 0 : -1}
        backgroundStyle={{
          backgroundColor: appColor.kgrayDark2,
        }}
        detached={true}
    >
        <Pressable style={styles.container}>
            <Text style={styles.text}>Edit Profile</Text>
        </Pressable>

    </BottomSheet>
  )
}

export default EditProfile
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