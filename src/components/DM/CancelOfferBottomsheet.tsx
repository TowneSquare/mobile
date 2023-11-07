import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { appColor } from '../../constants';
import { sizes } from '../../utils';
import BottomsheetWrapper from '../../shared/BottomsheetWrapper';
import ActionButton from '../../shared/ActionButton';
import ActionButton2 from '../../shared/ActionButton2';
import { useAppDispatch } from '../../controller/hooks';
import { updateToast } from '../../controller/FeedsController';
import SignTransaction from '../../shared/TransactionStatus';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  visibility: boolean;
  onClose: () => void;
  callBack: () => void;
}
const CancelOfferBottomsheet = ({ onClose, visibility, callBack }: Props) => {
  const [cancelStatus, setCancelStatus] = useState<'idle' | 'loading'>('idle');
  const dispatch = useAppDispatch();
  const handleCancelOffer = () => {
    setCancelStatus('loading');
    setTimeout(() => {
      setCancelStatus('idle');
      dispatch(
        updateToast({
          displayToast: true,
          toastMessage: 'Offer canceled successfully',
          toastType: 'success',
          alignItems: 'center',
          position: 'top',
        })
      );
      onClose();
    }, 3000);
  };
  return (
    <BottomsheetWrapper
      backdropOpacity={0.7}
      onClose={onClose}
      visibility={visibility}
    >
      <View
        style={{
          gap: size.getHeightSize(16),
        }}
      >
        <Text style={styles.title}>Cancel the offer?</Text>
        <Text style={styles.description}>
          If you proceed, the offer will be canceled, and the NFT will remain in
          your collection.
        </Text>
        {cancelStatus === 'loading' && <SignTransaction marginVertical={0} />}
      </View>
      <View style={styles.view}>
        <View
          style={{
            opacity: cancelStatus === 'loading' ? 0.4 : 1,
          }}
        >
          <ActionButton
            title="Cancel offer"
            callBack={handleCancelOffer}
            fontColor={appColor.kTextColor}
            buttonBackgroundColor={appColor.kWhiteColor}
            ButtonTypetype="warning"
          />
        </View>

        <ActionButton2
          title="Keep offer active"
          callBack={onClose}
          paddingVertical={12}
        />
      </View>
    </BottomsheetWrapper>
  );
};

export default CancelOfferBottomsheet;
const styles = StyleSheet.create({
  title: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
    marginTop: size.getHeightSize(24),
  },
  description: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
    lineHeight: size.getHeightSize(21),
    letterSpacing: 0.4,
  },
  view: {
    marginBottom: size.getHeightSize(32),
    marginTop: size.getHeightSize(24),
    gap: size.getHeightSize(8),
  },
});
