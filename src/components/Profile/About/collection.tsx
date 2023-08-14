import React, { FC, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  Pressable,
  Image,
  View,
  Dimensions,
  Text,
} from "react-native";
import { sizes } from "../../../utils";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
import { collection } from "../../../controller/UserController";
import { appColor, images } from "../../../constants";
import { useAppDispatch } from "../../../controller/hooks";
import { updateCollectionIsSelected } from "../../../controller/UserController";
import { useAppSelector } from "../../../controller/hooks";
import { useNavigation } from "@react-navigation/native";
import { HeaderBackButton } from "@react-navigation/elements";
import { Button } from "react-native-elements";
import Back from "../../../../assets/images/svg/Back";

const Collection: FC<{
  name: string;
  collectionId: number;
  handle: () => void;
}> = ({ name, collectionId, handle }) => {
  const [numColumns, setnumColumns] = useState(3);
  const dispatch = useAppDispatch();
  const NFTCollections = useAppSelector((state) => state.USER.NFTCollections);
  const COLLECTION_DATA = NFTCollections.find(
    (c) => c.id == collectionId
  ).collections;
  const navigation = useNavigation();

  const CollectionImage: FC<{
    item: collection;
  }> = ({ item }) => {
    const handle_select = () => {
      if (item.isSelected == true) {
        return dispatch(
          updateCollectionIsSelected({
            collectionId: collectionId,
            itemId: item.id,
            isSelected: false,
          })
        );
      }
      dispatch(
        updateCollectionIsSelected({
          collectionId: collectionId,
          itemId: item.id,
          isSelected: true,
        })
      );
    };

    return (
      <View
        style={{
          flex: 1,
          margin: 10,
        }}
      >
        <Pressable
          style={{
            justifyContent: "space-around",
            position: "relative",
          }}
          onPress={() => {
            handle_select();
          }}
        >
          <View>
            <Image
              key={`${collectionId}#${item.id}`}
              source={item.image}
              style={{
                width: size.getWidthSize(100),
                height: size.getHeightSize(100),
                borderRadius: 10,
                marginBottom: 10,
                position: "relative",
              }}
            />
          </View>
          {item.isSelected && (
            <View
              style={{
                backgroundColor: appColor.kSecondaryColor,
                width: size.getWidthSize(100),
                height: size.getHeightSize(100),
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                position: "absolute",
                opacity: 0.7,
              }}
            >
              <Image source={images.tick} style={{}} />
            </View>
          )}
        </Pressable>
        <View>
          <Text
            style={{
              color: appColor.kWhiteColor,
              fontFamily: "Outfit-Regular",
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              color: appColor.kWhiteColor,
              fontFamily: "Outfit-Regular",
            }}
          >
            #{item?.id }
            
          </Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <FlatList
        key={numColumns}
        data={COLLECTION_DATA}
        renderItem={({ item }) => <CollectionImage item={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={COLLECTION_DATA.length < 3 ? 2 : 3}
        ListHeaderComponent={() => (
          <SafeAreaView
            style={{
              flex: 1,
              marginTop: "25%",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Pressable
              onPress={() => {
                navigation.setOptions({ headerShown: false });
                handle();
              }}
            >
              <Back />
            </Pressable>
            <Text
              style={{
                color: "white",
                fontFamily: "Outfit-Bold",
                fontSize: size.fontSize(25),
              }}
            >
              {name}
            </Text>
            <Text> </Text>
          </SafeAreaView>
        )}
        ListHeaderComponentStyle={{
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          backgroundColor: appColor.kgrayDark2,
        }}
        style={{}}
      />
    </>
  );
};

export default Collection;
