import React, { useRef, useState, FC } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  StyleSheet,
  Platform,
  Dimensions,
  Pressable,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { appColor } from "../../../constants";
import SearchIcon from "../../../../assets/images/svg/SearchIcon";
import BottomSheet, {
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { sizes } from "../../../utils";
import { useAppSelector } from "../../../controller/hooks";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
import Collection from "./collection";
import { NftCollection, collection } from "../../../controller/UserController";
import { useNavigation } from "@react-navigation/native";

const SetNFT = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [noSelected, setnoSelected] = useState<number>(0);
  const [numColumns, setnumColumns] = useState<number>(2);
  const [showCollection, setshowCollection] = useState(false)
  const [collectionName, setCollectionName] = useState("")
  const [selectedId, setSelectedId] = useState<number>()
  const [collection, setCollection] = useState<collection[]>()
  const NFTCollections = useAppSelector((state) => state.USER.NFTCollections);
  const {navigate,setOptions} = useNavigation()
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

  const BottomSheetData = [
    {
      id: 1,
      imageSrc: "",
    },
    {
      id: 2,
      imageSrc: "",
    },
    {
      id: 3,
      imageSrc: "",
    },
    {
      id: 4,
      imageSrc: "",
    },
    {
      id: 5,
      imageSrc: "",
    },
    {
      id: 6,
      imageSrc: "",
    },
  ];

  const CollectionImage:FC<{
    item: NftCollection
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
            setCollection(item.collections)
            setshowCollection(true)
            navigate("SetNFTs")
            setOptions({title: `${item.Name}`})
            setCollectionName(item.Name)
            setSelectedId(item.id)
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

  const DisplayNameBottomSheet = () => {
    return (
      // <BottomSheet
      //   ref={bottomSheetRef}
      //   snapPoints={[Platform.OS === "ios" ? "33%" : "33%"]}
      //   index={0}
      //   backgroundStyle={{
      //     backgroundColor: appColor.kgrayDark2,
      //   }}
      //   handleComponent={CustomHandler}
      //   enableHandlePanningGesture={false}
      //>
      <View style={{
        backgroundColor: appColor.kgrayDark2,
        height:"35%"
      }}>
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
              {`${noSelected}/6`}
            </Text>
          </Text>
        </View>
        <ScrollView
          horizontal={true}
          style={{
            margin: 10,
          }}
        >
          {BottomSheetData.map((data) => (
            <Pressable
              key={data.id}
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
          ))}
        </ScrollView>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: 10,
          }}
        >
          <Pressable style={{}}>
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
          <Pressable disabled>
            <Text
              style={{
                color: appColor.kWhiteColor,
                backgroundColor: appColor.kSecondaryButtonColor,
                paddingHorizontal: 30,
                paddingVertical: 15,
                borderRadius: 30,
                fontFamily: "Outfit-Bold",
                opacity: 0.5,
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
      {
        !showCollection ? (
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

      {NFTCollections && <FlatList
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
      />}
         </>
        ):(
          <Collection name={collectionName} collectionId={selectedId} collectionData={collection}/>
        )
      }
      
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
