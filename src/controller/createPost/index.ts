import { useSelector } from "react-redux";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ImageSourcePropType } from "react-native";
import { atMentionData, hashTagData, aptosTags } from "./dummyData";
import { SearchFuntion, ExtractTags } from "../../utils/helperFunction";
import axios from "axios";
import { BACKEND_URL } from "../../../config/env";
import { useAppSelector } from "../hooks";

interface CreatePost {
  message: string;
  tags: string[];
  community: "Aptos" | "Aptos Monkeys" | null;
  media: string;
  nft: {
    name: string;
    id: string;
    price?: number;
  } | null;
}

interface Customer {
  _id: string;
  issuer: string;
  aptosWallet: string;
  nickname: string;
  username: string;
  email: string;
  referralCode: string;
}

interface Comment {
  _id: string;
  content: string;
  postId: string;
  createdAt: string;
}
export interface PostData {
  _id: string;
  title: string;
  description: string;
  imageUrl: ImageSourcePropType;
  videoUrl: string;
  userId: string;
  repost: boolean;
  createdAt: string;
  likes: Array<string>;
  retweet: Array<string>;
  comments: Array<Comment>;
  customer: Customer;
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
  AllPost: Array<PostData>;
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
  communityPostPrivacy: "public" | "community-only";
}
const initialState: Post = {
  AllPost: [],
  data: atMentionData,
  filteredAtMentions: atMentionData,
  postMessage: "",
  showAtMentionContainer: false,
  formattedContent: [],
  selectedAtMention: "",
  inputText: "",
  currentWord: "",
  cursorIndex: "",
  showHashTags: false,
  hashTagData: hashTagData,
  filteredHashTagData: hashTagData,
  selectedHashTag: "",
  showAptosMonkey: false,
  showAptosPanel: false,
  showAptosSwap: false,
  aptTag: aptosTags,
  filteredAptTag: aptosTags,
  media: false,
  GIFBottomSheet: false,
  NFTBottomSheet: false,
  posts: {
    message: "",
    media: "",
    tags: [],
    community: null,
    nft: null,
  },
  priceModal: false,
  communityPostPrivacy: "public",
};


export const createPost = createAsyncThunk(
  "Feed/createPost",
  async ({ description, imageUrL, videoUrL, token }: any, thunkAPI) => {
    try {
      const res = await axios.post(
        `${BACKEND_URL}posts/create`,
        {
          description,
          imageUrL,
          videoUrL,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAllPost = createAsyncThunk(
  "Feed/FindAll",
  async (token: string, thunkAPI) => {
    try {
      const response = await axios.get(`${BACKEND_URL}posts/findAll`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      const result = await response.data;
      console.log(result)
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue;
    }
  }
);

export const fieldHandlerSlice = createSlice({
  name: "postHandler",
  initialState,
  reducers: {
    updateShowAptosPanel: (state, action: PayloadAction<boolean>) => {
      state.showAptosPanel = action.payload;
    },
    updateShowAptosSwap: (
      state,
      action: PayloadAction<"Aptos" | "Aptos Monkeys" | null>
    ) => {
      state.posts.community = action.payload;
    },

    updateFilteredData: (state, action: PayloadAction<string>) => {
      let searchWord = action.payload.replace("@", "");
      const atMentions = state.data;
      if (searchWord) {
        const newAtMention = SearchFuntion(atMentions, searchWord);
        state.filteredAtMentions = newAtMention;
      } else {
        state.filteredAtMentions = state.data;
      }
    },
    updateFilteredHashData: (state, action: PayloadAction<string>) => {
      let searchWord = action.payload.replace("#", "");
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
      let searchWord = action.payload.replace("$", "");
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

      if (current_word === "@") {
        const cursor_index = Number(state.cursorIndex);
        state.inputText =
          state.inputText.slice(0, cursor_index) +
          tag +
          state.inputText.slice(cursor_index);
        state.posts.message = state.inputText;
        state.posts.tags = ExtractTags(state.posts.message);
      } else {
        state.inputText = currentTextInput.replace(current_word, "@" + tag);
        state.posts.message = state.inputText;
        state.posts.tags = ExtractTags(state.posts.message);
      }
    },
    //  The function below append the input tags from keyboard to the existing words
    updateSelectedAptTag: (state, action: PayloadAction<string>) => {
      const currentTextInput = state.inputText;
      const current_word = state.currentWord;
      const tag = action.payload;

      if (current_word === "$") {
        const cursor_index = Number(state.cursorIndex);
        state.inputText =
          state.inputText.slice(0, cursor_index) +
          tag +
          state.inputText.slice(cursor_index);
        state.posts.message = state.inputText;
        state.posts.tags = ExtractTags(state.posts.message);
      } else {
        state.inputText = currentTextInput.replace(current_word, "$" + tag);
        state.posts.message = state.inputText;
        state.posts.tags = ExtractTags(state.posts.message);
      }
    },
    //  The function below append the input tags from keyboard to the existing words
    updateSelectedHashMention: (state, action: PayloadAction<string>) => {
      const currentTextInput = state.inputText;

      const current_word = state.currentWord;
      const hash = action.payload;

      if (current_word === "#") {
        const cursor_index = Number(state.cursorIndex);
        state.inputText =
          state.inputText.slice(0, cursor_index) +
          hash.replace("#", "") +
          state.inputText.slice(cursor_index);
        state.posts.message = state.inputText;
        state.posts.tags = ExtractTags(state.posts.message);
      } else {
        state.inputText = currentTextInput.replace(
          current_word,
          "#" + hash.replace("#", "")
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
    updateMedia: (state, action: PayloadAction<string>) => {
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

    updateAptPrice: (
      state,
      action: PayloadAction<{ name: string; id: string; price?: number }>
    ) => {
      state.posts.nft = action.payload;
    },
    clearPostData: (state, action: PayloadAction<boolean>) => {
      state.posts = {
        message: "",
        media: null,
        tags: [],
        community: null,
        nft: null,
      };
    },
    updateCommunityPostPrivacy: (
      state,
      action: PayloadAction<"public" | "community-only">
    ) => {
      state.communityPostPrivacy = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createPost.fulfilled, (state, action) => {});
    builder.addCase(getAllPost.fulfilled, (state, action) => {
      state.AllPost = action.payload;
    });
    builder.addCase(getAllPost.pending, (state, action) => {

    });
    builder.addCase(getAllPost.rejected, (state, action) => {
      state.AllPost = [];
    })
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
  updateAptPrice,
  clearPostData,
  updateCommunityPostPrivacy,
} = fieldHandlerSlice.actions;
export default fieldHandlerSlice.reducer;
