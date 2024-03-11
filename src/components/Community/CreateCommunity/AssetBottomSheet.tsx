import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import React, { useCallback, useContext, useEffect, useRef } from 'react';
import {
  BackHandler,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AptosIcon from '../../../../assets/images/svg/AptosIcon';
import TetherIcon from '../../../../assets/images/svg/TetherIcon';
import UsdcIcon from '../../../../assets/images/svg/UsdcIcon';
import { appColor } from '../../../constants';
import { CommunityDetailsType } from '../../../context/SetUpCommunityContext';
import { sizes } from '../../../utils';
import CustomHandler from '../../Feed/CustomHandler';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
type ContextType<T> = React.Context<T | undefined>;
interface Props<T> {
  context: ContextType<T>;
}
type AssetBottomSheetContextType = {
  ischooseAssetBottomSheetVisible: boolean;
  setChooseAssetBottomSheetVisibilty: (state: boolean) => void;
  setSelectedAsset: (assets: {
    logo: React.ReactNode;
    Name: string;
    coinId: string;
  }) => void;
  communityDetails: Partial<CommunityDetailsType>;
  setCommunityDetails: (details: Partial<CommunityDetailsType>) => void;
};
const AssetBottomSheet = <T,>({ context }: Props<T>) => {
  const {
    setChooseAssetBottomSheetVisibilty,
    ischooseAssetBottomSheetVisible,
    setSelectedAsset,
    setCommunityDetails,
    communityDetails,
  } = useContext(context) as AssetBottomSheetContextType;
  const bottomSheetRef = useRef<BottomSheet>(null);
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior={'close'}
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
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
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
          snapPoints={['80%']}
          index={ischooseAssetBottomSheetVisible ? 0 : -1}
          enablePanDownToClose={true}
          animateOnMount={true}
          backgroundStyle={{
            backgroundColor: appColor.kgrayDark2,
          }}
          backdropComponent={renderBackdrop}
          handleComponent={()=><CustomHandler/>}
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
                    coinId: 'Aptos coin',
                    Name: 'APT',
                  });
                  setChooseAssetBottomSheetVisibilty(false);
                  communityDetails.selectedCryptoAsset.name = 'APT';
                  communityDetails.selectedCryptoAsset.coinId = 'Aptos coin';
                  setCommunityDetails({
                    ...communityDetails,
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
                    coinId: 'Tether USD',
                    Name: 'USDT',
                  });
                  communityDetails.selectedCryptoAsset.name = 'USDT';
                  communityDetails.selectedCryptoAsset.coinId = 'Tether USD';
                  setCommunityDetails({
                    ...communityDetails,
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
                    coinId: 'USD coin',
                    Name: 'USDC',
                  });
                  communityDetails.selectedCryptoAsset.name = 'USDC';
                  communityDetails.selectedCryptoAsset.coinId = 'USD coin';
                  setCommunityDetails({
                    ...communityDetails,
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
                    coinId: 'Aptos coin',
                    Name: 'APT',
                  });
                  setChooseAssetBottomSheetVisibilty(false);
                  communityDetails.selectedCryptoAsset.name = 'APT';
                  communityDetails.selectedCryptoAsset.coinId = 'Aptos coin';
                  setCommunityDetails({
                    ...communityDetails,
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
                    coinId: 'Aptos coin',
                    Name: 'APT',
                  });
                  setChooseAssetBottomSheetVisibilty(false);
                  communityDetails.selectedCryptoAsset.name = 'APT';
                  communityDetails.selectedCryptoAsset.coinId = 'Aptos coin';
                  setCommunityDetails({
                    ...communityDetails,
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
                    coinId: 'Aptos coin',
                    Name: 'APT',
                  });
                  setChooseAssetBottomSheetVisibilty(false);
                  communityDetails.selectedCryptoAsset.name = 'APT';
                  communityDetails.selectedCryptoAsset.coinId = 'Aptos coin';
                  setCommunityDetails({
                    ...communityDetails,
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
                    coinId: 'Aptos coin',
                    Name: 'APT',
                  });
                  setChooseAssetBottomSheetVisibilty(false);
                  communityDetails.selectedCryptoAsset.name = 'APT';
                  communityDetails.selectedCryptoAsset.coinId = 'Aptos coin';
                  setCommunityDetails({
                    ...communityDetails,
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
                    coinId: 'Aptos coin',
                    Name: 'APT',
                  });
                  setChooseAssetBottomSheetVisibilty(false);
                  communityDetails.selectedCryptoAsset.name = 'APT';
                  communityDetails.selectedCryptoAsset.coinId = 'Aptos coin';
                  setCommunityDetails({
                    ...communityDetails,
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
                    coinId: 'Aptos coin',
                    Name: 'APT',
                  });
                  setChooseAssetBottomSheetVisibilty(false);
                  communityDetails.selectedCryptoAsset.name = 'APT';
                  communityDetails.selectedCryptoAsset.coinId = 'Aptos coin';
                  setCommunityDetails({
                    ...communityDetails,
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
                    coinId: 'Aptos coin',
                    Name: 'APT',
                  });
                  setChooseAssetBottomSheetVisibilty(false);
                  communityDetails.selectedCryptoAsset.name = 'APT';
                  communityDetails.selectedCryptoAsset.coinId = 'Aptos coin';
                  setCommunityDetails({
                    ...communityDetails,
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
                    coinId: 'Aptos coin',
                    Name: 'APT',
                  });
                  setChooseAssetBottomSheetVisibilty(false);
                  communityDetails.selectedCryptoAsset.name = 'APT';
                  communityDetails.selectedCryptoAsset.coinId = 'Aptos coin';
                  setCommunityDetails({
                    ...communityDetails,
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
    fontFamily: 'Outfit-Bold',
    textAlign: 'center',
    marginTop: size.getHeightSize(29),
    lineHeight: size.getHeightSize(37),
    marginBottom: size.getHeightSize(32),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: size.getWidthSize(16),
    gap: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(8),
  },
  text1: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Bold',
    lineHeight: size.getHeightSize(21),
  },
  text2: {
    color: appColor.grayLight,
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(18),
  },
});
