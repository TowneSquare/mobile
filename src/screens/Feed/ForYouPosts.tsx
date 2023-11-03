import { View, Text, Image, Dimensions } from 'react-native';
import { UserPosts } from '../../components/Feed/DuumyData';
import ForYou from '../../components/Feed/ForYou';
import { appColor, images , fonts} from '../../constants';
import { FlashList } from '@shopify/flash-list';
import { useAppDispatch, useAppSelector } from '../../controller/hooks';
import { useFonts } from "expo-font";
import { sizes } from "../../utils";
import { getAllPost, POSTSTATE } from '../../controller/createPost';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);

const ForYouPosts = () => {
   const dispatch = useAppDispatch();
   const userToken = useAppSelector(
    (state) => state.USER.didToken
  );
  const AllPost = useAppSelector(
    (state) => state.CreatePostController.AllPost
  );


  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }

  // useEffect(() => {
  //   dispatch(getAllPost(userToken))
  //   console.log("i ran again")
  // }, [])

  console.log(AllPost, "allpost")


  const EmptyComponent = () => {
    return (
      <SafeAreaView style={{
       display:"flex",
       alignItems:"center",
       justifyContent:"center"
      }} >
       <View style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginTop:"50%"
       }}>
         <Image source={images.plug} style={{
          height:61,
          width:60
        }}/>
        <View style={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          marginTop: size.getHeightSize(8)
        }}>
          <Text style={{
          color: appColor.grayLight,
          fontFamily:"Outfit-Regular",
          fontSize: size.fontSize(16),
        }}>
          Something went wrong.
        </Text>
        <Text style={{
          color: appColor.grayLight,
           fontFamily:"Outfit-Regular",
           fontSize: size.fontSize(16),
        }}>
          Try to reload.
        </Text>
        </View>
       </View>
      </SafeAreaView>
    )
  }
  
  
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
        keyExtractor={(item, index) => index.toString()}
        estimatedItemSize={200}
        onRefresh={() => {
          dispatch(getAllPost(userToken))
        }}
        refreshing={false}
        ListEmptyComponent={EmptyComponent}
      />
    </View>
  );

  
};

export default ForYouPosts;
