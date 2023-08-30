import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  Keyboard,
  KeyboardEvent,
} from 'react-native';
import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from 'react';
import { useFonts } from 'expo-font';
import Aptos from '../../../assets/images/svg/Aptos';
import { useNavigation, StackActions } from '@react-navigation/native';
import { appColor, fonts } from '../../constants';
import { sizes } from '../../utils';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
  BottomSheetTextInput,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import { useAppSelector, useAppDispatch } from '../../controller/hooks';
import CustomHandler from '../Feed/CustomHandler';
import {
  updateShowPriceModal,
  updateAptPrice,
} from '../../controller/createPost';
import { batch } from 'react-redux';
const { height, width } = Dimensions.get('window');
import InfoLarge from '../../../assets/images/svg/InfoLarge';
import { set } from 'react-native-reanimated';
const size = new sizes(height, width);
import { useSafeAreaInsets } from 'react-native-safe-area-context';
interface Props {
  isVisible: boolean;
}
const OfferSaleSheet = ({ isVisible }: Props) => {
  const [listingPrice, setListingPrice] = useState('');
  const [APT_To_Receive, setAptToReceive] = useState(0);
  const [royalties, setRoyalties] = useState(0);
  const dispatch = useAppDispatch();
  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);

  // hooks
  const { bottom: safeBottomArea } = useSafeAreaInsets();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

  const navigation = useNavigation();
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.8}
        pressBehavior={'none'}
      />
    ),
    []
  );

  useEffect(() => {
    if (isVisible === false) {
      bottomSheetRef.current?.close();
    } else {
      bottomSheetRef.current?.expand();
    }
  }, [isVisible]);

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      handleKeyboardDidHide
    );
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      handleKeyboardDidShow
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const handleKeyboardDidHide = (event: KeyboardEvent) => {
    bottomSheetRef.current.collapse();
  };
  const handleKeyboardDidShow = (event: KeyboardEvent) => {
    bottomSheetRef.current.expand();
  };

  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
    'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
  });
  const handleTextChange = (text: string) => {
    setListingPrice(text);
    setRoyalties(10);
    const apt_minus_royalty_fee =
      Number(text) - (royalties / 100) * Number(text);
    const fee = 0.02 * Number(text);
    const aptToReceive = apt_minus_royalty_fee - fee;
    setAptToReceive(aptToReceive);
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={animatedSnapPoints}
      handleHeight={animatedHandleHeight}
      contentHeight={animatedContentHeight}
      enablePanDownToClose={false}
      animateOnMount={true}
      backgroundStyle={{
        backgroundColor: appColor.kgrayDark2,
      }}
      handleComponent={CustomHandler}
      backdropComponent={renderBackdrop}
      keyboardBehavior="interactive"
    >
      <BottomSheetView onLayout={handleContentLayout}>
        <Text style={styles.collectionName}>Aptomingos #9022</Text>
        <View style={styles.details}>
          <Text style={styles.floorPrice}>Floor price</Text>
          <Text style={styles.amount}>90 APT</Text>
          <InfoLarge />
        </View>
        <View style={styles.inputContainer}>
          <BottomSheetTextInput
            style={styles.textInput}
            placeholder="Insert price"
            cursorColor={appColor.primaryLight}
            placeholderTextColor={appColor.kGrayLight3}
            onChangeText={handleTextChange}
            value={listingPrice}
            keyboardType="numeric"
          />
          <Aptos />
          <Text style={styles.APT}>APT</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.detailsContainer}>
            <Text style={styles.tags}>Listing price</Text>
            {listingPrice ? (
              <Text style={styles.texts}>{listingPrice} APT</Text>
            ) : (
              <Text style={styles.texts}> - </Text>
            )}
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.tags}>Royalties</Text>
            {royalties ? (
              <Text style={styles.texts}>{royalties}%</Text>
            ) : (
              <Text style={styles.texts}> - </Text>
            )}
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.tags}>Fee</Text>
            <Text style={styles.texts}> 2%</Text>
          </View>
        </View>
        <View style={styles.equivalentContainer}>
          <Text style={styles.equivalentTag}>You will receive</Text>
          {APT_To_Receive ? (
            <Text
              style={[
                styles.texts,
                {
                  fontFamily: 'Outfit-Bold',
                },
              ]}
            >
              {APT_To_Receive} APT
            </Text>
          ) : (
            <Text style={styles.texts}> - </Text>
          )}
        </View>
        <Pressable
          disabled={!listingPrice}
          onPress={() => {
            batch(() => {
              dispatch(
                updateAptPrice({
                  name: 'Aptomingos',
                  id: 'Aptomingos #9280',
                  price: Number(listingPrice),
                })
              );
              dispatch(updateShowPriceModal(false));
              // handleModalState();
              navigation.dispatch(StackActions.pop(2));
            });
          }}
          style={[
            styles.setPriceButton,
            {
              opacity: listingPrice ? 1 : 0.4,
            },
          ]}
        >
          <Text style={styles.setPrice}>Set price</Text>
        </Pressable>
        <View
          style={[
            styles.setPriceButton,
            {
              marginTop: size.getHeightSize(8),

              backgroundColor: 'transparent',
            },
          ]}
        >
          <Text
            onPress={() => {
              dispatch(updateShowPriceModal(false));
            }}
            style={[styles.setPrice]}
          >
            Cancel
          </Text>

          <View
            style={{
              height: size.getHeightSize(56),
            }}
          />
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};

export default OfferSaleSheet;
const styles = StyleSheet.create({
  container: {
    width: size.getWidthSize(296),
    borderBottomWidth: 1,
    borderBottomColor: appColor.kWhiteColor,
    alignSelf: 'center',
    paddingBottom: size.getHeightSize(16),
    marginTop: size.getHeightSize(32),
    gap: size.getHeightSize(16),
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tags: {
    color: appColor.grayLight,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Regular',
  },
  texts: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Regular',
  },
  equivalentTag: {
    color: appColor.grayLight,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-SemiBold',
  },
  textInput: {
    width: size.getWidthSize(223),
    height: size.getHeightSize(48),
    borderWidth: 1,
    borderRadius: 40,
    borderColor: appColor.kGrayscale,
    backgroundColor: appColor.kGrayscaleDart,
    marginRight: size.getWidthSize(16),
    paddingHorizontal: size.getWidthSize(16),
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    color: appColor.kTextColor,
    paddingVertical: size.getHeightSize(12),
  },
  APT: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-SemiBold',
    letterSpacing: 0.04,
    textTransform: 'uppercase',
    marginLeft: size.getWidthSize(8),
  },
  equivalentContainer: {
    flexDirection: 'row',
    marginHorizontal: size.getWidthSize(32),
    justifyContent: 'space-between',
    width: size.getWidthSize(296),
    alignSelf: 'center',
    marginTop: size.getHeightSize(16),
  },
  setPriceButton: {
    alignSelf: 'center',
    width: size.getWidthSize(312),
    paddingVertical: size.getHeightSize(12.5),
    borderRadius: 40,
    backgroundColor: appColor.kSecondaryButtonColor,
    justifyContent: 'center',
    marginTop: size.getHeightSize(32),
  },
  setPrice: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    fontFamily: 'Outfit-Medium',
    textAlign: 'center',
    letterSpacing: 0.02,
  },
  inputContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: size.getWidthSize(4),
    marginTop: size.getHeightSize(32),
    width: size.getWidthSize(312),
    alignItems: 'center',
  },
  collectionName: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.02,
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
    marginTop: size.getHeightSize(24),
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    gap: size.getWidthSize(4),
    marginTop: size.getHeightSize(8),
  },
  floorPrice: {
    color: appColor.grayLight,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
  },
  amount: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
  },
  container1: {
    flex: 1,
    padding: 24,
    backgroundColor: '#CCCCCC',
  },
  contentContainerStyle: {
    // paddingTop: 12,
    // paddingBottom: 6,
    // paddingHorizontal: 24,
  },
  message: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 12,
    color: 'black',
  },
  emoji: {
    fontSize: 156,
    textAlign: 'center',
    alignSelf: 'center',
  },
  emojiContainer: {
    overflow: 'hidden',
    justifyContent: 'center',
  },
});
