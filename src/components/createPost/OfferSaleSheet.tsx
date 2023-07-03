import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";
import React, { useRef, useEffect } from "react";
import { useFonts } from "expo-font";
import Aptos from "../../../assets/images/svg/Aptos";
import { appColor, fonts } from "../../constants";
import { sizes } from "../../utils";
import BottomSheet from "@gorhom/bottom-sheet";
import { useAppSelector, useAppDispatch } from "../../controller/hooks";
import CustomHandler from "../Feed/CustomHandler";
import { updateShowPriceModal } from "../../controller/createPost";
const { height, width } = Dimensions.get("window");
import InfoLarge from "../../../assets/images/svg/InfoLarge";
const size = new sizes(height, width);

const OfferSaleSheet = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const dispatch = useAppDispatch();
  const showSheet = useAppSelector(
    (state) => state.CreatePostController.priceModal
  );
  useEffect(() => {
    if (showSheet === false) {
      bottomSheetRef.current?.close();
    }
  }, [showSheet]);
  const closeModal = () => {
    dispatch(updateShowPriceModal(false));
    bottomSheetRef.current?.close();
  };
  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
    "Outfit-SemiBold": fonts.OUTFIT_SEMIBOLD,
  });
  return (
    <BottomSheet
      snapPoints={["55"]}
      index={showSheet ? 0 : -1}
      backgroundStyle={{
        backgroundColor: appColor.kgrayDark2,
      }}
      handleComponent={CustomHandler}
      enablePanDownToClose={true}
      ref={bottomSheetRef}
      onClose={closeModal}
    >
      <Text style={styles.collectionName}>Aptomingos #9022</Text>
      <View style={styles.details}>
        <Text style={styles.floorPrice}>Floor price</Text>
        <Text style={styles.amount}>90 APT</Text>
        <InfoLarge />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Insert price"
          cursorColor={appColor.primaryLight}
          placeholderTextColor={appColor.kGrayLight3}
        />
        <Aptos />
        <Text style={styles.APT}>APT</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <Text style={styles.tags}>Listing price</Text>
          <Text style={styles.texts}> - </Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.tags}>Royalties</Text>
          <Text style={styles.texts}> - </Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.tags}>Fee</Text>
          <Text style={styles.texts}> 2%</Text>
        </View>
      </View>
      <View style={styles.equivalentContainer}>
        <Text style={styles.equivalentTag}>You will receive</Text>
        <Text style={styles.texts}> - </Text>
      </View>
      <View style={styles.setPriceButton}>
        <Text style={styles.setPrice}>Set price</Text>
      </View>
    </BottomSheet>
  );
};

export default OfferSaleSheet;
const styles = StyleSheet.create({
  container: {
    width: size.getWidthSize(296),
    borderBottomWidth: 1,
    borderBottomColor: appColor.kWhiteColor,
    alignSelf: "center",
    paddingBottom: size.getHeightSize(16),
    marginTop: size.getHeightSize(32),
    gap: size.getHeightSize(16),
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tags: {
    color: appColor.grayLight,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: "Outfit-Regular",
  },
  texts: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: "Outfit-Regular",
  },
  equivalentTag: {
    color: appColor.grayLight,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: "Outfit-SemiBold",
  },
  textInput: {
    width: size.getWidthSize(223),
    height: size.getHeightSize(48),
    borderWidth: 1,
    borderRadius: 40,
    borderColor: appColor.kGrayscale,
    backgroundColor: appColor.kGrayscaleDart,
    marginRight: size.getWidthSize(16),
    paddingHorizontal: size.getWidthSize(16),
    fontSize: size.fontSize(16),
    fontFamily: "Outfit-Regular",
    color: appColor.kTextColor,
    paddingVertical: size.getHeightSize(12),
  },
  APT: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: "Outfit-SemiBold",
    letterSpacing: 0.04,
    textTransform: "uppercase",
    marginLeft: size.getWidthSize(8),
  },
  equivalentContainer: {
    flexDirection: "row",
    marginHorizontal: size.getWidthSize(32),
    justifyContent: "space-between",
    width: size.getWidthSize(296),
    alignSelf: "center",
    marginTop: size.getHeightSize(16),
  },
  setPriceButton: {
    alignSelf: "center",
    width: size.getWidthSize(312),
    paddingVertical: size.getHeightSize(12.5),
    borderRadius: 40,
    backgroundColor: appColor.kSecondaryButtonColor,
    justifyContent: "center",
    marginTop: size.getHeightSize(32),
  },
  setPrice: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    fontFamily: "Outfit-Medium",
    textAlign: "center",
    letterSpacing: 0.02,
  },
  inputContainer: {
    flexDirection: "row",
    alignSelf: "center",
    gap: size.getWidthSize(4),
    marginTop: size.getHeightSize(32),
    width: size.getWidthSize(312),
    alignItems: "center",
  },
  collectionName: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.02,
    fontFamily: "Outfit-SemiBold",
    textAlign: "center",
    marginTop: size.getHeightSize(24),
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    gap: size.getWidthSize(4),
    marginTop: size.getHeightSize(8),
  },
  floorPrice: {
    color: appColor.grayLight,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: "Outfit-Regular",
    textAlign: "center",
  },
  amount: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: "Outfit-Regular",
    textAlign: "center",
  },
});
