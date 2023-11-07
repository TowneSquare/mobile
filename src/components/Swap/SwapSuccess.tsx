import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import BottomsheetWrapper from '../../shared/BottomsheetWrapper';
import SuccesGreenIcon from '../../../assets/images/svg/SuccessGreenIcon';
import { sizes } from '../../utils';
import { appColor } from '../../constants';

import ActionButton from '../../shared/ActionButton';
import Info from '../../../assets/images/svg/Info';
import ActionButton2 from '../../shared/ActionButton2';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

interface Props {
  onClose: () => void;
  visibility: boolean;
  callBack: () => void;
}

function SwapSuccess({ onClose, visibility, callBack }: Props) {
  const [pending, Setpending] = useState(false);

  const PressHandler = () => {
    Setpending(!pending);
  };

  return (
    <BottomsheetWrapper
      visibility={visibility}
      onClose={onClose}
      backdropOpacity={0.7}
    >
      {pending ? (
        <View
          style={{
            marginBottom: size.getHeightSize(16),
            marginTop: size.getHeightSize(16),
          }}
        >
          <Text style={styles.sText}>Transaction successful</Text>
          <View style={styles.container}>
            <SuccesGreenIcon />
            <Text style={styles.sText}> Swap was successful</Text>
          </View>
          <ActionButton
            buttonBackgroundColor={appColor.kTextColor}
            callBack={onClose}
            title={' Close '}
          />
          <View style={{ marginTop: size.getHeightSize(18) }}>
            <Text style={styles.ssText}> View transaction details</Text>
          </View>
        </View>
      ) : (
        <View
          style={{
            marginBottom: size.getHeightSize(16),
            marginTop: size.getHeightSize(16),
          }}
        >
          <Text style={styles.sText}>Sign Transaction</Text>
          <View style={styles.container2}>
            <Info />
            <Text style={styles.sdText}>
              {' '}
              Sign the transaction in your wallet to complete the swap{' '}
            </Text>
          </View>
          <ActivityIndicator />
          <ActionButton2 callBack={PressHandler} title={'Cancel'} />
        </View>
      )}
    </BottomsheetWrapper>
  );
}
const styles = StyleSheet.create({
  container: {
    height: size.getHeightSize(112),
    width: size.getHeightSize(328),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#2ab576',
    elevation: 3,
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(24),
    marginBottom: size.getHeightSize(16),
    marginTop: size.getHeightSize(16),
    backgroundColor: appColor.kGrayscaleDart,
  },
  container2: {
    height: size.getHeightSize(78),
    width: size.getHeightSize(328),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#404040',
    flexDirection: 'row',
    backgroundColor: appColor.kGrayscaleDart,
    paddingHorizontal: size.getWidthSize(24),
    paddingVertical: size.getWidthSize(16),
    marginBottom: size.getHeightSize(24),
    marginTop: size.getHeightSize(16),
  },
  sText: {
    fontSize: size.fontSize(20),
    fontWeight: '600',
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
    lineHeight: size.getHeightSize(24),
    paddingVertical: size.getHeightSize(8),
    color: appColor.kTextColor,
  },
  ssText: {
    fontSize: size.fontSize(18),
    fontWeight: '500',
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Regular',
    color: appColor.kTextColor,
    textAlign: 'center',
  },
  sdText: {
    fontSize: size.fontSize(16),
    fontWeight: '400',
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Regular',
    color: appColor.kTextColor,
    paddingHorizontal: size.getWidthSize(8),
  },
});

export default SwapSuccess;
