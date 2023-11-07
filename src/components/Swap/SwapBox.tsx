import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import { sizes } from '../../utils';
import { appColor } from '../../constants';
import ArrowDown from '../../../assets/images/svg/ArrowDown';

const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  callback: () => void;
}
const Swap2Box = ({ callback }: Props) => {
  const [selectedToken, setSelectedToken] = useState(null);

  return (
    <>
      <View style={styles.container}>
        <Text style={[styles.sText]}>To</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="0.0"
              maxLength={5}
              keyboardType="number-pad"
              keyboardAppearance="dark"
              placeholderTextColor={appColor.kTextColor}
              style={styles.textInput}
            />
          </View>
          <View>
            <Pressable onPress={callback} style={styles.token}>
              {selectedToken ? (
                <>
                  {selectedToken.image}
                  <Text style={styles.sText}>{selectedToken.token}</Text>
                </>
              ) : (
                <Text style={styles.sText}>Token</Text>
              )}
              <ArrowDown />
            </Pressable>
          </View>
        </View>
        {selectedToken ? (
          <Text
            style={[
              styles.sText,
              { textAlign: 'right', paddingLeft: 160, paddingTop: 8 },
            ]}
          >
            Balance: <Text> {selectedToken.balance} </Text>
          </Text>
        ) : (
          <Text
            style={[
              styles.sText,
              { textAlign: 'right', paddingLeft: 160, paddingTop: 8 },
            ]}
          >
            Balance: <Text>00.000</Text>
          </Text>
        )}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    height: size.getHeightSize(124),
    width: size.getHeightSize(328),
    borderRadius: 16,
    flex: 1,
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(24),
    backgroundColor: appColor.kgrayDark2,
  },
  sText: {
    fontSize: size.fontSize(14),
    fontWeight: '400',
    fontFamily: 'Outfit-Regular',
    color: appColor.kTextColor,
  },
  ssText: {
    fontSize: size.fontSize(13),
    fontWeight: '600',
    fontFamily: 'Outfit-Regular',
    color: appColor.klightPurple,
  },
  token: {
    height: size.getHeightSize(40),
    borderRadius: 40,
    width: size.getWidthSize(104),
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: appColor.kWhiteColor,
    padding: 8,
    backgroundColor: appColor.grayDark,
  },
  inputContainer: {
    backgroundColor: appColor.kgrayDark2,
    paddingHorizontal: size.getWidthSize(2),
    flexDirection: 'row',
    gap: size.getWidthSize(16),
  },
  textInput: {
    fontSize: size.fontSize(22),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-Regular',
    paddingTop: size.getHeightSize(8),
    paddingBottom: size.getHeightSize(8),
    color: appColor.kTextColor,
    maxHeight: size.getHeightSize(45),
  },
});

export default Swap2Box;
