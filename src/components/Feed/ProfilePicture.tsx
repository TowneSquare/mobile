import { Pressable, Text, Dimensions, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import React from 'react';
const { height, width } = Dimensions.get('window');
import { sizes } from '../../utils';
import { images, fonts } from '../../constants';
const size = new sizes(height, width);

import { useNavigation } from '@react-navigation/native';
interface Props {
  PFPsize?: number;
}

const ProfilePicture = ({ PFPsize }: Props) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate('TheirProfileScreen')}>
      <Avatar
        source={images.profileImage}
        rounded
        size={PFPsize ? size.getHeightSize(PFPsize) : size.getHeightSize(40)}
      />
    </Pressable>
  );
};

export default ProfilePicture;
