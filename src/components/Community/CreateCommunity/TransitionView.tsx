import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Pressable,
  FlatList,
  Animated,
} from "react-native";
import React, { useState, useContext, useRef } from "react";
import { appColor } from "../../../constants";
import { sizes } from "../../../utils";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SelectedAssetBottomsheet from "./SelectedAssetBottomsheet";
import ChooseNFTBottomsheet from "./ChooseNFTBottomsheet";
import { useNavigation } from "@react-navigation/native";
import { SetCommunityContext } from "../../../context/SetUpCommunityContext";
import RemoveAssetBottomSheet from "./RemoveAssetBottomSheet";
import AssetBottomSheet from "./AssetBottomSheet";
import ChooseNFTPFPBottomSheet from "../../../shared/UpdatePFP/ChooseNFTPFPBottomSheet";
import UploadImageBottomSheet from "../../../shared/UpdatePFP/UploadImageBottomSheet";
import SelectedCollectionBottomSheet from "../../../shared/UpdatePFP/SelectedCollectionBottomSheet";
import ViewNFT from "./ViewNFT";

let PADDING = size.getWidthSize(26);
let newWidth = width - 2 * PADDING;

const TransitionView = () => {
  const navigation = useNavigation();
  const { communityDetails, views } = useContext(SetCommunityContext);
  const [viewIndex, setViewIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList<any>>(null);
  // const onViewChangeRef = useRef(({ viewableItems }: any) => {
  //   console.log(`======${viewableItems[0]?.index}============`)
  //   setViewIndex(viewableItems[0]?.index);
  // });
  const [isNftBottomSheetVisible, setIsNftBottomSheetVisible] = useState(false);
  const [viewNFTVisible, setViewNftVisibility] = useState(false);
  const [selectedAssetVisibility, setSelectedAssetBottomSheet] =
    useState(false);
  const handleNextSlide = () => {
    if (viewIndex === 3 && communityDetails.asset === "NFT") {
      setIsNftBottomSheetVisible(true);
    } else if (viewIndex === 4 && communityDetails.asset === "Crypto_asset") {
      setSelectedAssetBottomSheet(true);
    } else {
      handleSlide();
    }
  };
  const handleSlide = () => {
    setViewIndex((previous) => previous + 1);
    const newIndex = viewIndex + 1;
    if (newIndex < views.length && flatListRef.current) {
      flatListRef.current.scrollToIndex({ index: newIndex, animated: true });
    } else {
      navigation.navigate("CreateCommunitySuccessScreen");
    }
  };
  const handlePreviousSlide = () => {
    setViewIndex((previous) => previous - 1);
    const newIndex = viewIndex - 1;
    if (newIndex >= 0 && flatListRef.current) {
      flatListRef.current.scrollToIndex({ index: newIndex, animated: true });
    } else {
      navigation.goBack();
    }
  };
  function distributeRange(value: number, length: number) {
    const step = (value - value / length) / (length - 1);
    const result = [value / length];
    for (let i = 1; i < length - 1; i++) {
      result.push(result[i - 1] + step);
    }
    result.push(value);
    return result;
  }
  const stagePosition = Animated.divide(scrollX, width);

  const progressWidth = stagePosition.interpolate({
    inputRange: Array.from({ length: views.length }, (_, index) => index),
    outputRange: distributeRange(newWidth, views.length),
    extrapolate: "clamp",
  });
  let stageTitle = (index: number) => {
    switch (index) {
      case 0:
        return "Select Socials";
      case 1:
        return "Select Socials";
      case 2:
        return "Select Socials";
      case 3:
        return "Select Socials";
      case 4:
        return "Select Socials";
      case 5:
        return "Select Socials";
      case 6:
        return "Select Socials";
      case 7:
        return "Select Socials";
      default:
        return "Select Socials";
    }
  };

  let disableContinueButon: boolean;
  switch (viewIndex) {
    case 0:
      disableContinueButon = communityDetails.privacy === undefined;
      break;
    case 1:
      disableContinueButon =
        !communityDetails.communityName || !communityDetails.communityPFP;
      break;

    case 2:
      disableContinueButon = communityDetails.gate === undefined;
      break;
    case 3:
      disableContinueButon = communityDetails.asset === undefined;
      break;
    case 4:
      disableContinueButon =
        viewIndex === 4 &&
        communityDetails.cryptoAssetAmountType === "specified_amount" &&
        !communityDetails.selectedCryptoAsset.amount;
      break;
    case 5:
      disableContinueButon = false;
      break;
    case 6:
      disableContinueButon = true;
      break;
    default:
      break;
  }

  return (
    <>
      <View
        style={{
          marginTop: size.getHeightSize(16),
          paddingHorizontal: PADDING,
        }}
      >
        <Text
          style={{
            color: appColor.kTextColor,
            marginBottom: size.getHeightSize(8),
            fontFamily: "Outfit-Regular",
            fontSize: size.fontSize(14),
            lineHeight: size.getHeightSize(18),
            width: size.getWidthSize(257),
          }}
        >
          Next step: {stageTitle(viewIndex)}
        </Text>

        <Animated.View
          style={{
            height: size.getHeightSize(2),
            backgroundColor: appColor.kStatusBarNaviDark,
            width: newWidth,
          }}
        >
          <Animated.View
            style={{
              height: size.getHeightSize(2),
              backgroundColor: appColor.kSecondaryButtonColor,
              width: progressWidth,
            }}
          />
        </Animated.View>
      </View>
      <View
        style={{
          flex: 1,
          width: width,
        }}
      >
        <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View
            style={{
              flex: 1,
              width: width,
              alignItems: "center",
            }}
          >
            <FlatList
              scrollEnabled={false}
              ref={flatListRef}
              data={views}
              horizontal
              pagingEnabled
              scrollEventThrottle={16}
              snapToAlignment="center"
              showsHorizontalScrollIndicator={false}
              bounces={false}
              // onViewableItemsChanged={onViewChangeRef.current}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: false }
              )}
              renderItem={({ item }: any) => {
                return (
                  <View
                    style={{
                      width: width,
                      paddingHorizontal: size.getWidthSize(16),
                      flex: 1,
                    }}
                  >
                    {item}
                  </View>
                );
              }}
            />
          </View>

          <View>
            <Pressable
              // disabled={disableContinueButon}
              onPress={() => {
                handleNextSlide();
              }}
              style={[
                styles.continueButton,
                {
                  backgroundColor: disableContinueButon
                    ? "#FFFFFF60"
                    : appColor.kWhiteColor,
                },
              ]}
            >
              <Text style={styles.continueText}>Continue</Text>
            </Pressable>
            <View style={styles.backButton}>
              <Text
                onPress={() => {
                  viewIndex === 4 && communityDetails.asset === "Crypto_asset"
                    ? handleSlide()
                    : handlePreviousSlide();
                }}
                style={styles.backText}
              >
                {viewIndex === 4 && communityDetails.asset === "Crypto_asset"
                  ? "I'll do it later"
                  : "Back"}
              </Text>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
      <UploadImageBottomSheet context={SetCommunityContext} />
      <ChooseNFTPFPBottomSheet context={SetCommunityContext} />
      <SelectedCollectionBottomSheet context={SetCommunityContext} />
      <AssetBottomSheet />
      <RemoveAssetBottomSheet />
      <SelectedAssetBottomsheet
        visibility={selectedAssetVisibility}
        onclose={() => setSelectedAssetBottomSheet(false)}
        onContinuewButtonPressed={() => {
          handleSlide();
        }}
      />
      <ChooseNFTBottomsheet
        callback={() => {
          setIsNftBottomSheetVisible(false);
          setViewNftVisibility(true);
        }}
        onclose={() => setIsNftBottomSheetVisible(false)}
        visible={isNftBottomSheetVisible}
      />
      <ViewNFT
        visibility={viewNFTVisible}
        onclose={() => {
          setViewNftVisibility(false);
        }}
        onContinueButtonPressed={() => {
          handleSlide();
        }}
      />
    </>
  );
};

export default TransitionView;
const styles = StyleSheet.create({
  backText: {
    fontStyle: "normal",
    textAlign: "center",
    color: appColor.kTextColor,
    fontSize: size.fontSize(18),
    fontFamily: "Outfit-Medium",

    lineHeight: size.getHeightSize(23),
    letterSpacing: 0.02,
  },
  backButton: {
    alignSelf: "center",
    width: size.getWidthSize(328),
    borderRadius: 40,
    minHeight: size.getHeightSize(48),
    justifyContent: "center",
    marginTop: size.getHeightSize(8),
    marginBottom: size.getHeightSize(16),
    paddingVertical: size.getHeightSize(12.5),
  },
  continueButton: {
    alignSelf: "center",
    width: size.getWidthSize(328),
    borderRadius: 40,
    minHeight: size.getHeightSize(48),
    justifyContent: "center",

    paddingVertical: size.getHeightSize(12.5),
    marginBottom: size.getHeightSize(8),
  },
  continueText: {
    textAlign: "center",
    color: appColor.kButtonTextColor,
    fontSize: size.fontSize(18),
    fontFamily: "Outfit-Medium",
    fontStyle: "normal",
    lineHeight: size.getHeightSize(23),
    letterSpacing: 0.02,
  },
});
