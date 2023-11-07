import { View, Text, Dimensions, StyleSheet } from 'react-native';
const { height, width } = Dimensions.get('window');
import React from 'react';
import InfoIcon from '../../assets/images/svg/InfoIcon';
import { sizes } from '../utils';
import * as Animatable from 'react-native-animatable';
import { appColor } from '../constants';
import InfoWarningIcon from '../../assets/images/svg/InfoWarningIcon';
import FailedInfoIcon from '../../assets/images/svg/FailedInfoIcon';
const size = new sizes(height, width);
interface Props {
  marginVertical: number;
}
interface FailedProps {
  marginVertical: number;
  type: 'failed' | 'warning';
}
export const TransactionFailed = ({ marginVertical, type }: FailedProps) => {
  return (
    <View
      style={[
        styles.failedView,
        {
          marginVertical: size.getHeightSize(marginVertical),
        },
      ]}
    >
      {type === 'failed' ? (
        <FailedInfoIcon size={size.getHeightSize(24)} />
      ) : (
        <InfoWarningIcon size={size.getHeightSize(24)} />
      )}
      <Text style={[styles.failedText]}>Transaction failed</Text>
    </View>
  );
};
const SignTransaction = ({ marginVertical }: Props) => {
  return (
    <Animatable.View
      animation="slideInUp"
      duration={200}
      style={[
        styles.infoView,
        {
          marginVertical: size.getHeightSize(marginVertical),
        },
      ]}
    >
      <InfoIcon size={size.getHeightSize(24)} />
      <Text style={styles.infoText}>
        Sign the transaction in your wallet to complete the payment
      </Text>
    </Animatable.View>
  );
};

export default SignTransaction;
const styles = StyleSheet.create({
  infoView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: size.getWidthSize(8),
    paddingHorizontal: size.getWidthSize(24),
    paddingVertical: size.getHeightSize(16),
    backgroundColor: appColor.feedBackground,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: appColor.grayDark,
    marginVertical: size.getHeightSize(40),
  },
  infoText: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-Regular',
    flex: 1,
  },
  failedView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
    borderWidth: 1,
    borderRadius: 8,
    borderColor: appColor.kErrorText,
    paddingHorizontal: size.getWidthSize(24),
    paddingVertical: size.getHeightSize(24),
    width: '100%',
    backgroundColor: appColor.feedBackground,
  },
  failedText: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-Regular',
  },
});
