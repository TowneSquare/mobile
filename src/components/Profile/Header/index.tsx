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
import { updateEditProfile } from '../../../controller/UserController';
import { sizes } from '../../../utils';
import { SafeAreaView } from 'react-native-safe-area-context';
const { height, width } = Dimensions.get('window');
import { Ionicons } from '@expo/vector-icons';
import Threelines from '../../../../assets/images/svg/Threelines';
import MoreIcons from '../../../../assets/images/svg/MoreIcons';
const size = new sizes(height, width);
type Props = {
  title: string;
  description?: string;
  height?: number;
};

export const HEADER_HEIGHT = 130;

export const Header = ({ title, height }:  Props) => {
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  const dispatch = useAppDispatch();

  const showEditProfile = () => {
    dispatch(updateEditProfile(true));
  };

  return (
    <View style={[styles.root, { height: size.getHeightSize(64) }]}>
      <Threelines />
      <Text style={styles.title}>{title}</Text>
      <Pressable onPress={showEditProfile}>
        <MoreIcons />
      </Pressable>
    </View>
  );
};

// function buildHeader<T extends TabBarProps<any>>(
//   title: string,
//   height: number,
//   description?: string
// ) {
//   const NewHeader = (props: T) => {
//     return (
//       <SafeAreaView>
//         <Header
//           title={title}
//           height={height}
//           description={description}
//           {...props}
//         />
//       </SafeAreaView>
//     );
//   };

//   return NewHeader;
// }

// export { buildHeader };

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
