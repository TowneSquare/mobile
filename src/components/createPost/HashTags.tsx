import {
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Pressable,
} from 'react-native';
const { height, width } = Dimensions.get('window');
import {
  updateSelectedHashMention,
  updateShowHashTags,
} from '../../controller/createPost';
import { useFonts } from 'expo-font';
import { appColor, fonts } from '../../constants';
import { sizes } from '../../utils';
import { batch } from 'react-redux';
import { useAppSelector, useAppDispatch } from '../../controller/hooks';
const size = new sizes(height, width);
interface TagData {
  name: string;
  post: string;
}
const HashTags = () => {
  const dispatch = useAppDispatch();
  const tagData = useAppSelector(
    (state) => state.CreatePostController.filteredHashTagData
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
  const handlePress = (name: string) => {
    batch(() => {
      dispatch(updateSelectedHashMention(name));
      dispatch(updateShowHashTags(false));
    });
  };
  const Tag = (dat: TagData) => {
    return (
      <Pressable
        onPress={() => handlePress(dat.name)}
        style={{
          flexDirection: 'row',
          width: '100%',
          paddingHorizontal: size.getWidthSize(16),
          gap: size.getWidthSize(8),
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: size.getHeightSize(16),
        }}
      >
        <Text style={styles.tag}>{dat.name}</Text>
        <Text style={styles.post}>{dat.post}</Text>
      </Pressable>
    );
  };
  return (
    <FlatList
      keyboardShouldPersistTaps="always"
      data={tagData}
      renderItem={({ item }) => Tag(item)}
    />
  );
};

export default HashTags;
const styles = StyleSheet.create({
  tag: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Medium',
  },
  post: {
    color: appColor.kGrayscale,
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    fontFamily: 'Outfit-Regular',
  },
});
