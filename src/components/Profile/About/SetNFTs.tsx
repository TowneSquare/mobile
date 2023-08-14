import React, { useRef, useState, FC } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  StyleSheet,
  Dimensions,
  Pressable,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { appColor, images } from "../../../constants";
import SearchIcon from "../../../../assets/images/svg/SearchIcon";
import BottomSheet from "@gorhom/bottom-sheet";
import { sizes } from "../../../utils";
import { useAppSelector, useAppDispatch } from "../../../controller/hooks";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
import Collection from "./collection";
import { NftCollection, collection } from "../../../controller/UserController";
import { useNavigation } from "@react-navigation/native";
import NftCollections from "../../createPost/NftCollections";
import { updateSelectedImage } from "../../../controller/UserController";

const SetNFT = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [noSelected, setnoSelected] = useState<number>(0);
  const [numColumns, setnumColumns] = useState<number>(2);
  const [showCollection, setshowCollection] = useState(false);
  const [collectionName, setCollectionName] = useState("");
  const [selectedId, setSelectedId] = useState<number>();
  const [collection, setCollection] = useState<collection[]>();
  const NFTCollections = useAppSelector((state) => state.USER.NFTCollections);
  const selectedimage = useAppSelector(
    (state) => state.USER.selectedCollection
  );
  const dispatch = useAppDispatch();
  const { navigate, setOptions } = useNavigation();
  const CustomHandler = () => {
    return (
      <View
        style={{
          backgroundColor: "transparent",
          borderRadius: 8,
          alignSelf: "center",
        }}
      />
    );
  };

  const handle = () => {
    setshowCollection(!showCollection);
    setOptions({ headerShown: showCollection });
  };

  const CollectionImage: FC<{
    item: NftCollection;
  }> = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          borderRadius: 40,
          marginBottom: size.getHeightSize(16),
        }}
      >
        <Pressable
          style={{
            justifyContent: "space-between",
            borderRadius: 40,
          }}
          onPress={() => {
            setCollection(item.collections);
            handle();
            setCollectionName(item.Name);
            setSelectedId(item.id);
          }}
        >
          <Image
            source={item.Collectionimage}
            style={{
              width: size.getWidthSize(140),
              height: size.getHeightSize(140),
            }}
          />
        </Pressable>
      </View>
    );
  };

  const disabled = selectedimage.length > 0;
  console.log(disabled);

  const DisplayNameBottomSheet = () => {
    return (
      <View
        style={{
          backgroundColor: appColor.kgrayDark2,
          height: "35%",
        }}
      >
        <View
          style={{
            margin: 10,
          }}
        >
          <Text
            style={{
              color: appColor.kTextSubtitleClor,
              fontFamily: "Outfit-Regular",
            }}
          >
            Selected Super Stars
            <Text
              style={{
                fontFamily: "Outfit-Bold",
              }}
            >
              {"  "}
              {`${selectedimage.length}/6`}
            </Text>
          </Text>
        </View>
        <ScrollView
          horizontal={true}
          style={{
            margin: 10,
          }}
        >
          {selectedimage.map((data) =>
            data == undefined ? (
              <Pressable
                key={`${data.id}#${data.itemId}`}
                style={{
                  borderWidth: 0.5,
                  width: 70,
                  height: 70,
                  borderColor: appColor.kgrayColor,
                  borderStyle: "dashed",
                  borderRadius: 10,
                  marginRight: 10,
                }}
              ></Pressable>
            ) : (
              <Pressable
                key={`${data.id}#${data.itemId}`}
                style={{
                  position: "relative",
                }}
                onPress={() => {
                  dispatch(updateSelectedImage({ imageSrc: data.image }));
                }}
              >
                <View
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    key={`${data.id}#${data.itemId}`}
                    source={data.image}
                    style={{
                      width: 70,
                      height: 70,
                      marginHorizontal: 5,
                      borderRadius: 10,
                    }}
                  />
                </View>
                <View
                  style={{
                    position: "absolute",
                    left: 45,
                    top: 5,
                  }}
                >
                  <Image source={images.Remove} />
                </View>
              </Pressable>
            )
          )}
        </ScrollView>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: 10,
          }}
        >
          <Pressable
            onPress={() => {
              selectedimage.map((data) => {
                dispatch(updateSelectedImage({ imageSrc: data.image }));
              });
            }}
            style={{}}
          >
            <Text
              style={{
                color: appColor.grayDark,
                backgroundColor: appColor.kWhiteColor,
                fontFamily: "Outfit-Bold",
                paddingHorizontal: 30,
                paddingVertical: 15,
                borderRadius: 30,
                fontSize: size.fontSize(18),
              }}
            >
              Cancel
            </Text>
          </Pressable>
          <Pressable
            disabled={!disabled}
            onPress={() => {
              navigate("Profile");
            }}
          >
            <Text
              style={{
                color: appColor.kWhiteColor,
                backgroundColor: appColor.kSecondaryButtonColor,
                paddingHorizontal: 30,
                paddingVertical: 15,
                borderRadius: 30,
                fontFamily: "Outfit-Bold",
                opacity: disabled ? 1 : 0.5,
                fontSize: size.fontSize(18),
              }}
            >
              Set Super Stars
            </Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: appColor.feedBackground }}>
      <View></View>
      {!showCollection ? (
        <>
          <View style={styles.searchSection}>
            <SearchIcon />
            <TextInput
              style={styles.input}
              cursorColor="white"
              placeholder="Search by Collection name or ID #"
              placeholderTextColor={appColor.kTextSubtitleClor}
              maxLength={40}
            />
          </View>

          <FlatList
            key={numColumns}
            data={NFTCollections}
            renderItem={({ item }) => <CollectionImage item={item} />}
            keyExtractor={(item) => item.id.toString()}
            style={{}}
            contentContainerStyle={{
              justifyContent: "space-between",
            }}
            numColumns={numColumns}
            extraData={NFTCollections}
          />
        </>
      ) : (
        <Collection
          handle={handle}
          name={collectionName}
          collectionId={selectedId}
        />
      )}
      <DisplayNameBottomSheet />
    </SafeAreaView>
  );
};

export default SetNFT;

const styles = StyleSheet.create({
  input: {
    color: "white",
    width: "100%",
  },
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#FFF",
    height: 50,
    borderRadius: 30,
    margin: 20,
    padding: 10,
  },
});
