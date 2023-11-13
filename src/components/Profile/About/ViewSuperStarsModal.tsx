import { useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  Modal,
  Animated,
  ScrollView,
  BackHandler,
} from 'react-native';
import { appColor } from '../../../constants';
import AntDesign from '@expo/vector-icons/AntDesign';
import { sizes } from '../../../utils';
import { useEffect } from 'react';
import { useAppSelector } from '../../../controller/hooks';
const { height, width } = Dimensions.get('window');
import AptosNftIcon from '../../../../assets/images/svg/AptosNftIcon';
import AptosIconNft from '../../../../assets/images/svg/AptosIconNft';
import { StatusBar } from 'expo-status-bar';
const size = new sizes(height, width);
interface SuperStarProps {
  uri: string;
  id: string;
}
interface Props {
  imageUri: string;
  visibility: boolean;
  close: () => void;
}
const AnimatedFlatList = Animated.createAnimatedComponent(
  FlatList<SuperStarProps>
);
const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };
const ViewSuperStarsModal = ({ imageUri, visibility, close }: Props) => {
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
      onRequestClose={close}
      presentationStyle="pageSheet"
      style={{}}
      visible={visibility}
    >
      <View style={styles.container}>
        <AntDesign
          name="arrowleft"
          color={appColor.kWhiteColor}
          size={size.fontSize(24)}
          onPress={close}
        />
        <StatusBar style="auto" />
        <Text style={styles.title}>My Super Stars</Text>
        <AntDesign
          name="arrowleft"
          color={appColor.feedBackground}
          size={size.fontSize(24)}
        />
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: size.getWidthSize(16),
          backgroundColor: appColor.feedBackground,
        }}
      >
        <ScrollView
          style={{
            flexGrow: 0,
          }}
          contentContainerStyle={{
            paddingBottom: size.getHeightSize(45),
          }}
        >
          <View
            style={{
              marginTop: size.getHeightSize(22),
              height: size.getHeightSize(320),
              width: size.getWidthSize(328),
              borderRadius: 8,
              alignSelf: 'center',
            }}
          >
            <Image
              style={{
                height: '100%',
                width: '100%',
              }}
              source={{ uri: imageUri }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: size.getWidthSize(7),
              alignSelf: 'center',
              marginTop: size.getHeightSize(16),
            }}
          >
            <AptosNftIcon size={size.getHeightSize(28)} />
            <Text
              style={{
                color: appColor.kTextColor,
                fontSize: size.fontSize(16),
                lineHeight: size.getHeightSize(21),
                fontFamily: 'Outfit-SemiBold',
              }}
            >
              Aptos Monkey
            </Text>
          </View>
          <Text
            style={{
              color: appColor.kTextColor,
              fontSize: size.fontSize(20),
              lineHeight: size.getHeightSize(24),
              fontFamily: 'Outfit-Regular',
              textAlign: 'center',
              marginTop: size.getHeightSize(8),
            }}
          >
            Aptos Monkeys #0922
          </Text>
          <View style={styles.row}>
            <View style={styles.view}>
              <Text style={styles.label}>Rarity</Text>
              <Text style={styles.subLabel}>898/212</Text>
            </View>
            <View style={styles.view}>
              <Text style={styles.label}>Last sale</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: size.getWidthSize(7),
                  alignSelf: 'center',
                }}
              >
                <Text style={styles.subLabel}>1,500 APT</Text>
                <AptosIconNft size={size.getHeightSize(24)} />
              </View>
            </View>
          </View>
          <Text
            style={{
              color: appColor.kTextColor,
              fontSize: size.fontSize(16),
              lineHeight: size.getHeightSize(21),
              fontFamily: 'Outfit-SemiBold',
              marginTop: size.getHeightSize(32),
            }}
          >
            Properties
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: size.getHeightSize(16),
              flexWrap: 'wrap',
              gap: size.getWidthSize(16),
            }}
          >
            <View style={styles.propertyView}>
              <Text style={styles.propertyText1}>Background</Text>
              <Text style={styles.propertyText2}>Blue</Text>
              <Text style={styles.propertyText3}>(2.9% have this)</Text>
            </View>
            <View style={styles.propertyView}>
              <Text style={styles.propertyText1}>Eyes</Text>
              <Text style={styles.propertyText2}>Slime</Text>
              <Text style={styles.propertyText3}>(31.9% have this)</Text>
            </View>
            <View style={styles.propertyView}>
              <Text style={styles.propertyText1}>Mouth</Text>
              <Text style={styles.propertyText2}>Wheat</Text>
              <Text style={styles.propertyText3}>(62.9% have this)</Text>
            </View>
            <View style={styles.propertyView}>
              <Text style={styles.propertyText1}>Hat</Text>
              <Text style={styles.propertyText2}>Ramp</Text>
              <Text style={styles.propertyText3}>(14.9% have this)</Text>
            </View>
            <View style={styles.propertyView}>
              <Text style={styles.propertyText1}>Clothing</Text>
              <Text style={styles.propertyText2}>Fur</Text>
              <Text style={styles.propertyText3}>(1.9% have this)</Text>
            </View>
          </View>
        </ScrollView>
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
    backgroundColor: appColor.feedBackground,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: size.getHeightSize(33.5),
  },
  view: {
    gap: size.getHeightSize(8),
    flex: 1,
  },
  label: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
  },
  subLabel: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
  },
  propertyText1: {
    color: appColor.grayLight,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
  },
  propertyText2: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
  },
  propertyText3: {
    color: appColor.kGrayscale,
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
  },
  propertyView: {
    paddingVertical: size.getHeightSize(16),
    paddingHorizontal: size.getWidthSize(16),
    gap: size.getHeightSize(4),
    borderWidth: 1,
    borderColor: appColor.kGrayLight3,
    borderRadius: 8,
    width: size.getWidthSize(155.5),
  },
});
