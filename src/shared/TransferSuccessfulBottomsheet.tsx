import {
  Text,
  Dimensions,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import { appColor } from '../constants';
import { sizes } from '../utils';
import BottomsheetWrapper from '../shared/BottomsheetWrapper';
import { useAppDispatch } from '../controller/hooks';
import { updateToast } from '../controller/FeedsController';
import SignTransaction from '../shared/TransactionStatus';
import ActionButton2 from '../shared/ActionButton2';
import ActionButton from './ActionButton';
import SuccessIcon from '../../assets/images/svg/SuccessIcon';

const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  callBack?: () => void;
  onClose: () => void;
  visibility: boolean;
  showToast?: boolean;
}
const TransferSuccessfulBottomsheet = ({
  callBack,
  onClose,
  visibility,

  showToast = false,
}: Props) => {
  return !visibility ? (
    <></>
  ) : (
    <BottomsheetWrapper
      onClose={onClose}
      backdropOpacity={0.7}
      visibility={visibility}
      handlerWidth={115}
    >
      <Text style={styles.title}>Transaction succesful</Text>
      <View
        style={{
          paddingVertical: size.getHeightSize(16),
          paddingHorizontal: size.getWidthSize(16),
          alignItems: 'center',
          borderWidth: 1,
          borderColor: appColor.success,
          borderRadius: 8,
          marginVertical: size.getHeightSize(24),
          backgroundColor: appColor.feedBackground,
        }}
      >
        <SuccessIcon size={size.getHeightSize(48)} />
        <Text
          style={{
            color: appColor.kTextColor,
            fontSize: size.fontSize(20),
            lineHeight: size.getHeightSize(24),
            fontFamily: 'Outfit-SemiBold',
            marginTop: size.getHeightSize(12),
            letterSpacing: 0.4,
            textAlign: 'center',
          }}
        >
          Swap was successful
        </Text>
      </View>
      <ActionButton title="Close" callBack={onClose} />
      <View style={{ height: size.getHeightSize(8) }} />
      <ActionButton2
        callBack={() => {
          onClose();
          callBack();
        }}
        title="View transaction details"
      />
      <View style={{ height: size.getHeightSize(32) }} />
    </BottomsheetWrapper>
  );
};

export default TransferSuccessfulBottomsheet;
const styles = StyleSheet.create({
  title: {
    marginTop: size.getHeightSize(24),
    marginHorizontal: size.getWidthSize(16),
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
    marginBottom: size.getHeightSize(8),
  },
});
