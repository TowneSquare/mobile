import {
  View,
  Text,
  Dimensions,
  Pressable,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import { appColor, images } from '../../../constants';
import { sizes } from '../../../utils';
import PointsIcon from '../../../../assets/images/svg/Reward/PointsIcon';
import { useNavigation } from '@react-navigation/native';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  name: string;
  amount: number;
  price: string;
  nftUri: string;
}
const NftHoldings = ({ name, amount, nftUri, price }: Props) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('AptosMonkey')}
      style={styles.parentContainer}
    >
      <View
        style={{
          height: size.getHeightSize(48),
          width: size.getHeightSize(48),
        }}
      >
        <Image
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 8,
          }}
          source={{ uri: Image.resolveAssetSource(images.aptosMonkey1).uri }}
        />
      </View>
      <View style={styles.nameConatiner}>
        <View style={styles.container}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name}>
            AptosMonkeys
          </Text>
        </View>
        <Text style={styles.amount}>4 NFTs</Text>
      </View>
      <Text style={styles.price}>1,000</Text>
      <PointsIcon size={size.getHeightSize(16)} />
    </Pressable>
  );
};

export default NftHoldings;
const styles = StyleSheet.create({
  parentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: appColor.kgrayDark2,
    paddingVertical: size.getHeightSize(12),
    paddingHorizontal: size.getWidthSize(12),
  },
  nameConatiner: {
    flex: 1,
    marginLeft: size.getWidthSize(8),
  },
  name: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
  },
  amount: {
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    color: appColor.kgrayColor,
    lineHeight: size.getHeightSize(18),
  },
  container: {
    flexDirection: 'row',
    gap: size.getWidthSize(4),
    width: size.getWidthSize(153),
    alignItems: 'center',
  },
  price: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
    marginRight: size.getWidthSize(4),
  },
});
