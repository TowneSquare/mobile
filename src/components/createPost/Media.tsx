import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
const { height, width } = Dimensions.get('window');
import { useFonts } from 'expo-font';
import RemoveAttachment from '../../../assets/images/svg/RemoveAttachment';
import { appColor, fonts, images } from '../../constants';
import { sizes } from '../../utils';
import { useAppSelector, useAppDispatch } from '../../controller/hooks';
import { updateMedia } from '../../controller/createPost';
const size = new sizes(height, width);
const Media = () => {
  const media = useAppSelector(
    (state) => state.CreatePostController.posts.media
  );
  const dispatch = useAppDispatch();
  return (
    <View
      style={{
        height: size.getHeightSize(218),
        width: size.getWidthSize(280),
        marginLeft: size.getWidthSize(64),
        borderRadius: 8,
        marginVertical: size.getHeightSize(8),
      }}
    >
      <Image
        source={media}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 8,
        }}
        resizeMode="cover"
      />
      <TouchableOpacity
        activeOpacity={0.2}
        onPress={() => dispatch(updateMedia(null))}
        style={{
          position: 'absolute',
          right: size.getWidthSize(8),
          top: size.getHeightSize(8),
        }}
      >
        <RemoveAttachment />
      </TouchableOpacity>
    </View>
  );
};

export default Media;
