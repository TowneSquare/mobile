import { useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Modal,
  Animated,
} from 'react-native';
import { appColor } from '../../../constants';
import AntDesign from '@expo/vector-icons/AntDesign';
import { sizes } from '../../../utils';
import { useAppSelector } from '../../../controller/hooks';
const { height, width } = Dimensions.get('window');
import { StatusBar } from 'expo-status-bar';
const size = new sizes(height, width);
interface SuperStarProps {
  uri: string;
  id: string;
}
const AnimatedFlatList = Animated.createAnimatedComponent(
  FlatList<SuperStarProps>
);
const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };
const ViewSuperStarsModal = () => {
  let flatListRef = useRef<FlatList<SuperStarProps> | null>();
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const onViewRef = useRef(({ changed }: { changed: any }) => {
    if (changed[0].isViewable) {
      setCurrentIndex(changed[0].index);
    }
  });
  const selectedSuperStars = useAppSelector(
    (state) => state.USER.selectedSuperStars
  ) as SuperStarProps[];
  const scrollToIndex = (index) => {
    flatListRef.current?.scrollToIndex({ animated: true, index });
  };

  const renderItems = (item: SuperStarProps) => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}
      >
        <View
          style={{
            height: size.getHeightSize(320),
            width: width,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: size.getWidthSize(16),
          }}
        >
          <Image
            source={{ uri: item.uri }}
            style={{
              height: '100%',
              width: '100%',
              borderRadius: 8,
            }}
            resizeMode="cover"
          />
        </View>
      </View>
    );
  };

  return (
    <Modal
      presentationStyle="pageSheet"
      style={{}}
      statusBarTranslucent
      visible={false}
    >
      <StatusBar hidden />
      

      <View style={styles.container}>
        <AntDesign
          name="arrowleft"
          color={appColor.kWhiteColor}
          size={size.fontSize(24)}
          // onPress={navigation.goBack}
        />
        <Text style={styles.title}>My Super Stars</Text>
        <AntDesign
          name="arrowleft"
          color={appColor.kgrayDark2}
          size={size.fontSize(24)}
        />
      </View>
      {/* <View style={StyleSheet.absoluteFillObject}>
          {selectedSuperStars.map((image, index) => {
            const inputRange = [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ];
            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0, 1, 0],
            });
            return (
              <Animated.Image
                source={{ uri: image.uri }}
                style={[
                  StyleSheet.absoluteFillObject,
                  {
                    opacity,
                  },
                ]}
                blurRadius={5}
              />
            );
          })}
        </View> */}
      <AnimatedFlatList
        data={selectedSuperStars}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item }) => renderItems(item)}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={(ref: FlatList<SuperStarProps>) => (flatListRef.current = ref)}
        viewabilityConfig={viewConfigRef}
        onViewableItemsChanged={onViewRef.current}
        pagingEnabled
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: size.getWidthSize(9),
        }}
      >
        {selectedSuperStars.map(({}, index) => (
          <TouchableOpacity
            style={{
              height: size.getHeightSize(8),
              width: size.getWidthSize(8),
              borderRadius: 100,
              backgroundColor:
                index === currentIndex
                  ? appColor.kSecondaryButtonColor
                  : appColor.kWhiteColor,
            }}
            onPress={() => scrollToIndex(index)}
          />
        ))}
      </View>
    </Modal>
  );
};

export default ViewSuperStarsModal;
const styles = StyleSheet.create({
  title: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingVertical: size.getHeightSize(20),
    paddingHorizontal: size.getWidthSize(16),
    justifyContent: 'space-between',
    marginTop: size.getHeightSize(42),
    marginBottom: size.getHeightSize(67),
  },
});
