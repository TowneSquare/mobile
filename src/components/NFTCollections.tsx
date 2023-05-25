import {
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import { images, fonts, appColor } from '../constants';
const { height, width } = Dimensions.get('window');
import { useAppDispatch } from '../controller/hooks';
import {
  updateSelectedCollection,
  updateSelectedRender,
  updateNftRender,
  updateNftOpen,
} from '../controller/BottomSheetController';
import { sizes } from '../utils';
const size = new sizes(height, width);
const NFTCollections = () => {
  const dispatch = useAppDispatch();
  const collections = [
    {
      image: images.NftCollection1,
      Name: 'Aptos Monkey lorem Ipsumdalr',
      id: 4,
    },
    {
      image: images.NftCollection2,
      Name: 'Aptomingos',
      id: 12,
    },
    {
      image: images.NftCollection1,
      Name: 'Aptos Monkey lorem Ipsumdalr',
      id: 4,
    },
    {
      image: images.NftCollection2,
      Name: 'Aptomingos',
      id: 12,
    },
    {
      image: images.NftCollection1,
      Name: 'Aptos Monkey lorem Ipsumdalr',
      id: 4,
    },
    {
      image: images.NftCollection2,
      Name: 'Aptomingos',
      id: 12,
    },
    {
      image: images.NftCollection1,
      Name: 'Aptos Monkey lorem Ipsumdalr',
      id: 4,
    },
    {
      image: images.NftCollection2,
      Name: 'Aptomingos',
      id: 12,
    },
  ];

  let [isLoaded] = useFonts({
    'Urbanist-Bold': fonts.EXTRABOLD,
    UrbanistSemiBold: fonts.SEMIBOLD,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
    'Outfit-Bold': fonts.OUTFIT_BOLD,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <>
      {collections.length > 0 ? (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: size.getWidthSize(328),
            justifyContent: 'space-around',
            alignSelf: 'center',
          }}
        >
          {collections.map((collection) => (
            <Pressable
              style={{
                marginBottom: size.getHeightSize(16),
                overflow: 'hidden',
                width: size.getWidthSize(140),
                height: size.getHeightSize(140),
                borderRadius: 20,
              }}
              onPress={() => {
                dispatch(updateNftRender(0));
                dispatch(updateNftOpen(false));
                dispatch(updateSelectedRender(1));
                dispatch(updateSelectedCollection(true));
              }}
            >
              <Image
                source={collection.image}
                resizeMode="cover"
                style={{
                  width: '100%',
                  height: '100%',
                }}
                // style={{ width: size.sWidth(0.42), height: size.sHeight(0.25) }}
              />
              <View
                style={{
                  width: size.getWidthSize(124),
                  position: 'absolute',
                  backgroundColor: '#101323',
                  bottom: size.getHeightSize(12),
                  left: size.getWidthSize(8),
                  // right: 0,
                  justifyContent: 'center',
                  borderRadius: 8,
                  paddingVertical: size.getHeightSize(4),
                  paddingHorizontal: size.getWidthSize(10),
                  alignSelf: 'center',
                  zIndex: 0,
                }}
              >
                <Text
                  style={{
                    color: appColor.kTextColor,
                    fontSize: size.fontSize(16),
                    fontFamily: 'Outfit-Regular',
                    textAlign: 'left',
                  }}
                >
                  {collection.Name}
                </Text>
              </View>
              <View
                style={{
                  height: 26,
                  width: 25,
                  position: 'absolute',
                  backgroundColor: appColor.kSecondaryButtonColor,
                  left: size.getWidthSize(107),
                  top: size.getHeightSize(10),
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 100,
                }}
              >
                <Text
                  style={{
                    color: appColor.kTextColor,
                    fontSize: size.fontSize(16),
                    fontFamily: 'Outfit-Regular',
                    lineHeight: size.getHeightSize(18),
                  }}
                >
                  {collection.id}
                </Text>
              </View>
            </Pressable>
          ))}
        </View>
      ) : (
        <Text
          style={{
            color: appColor.kTextColor,
            fontSize: size.fontSize(14),
            fontFamily: 'Outfit-Medium',
            textAlign: 'center',
            marginTop: size.sHeight(0.01),
            marginHorizontal: 20,
            alignSelf: 'center',
          }}
        >
          NFT not Found
        </Text>
      )}
    </>
  );
};

export default NFTCollections;
