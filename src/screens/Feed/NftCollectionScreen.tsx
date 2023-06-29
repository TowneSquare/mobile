import { View, Text, Dimensions, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import SearchField from '../../components/createPost/SearchField';
const { height, width } = Dimensions.get('window');
import { useFonts } from 'expo-font';
import { appColor, fonts, images } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { sizes } from '../../utils';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useAppSelector } from '../../controller/hooks';
import NftCollections from '../../components/createPost/NftCollections';
const size = new sizes(height, width);
const NftCollectionScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <View style={styles.header}>
        <Pressable onPress={navigation.goBack}>
          <AntDesign name="arrowleft" color={appColor.kWhiteColor} size={24} />
        </Pressable>
        <Text style={styles.text}>Select collection</Text>
        <View />
      </View>
      <SearchField placeholder="Search for NFT" marginTop={10} />
      <View style={styles.collectionContainer} />

      <NftCollections />
    </SafeAreaView>
  );
};

export default NftCollectionScreen;
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: size.getWidthSize(16),
    height: size.getHeightSize(56),
    backgroundColor: appColor.kgrayDark2,

    paddingVertical: size.getHeightSize(12),
    gap: size.getWidthSize(8),
  },
  text: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.02,
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
    width: size.getWidthSize(264),
  },
  collectionContainer: {
    marginVertical: size.getHeightSize(8),
  },
});
