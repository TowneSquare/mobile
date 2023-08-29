import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Dimensions,
} from 'react-native';
import { appColor, fonts } from '../../../constants';
import { useFonts } from 'expo-font';
import { useAppDispatch } from '../../../controller/hooks';
import {
  updateEditProfile,
  updateTheirProfileBottomSheet,
} from '../../../controller/UserController';
import { sizes } from '../../../utils';
const { height, width } = Dimensions.get('window');
import AntDesign from '@expo/vector-icons/AntDesign';
import Threelines from '../../../../assets/images/svg/Threelines';
import MoreIcons from '../../../../assets/images/svg/MoreIcons';
import { useNavigation } from '@react-navigation/native';
const size = new sizes(height, width);
type Props = {
  title: string;
  description?: string;
  height?: number;
  typeOfProfile: 'myProfile' | 'theirProfile';
};

export const HEADER_HEIGHT = 130;

export const Header = ({ title, height, typeOfProfile }: Props) => {
  const navigation = useNavigation();
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  const dispatch = useAppDispatch();

  const showEditProfile = () => {
    if (typeOfProfile === 'myProfile') {
      dispatch(updateEditProfile(true));
    } else {
      dispatch(updateTheirProfileBottomSheet(true));
    }
  };

  return (
    <View style={[styles.root, { height: size.getHeightSize(64) }]}>
      {typeOfProfile === 'myProfile' ? (
        <Threelines />
      ) : (
        <AntDesign
          name="arrowleft"
          color={appColor.kWhiteColor}
          size={size.fontSize(24)}
          onPress={navigation.goBack}
        />
      )}
      <Text style={styles.title}>{title}</Text>
      <Pressable onPress={showEditProfile}>
        <MoreIcons />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: appColor.kgrayDark2,
    justifyContent: 'space-between',

    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: size.getWidthSize(16),
  },
  title: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
    fontFamily: 'Outfit-Regular',
  },
  description: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Header;
