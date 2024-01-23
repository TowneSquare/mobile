import {
  View,
  Text,
  Dimensions,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import { sizes } from '../../utils';
import { appColor } from '../../constants';
import Balance from './Airdrop/Balance';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

interface Props {
  balanceTitle: string;
  balance: string;
  label: string;
  description: string;
  onPress?: () => void;
  showButton?: boolean;
  buttonLabel?: string;
  onHold?: boolean;
}
const RewardEmptystate = ({
  balance,
  balanceTitle,
  description,
  label,
  onPress,
  showButton,
  buttonLabel,
  onHold = false,
}: Props) => {
  return (
    <View style={styles.view1}>
      <Balance onHold={onHold} title={balanceTitle} balance={balance} />
      <View style={styles.view2}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.description}>{description}</Text>
        {showButton && (
          <Pressable onPress={() => onPress?.()} style={styles.button}>
            <Text style={styles.buttonText}>{buttonLabel}</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default RewardEmptystate;

const styles = StyleSheet.create({
  date: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    color: appColor.grayLight,
    lineHeight: size.getHeightSize(21),
    marginTop: size.getHeightSize(16),
  },
  label: {
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
    textAlign: 'center',
  },
  description: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    color: appColor.kGrayscale,
    lineHeight: size.getHeightSize(21),
    textAlign: 'center',
  },
  view1: {
    paddingHorizontal: size.getWidthSize(16),
    marginTop: size.getHeightSize(16),
    flex: 1,
  },
  view2: {
    flex: 1,
    justifyContent: 'center',
    gap: size.getHeightSize(8),
  },
  button: {
    marginTop: size.getHeightSize(16),
    minHeight: size.getHeightSize(48),
    borderRadius: 40,
    justifyContent: 'center',
    backgroundColor: appColor.kSecondaryButtonColor,
    paddingHorizontal: size.getWidthSize(16),
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: size.fontSize(18),
    fontFamily: 'Outfit-Medium',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(23),
    letterSpacing: 0.4,
  },
});
