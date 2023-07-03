import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TextInput,
  TextInputKeyPressEventData,
  TextInputChangeEventData,
} from "react-native";
import { batch } from "react-redux";
import React, { useState, useRef, useEffect } from "react";
const { height, width } = Dimensions.get("window");
import { useFonts } from "expo-font";
import { appColor, fonts, images } from "../../constants";
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
} from "../../controller/createPost";
import { useAppDispatch, useAppSelector } from "../../controller/hooks";
import { sizes } from "../../utils";
const size = new sizes(height, width);
const FieldInput = () => {
  const textInputRef = useRef(null);
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.CreatePostController.inputText);
  const [formatedContent, setFormartedContent] = useState([]);
  const [cursorPostion, setCursorPosition] = useState("");

  useEffect(() => {
    batch(() => {
      dispatch(updateShowAtContainer(false));
      dispatch(updateShowHashTags(false));
      dispatch(updateInputText(""));
      dispatch(updateShowAptosPanel(false));
      dispatch(updateShowAptosSwap(null));
    });
  }, []);
  useEffect(() => {
    const formattedText = [];
    const splitWords = value.split(/\s+/);
    const contentLength = splitWords.length;
    let format = /[ !#@$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\n]/;
    splitWords.forEach((word, index) => {
      if (
        (word.startsWith("@") && !format.test(word.substring(1))) ||
        (word.startsWith("#") && !format.test(word.substring(1))) ||
        (word.startsWith("$") && !format.test(word.substring(1)))
      ) {
        const mention = (
          <Text key={index} style={styles.mention}>
            {word}
          </Text>
        );
        if (index !== contentLength - 1) formattedText.push(mention, " ");
        else formattedText.push(mention);
      } else {
        if (index !== contentLength - 1) return formattedText.push(word, " ");
        else return formattedText.push(word);
      }
    });
    setFormartedContent(formattedText);
  }, [value]);

  const handleCursorPositionChange = (event: any) => {
    setCursorPosition(event.nativeEvent.selection.start);
    dispatch(updateCursorIndex(event.nativeEvent.selection.start));
  };

  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
    "Outfit-SemiBold": fonts.OUTFIT_SEMIBOLD,
  });
  if (!isLoaded) {
    return null;
  }
  const handleKey = (event: any) => {
    // if (event.nativeEvent.key === ' ') {
    //   dispatch(updateShowAtContainer(false));
    //   dispatch(updateShowHashTags(false));
    // }
  };
  const handleText = (text_input: string) => {
    const cursorIndex = Number(cursorPostion);
    const words = text_input.split(/\s+/);
    let currentWord = "";
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (cursorIndex < currentWord.length + word.length) {
        currentWord = word;
        break;
      }
      currentWord += word + " ";
    }
    if (currentWord.startsWith("@")) {
      batch(() => {
        dispatch(updateCurrentWord(currentWord.trim()));
        dispatch(updateFilteredData(currentWord.trim()));
        dispatch(updateShowAtContainer(true));
      });
    }

    if (!currentWord.trim().startsWith("@")) {
      dispatch(updateShowAtContainer(false));
    }

    if (currentWord.startsWith("#")) {
      batch(() => {
        dispatch(updateCurrentWord(currentWord.trim()));
        dispatch(updateFilteredHashData(currentWord.trim()));
        dispatch(updateShowHashTags(true));
      });
    } else if (!currentWord.startsWith("#")) {
      dispatch(updateShowHashTags(false));
    }

    if (currentWord.startsWith("$")) {
      batch(() => {
        dispatch(updateCurrentWord(currentWord.trim()));
        dispatch(updateShowAptosPanel(true));
        dispatch(updateFilteredAptTags(currentWord.trim()));
      });
    } else if (!currentWord.startsWith("$")) {
      dispatch(updateShowAptosPanel(false));
    } else {
      batch(() => {
        dispatch(updateShowAtContainer(false));
        dispatch(updateShowHashTags(false));
      });
    }
    dispatch(updateInputText(text_input));
  };
  if (!value.includes("$")) {
    batch(() => {
      dispatch(updateShowAptosSwap(null));
    });
  }
  return (
    <View>
      <TextInput
        ref={textInputRef}
        placeholder="Start typing..."
        placeholderTextColor={appColor.grayLight}
        cursorColor={appColor.primaryLight}
        onChangeText={handleText}
        onKeyPress={handleKey}
        onSelectionChange={handleCursorPositionChange}
        multiline
        style={{
          fontSize: size.fontSize(16),
          lineHeight: size.getHeightSize(21),
          fontFamily: "Outfit-Regular",
          color: appColor.kTextColor,
          width: size.getWidthSize(280),
          // maxHeight: size.getHeightSize(105),
          marginTop: size.getHeightSize(8),
          minHeight: size.getHeightSize(32),
        }}
      >
        <Text>{formatedContent}</Text>
      </TextInput>
    </View>
  );
};

export default FieldInput;
const styles = StyleSheet.create({
  mention: {
    color: appColor.primaryLight,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: "Outfit-SemiBold",
  },
});
