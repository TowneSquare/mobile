import React from 'react';
import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native';
import { sizes } from '../../utils';
import { appColor } from '../../constants';

const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

interface RenderDescriptionProps {
  showCategories: boolean;
  description: String;
  link: String;
}

const RenderDescription: React.FC<RenderDescriptionProps> = ({
  showCategories,
  description,
  link,
}) => {
  return (
    <View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          {description}{' '}
          <Text
            style={{
              fontSize: size.fontSize(16),
              lineHeight: size.getHeightSize(21),
              color: appColor.primaryLight,

              fontWeight: '400',
              fontFamily: 'Outfit-Regular',
              textDecorationLine: 'underline',
            }}
          >
            {link}
          </Text>
        </Text>
      </View>

      {showCategories && (
        <View style={styles.categoryContainer}>
          <Pressable style={styles.categoryButton}>
            <Text style={styles.categoryButtonText}>Crytocurrency</Text>
          </Pressable>
          <Pressable style={styles.categoryButton}>
            <Text style={styles.categoryButtonText}>Travel</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    paddingHorizontal: size.getWidthSize(16),
    marginBottom: size.getHeightSize(16),
  },
  descriptionText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    letterSpacing: 0.4,
    fontWeight: '400',
    fontFamily: 'Outfit-Regular',
  },

  categoryContainer: {
    flexDirection: 'row',
    marginBottom: size.getHeightSize(24),
    paddingHorizontal: size.getWidthSize(16),
  },
  categoryButton: {
    paddingHorizontal: size.getWidthSize(16),
    height: size.heightSize(34),
    backgroundColor: appColor.grayDark,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: size.getWidthSize(8),
    borderRadius: 20,
  },
  categoryButtonText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(21),
    letterSpacing: 0.4,
    fontWeight: '400',
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
  },
});

export default RenderDescription;
