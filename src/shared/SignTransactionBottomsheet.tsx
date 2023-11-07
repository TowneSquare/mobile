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
import ActionButton from './ActionButton';
import SignTransaction, {
  TransactionFailed,
} from '../shared/TransactionStatus';
import ActionButton2 from '../shared/ActionButton2';

const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  title: string;
  callBack?: () => void;
  onClose: () => void;
  visibility: boolean;
  showToast?: boolean;
  status?: 'loading' | 'failed' | 'success' | 'idle';
}
const SignTransactionBottomsheet = ({
  callBack,
  onClose,
  visibility,
  title,
  showToast = false,
  status = 'idle',
}: Props) => {
  const dispatch = useAppDispatch();
  return !visibility ? (
    <></>
  ) : (
    <BottomsheetWrapper
      onClose={onClose}
      backdropOpacity={0.7}
      visibility={visibility}
      handlerWidth={115}
      onMount={() => {
        // status === 'success' &&
        setTimeout(() => {
          onClose();
          callBack?.();
          showToast &&
            dispatch(
              updateToast({
                displayToast: true,
                toastMessage: 'APT has been transferred to you wallet!',
                toastType: 'success',
              })
            );
        }, 4000);
      }}
    >
      <Text style={styles.title}>{title}</Text>
      {status === 'loading' && <SignTransaction marginVertical={24} />}
      {status === 'failed' && (
        <TransactionFailed marginVertical={24} type="failed" />
      )}
      {status === 'failed' ? (
        <ActionButton title="Close" callBack={onClose} />
      ) : (
        <>
          <View
            style={{
              paddingVertical: size.getHeightSize(12),
            }}
          >
            <ActivityIndicator
              color={appColor.primaryLight}
              size={size.getHeightSize(24)}
            />
          </View>
          <ActionButton2 callBack={onClose} title="Cancel" />
        </>
      )}
      <View style={{ height: size.getHeightSize(32) }} />
    </BottomsheetWrapper>
  );
};

export default SignTransactionBottomsheet;
const styles = StyleSheet.create({
  title: {
    marginTop: size.getHeightSize(24),
    marginHorizontal: size.getWidthSize(16),
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
  },
});
