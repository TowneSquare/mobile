import {
  View,
  Text,
  Dimensions,
  TextInput,
  Animated,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react';
const { height, width } = Dimensions.get('window');
import { appColor, fonts } from '../constants';
import CancelIcon from '../../assets/images/svg/CancelIcon';
import ChatSendButton from '../../assets/images/svg/ChatSendButton';
import SendButton from '../../assets/images/svg/SendButton';
import SendButtonActive from '../../assets/images/svg/SendButtonActive';
import { sizes } from '../utils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ReplyingToIcon from '../../assets/images/svg/ReplyingToIcon';
const size = new sizes(height, width);
interface Props extends TextInputProps {
  showReplying: boolean;
  username: string;
  message: string;
  dismissShowReplyingTo: () => void;
}
export type ComponentRef = {
  focusTextInput: () => void;
};
const ChatInputBox: ForwardRefRenderFunction<ComponentRef, Props> = (
  { showReplying, dismissShowReplyingTo },
  ref
) => {
  const inputRef = useRef<TextInput>();
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
  useImperativeHandle(ref, () => ({
    focusTextInput() {
      setTimeout(() => {
        showKeyboard();
      }, 500);
    },
  }));
  const startAnimation = () => {
    const newBorderRadius = 16;
    Animated.timing(borderRadiusValue, {
      toValue: newBorderRadius,
      duration: 500,
      useNativeDriver: false,
    }).start();
    setBorderRadius(newBorderRadius);
  };
  const borderRadiusValue = useRef(new Animated.Value(0)).current;
  const handleContentSizeChange = (event: any) => {
    const newHeight = Math.ceil(event.nativeEvent.contentSize.height);
    setHeight(newHeight);
  };
  const showKeyboard = () => {
    inputRef.current.focus();
  };
  return (
    <View
      style={{
        backgroundColor: appColor.kgrayDark2,
      }}
    >
      {showReplying && (
        <View style={styles.replyingTo}>
          <View
            style={{
              gap: size.getWidthSize(8),
              flex: 1,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: size.getWidthSize(8),
              }}
            >
              <ReplyingToIcon size={size.getHeightSize(20)} />
              <Text style={styles.replyingToText}>
                Replying to{' '}
                <Text
                  style={{
                    fontFamily: 'Outfit-SemiBold',
                  }}
                >
                  [Username]
                </Text>
              </Text>
            </View>

            <Text numberOfLines={1} style={styles.message}>
              Hey man, just wanted to say I am readlly...
            </Text>
          </View>
          <CancelIcon
            onPress={dismissShowReplyingTo}
            size={size.getHeightSize(24)}
          />
        </View>
      )}

      <View style={styles.inputContainer}>
        <AntDesign
          name="plus"
          color={appColor.kWhiteColor}
          size={size.fontSize(24)}
        />
        <TextInput
          ref={inputRef}
          placeholder="Write..."
          placeholderTextColor={appColor.kgrayTextColor}
          cursorColor={appColor.klightPurple}
          multiline
          onContentSizeChange={handleContentSizeChange}
          onChangeText={setText}
          value={text}
          style={[{ borderRadius: borderRadius }, styles.textInput]}
        />
        {text.length >= 1 ? (
          <SendButtonActive size={size.getHeightSize(24)} />
        ) : (
          <SendButton size={size.getHeightSize(24)} />
        )}
      </View>
      {text.length > 2000 && (
        <View style={styles.errorConatiner}>
          <Text style={styles.errorText}>Maximum character limit is 2000</Text>
        </View>
      )}
    </View>
  );
};

export default forwardRef(ChatInputBox);
const styles = StyleSheet.create({
  replyingTo: {
    flexDirection: 'row',
    backgroundColor: appColor.grayDark,
    paddingHorizontal: size.getWidthSize(12),
    paddingVertical: size.getHeightSize(8),
    gap: size.getWidthSize(1),
    alignItems: 'center',
  },
  replyingToText: {
    fontFamily: 'Outfit-Regular',
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    flex: 1,
  },
  message: {
    fontFamily: 'Outfit-Regular',
    color: appColor.grayLight,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(24),
  },
  inputContainer: {
    backgroundColor: appColor.kgrayDark2,
    paddingTop: size.getHeightSize(8),
    paddingHorizontal: size.getWidthSize(16),
    flexDirection: 'row',
    gap: size.getWidthSize(8),
    alignItems: 'center',
    paddingBottom: size.getHeightSize(24),
    justifyContent: 'space-between',
  },
  textInput: {
    borderWidth: 1,
    borderColor: appColor.kGrayscale,
    width: size.getWidthSize(280),
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
