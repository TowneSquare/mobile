import {
  View,
  Text,
  Dimensions,
  Pressable,
  StyleSheet,
} from 'react-native';
import { appColor, fonts } from '../../../constants';

import { useFonts } from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons';
import Petra from '../../../../assets/images/svg/Petra';
import { sizes } from '../../../utils';
import {
  updateBottomSheet,
  updateRenderCount,
} from '../../../controller/BottomSheetController';
import Pontem from '../../../../assets/images/svg/Pontem';
import { useAppDispatch, useAppSelector } from '../../../controller/hooks';
import Fewcha from '../../../../assets/images/svg/Fewcha';
import Rise from '../../../../assets/images/svg/Rise';
import Martian from '../../../../assets/images/svg/Martian';
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
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <View
      style={{
        height: size.getHeightSize(312),
        justifyContent: 'space-between',
        width: size.getWidthSize(359),
        alignItems: 'center',
      }}
    >
      <Pressable
        onPress={() => {
          dispatch(updateRenderCount(1));
          dispatch(updateBottomSheet(true));
        }}
        style={[styles.wallet, { paddingRight: size.getWidthSize(13) }]}
      >
        <View style={styles.rows}>
          <Pontem />
          <Text style={styles.leadingText}>Pontem</Text>
        </View>
        <MaterialIcons
          name="keyboard-arrow-right"
          color={appColor.kWhiteColor}
          size={size.fontSize(25)}
        />
      </Pressable>
      {/* <LetGoButton navigateTo="DrawerNavigation" /> */}
      <Pressable
        onPress={() => {
          dispatch(updateRenderCount(1));
          dispatch(updateBottomSheet(true));
        }}
        style={[styles.wallet, { paddingRight: size.getWidthSize(13) }]}
      >
        <View style={styles.rows}>
          <Rise />
          <Text style={styles.leadingText}>Rise</Text>
        </View>
        <MaterialIcons
          name="keyboard-arrow-right"
          color={appColor.kWhiteColor}
          size={size.fontSize(25)}
        />
      </Pressable>
      <View style={[styles.wallet, { backgroundColor: appColor.kgrayDark2 }]}>
        <View style={styles.rows}>
          <Petra />
          <Text style={styles.leadingText}>Petra</Text>
        </View>
        <Text style={styles.text}>Coming soon</Text>
      </View>
      <View style={[styles.wallet, { backgroundColor: appColor.kgrayDark2 }]}>
        <View style={styles.rows}>
          <Fewcha />
          <Text style={styles.leadingText}>Fewcha</Text>
        </View>
        <Text style={styles.text}>Coming soon</Text>
      </View>
      <View style={[styles.wallet, { backgroundColor: appColor.kgrayDark2 }]}>
        <View style={[styles.rows]}>
          <Martian />
          <Text style={styles.leadingText}>Martian</Text>
        </View>
        <Text style={styles.text}>Coming soon</Text>
      </View>
    </View>
  );
};

export default Wallets;
const styles = StyleSheet.create({
  wallet: {
    paddingLeft: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(8),
    height: size.getHeightSize(56),
    width: size.getWidthSize(327),
    backgroundColor: appColor.kGrayLight3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 40,
    alignItems: 'center',
    display: 'flex',
    paddingRight: size.getWidthSize(23),
  },
  rows: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leadingText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
    lineHeight: size.getHeightSize(21),
    fontStyle: 'normal',
    marginLeft: size.getWidthSize(8),
  },
  text: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
    lineHeight: size.getHeightSize(18),
  },
});
