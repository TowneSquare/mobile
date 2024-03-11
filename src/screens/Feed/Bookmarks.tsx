import { FlashList } from "@shopify/flash-list";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ForYou from "../../components/Feed/ForYou";
import { appColor, images } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../controller/hooks";
import Header from "../../shared/Feed/Header";
import { sizes } from "../../utils";

const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);

const Bookmarks = () => {
  const dispatch = useAppDispatch();
  const BOOKMARKS = useAppSelector((state) => state.USER.BookMarks);
  const token = useAppSelector((state) => state.USER.didToken);
  // useEffect(() => {
  //   dispatch(getUserBookmark({ token }));
  // }, []);  //un-comment

   const EmptyComponent = () => {
    return (
      <SafeAreaView
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '50%',
          }}
        >
          <Image
            source={images.plug}
            style={{
              height: size.getHeightSize(61),
              width: size.getWidthSize(60),
            }}
          />
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: size.getHeightSize(8),
            }}
          >
            <Text
              style={{
                color: appColor.grayLight,
                fontFamily: 'Outfit-Regular',
                fontSize: size.fontSize(16),
              }}
            >
              No BookMarks Yet.
            </Text>
            {/* <Text
              style={{
                color: appColor.grayLight,
                fontFamily: 'Outfit-Regular',
                fontSize: size.fontSize(16),
              }}
            >
              Try to reload.
            </Text> */}
          </View>
        </View>
      </SafeAreaView>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <Header title="Bookmarks" />
      <FlashList
        data={BOOKMARKS}
        renderItem={({ item }) => <ForYou data={item} shouldPFPSwipe />}
        keyExtractor={(item) => item._id}
        estimatedItemSize={200}
        ListEmptyComponent={EmptyComponent}
      />
    </SafeAreaView>
  );
};

export default Bookmarks;

const styles = StyleSheet.create({});
