import {
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  Dimensions,
  FlatList,
  StyleSheet,
} from "react-native";
import React, { useContext } from "react";
import { useFonts } from "expo-font";
import { images, fonts, appColor } from "../../constants";
const { height, width } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";
import { SelectedCollectionContext } from "./SelectedCollectionContext";
import { sizes } from "../../utils";
const size = new sizes(height, width);
import { useAppSelector } from "../../controller/hooks";
interface SelectedNftCollection {
  image?: any;
  Name?: string;
  id?: number;
}
const SelectedCollection = () => {
  const { isModalVisible, handleModalState } = useContext(
    SelectedCollectionContext
  );
  const navigation = useNavigation();
  const nfts = [
    {
      image: images.Aptomingos,
      Name: "#928098098",
      id: 1,
    },
    {
      image: images.Aptomingos,
      Name: "#928098098",
      id: 2,
    },
    {
      image: images.Aptomingos,
      Name: "#928098098",
      id: 3,
    },
    {
      image: images.Aptomingos,
      Name: "#928098098",
      id: 5,
    },
    {
      image: images.Aptomingos,
      Name: "#928098098",
      id: 6,
    },
    {
      image: images.Aptomingos,
      Name: "#928098098",
      id: 7,
    },
    {
      image: images.Aptomingos,
      Name: "#928098098",
      id: 8,
    },
    {
      image: images.Aptomingos,
      Name: "#928098098",
      id: 9,
    },
    {
      image: images.Aptomingos,
      Name: "#928098098",
      id: 7,
    },
    {
      image: images.Aptomingos,
      Name: "#928098098",
      id: 8,
    },
    {
      image: images.Aptomingos,
      Name: "#928098098",
      id: 9,
    },
    {
      image: images.Aptomingos,
      Name: "#928098098",
      id: 9,
    },
  ];
  let [isLoaded] = useFonts({
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
    "Outfit-Bold": fonts.OUTFIT_BOLD,
  });
  if (!isLoaded) {
    return null;
  }
  const collection = (collection: SelectedNftCollection) => {
    return (
      <Pressable
        onPress={handleModalState}
        key={collection.id}
        style={styles.collection}
      >
        {
          <Image
            source={collection.image}
            resizeMode="cover"
            style={{
              width: size.getWidthSize(140),
              height: size.getHeightSize(140),
            }}
            blurRadius={isModalVisible ? 10 : 0}
          />
        }
        <View
          style={[
            styles.collectionNameContainer,
            { opacity: isModalVisible ? 0.6 : 0.9 },
          ]}
        >
          <Text
            style={[
              styles.collectionName,
              { opacity: isModalVisible ? 0.3 : 0.9 },
            ]}
          >
            {collection.Name}
          </Text>
        </View>
      </Pressable>
    );
  };
  return (
    <FlatList
      data={nfts}
      renderItem={({ item }) => collection(item)}
      numColumns={2}
      keyExtractor={(item) => item.id?.toString()}
      contentContainerStyle={styles.contentContainer}
      columnWrapperStyle={styles.columnWrapper}
    />
  );
};

export default SelectedCollection;
const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: "space-between",
  },
  contentContainer: {
    paddingHorizontal: size.getWidthSize(16),

    width: size.getWidthSize(328),
    alignSelf: "center",
    marginTop: size.getHeightSize(18),
    paddingBottom: size.getHeightSize(10),
  },

  collectionNameContainer: {
    width: size.getWidthSize(124),
    position: "absolute",
    backgroundColor: "#121212",
    bottom: size.getHeightSize(8),
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: size.getHeightSize(8),
    paddingHorizontal: size.getWidthSize(10),
    alignSelf: "center",
    zIndex: 0,

    marginHorizontal: size.getWidthSize(8),
  },
  collectionName: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    fontFamily: "Outfit-Regular",
    textAlign: "left",
  },
  collection: {
    marginBottom: size.getHeightSize(16),
    overflow: "hidden",
    width: size.getWidthSize(140),
    height: size.getHeightSize(140),
    borderRadius: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
});
