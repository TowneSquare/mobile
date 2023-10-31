import { View } from 'react-native';
import { UserPosts } from '../../components/Feed/DuumyData';
import ForYou from '../../components/Feed/ForYou';
import { appColor } from '../../constants';
import { FlashList } from '@shopify/flash-list';
import { useAppDispatch, useAppSelector } from '../../controller/hooks';
import { getAllPost } from '../../controller/createPost';
import { useEffect } from 'react';
const ForYouPosts = () => {
   const dispatch = useAppDispatch();
   const userToken = useAppSelector(
    (state) => state.USER.didToken
  );
  const AllPost = useAppSelector(
    (state) => state.CreatePostController.AllPost
  );

  useEffect(() => {
    dispatch(getAllPost(userToken))
    "i ran again"
  }, [])

  console.log(AllPost, "allpost")
  
  
  return (
    
    <View
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <FlashList
        data={AllPost}
        renderItem={({ item }) => <ForYou data={item} shouldPFPSwipe />}
        keyExtractor={(item) => item._id}
        estimatedItemSize={200}
        onRefresh={() => {
          dispatch(getAllPost(userToken))
        }}
        refreshing={false}
      />
    </View>
  );
};

export default ForYouPosts;
