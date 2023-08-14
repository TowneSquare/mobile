import {
  View,
  Text,
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';
import React from 'react';
import SelectedStars from '../../components/Profile/About/SelectedStars';
import { appColor, images } from '../../constants';
import { sizes } from '../../utils';
import Header from '../../shared/Feed/Header';
import { updateSelectedSuperStar } from '../../controller/UserController';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppSelector, useAppDispatch } from '../../controller/hooks';
import { SelectedSuperStarCollectionScreenProps } from '../../navigations/NavigationTypes';
import SelectedIcon from '../../../assets/images/svg/SelectedIcon';

import { LinearGradient } from 'expo-linear-gradient';
const { height, width } = Dimensions.get('window');

const size = new sizes(height, width);
const SelectedSuperStarCollectionScreen = ({
  navigation,
  route,
}: SelectedSuperStarCollectionScreenProps) => {
  const selected = useAppSelector((state) => state.USER.selectedSuperStar);
  const dispatch = useAppDispatch();
  const { nfts, title } = route.params;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <Header title={title} />
      <View
        style={{
          flex: 1,
          paddingTop: size.getHeightSize(16),
        }}
      >
        <ScrollView>
          <View style={styles.collectionContainer}>
            {nfts.map((collection, index) => (
              <>
                <Pressable
                  disabled={
                    selected.length === 6 ||
                    selected.some(
                      (obj) =>
                        obj.hasOwnProperty('id') &&
                        obj['id'] === collection.name
                    )
                  }
                  onPress={() => {
                    dispatch(
                      updateSelectedSuperStar({
                        uri: Image.resolveAssetSource(collection.image).uri,
                        id: collection.name,
                      })
                    );
                  }}
                  style={styles.nftContainer}
                >
                  <View style={styles.imageContainer}>
                    <Image
                      source={{
                        uri: Image.resolveAssetSource(collection.image).uri,
                      }}
                      resizeMode="cover"
                      style={styles.imageStyle}
                    />
                    {selected.some(
                      (obj) =>
                        obj.hasOwnProperty('id') &&
                        obj['id'] === collection.name
                    ) && (
                      <View
                        style={{
                          position: 'absolute',
                          height: '100%',
                          width: '100%',
                          borderRadius: 8,
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: 'rgba(151, 71, 255, 0.70)',
                        }}
                      >
                        <SelectedIcon />
                      </View>
                    )}
                  </View>
                  <Text style={styles.name}>{collection.name}</Text>
                </Pressable>
              </>
            ))}
          </View>
        </ScrollView>
      </View>
      <SelectedStars navigation={navigation} />
    </SafeAreaView>
  );
};

export default SelectedSuperStarCollectionScreen;
const styles = StyleSheet.create({
  collectionContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    paddingHorizontal: size.getWidthSize(16),
  },
  nftContainer: {
    width: size.getWidthSize(109.23357),
    gap: size.getHeightSize(3.64),
    marginBottom: size.getHeightSize(8),
  },
  imageContainer: {
    height: size.getHeightSize(109.23357),
    width: size.getWidthSize(109.23357),
  },
  imageStyle: {
    borderRadius: 8,
    height: '100%',
    width: '100%',
  },
  name: {
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    fontFamily: 'Outfit-Medium',
    color: appColor.kTextColor,
  },
});
