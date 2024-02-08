import { Text, Pressable, Dimensions } from 'react-native';
import { appColor } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
interface Props {
  navigateTo?: string;
  marginTop?: number;
  closeModal?: boolean;
  disabled?: boolean;
  onPress?: () => void;
}
const LetGoButton = ({ navigateTo, onPress }: Props) => {
  const size = new sizes(height, width);
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        onPress ? onPress() : navigation.navigate('App' as any);
      }}
      style={{
        backgroundColor: appColor.kWhiteColor,
        alignSelf: 'center',
        width: size.getWidthSize(220),
        borderRadius: 40,
        // height: size.getHeightSize(48),
        justifyContent: 'center',
        marginTop: size.getHeightSize(48),
        paddingVertical: size.getHeightSize(14),
        gap: size.getWidthSize(8),
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          color: '#111423',
          fontSize: size.fontSize(16),
          fontFamily: 'Outfit-SemiBold',
          letterSpacing: 0.01,
          lineHeight: size.getHeightSize(20),
        }}
      >
        LET'S GOOO!
      </Text>
    </Pressable>
  );
};

export default LetGoButton;
