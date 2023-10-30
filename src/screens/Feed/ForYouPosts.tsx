import { View } from 'react-native';
import { UserPosts } from '../../components/Feed/DuumyData';
import ForYou from '../../components/Feed/ForYou';
import { appColor } from '../../constants';
import { FlashList } from '@shopify/flash-list';
import { useAppDispatch, useAppSelector } from '../../controller/hooks';
import { getAllPost } from '../../controller/createPost';
const ForYouPosts = () => {
   const dispatch = useAppDispatch();
   const userToken = useAppSelector(
    (state) => state.USER.didToken
  );
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
        onRefresh={() => {
          dispatch(getAllPost(userToken))
        }}
      />
    </View>
  );
};

export default ForYouPosts;
