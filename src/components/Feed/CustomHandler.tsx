import { View, Dimensions } from 'react-native';
import { appColor } from '../../constants';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const CustomHandler = () => {
  return (
    <View
      style={{
        height: size.getHeightSize(4),
        width: size.getWidthSize(90),
        backgroundColor: appColor.kGrayscale,
        borderRadius: 8,
        alignSelf: 'center',
        marginTop: size.getHeightSize(16),
      }}
    />
  );
};

export default CustomHandler;
