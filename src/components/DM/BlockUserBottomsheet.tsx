import { Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import React from 'react';
import { appColor } from '../../constants';
import { sizes } from '../../utils';
import BottomsheetWrapper from '../../shared/BottomsheetWrapper';
import { useAppDispatch } from '../../controller/hooks';
import BlockIcon from '../../../assets/images/svg/BlockIcon';
import { updateToast } from '../../controller/FeedsController';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  visibility: boolean;
  onClose: () => void;
  callBack: () => void;
  name: string;
  disableBlock: boolean;
}

const BlockUserBottomsheet = ({
  name,
  onClose,
  visibility,
  callBack,
  disableBlock,
}: Props) => {
  const dispatch = useAppDispatch();
  return (
    <BottomsheetWrapper
      onClose={onClose}
      backdropOpacity={0.7}
      visibility={visibility}
    >
      <BlockIcon
        style={{
          alignSelf: 'center',
          marginTop: size.getHeightSize(24),
        }}
      />
      <Text style={styles.contentDescription}>
        Are you sure you want to block{' '}
        {name.charAt(0).toUpperCase() + name.slice(1)}?
      </Text>
      <Text style={styles.contentMessage}>
        You will no longer be able to see this user's posts, messages and follow
        or mention each other
      </Text>
      <Pressable
        onPress={() => {
          if (disableBlock) {
            dispatch(
              updateToast({
                displayToast: true,
                toastMessage: `You can't block ${
                  name.charAt(0).toUpperCase() + name.slice(1)
                } because they already blocked you.`,
                toastType: 'info',
              })
            );
          } else {
            callBack();
            dispatch(
              updateToast({
                displayToast: true,
                toastMessage: `You have blocked ${
                  name.charAt(0).toUpperCase() + name.slice(1)
                }`,
                toastType: 'success',
              })
            );
          }

          onClose();
        }}
        style={styles.blockButton}
      >
        <Text style={styles.blockButtonText}>Block User</Text>
      </Pressable>

      <Text onPress={onClose} style={styles.cancel}>
        Cancel
      </Text>
    </BottomsheetWrapper>
  );
};

export default BlockUserBottomsheet;
const styles = StyleSheet.create({
  cancel: {
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    color: appColor.kTextColor,
    letterSpacing: size.getWidthSize(0.02),
    fontFamily: 'Outfit-Medium',
    textAlign: 'center',
    marginBottom: size.getHeightSize(32),
    marginTop: size.getHeightSize(8),
    paddingVertical: size.getHeightSize(4),
  },
  blockButtonText: {
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    color: appColor.kTextColor,
    letterSpacing: size.getWidthSize(0.02),
    fontFamily: 'Outfit-Medium',
    textAlign: 'center',
    paddingVertical: size.getHeightSize(12.5),
  },
  blockButton: {
    backgroundColor: appColor.kErrorText,
    borderRadius: 40,
    marginTop: size.getHeightSize(24),
  },
  contentDescription: {
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    color: appColor.kTextColor,
    letterSpacing: size.getWidthSize(0.04),
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
    marginTop: size.getHeightSize(8),
  },
  contentMessage: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
    marginTop: size.getHeightSize(8),
  },
});
