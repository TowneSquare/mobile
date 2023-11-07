import { View, StyleSheet, Dimensions, Pressable } from 'react-native';
import { UserPosts } from '../../components/Feed/DuumyData';
import { sizes } from '../../utils';
import ForYou from '../../components/Feed/ForYou';
import { appColor } from '../../constants';
import { FlashList } from '@shopify/flash-list';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const ForYouPosts = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <FlashList
        data={UserPosts}
        renderItem={({ item }) => <ForYou data={item} shouldPFPSwipe />}
        keyExtractor={(item) => item.id}
        estimatedItemSize={200}
      />
      <Pressable
        onPress={() =>
          navigation.navigate('CreatePost', {
            showToast: false,
            whichPost: 'singlePost',
          })
        }
        style={styles.FAB}
      >
        <AntDesign name="plus" size={25} color={appColor.kTextColor} />
      </Pressable>
    </View>
  );
};

export default ForYouPosts;
const styles = StyleSheet.create({
  FAB: {
    height: size.getHeightSize(56),
    width: size.getHeightSize(56),
    borderRadius: 50,
    backgroundColor: appColor.kSecondaryButtonColor,
    position: 'absolute',
    bottom: size.getHeightSize(42),
    right: size.getWidthSize(18),
    justifyContent: 'center',
    alignItems: 'center',

    elevation: 9,
    shadowColor: '#000000',
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.25,
  },
});
