import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TextInput,
  Animated,
  TextInputProps,
  StyleSheet,
} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
const { height, width } = Dimensions.get('window');
import { useFonts } from 'expo-font';
import { appColor, fonts } from '../../constants';
import SendButton from '../../../assets/images/svg/SendButton';
import SendButtonActive from '../../../assets/images/svg/SendButtonActive';
import { sizes } from '../../utils';
const size = new sizes(height, width);
interface Props {
  textRef: any;
  handleBlur: () => void;
  showReplyingTo: boolean;
}
const AddCommentTextInput = ({
  textRef,
  handleBlur,
  showReplyingTo,
}: Props) => {
  const [height, setHeight] = useState(0);
  const [borderRadius, setBorderRadius] = useState(40);
  const [text, setText] = useState('');

  useEffect(() => {
    if (height > size.getHeightSize(73)) {
      startAnimation();
    } else {
      setBorderRadius(40);
    }
  }, [height]);
  const borderRadiusValue = useRef(new Animated.Value(0)).current;
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }
  const startAnimation = () => {
    const newBorderRadius = 16;

    // Start the animation
    Animated.timing(borderRadiusValue, {
      toValue: newBorderRadius,
      duration: 500, // Animation duration in milliseconds
      useNativeDriver: false, // Set to true if possible, to improve performance
    }).start();

    // Update the state with the new value
    setBorderRadius(newBorderRadius);
  };
  const handleContentSizeChange = (event: any) => {
    const newHeight = Math.ceil(event.nativeEvent.contentSize.height);
    setHeight(newHeight);
  };
  return (
    <>
      <View
        style={{
          backgroundColor: appColor.kgrayDark2,
        }}
      >
        {showReplyingTo && (
          <View style={styles.replyingTo}>
            <Text style={styles.replyingToText}>Replying to</Text>
            <Text style={styles.username}>@Username1</Text>
          </View>
        )}

        <View style={styles.inputContainer}>
          <TextInput
            ref={textRef}
            placeholder={showReplyingTo ? 'Write a reply' : 'Write a comment'}
            placeholderTextColor={appColor.kgrayTextColor}
            cursorColor={appColor.klightPurple}
            multiline
            onBlur={handleBlur}
            onContentSizeChange={handleContentSizeChange}
            onChangeText={setText}
            value={text}
            style={[{ borderRadius: borderRadius }, styles.textInput]}
          />
          {text.length >= 1 ? <SendButtonActive /> : <SendButton />}
        </View>
        {text.length > 2000 && (
          <View style={styles.errorConatiner}>
            <Text style={styles.errorText}>
              Maximum character limit is 2000
            </Text>
          </View>
        )}
      </View>
    </>
  );
};

export default AddCommentTextInput;
const styles = StyleSheet.create({
  replyingTo: {
    flexDirection: 'row',
    backgroundColor: appColor.kgrayDark2,
    paddingHorizontal: size.getWidthSize(16),
    paddingTop: size.getHeightSize(8),
    gap: size.getWidthSize(2),
  },
  replyingToText: {
    fontFamily: 'Outfit-Regular',
    color: appColor.kGrayscale,
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
  },
  username: {
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
  },
  inputContainer: {
    backgroundColor: appColor.kgrayDark2,
    paddingVertical: size.getHeightSize(8),
    paddingHorizontal: size.getWidthSize(16),
    flexDirection: 'row',
    gap: size.getWidthSize(16),
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: appColor.kGrayscale,
    width: size.getWidthSize(288),
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-Regular',
    paddingHorizontal: size.getWidthSize(16),
    paddingTop: size.getHeightSize(8),
    paddingBottom: size.getHeightSize(8),
    color: appColor.kTextColor,
    maxHeight: size.getHeightSize(115),
    backgroundColor: appColor.feedBackground,
  },
  errorText: {
    fontFamily: 'Outfit-Regular',
    color: appColor.kErrorText,
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    paddingHorizontal: size.getWidthSize(16),
  },
  errorConatiner: {
    paddingBottom: size.getHeightSize(8),
    backgroundColor: appColor.kgrayDark2,
  },
});
