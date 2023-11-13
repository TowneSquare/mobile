import { Text, Dimensions } from 'react-native';
import React from 'react';
import { appColor } from '../../../constants';
import { sizes } from '../../../utils';
import BottomsheetWrapper from '../../../shared/BottomsheetWrapper';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  visibility: boolean;
  onClose: () => void;
  callBack: () => void;
}
const DEXSwapBottomSheet = ({ onClose, visibility, callBack }: Props) => {

  return (
    <BottomsheetWrapper
      onClose={onClose}
      backdropOpacity={0.7}
      visibility={visibility}
      handlerWidth={115}
    >
      <Text
        style={{
          marginVertical: size.getHeightSize(32),
          marginHorizontal: size.getWidthSize(16),
          fontSize: size.fontSize(16),
          lineHeight: size.getHeightSize(21),
          color: appColor.kTextColor,
          fontFamily: 'Outfit-Regular',
          textAlign: 'center',
        }}
      >
        When you earn tokens, you will see details about each earned token here{' '}
      </Text>
    </BottomsheetWrapper>
  );
};

export default DEXSwapBottomSheet;
