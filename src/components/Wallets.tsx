import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { appColor, fonts, images } from '../constants';
import { useFonts } from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons';
import { sizes } from '../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const Wallets = () => {
  let [isLoaded] = useFonts({
    'Urbanist-Bold': fonts.EXTRABOLD,
    UrbanistSemiBold: fonts.SEMIBOLD,
    'Outfit-Bold': fonts.OUTFIT_BOLD,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <View
      style={{
        marginTop: size.sHeight(0.2),
        height: size.sHeight(0.48),
        justifyContent: 'space-between',
        paddingVertical: 10,
      }}
    >
      <View style={styles.wallet}>
        <View style={styles.rows}>
          <Image source={images.pontem} />
          <Text style={styles.text}>Pontem</Text>
        </View>
        <MaterialIcons
          name="keyboard-arrow-right"
          color={appColor.kWhiteColor}
          size={size.fontSize(30)}
        />
      </View>
      <View style={styles.wallet}>
        <View style={styles.rows}>
          <Image source={images.petra} />
          <Text style={styles.text}>Petra</Text>
        </View>
        <MaterialIcons
          name="keyboard-arrow-right"
          color={appColor.kWhiteColor}
          size={size.fontSize(30)}
        />
      </View>
      <View style={styles.wallet}>
        <View style={styles.rows}>
          <Image source={images.rise} />
          <Text style={styles.text}>Rise</Text>
        </View>
        <MaterialIcons
          name="keyboard-arrow-right"
          color={appColor.kWhiteColor}
          size={size.fontSize(30)}
        />
      </View>
      <View style={styles.wallet}>
        <View style={styles.rows}>
          <Image source={images.fewcha} />
          <Text style={styles.text}>Fewcha</Text>
        </View>
        <MaterialIcons
          name="keyboard-arrow-right"
          color={appColor.kWhiteColor}
          size={size.fontSize(30)}
        />
      </View>
      <View style={[styles.wallet, { backgroundColor: appColor.kDisabledColor }]}>
        <View style={[styles.rows]}>
          <Image source={images.matian} />
          <Text style={styles.text}>Martian</Text>
        </View>
        <Text style={styles.text}>Coming soon</Text>
      </View>
    </View>
  );
};

export default Wallets;
const styles = StyleSheet.create({
  wallet: {
    padding: size.hMargin(30),
    height: size.sHeight(0.08),
    width: size.sWidth(0.9),
    backgroundColor: appColor.kChooseWalletButtonColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 40,
    alignItems: 'center',
  },
  rows: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: size.hMargin(30),
    color: appColor.kTextColor,
    fontSize: size.fontSize(18),
    fontFamily: 'Outfit-Bold',
    textAlign: 'center',
  },
});
