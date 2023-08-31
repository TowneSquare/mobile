import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  BackHandler,
  Pressable,
} from "react-native";
import React, { useRef, useEffect, useCallback, useContext } from "react";

import AptosIcon from "../../../../assets/images/svg/AptosIcon";
import UsdcIcon from "../../../../assets/images/svg/UsdcIcon";
import TetherIcon from "../../../../assets/images/svg/TetherIcon";

import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { appColor, fonts, images } from "../../../constants";
import { SetCommunityContext } from "../../../context/SetUpCommunityContext";
import { sizes } from "../../../utils";
import CustomHandler from "../../Feed/CustomHandler";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
const AssetBottomSheet = () => {
  const {
    setChooseAssetBottomSheetVisibilty,
    ischooseAssetBottomSheetVisible,
    setSelectedAsset,
  } = useContext(SetCommunityContext);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior={"none"}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.8}
      />
    ),
    []
  );
  ischooseAssetBottomSheetVisible === false
    ? bottomSheetRef.current?.close()
    : bottomSheetRef.current?.expand();
  useEffect(() => {
    const handleBackButton = () => {
      if (ischooseAssetBottomSheetVisible === true) {
        setChooseAssetBottomSheetVisibilty(false);
        return true;
      } else {
        return false;
      }
    };
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
    };
  }, [ischooseAssetBottomSheetVisible]);

  return (
    <>
      {!ischooseAssetBottomSheetVisible ? (
        <></>
      ) : (
        <BottomSheet
          onClose={() => {
            setChooseAssetBottomSheetVisibilty(false);
          }}
          ref={bottomSheetRef}
          snapPoints={["80%"]}
          index={ischooseAssetBottomSheetVisible ? 0 : -1}
          enablePanDownToClose={true}
          animateOnMount={true}
          backgroundStyle={{
            backgroundColor: appColor.kgrayDark2,
          }}
          backdropComponent={renderBackdrop}
          handleComponent={CustomHandler}
        >
          <Text style={styles.title}>Choose asset</Text>

          <BottomSheetScrollView
            style={{}}
            showsVerticalScrollIndicator={false}
          >
            <View
              style={{
                gap: size.getHeightSize(8),
              }}
            >
              <Pressable
                onPress={() => {
                  setSelectedAsset({
                    logo: <AptosIcon />,
                    coinId: "Aptos coin",
                    Name: "APT",
                  });
                }}
                style={styles.row}
              >
                <AptosIcon size={size.getHeightSize(40)} />
                <View>
                  <Text style={styles.text1}>APT</Text>
                  <Text style={styles.text2}>Aptos coin</Text>
                </View>
              </Pressable>

              <Pressable
                onPress={() => {
                  setSelectedAsset({
                    logo: <TetherIcon />,
                    coinId: "Tether USD",
                    Name: "USDT",
                  });
                  setChooseAssetBottomSheetVisibilty(false);
                }}
                style={styles.row}
              >
                <TetherIcon size={size.getHeightSize(40)} />
                <View>
                  <Text style={styles.text1}>USDT</Text>
                  <Text style={styles.text2}>Tether USD</Text>
                </View>
              </Pressable>

              <Pressable
                onPress={() => {
                  setSelectedAsset({
                    logo: <UsdcIcon />,
                    coinId: "USD coin",
                    Name: "USDC",
                  });
                  setChooseAssetBottomSheetVisibilty(false);
                }}
                style={styles.row}
              >
                <UsdcIcon size={size.getHeightSize(40)} />
                <View>
                  <Text style={styles.text1}>USDC</Text>
                  <Text style={styles.text2}>USD coin</Text>
                </View>
              </Pressable>
              <Pressable
                onPress={() => {
                  setSelectedAsset({
                    logo: <TetherIcon />,
                    coinId: "Aptos coin",
                    Name: "APT",
                  });
                }}
                style={styles.row}
              >
                <TetherIcon size={size.getHeightSize(40)} />
                <View>
                  <Text style={styles.text1}>APT</Text>
                  <Text style={styles.text2}>Aptos coin</Text>
                </View>
              </Pressable>
              <Pressable
                onPress={() => {
                  setSelectedAsset({
                    logo: <TetherIcon />,
                    coinId: "Aptos coin",
                    Name: "APT",
                  });
                  setChooseAssetBottomSheetVisibilty(false);
                }}
                style={styles.row}
              >
                <TetherIcon size={size.getHeightSize(40)} />
                <View>
                  <Text style={styles.text1}>APT</Text>
                  <Text style={styles.text2}>Aptos coin</Text>
                </View>
              </Pressable>
              <Pressable
                onPress={() => {
                  setSelectedAsset({
                    logo: <TetherIcon />,
                    coinId: "Aptos coin",
                    Name: "APT",
                  });
                  setChooseAssetBottomSheetVisibilty(false);
                }}
                style={styles.row}
              >
                <TetherIcon size={size.getHeightSize(40)} />
                <View>
                  <Text style={styles.text1}>APT</Text>
                  <Text style={styles.text2}>Aptos coin</Text>
                </View>
              </Pressable>
              <Pressable
                onPress={() => {
                  setSelectedAsset({
                    logo: <TetherIcon />,
                    coinId: "Aptos coin",
                    Name: "APT",
                  });
                  setChooseAssetBottomSheetVisibilty(false);
                }}
                style={styles.row}
              >
                <TetherIcon size={size.getHeightSize(40)} />
                <View>
                  <Text style={styles.text1}>APT</Text>
                  <Text style={styles.text2}>Aptos coin</Text>
                </View>
              </Pressable>
              <Pressable
                onPress={() => {
                  setSelectedAsset({
                    logo: <TetherIcon />,
                    coinId: "Aptos coin",
                    Name: "APT",
                  });
                  setChooseAssetBottomSheetVisibilty(false);
                }}
                style={styles.row}
              >
                <TetherIcon size={size.getHeightSize(40)} />
                <View>
                  <Text style={styles.text1}>APT</Text>
                  <Text style={styles.text2}>Aptos coin</Text>
                </View>
              </Pressable>
              <Pressable
                onPress={() => {
                  setSelectedAsset({
                    logo: <TetherIcon />,
                    coinId: "Aptos coin",
                    Name: "APT",
                  });
                  setChooseAssetBottomSheetVisibilty(false);
                }}
                style={styles.row}
              >
                <TetherIcon size={size.getHeightSize(40)} />
                <View>
                  <Text style={styles.text1}>APT</Text>
                  <Text style={styles.text2}>Aptos coin</Text>
                </View>
              </Pressable>
              <Pressable
                onPress={() => {
                  setSelectedAsset({
                    logo: <TetherIcon />,
                    coinId: "Aptos coin",
                    Name: "APT",
                  });
                  setChooseAssetBottomSheetVisibilty(false);
                }}
                style={styles.row}
              >
                <TetherIcon size={size.getHeightSize(40)} />
                <View>
                  <Text style={styles.text1}>APT</Text>
                  <Text style={styles.text2}>Aptos coin</Text>
                </View>
              </Pressable>
              <Pressable
                onPress={() => {
                  setSelectedAsset({
                    logo: <TetherIcon />,
                    coinId: "Aptos coin",
                    Name: "APT",
                  });
                  setChooseAssetBottomSheetVisibilty(false);
                }}
                style={styles.row}
              >
                <TetherIcon size={size.getHeightSize(40)} />
                <View>
                  <Text style={styles.text1}>APT</Text>
                  <Text style={styles.text2}>Aptos coin</Text>
                </View>
              </Pressable>
            </View>
          </BottomSheetScrollView>
        </BottomSheet>
      )}
    </>
  );
};

export default AssetBottomSheet;
const styles = StyleSheet.create({
  title: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(29),
    fontFamily: "Outfit-Bold",
    textAlign: "center",
    marginTop: size.getHeightSize(29),
    lineHeight: size.getHeightSize(37),
    marginBottom: size.getHeightSize(32),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: size.getWidthSize(16),
    gap: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(8),
  },
  text1: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: "Outfit-Bold",
    lineHeight: size.getHeightSize(21),
  },
  text2: {
    color: appColor.grayLight,
    fontSize: size.fontSize(14),
    fontFamily: "Outfit-Regular",
    lineHeight: size.getHeightSize(18),
  },
});
