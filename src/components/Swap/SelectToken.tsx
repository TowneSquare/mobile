import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import React, { useState } from 'react';
import { appColor } from '../../constants';
import { sizes } from '../../utils';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import SearchField from '../../shared/Feed/SearchField';
import TetherIcon from '../../../assets/images/svg/TetherIcon';
import AptosIcon from '../../../assets/images/svg/AptosIcon';
import UsdcIcon from '../../../assets/images/svg/UsdcIcon';
import ScrollableBottomSheetWrapper from '../../shared/ScrollableBottomSheetWrapper';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const TokenAssets = [
  {
    token: 'APT',
    name: 'Aptos coin',
    image: <AptosIcon size={size.getHeightSize(40)} />,
    balance: '26,400',
  },
  {
    token: 'USDT',
    name: 'Theter USD',
    balance: '26,400',
    image: <TetherIcon size={size.getHeightSize(40)} />,
  },
  {
    token: 'ALT',
    name: 'Aptoslauch',
    balance: '21,400',
    image: <AptosIcon size={size.getHeightSize(40)} />,
  },
  {
    token: 'USDC',
    name: 'USD coin',
    balance: '20,400',
    image: <UsdcIcon size={size.getHeightSize(40)} />,
  },
  {
    token: 'APT',
    name: 'Aptos coin',
    image: <AptosIcon size={size.getHeightSize(40)} />,
    balance: '26,400',
  },
  {
    token: 'USDT',
    name: 'Theter USD',
    balance: '26,400',
    image: <TetherIcon size={size.getHeightSize(40)} />,
  },
  {
    token: 'ALT',
    name: 'Aptoslauch',
    balance: '21,400',
    image: <AptosIcon size={size.getHeightSize(40)} />,
  },
  {
    token: 'USDC',
    name: 'USD coin',
    balance: '20,400',
    image: <UsdcIcon size={size.getHeightSize(40)} />,
  },
];

interface Props {
  visibility: boolean;
  onClose: () => void;
  callBack: () => void;
  onSelectToken: (token: any) => void;
}
const SelectTtoken = ({ onClose, visibility }: Props) => {
  const [searchquery, setSearchqry] = useState('');
  const [filtered, setFiltered] = useState(TokenAssets);
  const [selectedToken, setSelectedToken] = useState(null);
  const [snapPoints, setSnapPoints] = useState(['67%']);

  const filteredAsset = (text: string) => {
    setSearchqry(text);
    const filteredCoin = TokenAssets.filter(
      (asset) =>
        asset.token.toLowerCase().includes(text.toLowerCase()) ||
        asset.name.toLowerCase().includes(text.toLowerCase())
    );
    setFiltered(filteredCoin);
  };
  return (
    <ScrollableBottomSheetWrapper
      onClose={() => {
        onClose();
        setSnapPoints(['67%']);
      }}
      backdropOpacity={0.7}
      title="Select asset"
      visibility={visibility}
      snapPoints={snapPoints}
    >
      <Text style={styles.tText}>Select asset</Text>

      <SearchField
        borderColor={appColor.grayLight}
        placeholder="Search tokens"
        marginTop={16}
        onChangeText={filteredAsset}
      />
      <View
        style={{
          height: 1,
          backgroundColor: appColor.grayDark,
          width: width,
          marginTop: size.getHeightSize(16),
        }}
      />

      <BottomSheetScrollView
        onScroll={() => setSnapPoints(['92%'])}
        contentContainerStyle={{
          paddingBottom: size.getHeightSize(32),
        }}
        style={{
          marginTop: size.getHeightSize(8),
        }}
      >
        {filtered.length === 0 ? (
          <Text style={styles.tText}>No matching result found</Text>
        ) : (
          filtered.map((asset, index) => (
            <Pressable
              key={index}
              style={{
                paddingHorizontal: size.getWidthSize(16),
                paddingVertical: size.getHeightSize(8),
                flexDirection: 'row',
                alignItems: 'center',
                height: size.getHeightSize(56),
                gap: size.getWidthSize(16),
              }}
            >
              {asset.image}
              <View style={{ flex: 1 }}>
                <Text style={styles.dTitle}>{asset.token}</Text>
                <Text style={styles.text}>{asset.name}</Text>
              </View>
              <Text style={styles.balance}>
                Balance:{' '}
                <Text style={{ color: appColor.kTextColor }}>
                  {asset.balance}
                </Text>
              </Text>
            </Pressable>
          ))
        )}
      </BottomSheetScrollView>
    </ScrollableBottomSheetWrapper>
  );
};
const styles = StyleSheet.create({
  container: {
    height: size.getHeightSize(70),
    paddingVertical: size.getWidthSize(24),
    paddingHorizontal: size.getWidthSize(16),
    borderWidth: 1,
    marginBottom: size.getHeightSize(130),
    marginVertical: size.getHeightSize(16),
    borderColor: appColor.kgrayTextColor,
    borderRadius: 8,
    gap: 16,
  },
  tTitle: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(17),
    fontFamily: 'Outfit-Regular',
    fontWeight: '400',
  },
  dTitle: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(17),
    fontFamily: 'Outfit-Regular',
    fontWeight: '400',
  },
  balance: {
    color: appColor.grayLight,
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    fontFamily: 'Outfit-Regular',
    fontWeight: '400',
  },
  text: {
    color: appColor.grayLight,
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    fontFamily: 'Outfit-Regular',
  },
  tText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
    marginTop: size.getHeightSize(24),
  },
  textInput: {
    width: size.getWidthSize(258),
    height: size.getHeightSize(48),
    borderRadius: 48,
    borderWidth: 1,
    borderColor: appColor.kGrayscale,
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(8),
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    color: appColor.kTextColor,
    backgroundColor: appColor.kGrayscaleDart,
  },
});
export default SelectTtoken;
