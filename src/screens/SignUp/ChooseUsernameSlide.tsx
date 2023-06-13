import React, { useState, useRef } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Animated,
  Dimensions,
  SafeAreaView,
  Pressable,
  FlatList,
  ScrollView,
} from 'react-native';
import Constants from 'expo-constants';
import { useAppSelector } from '../../controller/hooks';
import { useFonts } from 'expo-font';
import TransitionBackButton from '../../components/SignUp/TransitionBackButton';
import { appColor, fonts, images } from '../../constants';
import { sizes } from '../../utils';
import TranslationForwardButton from '../../components/SignUp/TranslationForwardButton';
import SelectSocialsHeader from '../../components/SignUp/SelectSocialsHeader';
import ConnectSocialsAndVerifyContent from '../../components/SignUp/ConnectSocialsAndVerifyContent';
import { ChooseUsernameSlideProps } from '../../navigations/NavigationTypes';
const { width, height } = Dimensions.get('window');
const size = new sizes(height, width);
let PADDING = size.getWidthSize(26);
let newWidth = width - 2 * PADDING;
const ChooseUsernameSlide = ({ navigation }: ChooseUsernameSlideProps) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList<any>>(null);
  const [viewIndex, setViewIndex] = useState(0);
  const views = [<SelectSocialsHeader />, <ConnectSocialsAndVerifyContent />];
  const onViewChangeRef = useRef(({ viewableItems }: any) => {
    setViewIndex(viewableItems[0]?.index);
  });

  const handleNextSlide = () => {
    const newIndex = viewIndex + 1;
    if (newIndex < views.length && flatListRef.current) {
      flatListRef.current.scrollToIndex({ index: newIndex, animated: true });
    } else {
      navigation.navigate('ConnectSocials');
    }
  };

  const handlePreviousSlide = () => {
    const newIndex = viewIndex - 1;
    if (newIndex >= 0 && flatListRef.current) {
      flatListRef.current.scrollToIndex({ index: newIndex, animated: true });
    } else {
      navigation.goBack();
    }
  };

  const stagePosition = Animated.divide(scrollX, width);
  const progressWidth = stagePosition.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [newWidth / 6, (newWidth / 6) * 2, newWidth],
    extrapolate: 'clamp',
  });

  let stageTitle = (index: number) => {
    switch (index) {
      case 0:
        return 'Select Socials';
      case 1:
        return 'Connect Socials & Verify';

      default:
        return 'Select Socials';
    }
  };

  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            marginTop: size.getHeightSize(42),
            paddingHorizontal: PADDING,
          }}
        >
          <Text
            style={{
              color: appColor.kTextColor,
              marginBottom: size.getHeightSize(8),
              fontFamily: 'Outfit-Regular',
              fontSize: size.fontSize(14),
              lineHeight: size.getHeightSize(18),
              width: size.getWidthSize(257),
            }}
          >
            Next step: {stageTitle(viewIndex)}
          </Text>

          <Animated.View
            style={{
              height: size.getHeightSize(2),
              backgroundColor: appColor.kStatusBarNaviDark,
              width: newWidth,
            }}
          >
            <Animated.View
              style={{
                height: size.getHeightSize(2),
                backgroundColor: appColor.kSecondaryButtonColor,
                width: progressWidth,
              }}
            />
          </Animated.View>
        </View>
        <FlatList
          scrollEnabled={false}
          ref={flatListRef}
          data={views}
          horizontal
          pagingEnabled
          scrollEventThrottle={16}
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onViewableItemsChanged={onViewChangeRef.current}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          renderItem={({ item }: any) => {
            return (
              <View
                style={{
                  width: width,
                  backgroundColor: 'transparent',
                  flex: 1,
                }}
              >
                {item}
              </View>
            );
          }}
        />
        <View
          style={{
            height: size.getHeightSize(124),
            marginBottom: size.getHeightSize(24),
          }}
        >
          <TranslationForwardButton
            action={() => {
              handleNextSlide();
            }}
          />
          <TransitionBackButton
            action={() => {
              handlePreviousSlide();
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChooseUsernameSlide;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: appColor.signUpBackground,
  },
});
