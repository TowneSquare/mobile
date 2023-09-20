import {
  View,
  Text,
  Dimensions,
  TextInput,
  StyleSheet,
  Pressable,
  BackHandler,
} from 'react-native';
import { useAppDispatch } from '../../../controller/hooks';
const { height, width } = Dimensions.get('window');
import { sizes } from '../../../utils';
import { updateChannelName } from '../../../controller/CommunityController';
import { appColor } from '../../../constants';
import { useRef, useEffect, useCallback, useMemo, useState } from 'react';
import CustomInputField from '../../../shared/CustomInputField';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
const size = new sizes(height, width);
interface Props {
  dismiss: () => void;
  visibility: boolean;
}
const ChannelNameInputField = ({ visibility, dismiss }: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [channelName, setChannelName] = useState('');
  const inputRef = useRef<TextInput>(null);
  const dispatch = useAppDispatch();
  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);
  visibility === false
    ? bottomSheetRef.current?.close()
    : bottomSheetRef.current?.expand();
  useEffect(() => {
    if (visibility) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 500);
    }
    const handleBackButton = () => {
      if (visibility === true) {
        dismiss();
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

  const focusInput = () => {};

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
  const updateChannelNameList = () => {
    dispatch(updateChannelName(channelName));
  };
  return (
    <>
      {!visibility ? (
        <></>
      ) : (
        <BottomSheet
          onClose={() => {
            dismiss();
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
          handleComponent={() => <></>}
          backdropComponent={renderBackdrop}
        >
          <BottomSheetView onLayout={handleContentLayout}>
            <View
              style={{
                paddingTop: size.getHeightSize(16),
                paddingHorizontal: size.getWidthSize(16),
                gap: size.getHeightSize(24),
                backgroundColor: appColor.kgrayDark2,
                paddingBottom: size.getHeightSize(8),
              }}
            >
              <Text style={styles.title}>Channel name</Text>
              <CustomInputField
                ref={inputRef}
                placeholder="Write..."
                onChangeText={(text) => setChannelName(text)}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: size.getWidthSize(8),
                }}
              >
                <Pressable
                  onPress={dismiss}
                  style={{
                    paddingVertical: size.getWidthSize(7),
                    flex: 1,
                  }}
                >
                  <Text style={styles.cancel}>Cancel</Text>
                </Pressable>
                <Pressable
                  onPress={() => {
                    updateChannelNameList();
                    dismiss();
                  }}
                  style={[
                    styles.createContainer,
                    {
                      backgroundColor: channelName
                        ? appColor.kWhiteColor
                        : '#FFFFFF60',
                    },
                  ]}
                >
                  <Text style={styles.create}>Create</Text>
                </Pressable>
              </View>
            </View>
          </BottomSheetView>
        </BottomSheet>
      )}
    </>
  );
};

export default ChannelNameInputField;
const styles = StyleSheet.create({
  title: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Bold',
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
  },
  cancel: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(18),
    fontFamily: 'Outfit-SemiBold',
    lineHeight: size.getHeightSize(21),
    letterSpacing: 0.36,
    textAlign: 'center',
  },
  create: {
    color: appColor.kButtonTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Medium',
    lineHeight: size.getHeightSize(21),
    letterSpacing: 0.36,
    textAlign: 'center',
  },
  createContainer: {
    paddingVertical: size.getWidthSize(7),

    flex: 1,
    borderRadius: 40,
  },
});
