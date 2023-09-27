import { View, Text, StyleSheet, Dimensions, BackHandler } from 'react-native';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import * as Animatable from 'react-native-animatable';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import NFTCollections from '../../../shared/UpdatePFP/NFTCollections';
import {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { appColor } from '../../../constants';
import { sizes } from '../../../utils';
import CustomHandler from '../../Feed/CustomHandler';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  callback: () => void;
  visible: boolean;
  onclose: () => void;
}
const ChooseNFTBottomsheet = ({ callback, visible, onclose }: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [snapPoint, setSnap] = useState('67%');
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior={'none'}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.8}
      />
    ),
    []
  );
  visible === false
    ? bottomSheetRef.current?.close()
    : bottomSheetRef.current?.expand();
  useEffect(() => {
    const handleBackButton = () => {
      if (visible === true) {
        setSnap('67%');
        onclose();
        return true;
      } else {
        return false;
      }
    };
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [visible]);
  const animatedIndex = useSharedValue(0);
  const contentStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          animatedIndex.value,
          [0, 0.08],
          [40, 0],
          Extrapolation.CLAMP
        ),
      },
    ],
    opacity: interpolate(
      animatedIndex.value,
      [0, 0.08],
      [0, 1],
      Extrapolation.CLAMP
    ),
  }));
  const handleCallback = () => {
    setSnap('67%');
    onclose();
    callback();
  };
  return (
    <>
      {!visible ? (
        <></>
      ) : (
        <BottomSheet
          onClose={() => {
            onclose();
          }}
          ref={bottomSheetRef}
          snapPoints={[snapPoint]}
          index={visible ? 0 : -1}
          enablePanDownToClose={false}
          animateOnMount={true}
          backgroundStyle={{
            backgroundColor: appColor.kgrayDark2,
          }}
          backdropComponent={renderBackdrop}
          handleComponent={()=><CustomHandler/>}
        >
          <Text style={styles.title}>NFT</Text>

          <Text style={styles.text}>Select the collection</Text>

          <BottomSheetScrollView
            style={{}}
            showsVerticalScrollIndicator={false}
            onScroll={() => setSnap('90%')}
          >
            <Animatable.View
              animation={'fadeInUp'}
              delay={500}
              easing={'ease-in-out'}
              duration={400}
              style={contentStyle}
            >
              <NFTCollections callBack={handleCallback} />
            </Animatable.View>
          </BottomSheetScrollView>

          <View
            style={{
              minHeight: size.getHeightSize(44),
              marginTop: size.getHeightSize(16),
              justifyContent: 'center',

              marginBottom: size.getHeightSize(16),
            }}
          >
            <Text
              style={styles.cancel}
              onPress={() => {
                setSnap('67%');
                onclose();
                // setProfilePictureBottomSheet(true);
              }}
            >
              Back
            </Text>
          </View>
        </BottomSheet>
      )}
    </>
  );
};

export default ChooseNFTBottomsheet;
const styles = StyleSheet.create({
  text: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',

    lineHeight: size.getHeightSize(21),
    marginBottom: size.getHeightSize(32),
    marginTop: size.getHeightSize(8),
  },
  innerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  title: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(29),
    fontFamily: 'Outfit-Bold',
    textAlign: 'center',
    marginTop: size.getHeightSize(29),
    lineHeight: size.getHeightSize(37),
  },
  cancel: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(18),
    fontFamily: 'Outfit-Medium',
    lineHeight: size.getHeightSize(23),
    textAlign: 'center',
    letterSpacing: 0.02,
  },
});
