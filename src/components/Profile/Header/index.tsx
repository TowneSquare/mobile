import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';
import { TabBarProps } from 'react-native-collapsible-tab-view';
import { appColor, fonts } from '../../../constants';
import { useFonts } from 'expo-font';
import { images } from '../../../constants';
import { useAppDispatch, useAppSelector } from '../../../controller/hooks';
import {
  updateEditProfile,
  updateTheirProfileBottomSheet,
} from '../../../controller/UserController';
import { sizes } from '../../../utils';
import { SafeAreaView } from 'react-native-safe-area-context';
const { height, width } = Dimensions.get('window');
import AntDesign from '@expo/vector-icons/AntDesign';
import { Ionicons } from '@expo/vector-icons';
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
