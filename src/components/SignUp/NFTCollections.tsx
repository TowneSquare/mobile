import { View, Text, Image, Pressable, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { fonts, appColor } from '../../constants';
const { height, width } = Dimensions.get('window');
import { useAppDispatch, useAppSelector } from '../../controller/hooks';
import {
  updateSelectedCollection,
  updateSelectedRender,
  updateNftRender,
  updateNftOpen,
} from '../../controller/BottomSheetController';
import { sizes } from '../../utils';
const size = new sizes(height, width);

interface Props {
  callBack?: () => void;
}
const NFTCollections = ({ callBack }: Props) => {
  const dispatch = useAppDispatch();
  // const collections = useAppSelector(
  //   (state) => state.bottomSheetController.listOfNftCollections
  // );
  const collections = [];
  let [isLoaded] = useFonts({
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
            justifyContent: 'space-between',
            alignSelf: 'center',
            paddingHorizontal: size.getWidthSize(16),
          }}
        >
          {collections.map((collection, index) => (
            <Pressable
              style={{
                marginBottom: size.getHeightSize(16),
                overflow: 'hidden',
                width: size.getWidthSize(140),
                height: size.getHeightSize(140),
                borderRadius: 20,
              }}
              onPress={() => {
                if (callBack) {
                  callBack();
                } else {
                  dispatch(updateNftRender(0));
                  dispatch(updateNftOpen(false));
                  dispatch(updateSelectedRender(1));
                  dispatch(updateSelectedCollection(true));
                }
              }}
              key={index}
            >
              {
                <Image
                  source={collection.nftImageUrl}
                  resizeMode="cover"
                  style={{
                    width: size.getWidthSize(140),
                    height: size.getHeightSize(140),
                  }}
                />
              }
              <View
                style={{
                  width: size.getWidthSize(124),
                  position: 'absolute',
                  backgroundColor: '#121212',
                  bottom: size.getHeightSize(8),

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
                    fontSize: size.fontSize(14),
                    fontFamily: 'Outfit-Regular',
                    textAlign: 'left',
                  }}
                >
                  {collection.nftCollection}
                </Text>
              </View>
              <View
                style={{
                  height: size.getHeightSize(25),
                  width: size.getHeightSize(26),
                  position: 'absolute',
                  backgroundColor: appColor.kSecondaryButtonColor,
                  left: size.getWidthSize(103),
                  top: size.getHeightSize(10),
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 100,
                  bottom: size.getHeightSize(104),
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
                  {collection.nftTokenId}
                </Text>
              </View>
            </Pressable>
          ))}
        </View>
      ) : (
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              color: appColor.kWhiteColor,
              textAlign: 'center',
              fontFamily: 'Outfit-Regular',
            }}
          >
            You have no NFT
          </Text>
        </View>
      )}
    </>
  );
};

export default NFTCollections;
