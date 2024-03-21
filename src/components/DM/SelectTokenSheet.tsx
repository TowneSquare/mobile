import { View, Text, Dimensions, StyleSheet, Pressable } from 'react-native';
import React from 'react';

import { Avatar } from 'react-native-elements';
import ScrollableBottomSheetWrapper from '../../shared/ScrollableBottomSheetWrapper';
import { appColor } from '../../constants';
import { sizes } from '../../utils';
import AptosIcon from '../../../assets/images/svg/AptosIcon';
import TetherIcon from '../../../assets/images/svg/TetherIcon';
import { getTokenLists } from '../../utils/walletFunctions';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  visibility: boolean;
  onClose: () => void;
  callBack: (token: {
    name: string;
    logo: string;
    symbol: string;
    decimal: string;
    coinType:  `${string}::${string}::${string}`;
  }) => void;
}
const SelectTokenSheet = ({ onClose, visibility, callBack }: Props) => {
  const tokens = getTokenLists();
  return (
    <ScrollableBottomSheetWrapper
      onClose={onClose}
      backdropOpacity={0.7}
      visibility={visibility}
      handlerWidth={115}
      snapPoints={['66.125%']}
    >
      <View
        style={{
          gap: size.getHeightSize(8),
        }}
      >
        {tokens.map((token, index) => (
          <View key={index}>
            <Pressable onPress={() => callBack(token)} style={styles.row}>
              <Avatar
                size={size.getHeightSize(40)}
                rounded
                source={{ uri: token.logo }}
              />
              <Text style={styles.text1}>
                {token.symbol} <Text style={styles.text2}>{token.name}</Text>
              </Text>
            </Pressable>
          </View>
        ))}

        {/* <Pressable onPress={callBack} style={styles.row}>
          <TetherIcon size={size.getHeightSize(40)} />
          <Text style={styles.text1}>
            USDT <Text style={styles.text2}>Theter USD</Text>
          </Text>
        </Pressable>
        <Pressable onPress={callBack} style={styles.row}>
          <TetherIcon size={size.getHeightSize(40)} />
          <Text style={styles.text1}>
            USDT <Text style={styles.text2}>Theter USD</Text>
          </Text>
        </Pressable>
        <Pressable onPress={callBack} style={styles.row}>
          <AptosIcon size={size.getHeightSize(40)} />
          <Text style={styles.text1}>
            APT <Text style={styles.text2}>Aptos coin</Text>
          </Text>
        </Pressable>
        <Pressable onPress={callBack} style={styles.row}>
          <AptosIcon size={size.getHeightSize(40)} />
          <Text style={styles.text1}>
            APT <Text style={styles.text2}>Aptos coin</Text>
          </Text>
        </Pressable>
        <Pressable onPress={callBack} style={styles.row}>
          <TetherIcon size={size.getHeightSize(40)} />
          <Text style={styles.text1}>
            USDT <Text style={styles.text2}>Theter USD</Text>
          </Text>
        </Pressable>
        <Pressable onPress={callBack} style={styles.row}>
          <TetherIcon size={size.getHeightSize(40)} />
          <Text style={styles.text1}>
            USDT <Text style={styles.text2}>Theter USD</Text>
          </Text>
        </Pressable>
        <Pressable onPress={callBack} style={styles.row}>
          <AptosIcon size={size.getHeightSize(40)} />
          <Text style={styles.text1}>
            APT <Text style={styles.text2}>Aptos coin</Text>
          </Text>
        </Pressable>
        <Pressable onPress={callBack} style={styles.row}>
          <AptosIcon size={size.getHeightSize(40)} />
          <Text style={styles.text1}>
            APT <Text style={styles.text2}>Aptos coin</Text>
          </Text>
        </Pressable> */}
      </View>
    </ScrollableBottomSheetWrapper>
  );
};

export default SelectTokenSheet;
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: size.getWidthSize(16),
    gap: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(8),
  },
  text1: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Bold',
    lineHeight: size.getHeightSize(21),
  },
  text2: {
    color: appColor.grayLight,
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(18),
  },
});
