import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import React from 'react';
import { appColor, images } from '../../../constants';
import { sizes } from '../../../utils';
import { useAppSelector, useAppDispatch } from '../../../controller/hooks';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

import AntDesign from '@expo/vector-icons/AntDesign';
import { deleteSelectedSuperStar } from '../../../controller/UserController';
const SelectedSuperStars = () => {
  const dispatch = useAppDispatch();
  const selectedStars = useAppSelector((state) => state.USER.selectedSuperStar);
  console.log(selectedStars);
  const numberOfViews = 6;

  return (
    <View
      style={{
        marginTop: size.getHeightSize(16),
      }}
    >
      <ScrollView
        style={styles.containerStyle}
        horizontal
        contentContainerStyle={{}}
      >
        {Array.from({ length: numberOfViews }).map((_, index) => (
          <View
            style={[
              styles.imageContainer,
              { borderWidth: selectedStars[index] ? 0 : 1 },
            ]}
          >
            {selectedStars[index] ? (
              <>
                <Image
                  source={{ uri: selectedStars[index].uri }}
                  style={{
                    height: '100%',
                    width: '100%',
                    borderRadius: 8,
                  }}
                />
                <Pressable
                  onPress={() => {
                    dispatch(deleteSelectedSuperStar(selectedStars[index].id));
                  }}
                  style={{
                    position: 'absolute',
                    height: size.getHeightSize(24),
                    width: size.getHeightSize(24),
                    borderRadius: 200,
                    backgroundColor: 'rgba(0, 0, 0, 0.70)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: size.getHeightSize(5.11),
                    right: size.getWidthSize(3.78),
                  }}
                >
                  <AntDesign
                    name="close"
                    color={appColor.kWhiteColor}
                    size={size.fontSize(16)}
                  />
                </Pressable>
              </>
            ) : null}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default SelectedSuperStars;
const styles = StyleSheet.create({
  imageContainer: {
    borderStyle: 'dashed',
    width: size.getWidthSize(70),
    height: size.getHeightSize(70),
    borderColor: appColor.kGrayLight3,
    borderRadius: 10,

    marginRight: size.getWidthSize(8),
  },
  containerStyle: {
    marginRight: size.getWidthSize(8),
  },
});
