import {
  View,
  Text,
  Image,
  Dimensions,
  Pressable,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { appColor, fonts, images } from '../constants';

import { useFonts } from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons';
import Petra from '../images/svg/Petra';
import { sizes } from '../utils';
import {
  updateBottomSheet,
  updateRenderCount,
} from '../controller/BottomSheetController';
import Pontem from '../images/svg/Pontem';
import { useAppDispatch, useAppSelector } from '../controller/hooks';
import Fewcha from '../images/svg/Fewcha';
import Rise from '../images/svg/Rise';
import Martian from '../images/svg/Martian';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const Wallets = () => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector(
    (state) => state.bottomSheetController.isBottomSheetOpen
  );
  const renderCount = useAppSelector(
    (state) => state.bottomSheetController.renderCount
  );
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
        opacity: isVisible && renderCount > 0 ? 0.7 : 1,
        marginTop: size.sHeight(0.2),
        height: size.sHeight(0.46),
        justifyContent: 'space-between',
        paddingVertical: 10,
      }}
    >
      <Pressable
        onPress={() => {
          dispatch(updateRenderCount(1));
          dispatch(updateBottomSheet(true));
        }}
        style={styles.wallet}
      >
        <View style={styles.rows}>
          <Pontem />
          <Text style={styles.text}>Pontem</Text>
        </View>
        <MaterialIcons
          name="keyboard-arrow-right"
          color={appColor.kWhiteColor}
          size={size.fontSize(30)}
        />
      </Pressable>
      <Pressable
        onPress={() => {
          dispatch(updateRenderCount(1));
          dispatch(updateBottomSheet(true));
        }}
        style={styles.wallet}
      >
        <View style={styles.rows}>
          <Rise />
          <Text style={styles.text}>Rise</Text>
        </View>
        <MaterialIcons
          name="keyboard-arrow-right"
          color={appColor.kWhiteColor}
          size={size.fontSize(30)}
        />
      </Pressable>
      <View
        style={[styles.wallet, { backgroundColor: appColor.kDisabledColor }]}
      >
        <View style={styles.rows}>
          <Petra />
          <Text style={styles.text}>Petra</Text>
        </View>
        <Text style={styles.text}>Coming soon</Text>
      </View>
      <View
        style={[styles.wallet, { backgroundColor: appColor.kDisabledColor }]}
      >
        <View style={styles.rows}>
          <Fewcha />
        </View>
        <Text style={styles.text}>Coming soon</Text>
      </View>
      <View
        style={[styles.wallet, { backgroundColor: appColor.kDisabledColor }]}
      >
        <View style={[styles.rows]}>
      <Martian/>
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
    height: size.sHeight(0.07),
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
