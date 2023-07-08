import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
const { height, width } = Dimensions.get('window');
import { useFonts } from 'expo-font';
import { appColor, fonts, images } from '../../constants';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import { sizes } from '../../utils';
import { useAppSelector, useAppDispatch } from '../../controller/hooks';
import { batch } from 'react-redux';
import {
  updateSelectedAtMention,
  updateShowAtContainer,
} from '../../controller/createPost';
const size = new sizes(height, width);
interface dataProp {
  name: string;
  description?: string;
  image: any;
}
const AtMention = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(
    (state) => state.CreatePostController.filteredAtMentions
  );
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
    'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
  });
  if (!isLoaded) {
    return null;
  }
  const Community = (data: dataProp) => {
    return (
      <Pressable
        onPress={() => {
          batch(() => {
            dispatch(updateSelectedAtMention(data.name));
            dispatch(updateShowAtContainer(false));
          });
        }}
        style={{
          flexDirection: 'row',
          width: '100%',
          paddingHorizontal: size.getWidthSize(16),
          gap: size.getWidthSize(8),
          alignItems: 'center',
          marginVertical: size.getHeightSize(8),
          paddingVertical: size.getHeightSize(4),
        }}
      >
        <View
          style={{
            height: size.getHeightSize(40),
            width: size.getHeightSize(40),
          }}
        >
          <Image resizeMode="cover" source={data.image} />
        </View>

        <View>
          <Text style={styles.name}>{data.name}</Text>
          {data.description && (
            <Text style={styles.description}>{data.description}</Text>
          )}
        </View>
      </Pressable>
    );
  };
  return (
    <FlatList
      keyboardShouldPersistTaps="always"
      data={data}
      renderItem={({ item }) => Community(item)}
    />
  );
};

export default AtMention;
const styles = StyleSheet.create({
  name: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Medium',
  },
  description: {
    color: appColor.grayLight,
    fontSize: size.fontSize(11),
    lineHeight: size.getHeightSize(14),
    fontFamily: 'Outfit-SemiBold',
    letterSpacing: 0.04,
    textTransform: 'uppercase',
  },
});
