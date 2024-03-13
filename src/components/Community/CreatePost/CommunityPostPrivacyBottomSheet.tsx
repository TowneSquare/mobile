import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  BackHandler,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import RadioButton from '../../../../assets/images/png/RadioButton';
import DefaultButton from '../../../../assets/images/svg/DefaultButton';
import { appColor } from '../../../constants';
import { updateCommunityPostPrivacy } from '../../../controller/createPost';
import { useAppDispatch } from '../../../controller/hooks';
import ActionButton from '../../../shared/ActionButton';
import ActionButton2 from '../../../shared/ActionButton2';
import { sizes } from '../../../utils';
import CustomHandler from '../../Feed/CustomHandler';
const { height, width } = Dimensions.get('window');
interface Props {
  visibility: boolean;
  onClose: () => void;
}

const size = new sizes(height, width);
const CommunityPostPrivacyBottomSheet = ({ onClose, visibility }: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [selected, setSelected] = useState<'public' | 'community-only'>(
    'public'
  );
  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);
  visibility === false
    ? bottomSheetRef.current?.close()
    : bottomSheetRef.current?.expand();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const handleBackButton = () => {
      if (visibility === true) {
        onClose();
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
  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior={'close'}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.8}
      />
    ),
    []
  );
  return (
    <>
      {!visibility ? (
        <></>
      ) : (
        <BottomSheet
          onClose={() => {
            onClose();
          }}
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
            <View
              style={{
                justifyContent: 'center',
                marginHorizontal: size.getWidthSize(16),
              }}
            >
              <Text style={styles.title}>Privacy</Text>
              <View
                style={{
                  gap: size.getHeightSize(16),
                  marginTop: size.getHeightSize(32),
                }}
              >
                <Pressable
                  style={styles.row}
                  onPress={() => setSelected('public')}
                >
                  {selected === 'public' ? (
                    <RadioButton size={size.getHeightSize(24)} />
                  ) : (
                    <DefaultButton size={size.getHeightSize(24)} />
                  )}
                  <View
                    style={{
                      flex: 1,
                      gap: size.getHeightSize(4),
                    }}
                  >
                    <Text style={styles.text}>Public</Text>
                    <Text style={styles.subText}>
                      Your post will be visible to everyone
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  style={styles.row}
                  onPress={() => setSelected('community-only')}
                >
                  {selected === 'community-only' ? (
                    <RadioButton size={size.getHeightSize(24)} />
                  ) : (
                    <DefaultButton size={size.getHeightSize(24)} />
                  )}
                  <View
                    style={{
                      flex: 1,
                      gap: size.getHeightSize(4),
                    }}
                  >
                    <Text style={styles.text}>Community only</Text>
                    <Text style={styles.subText}>
                      Your post will be visible only to the community members
                    </Text>
                  </View>
                </Pressable>
              </View>
              <View
                style={{
                  marginTop: size.getHeightSize(40),
                  gap: size.getHeightSize(8),
                  marginBottom: size.getHeightSize(16),
                }}
              >
                <ActionButton
                  callBack={() => {
                    dispatch(updateCommunityPostPrivacy(selected));
                    onClose();
                  }}
                  title="Save changes"
                  letterSpacing={0.36}
                />
                <ActionButton2
                  callBack={onClose}
                  title="Don't save"
                  letterSpacing={0.36}
                />
              </View>
            </View>
          </BottomSheetView>
        </BottomSheet>
      )}
    </>
  );
};

export default CommunityPostPrivacyBottomSheet;
const styles = StyleSheet.create({
  title: {
    fontSize: size.fontSize(20),
    color: appColor.kTextColor,
    textAlign: 'center',
    marginTop: size.getHeightSize(32),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-Bold',
    letterSpacing: 0.4,
  },
  text: {
    fontSize: size.fontSize(16),
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-SemiBold',
    flex: 1,
  },
  subText: {
    fontSize: size.fontSize(16),
    color: appColor.grayLight,
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Regular',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: size.getWidthSize(8),
  },
});
