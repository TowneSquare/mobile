import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ImageSourcePropType } from 'react-native';
import { images } from '../../constants';
import { ReactNode } from 'react';
import { atMentionData, hashTagData, aptosTags } from './dummyData';
import { SearchFuntion, ExtractTags } from '../../utils/helperFunction';

interface CreatePost {
  message: string;
  tags: string[];
  community: 'Aptos' | 'Aptos Monkeys' | null;
  media: any;
  nft: {
    name: string;
    id: string;
    price?: number;
  } | null;
}
interface AtMentions {
  name: string;
  description?: string;
  image: ImageSourcePropType;
}
interface HashTags {
  name: string;
  post: string;
}
interface AptosTags {
  name: string;
  collection?: string;
}
interface Post {
  data: AtMentions[];
  filteredAtMentions: AtMentions[];
  postMessage: string;
  showAtMentionContainer: boolean;
  formattedContent: JSX.Element[];
  selectedAtMention: string;
  inputText: string;
  currentWord: string;
  cursorIndex: string;
  showHashTags: boolean;
  hashTagData: HashTags[];
  filteredHashTagData: HashTags[];
  selectedHashTag: string;
  showAptosSwap: boolean;
  showAptosMonkey: boolean;
  showAptosPanel: boolean;
  aptTag: AptosTags[];
  filteredAptTag: AptosTags[];
  media: boolean;
  GIFBottomSheet: boolean;
  NFTBottomSheet: boolean;
  posts: Partial<CreatePost>;
  priceModal: boolean;
  startToastCountdown: boolean;
  shouldShowPublishToast: boolean;
}
const initialState: Post = {
  data: atMentionData,
  filteredAtMentions: atMentionData,
  postMessage: '',
  showAtMentionContainer: false,
  formattedContent: [],
  selectedAtMention: '',
  inputText: '',
  currentWord: '',
  cursorIndex: '',
  showHashTags: false,
  hashTagData: hashTagData,
  filteredHashTagData: hashTagData,
  selectedHashTag: '',
  showAptosMonkey: false,
  showAptosPanel: false,
  showAptosSwap: false,
  aptTag: aptosTags,
  filteredAptTag: aptosTags,
  media: false,
  GIFBottomSheet: false,
  NFTBottomSheet: false,
  posts: {
    message: '',
    media: null,
    tags: [],
    community: null,
    nft: null,
  },
  priceModal: false,
  startToastCountdown: false,
  shouldShowPublishToast: false,
};

export const fieldHandlerSlice = createSlice({
  name: 'postHandler',
  initialState,
  reducers: {
    updateShowAptosPanel: (state, action: PayloadAction<boolean>) => {
      state.showAptosPanel = action.payload;
    },
    updateShowAptosSwap: (
      state,
      action: PayloadAction<'Aptos' | 'Aptos Monkeys' | null>
    ) => {
      state.posts.community = action.payload;
    },

    updateFilteredData: (state, action: PayloadAction<string>) => {
      let searchWord = action.payload.replace('@', '');
      const atMentions = state.data;
      if (searchWord) {
        const newAtMention = SearchFuntion(atMentions, searchWord);
        state.filteredAtMentions = newAtMention;
      } else {
        state.filteredAtMentions = state.data;
      }
    },
    updateFilteredHashData: (state, action: PayloadAction<string>) => {
      let searchWord = action.payload.replace('#', '');
      const hash_tag = state.hashTagData;

      if (searchWord) {
        const newHashTag = SearchFuntion(hash_tag, searchWord);
        state.filteredHashTagData = newHashTag;
      } else {
        state.filteredHashTagData = state.hashTagData;
      }
    },
    //  The function below append the input tags from keyboard to the existing words
    updateFilteredAptTags: (state, action: PayloadAction<string>) => {
      let searchWord = action.payload.replace('$', '');
      const apt_tag = state.aptTag;
      if (searchWord) {
        const newAptTag = SearchFuntion(apt_tag, searchWord);
        state.filteredAptTag = newAptTag;
      } else {
        state.filteredAptTag = state.aptTag;
      }
    },
    updatePostMessage: (state, action: PayloadAction<string>) => {
      state.postMessage = action.payload;
    },
    updateShowAtContainer: (state, action: PayloadAction<boolean>) => {
      state.showAtMentionContainer = action.payload;
    },
    updateFormattedText: (state, action: PayloadAction<JSX.Element[]>) => {
      state.formattedContent = action.payload;
    },
    //  The function below append the input tags from keyboard to the existing words
    updateSelectedAtMention: (state, action: PayloadAction<string>) => {
      const currentTextInput = state.inputText;
      const current_word = state.currentWord;
      const tag = action.payload;

      if (current_word === '@') {
        const cursor_index = Number(state.cursorIndex);
        state.inputText =
          state.inputText.slice(0, cursor_index) +
          tag +
          state.inputText.slice(cursor_index);
        state.posts.message = state.inputText;
        state.posts.tags = ExtractTags(state.posts.message);
      } else {
        state.inputText = currentTextInput.replace(current_word, '@' + tag);
        state.posts.message = state.inputText;
        state.posts.tags = ExtractTags(state.posts.message);
      }
    },
    //  The function below append the input tags from keyboard to the existing words
    updateSelectedAptTag: (state, action: PayloadAction<string>) => {
      const currentTextInput = state.inputText;
      const current_word = state.currentWord;
      const tag = action.payload;

      if (current_word === '$') {
        const cursor_index = Number(state.cursorIndex);
        state.inputText =
          state.inputText.slice(0, cursor_index) +
          tag +
          state.inputText.slice(cursor_index);
        state.posts.message = state.inputText;
        state.posts.tags = ExtractTags(state.posts.message);
      } else {
        state.inputText = currentTextInput.replace(current_word, '$' + tag);
        state.posts.message = state.inputText;
        state.posts.tags = ExtractTags(state.posts.message);
      }
    },
    //  The function below append the input tags from keyboard to the existing words
    updateSelectedHashMention: (state, action: PayloadAction<string>) => {
      const currentTextInput = state.inputText;

      const current_word = state.currentWord;
      const hash = action.payload;

      if (current_word === '#') {
        const cursor_index = Number(state.cursorIndex);
        state.inputText =
          state.inputText.slice(0, cursor_index) +
          hash.replace('#', '') +
          state.inputText.slice(cursor_index);
        state.posts.message = state.inputText;
        state.posts.tags = ExtractTags(state.posts.message);
      } else {
        state.inputText = currentTextInput.replace(
          current_word,
          '#' + hash.replace('#', '')
        );
        state.posts.message = state.inputText;
        state.posts.tags = ExtractTags(state.posts.message);
      }
    },
    updateInputText: (state, action: PayloadAction<string>) => {
      state.inputText = action.payload;
      state.posts.message = state.inputText;
      state.posts.tags = ExtractTags(state.posts.message);
    },
    updateCurrentWord: (state, action: PayloadAction<string>) => {
      state.currentWord = action.payload;
    },
    updateCursorIndex: (state, action: PayloadAction<string>) => {
      state.cursorIndex = action.payload;
    },
    updateShowHashTags: (state, action: PayloadAction<boolean>) => {
      state.showHashTags = action.payload;
    },
    updateMedia: (state, action: PayloadAction<boolean>) => {
      state.posts.media = action.payload;
    },
    updateGifBottomSheet: (state, action: PayloadAction<boolean>) => {
      state.GIFBottomSheet = action.payload;
    },
    updateNftBottomSheet: (state, action: PayloadAction<boolean>) => {
      state.NFTBottomSheet = action.payload;
    },
    updateTag: (state, action: PayloadAction<string[]>) => {
      state.posts.tags = action.payload;
    },
    updateShowPriceModal: (state, action: PayloadAction<boolean>) => {
      state.priceModal = action.payload;
    },
    updatePostNft: (
      state,
      action: PayloadAction<{ name: string; id: string; price?: number } | null>
    ) => {
      state.posts.nft = action.payload;
    },
    updateAttachNftCountDown: (state, action: PayloadAction<boolean>) => {
      state.startToastCountdown = action.payload;
    },

    updateAptPrice: (state, action: PayloadAction<number>) => {
      state.posts.nft.price = action.payload;
    },
    updateShouldShowPublishToast: (state, action: PayloadAction<boolean>) => {
      state.shouldShowPublishToast = action.payload;
      state.posts = {
        message: '',
        media: null,
        tags: [],
        community: null,
        nft: null,
      };
    },
  },
});
export const {
  updateFilteredData,
  updateShowAtContainer,
  updateFormattedText,
  updateSelectedAtMention,
  updateInputText,
  updateCurrentWord,
  updateCursorIndex,
  updateShowHashTags,
  updateFilteredHashData,
  updateSelectedHashMention,
  updateShowAptosPanel,
  updateShowAptosSwap,
  updateFilteredAptTags,
  updateSelectedAptTag,
  updateMedia,
  updateGifBottomSheet,
  updateNftBottomSheet,
  updateTag,
  updateShowPriceModal,
  updatePostNft,
  updateAttachNftCountDown,
  updateAptPrice,
  updateShouldShowPublishToast,
} = fieldHandlerSlice.actions;
export default fieldHandlerSlice.reducer;
