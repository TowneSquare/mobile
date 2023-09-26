import { Text, Dimensions, BackHandler } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { appColor } from '../../../constants';
import { useAppSelector } from '../../../controller/hooks';
import { sizes } from '../../../utils';
import CustomHandler from '../../Feed/CustomHandler';
import CitizenLogo from '../../../../assets/images/svg/CitizenLogo';
import React, { useRef, useEffect, useCallback, useMemo } from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  handleVisibility: () => void;
  typeOfProfile: 'myProfile' | 'theirProfile';
}

const SuperStarBottomSheet = ({ handleVisibility, typeOfProfile }: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);
  const visibility = useAppSelector(
    (state) => state.bottomSheetController.superStarBottomSheet
  );
  useEffect(() => {
    if (visibility === false) {
      bottomSheetRef.current?.close();
    } else {
      bottomSheetRef.current?.expand();
    }
  }, [visibility]);
  useEffect(() => {
    const handleBackButton = () => {
      if (visibility === true) {
        handleVisibility();
        return true;
      } else {
        return false;
      }
    };
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [visibility]);
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior={'close'}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.5}
      />
    ),
    []
  );
  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);
  return (
    <>
      {!visibility ? null : (
        <BottomSheet
          onClose={handleVisibility}
          ref={bottomSheetRef}
          snapPoints={animatedSnapPoints}
          handleHeight={animatedHandleHeight}
          contentHeight={animatedContentHeight}
          enablePanDownToClose={true}
          animateOnMount={true}
          backgroundStyle={{
            backgroundColor: appColor.kgrayDark2,
          }}
          handleComponent={()=><CustomHandler/>}
          backdropComponent={renderBackdrop}
        >
          <BottomSheetView onLayout={handleContentLayout}>
            <Animatable.View
              animation={'fadeInUp'}
              delay={200}
              easing={'ease-in-out'}
              duration={400}
              style={{
                paddingHorizontal: size.getWidthSize(16),
              }}
            >
              {typeOfProfile === 'theirProfile' ? (
                <CitizenLogo
                  style={{
                    marginTop: size.getHeightSize(32),
                    alignSelf: 'center',
                  }}
                />
              ) : (
                <Text
                  style={{
                    fontSize: size.fontSize(20),
                    lineHeight: size.getHeightSize(24),
                    color: appColor.kTextColor,
                    fontFamily: 'Outfit-SemiBold',
                    textAlign: 'center',
                    marginBottom: size.getHeightSize(8),
                    marginTop: size.getHeightSize(32),
                  }}
                >
                  Super Stars
                </Text>
              )}
              {typeOfProfile === 'theirProfile' ? (
                <Text
                  style={{
                    fontSize: size.fontSize(16),
                    lineHeight: size.getHeightSize(21),
                    color: appColor.kTextColor,
                    fontFamily: 'Outfit-SemiBold',
                    marginBottom: size.getHeightSize(40),
                    marginTop: size.getHeightSize(8),
                    textAlign: 'center',
                  }}
                >
                  TowneSquare Citizen
                </Text>
              ) : (
                <Text
                  style={{
                    fontSize: size.fontSize(18),
                    lineHeight: size.getHeightSize(21),
                    color: appColor.kTextColor,
                    fontFamily: 'Outfit-Regular',
                    marginBottom: size.getHeightSize(40),
                  }}
                >
                  Choose your favorite NFTs and show them on your profile for
                  everyone to see! Got a rare blue chip NFT or one that's
                  particularly dear to you? Show it to the world!
                </Text>
              )}
            </Animatable.View>
          </BottomSheetView>
        </BottomSheet>
      )}
    </>
  );
};

export default SuperStarBottomSheet;
