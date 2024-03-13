import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from "@gorhom/bottom-sheet";
import { useFonts } from "expo-font";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import {
  BackHandler,
  Dimensions,
  Image,
  Pressable,
  Text,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { appColor, fonts, images } from "../../../constants";
import { sizes } from "../../../utils";
import CustomHandler from "../../Feed/CustomHandler";
const { height, width } = Dimensions.get("window");
interface Props {
  visibility: boolean;
  onClose: () => void;
}
const size = new sizes(height, width);
const CommunityModal = ({ onClose, visibility }: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const initialSnapPoints = useMemo(() => ["CONTENT_HEIGHT"], []);
  visibility === false
    ? bottomSheetRef.current?.close()
    : bottomSheetRef.current?.expand();
  useEffect(() => {
    const handleBackButton = () => {
      if (visibility === true) {
        onClose();
        return true;
      } else {
        return false;
      }
    };
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
    };
  }, [visibility]);
  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);
  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
  });

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior={"close"}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.5}
      />
    ),
    []
  );
  return (
    <>
      {!visibility ? (
        <></>
      ) : (
        <BottomSheet
          onClose={() => {
            onClose();
          }}
          ref={bottomSheetRef}
          snapPoints={animatedSnapPoints}
          handleHeight={animatedHandleHeight}
          contentHeight={animatedContentHeight}
          enablePanDownToClose={true}
          animateOnMount={true}
          backgroundStyle={{
            backgroundColor: appColor.kgrayDark2,
          }}
          handleComponent={CustomHandler}
          backdropComponent={renderBackdrop}
        >
          <BottomSheetView onLayout={handleContentLayout}>
            <Animatable.View
              animation={"fadeInUp"}
              delay={300}
              easing={"ease-in-out"}
              duration={400}
              style={{}}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginHorizontal: size.getWidthSize(16),
                }}
              >
                <View
                  style={{
                    height: size.getHeightSize(130),
                    width: size.getHeightSize(133),
                    marginTop: size.getHeightSize(32),
                  }}
                >
                  <Image
                    source={images.commlogo}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 200,
                    }}
                    resizeMode="cover"
                  />
                </View>

                <Text
                  style={{
                    fontSize: size.fontSize(20),
                    color: appColor.kTextColor,
                    textAlign: "center",
                    marginTop: size.getHeightSize(32),
                    lineHeight: size.getHeightSize(24),
                    fontFamily: "Outfit-Bold",
                    letterSpacing: 0.4,
                  }}
                >
                  Community is token-gated with
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    color: appColor.kTextColor,
                    fontFamily: "Outfit-Bold",
                    fontSize: size.fontSize(29),
                    marginTop: size.getHeightSize(8),
                    fontStyle: "normal",
                    lineHeight: size.getHeightSize(37),
                  }}
                >
                  SIOthians
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    color: appColor.grayLight,
                    fontFamily: "Outfit-Medium",
                    marginTop: size.getHeightSize(32),
                    fontSize: size.fontSize(16),
                    lineHeight: size.getHeightSize(21),
                  }}
                >
                  You need to need to hold
                  <Text
                    style={{
                      textAlign: "center",
                      color: appColor.kTextColor,
                      fontFamily: "Outfit-Bold",
                      fontSize: size.fontSize(16),
                      lineHeight: size.getHeightSize(21),
                    }}
                  >
                    {" "}
                    AT LEAST ONE of Sl0thians{" "}
                  </Text>
                  NFT's to be able to join the community
                </Text>

                <Pressable
                  onPress={() => onClose()}
                  style={{
                    minHeight: size.getHeightSize(48),
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    backgroundColor: appColor.kWhiteColor,
                    borderRadius: 40,
                    marginTop: size.getHeightSize(40),
                    marginBottom: size.getHeightSize(16),
                  }}
                >
                  <Text
                    style={{
                      color: appColor.kButtonTextColor,
                      fontSize: size.fontSize(18),
                      letterSpacing: 0.36,
                      fontFamily: "Outfit-Medium",
                      textAlign: "center",
                    }}
                  >
                    Close
                  </Text>
                </Pressable>
              </View>
            </Animatable.View>
          </BottomSheetView>
        </BottomSheet>
      )}
    </>
  );
};

export default CommunityModal;
