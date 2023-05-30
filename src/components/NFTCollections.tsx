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
import { useAppDispatch, useAppSelector } from '../controller/hooks';
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
  const collections = useAppSelector(
    (state) => state.bottomSheetController.listOfNftCollections
  );
  let [isLoaded] = useFonts({
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
    'Outfit-Bold': fonts.OUTFIT_BOLD,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <>
      {collections.length > 0 && (
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
              }}
              onPress={() => {
                dispatch(updateNftRender(0));
                dispatch(updateNftOpen(false));
                dispatch(updateSelectedRender(1));
                dispatch(updateSelectedCollection(true));
              }}
            >
              {
                <Image
                  source={collection.image}
                  resizeMode="contain"
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              }
              <View
                style={{
                  width: size.getWidthSize(124),
                  position: 'absolute',
                  backgroundColor: '#101323',
                  bottom: size.getHeightSize(12),

                  // right: 0,
                  justifyContent: 'center',
                  borderRadius: 8,
                  paddingVertical: size.getHeightSize(8),
                  paddingHorizontal: size.getWidthSize(10),
                  alignSelf: 'center',
                  zIndex: 0,
                  opacity: 0.9,
                  marginHorizontal: size.getWidthSize(8),
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
                  height: size.getHeightSize(26),
                  width: size.getHeightSize(26),
                  position: 'absolute',
                  backgroundColor: appColor.kSecondaryButtonColor,
                  left: size.getWidthSize(103),
                  top: size.getHeightSize(10),
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 100,
                }}
              >
                <Text
                  style={{
                    color: appColor.kTextColor,
                    fontSize: size.fontSize(14),
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
      )}
    </>
  );
};

export default NFTCollections;
