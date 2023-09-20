import { Text, Dimensions, StyleSheet, TextInput } from 'react-native';
import { batch } from 'react-redux';
import { useState, useRef, useEffect } from 'react';
const { height, width } = Dimensions.get('window');
import { useFonts } from 'expo-font';
import { appColor, fonts } from '../../constants';
import {
  updateFilteredData,
  updateShowAtContainer,
  updateInputText,
  updateCurrentWord,
  updateCursorIndex,
  updateShowHashTags,
  updateFilteredHashData,
  updateShowAptosPanel,
  updateShowAptosSwap,
  updateFilteredAptTags,
} from '../../controller/createPost';
import { useAppDispatch, useAppSelector } from '../../controller/hooks';
import { sizes } from '../../utils';
const size = new sizes(height, width);
interface Props {
  whichPost: 'communityPost' | 'singlePost';
}
const FieldInput = ({ whichPost }: Props) => {
  const textInputRef = useRef(null);
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.CreatePostController.inputText);
  const [formatedContent, setFormartedContent] = useState([]);
  const [cursorPostion, setCursorPosition] = useState('');

  useEffect(() => {
    batch(() => {
      dispatch(updateShowAtContainer(false));
      dispatch(updateShowHashTags(false));
      dispatch(updateInputText(''));
      dispatch(updateShowAptosPanel(false));
      dispatch(updateShowAptosSwap(null));
    });
  }, []);
  useEffect(() => {
    const formattedText = value.split('\n').map((line, index) => {
      const words = line.split(/\s/);
      const formattedLine = words.map((word, wordIndex) => {
        if (
          (word.startsWith('@') &&
            !/[ !#@$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\n]/.test(
              word.substring(1)
            )) ||
          (word.startsWith('#') &&
            !/[ !#@$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\n]/.test(
              word.substring(1)
            )) ||
          (word.startsWith('$') &&
            !/[ !#@$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\n]/.test(word.substring(1)))
        ) {
          return (
            <Text
              key={wordIndex}
              style={[
                styles.mention,
                {
                  color:
                    whichPost === 'communityPost'
                      ? appColor.kTextColor
                      : appColor.primaryLight,
                },
              ]}
            >
              {word + (wordIndex !== words.length - 1 ? ' ' : '')}
            </Text>
          );
        } else {
          return word + (wordIndex !== words.length - 1 ? ' ' : '');
        }
      });

      if (index === value.split('\n').length - 1) {
        return formattedLine;
      } else {
        return [...formattedLine, '\n'];
      }
    });

    setFormartedContent(formattedText);
  }, [value]);

  const handleCursorPositionChange = (event: any) => {
    setCursorPosition(event.nativeEvent.selection.start);
    dispatch(updateCursorIndex(event.nativeEvent.selection.start));
  };

  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
    'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
  });
  if (!isLoaded) {
    return null;
  }

  const handleKeyPress = (event: any) => {
    if (event.nativeEvent.key === 'Enter') {
      handleText(value + '\n');
      event.preventDefault();
    }
  };
  const handleText = (text_input: string) => {
    const cursorIndex = Number(cursorPostion);
    const words = text_input.split(/\s/);

    let currentWord = '';
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (cursorIndex < currentWord.length + word.length) {
        currentWord = word;
        break;
      }
      currentWord += word + ' ';
    }
    // console.log('This is current word:', currentWord);
    if (currentWord.startsWith('@')) {
      batch(() => {
        dispatch(updateCurrentWord(currentWord.trim()));
        dispatch(updateFilteredData(currentWord.trim()));
        dispatch(updateShowAtContainer(true));
      });
    }

    if (!currentWord.trim().startsWith('@')) {
      dispatch(updateShowAtContainer(false));
    }

    if (currentWord.startsWith('#')) {
      batch(() => {
        dispatch(updateCurrentWord(currentWord.trim()));
        dispatch(updateFilteredHashData(currentWord.trim()));
        dispatch(updateShowHashTags(true));
      });
    } else if (!currentWord.startsWith('#')) {
      dispatch(updateShowHashTags(false));
    }

    if (currentWord.startsWith('$')) {
      batch(() => {
        dispatch(updateCurrentWord(currentWord.trim()));
        dispatch(updateShowAptosPanel(true));
        dispatch(updateFilteredAptTags(currentWord.trim()));
      });
    } else if (!currentWord.startsWith('$')) {
      dispatch(updateShowAptosPanel(false));
    } else {
      batch(() => {
        dispatch(updateShowAtContainer(false));
        dispatch(updateShowHashTags(false));
      });
    }
    dispatch(updateInputText(text_input));
  };
  if (!value.includes('$')) {
    batch(() => {
      dispatch(updateShowAptosSwap(null));
    });
  }

  return (
    <TextInput
      // ref={textInputRef}

      caretHidden={false}
      placeholder="Start typing..."
      placeholderTextColor={appColor.grayLight}
      cursorColor={appColor.primaryLight}
      onChangeText={handleText}
      scrollEnabled={false}
      onSelectionChange={handleCursorPositionChange}
      textAlignVertical="top"
      multiline
      selectionColor={appColor.primaryLight}
      style={{
        fontSize: size.fontSize(16),
        lineHeight: size.getHeightSize(21),
        fontFamily: 'Outfit-Regular',
        color: appColor.kTextColor,
        width: size.getWidthSize(280),

        marginTop: size.getHeightSize(8),
        minHeight: size.getHeightSize(38),
      }}
    >
      <Text>{formatedContent}</Text>
    </TextInput>
  );
};

export default FieldInput;
const styles = StyleSheet.create({
  mention: {
    color: appColor.primaryLight,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-SemiBold',
  },
});
