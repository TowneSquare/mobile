import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  Dimensions,
} from 'react-native';
import React, { useContext, useState } from 'react';
import { useFonts } from 'expo-font';
import { images, fonts, appColor } from '../../constants';
const { height, width } = Dimensions.get('window');
import { sizes } from '../../utils';
const size = new sizes(height, width);
interface ImageProps {
  uri: string;
  name: string;
  id: number;
}
type ContextType<T> = React.Context<T | undefined>;
type UpdateSelectedImage = {
  selectedNFTImage: ImageProps | undefined;
  setSelectedImage: (nftImage: ImageProps) => void;
};

interface Props<T> {
  context: ContextType<T>;
}
const PFPCollections = <T,>({ context }: Props<T>) => {
  const { selectedNFTImage, setSelectedImage } = useContext(
    context
  ) as UpdateSelectedImage;
  const profilePics = [
    {
      uri: Image.resolveAssetSource(images.Aptomingos).uri,
      name: '#928098098',
      id: 1,
    },
    {
      uri: Image.resolveAssetSource(images.Aptomingos).uri,
      name: '#928098098',
      id: 2,
    },
    {
      uri: Image.resolveAssetSource(images.Aptomingos).uri,
      name: '#928098098',
      id: 3,
    },
    {
      uri: Image.resolveAssetSource(images.Aptomingos).uri,
      name: '#928098098',
      id: 5,
    },
    {
      uri: Image.resolveAssetSource(images.Aptomingos).uri,
      name: '#928098098',
      id: 6,
    },
    {
      uri: Image.resolveAssetSource(images.Aptomingos).uri,
      name: '#928098098',
      id: 7,
    },
    {
      uri: Image.resolveAssetSource(images.Aptomingos).uri,
      name: '#928098098',
      id: 8,
    },
    {
      uri: Image.resolveAssetSource(images.Aptomingos).uri,
      name: '#928098098',
      id: 9,
    },
  ];
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
  });
  if (!isLoaded) {
    return null;
  }
  return (
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
      {profilePics.map((PFP) => (
        <Pressable
          style={{
            marginBottom: size.getHeightSize(16),
            borderWidth:
              selectedNFTImage && PFP.id === selectedNFTImage.id ? 8 : 0,
            borderRadius: 20,
            borderColor:
              typeof selectedNFTImage === 'undefined'
                ? 'undefined'
                : appColor.kSecondaryButtonColor,
            overflow: 'hidden',
            width: size.getWidthSize(140),
            height: size.getHeightSize(140),
          }}
          onPress={() => {
            setSelectedImage(PFP);
            // batch(() => {
            //   dispatch(updateProfilePics(profile));
            //   dispatch(
            //     updateProfileImage(Image.resolveAssetSource(profile.image).uri)
            //   );
            // });
          }}
          key={PFP.id}
        >
          <Image
            style={{
              width: size.getWidthSize(140),
              height: size.getHeightSize(140),
            }}
            source={{ uri: PFP.uri }}
            resizeMode="cover"
          />
          <View
            style={{
              width: size.getWidthSize(124),
              position: 'absolute',
              backgroundColor: '#121212',
              bottom:
                selectedNFTImage && PFP.id === selectedNFTImage.id
                  ? size.getHeightSize(0)
                  : size.getHeightSize(8),
              left:
                selectedNFTImage && PFP.id === selectedNFTImage.id
                  ? size.getWidthSize(0)
                  : size.getWidthSize(8),
              right: 0,
              justifyContent: 'center',
              borderRadius: 8,
              paddingVertical: size.getHeightSize(8),
              paddingHorizontal: size.getWidthSize(10),
              opacity: 0.9,
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
              {PFP.name}
            </Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default PFPCollections;
