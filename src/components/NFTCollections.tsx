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
            width: '90%',

            justifyContent: 'space-around',
            alignSelf: 'center',
            marginTop: 20,
          }}
        >
          {collections.map((collection) => (
            <Pressable
              style={{
                marginBottom: 20,
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
                resizeMode="contain"
                // style={{ width: size.sWidth(0.42), height: size.sHeight(0.25) }}
              />
              <View
                style={{
                  height: size.sHeight(0.05),
                  width: size.sWidth(0.32),
                  position: 'absolute',
                  backgroundColor: '#101323',
                  bottom: size.sHeight(0.01),
                  left: size.sWidth(0.03),
                  right: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    color: appColor.kTextColor,
                    fontSize: size.fontSize(16),
                    fontFamily: 'Outfit-Bold',
                  }}
                >
                  {collection.Name}
                </Text>
              </View>
              <View
                style={{
                  height: size.sHeight(0.035),
                  width: size.sWidth(0.08),
                  position: 'absolute',
                  backgroundColor: appColor.kSecondaryButtonColor,
                  //   bottom: size.sHeight(0.01),
                  left: '70%',
                  top: 10,
                  //   right: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 100,
                }}
              >
                <Text
                  style={{
                    color: appColor.kTextColor,
                    fontSize: size.fontSize(16),
                    fontFamily: 'Outfit-Bold',
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
            fontSize: size.fontSize(16),
            fontFamily: 'Outfit-Medium',
            textAlign: 'center',
            marginTop: size.sHeight(0.01),
            marginHorizontal: 20,
            alignSelf:"center"
          }}
        >
          NFT not Found
        </Text>
      )}
    </>
  );
};

export default NFTCollections;
