import { Text, Dimensions, View, StyleSheet } from 'react-native';
import React from 'react';
import { appColor } from '../../constants';
import { sizes } from '../../utils';
import ActionButton from '../../shared/ActionButton';
import ActionButton2 from '../../shared/ActionButton2';
import BottomsheetWrapper from '../../shared/BottomsheetWrapper';
import { useAppDispatch, useAppSelector } from '../../controller/hooks';
import { updateLogoutBottomSheetVisibility } from '../../controller/BottomSheetController';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

const LogoutBottomsheet = () => {
  const dispatch = useAppDispatch();
  const visibility = useAppSelector(
    (state) => state.bottomSheetController.islogoutBottomsheetVisibile
  );
  return (
    <BottomsheetWrapper
      onClose={() => dispatch(updateLogoutBottomSheetVisibility(false))}
      backdropOpacity={0.7}
      visibility={visibility}
    >
      <Text style={styles.title}>Logout</Text>
      <Text style={styles.text}>
        Are you sure you want to logout from TowneSquare?
      </Text>
      <View
        style={{
          gap: size.getHeightSize(8),
          paddingBottom: size.getHeightSize(16),
        }}
      >
        <ActionButton
          title="Logout"
          fontColor={appColor.kTextColor}
          buttonBackgroundColor={appColor.kSecondaryButtonColor}
        />
        <ActionButton2
          title="Cancel"
          callBack={() => dispatch(updateLogoutBottomSheetVisibility(false))}
        />
      </View>
    </BottomsheetWrapper>
  );
};

export default LogoutBottomsheet;

const styles = StyleSheet.create({
  title: {
    marginTop: size.getHeightSize(32),
    marginHorizontal: size.getWidthSize(16),
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
    marginBottom:size.getHeightSize(24)
  },
  text: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-Regular',
    marginBottom: size.getHeightSize(24),
    textAlign: 'center',
  },
});
