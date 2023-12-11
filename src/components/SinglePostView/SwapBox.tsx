import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';
import React from 'react';
import { sizes } from '../../utils';
import { appColor } from '../../constants';
import ReSwap from '../../../assets/images/svg/Reswap';
import { useAppSelector, useAppDispatch } from '../../controller/hooks';
import Aptos2 from '../../../assets/images/svg/Aptos2';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { updateAmount } from '../../controller/SwapController';
const { height, width } = Dimensions.get('window');
import UsdcIcon from '../../../assets/images/svg/UsdcIcon';
const size = new sizes(height, width);
interface Props {
  onOpenAssetSheet: () => void;
}
const SwapBox = ({ onOpenAssetSheet }: Props) => {
  const balance = '24.2477';
  const dispatch = useAppDispatch();
  const fromAmount = useAppSelector((state) => state.SwapController.fromAmount);
  const toAmount = useAppSelector((state) => state.SwapController.toAmount);
  return (
    <View style={{ gap: size.getHeightSize(5) }}>
      <View style={styles.container}>
        <Text style={styles.text}>From</Text>
        <View style={styles.row}>
          <TextInput
            keyboardType="number-pad"
            value={fromAmount}
            placeholder="0.0"
            onChangeText={(text) => dispatch(updateAmount(text))}
            placeholderTextColor={appColor.grayLight}
            cursorColor={appColor.primaryLight}
            style={[
              styles.textInput,
              {
                color:
                  fromAmount > balance
                    ? appColor.kErrorText
                    : appColor.kTextColor,
              },
            ]}
          />
          <View style={styles.view1}>
            <Text style={styles.max}>MAX</Text>
          </View>
          <Pressable onPress={onOpenAssetSheet} style={styles.dropDown}>
            <Aptos2 size={size.getHeightSize(24)} />
            <Text style={styles.APT}>APT</Text>
            <MaterialIcons
              name="arrow-drop-down"
              size={size.getHeightSize(24)}
              color={appColor.kWhiteColor}
            />
          </Pressable>
        </View>
        <View style={styles.balanceView}>
          <Text style={styles.balanceText}>
            Balance: <Text style={{ color: appColor.kTextColor }}>24.2477</Text>
          </Text>
        </View>
      </View>
      <ReSwap
        size={size.getHeightSize(46)}
        style={{
          position: 'absolute',
          top: size.getHeightSize(111),
          zIndex: 1,
          left: size.getWidthSize(137),
        }}
      />
      <View style={styles.container2}>
        <Text style={styles.text}>To</Text>
        <View style={styles.row}>
          <TextInput
            value={isNaN(parseFloat(toAmount)) ? '' : toAmount}
            editable={false}
            placeholder="0.0"
            placeholderTextColor={appColor.grayLight}
            cursorColor={appColor.primaryLight}
            style={[styles.textInput]}
          />
          <Pressable onPress={onOpenAssetSheet} style={styles.dropDown}>
            <UsdcIcon size={size.getHeightSize(24)} />
            <Text style={styles.APT}>USDC</Text>
            <MaterialIcons
              name="arrow-drop-down"
              size={size.getHeightSize(24)}
              color={appColor.kWhiteColor}
            />
          </Pressable>
        </View>
        <View style={styles.balanceView}>
          <Text style={styles.balanceText}>
            Balance: <Text style={{ color: appColor.kTextColor }}>0</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 16,
    paddingHorizontal: size.getWidthSize(12),
    paddingTop: size.getHeightSize(16),
    backgroundColor: appColor.kgrayDark2,
    paddingBottom: size.getHeightSize(24),
  },
  container2: {
    width: '100%',
    borderRadius: 16,
    paddingHorizontal: size.getWidthSize(12),
    paddingTop: size.getHeightSize(24),
    backgroundColor: appColor.kgrayDark2,
    paddingBottom: size.getHeightSize(16),
  },
  text: {
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    color: appColor.grayLight,
    lineHeight: size.getHeightSize(18),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
  },
  dropDown: {
    flexDirection: 'row',
    gap: size.getWidthSize(8),
    alignItems: 'center',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: appColor.kGrayscale,
    paddingHorizontal: size.getWidthSize(12),
    paddingVertical: size.getHeightSize(8),
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
    minHeight: size.getHeightSize(40),
  },
  APT: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-SemiBold',
    letterSpacing: 0.04,
    textTransform: 'uppercase',
  },
  textInput: {
    fontSize: size.fontSize(29),
    lineHeight: size.getHeightSize(37),
    fontFamily: 'Outfit-Regular',
    color: appColor.kTextColor,
    maxHeight: size.getHeightSize(45),
    flex: 1,
  },
  view1: {
    borderRadius: 8,
    backgroundColor: appColor.grayDark,
    paddingVertical: size.getHeightSize(5),
    paddingHorizontal: size.getWidthSize(8),
  },
  max: {
    fontSize: size.fontSize(13),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.primaryLight,
    lineHeight: size.getHeightSize(16),
  },
  balanceView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: size.getHeightSize(8),
    alignSelf: 'flex-end',
  },
  balanceText: {
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    fontFamily: 'Outfit-Regular',
    color: appColor.grayLight,
  },
});

export default SwapBox;
