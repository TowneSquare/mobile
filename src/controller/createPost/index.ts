import { useSelector } from "react-redux";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ImageSourcePropType } from "react-native";
import { atMentionData, hashTagData, aptosTags } from "./dummyData";
import { SearchFuntion, ExtractTags } from "../../utils/helperFunction";
import axios from "axios";
import { BACKEND_URL } from "../../../config/env";
import { useAppSelector } from "../hooks";
import { images } from "../../constants";

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

export enum POSTSTATE {
  NONE,
  PENDING,
  FULFILLED,
  REJECTED,
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

export interface Comment {
  _id: string;
  nickname: string;
  username: string;
  content: string;
  postId: string;
  userId: string;
  createdAt: string;
}

interface Likes {
  _id: string;
  userId: string;
  postId: string;
  createdAt: string;
}
export interface PostData {
  _id: string;
  title: string;
  description: string;
  imageUrls: Array<string>;
  videoUrls: Array<string>;
  userId: string;
  repost: boolean;
  createdAt: string;
  likes: Array<Likes>;
  reposts: Array<string>;
  comments: Array<Comment>;
  customer: Customer;
  sellNFTPrice: string;
  originalCustomer: Customer;
  originalPostId: string;
  originalCustomerId: string;
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
  OnlyUserPost: Array<PostData>;
  AllPost: Array<PostData>;
  PostState: POSTSTATE;
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
  OnlyUserPost: [],
  AllPost: [
    {
      _id: "6543112773263dcd8d741ba0",
      title: "",
      userId: "65372778b8da0e521b8a3587",
      description: "Test post ",
      imageUrls: [""],
      videoUrls: ["https://www.youtube.com/watch?v=EJzB_Fa27ko"],
      createdAt: "2023-11-02T03:01:59.721Z",
      sellNFTPrice: "20.4",
      likes: [
        {
          _id: "6560962a233ac36e73bc42ce",
          userId: "655ab007ce8937ff6d512885",
          postId: "655df7a347784b1665992617",
          createdAt: "2023-11-24T12:25:14.173Z",
        },
      ],
      comments: [
        {
          username: "pelumi_main",
          nickname: "chokey",
          _id: "653878c2a000149cd06b9845",
          content: "POST comment TEstTest",
          userId: "65372778b8da0e521b8a3587",
          postId: "653728bd6171091d6b469bec",
          createdAt: "2023-10-25T02:09:06.310Z",
        },
        {
          username: "pelumi_second",
          nickname: "chokey",
          _id: "653878c2a000149cd06b9845",
          content: "POST comment TEstTest",
          userId: "65372778b8da0e521b8a3587",
          postId: "653728bd6171091d6b469bec",
          createdAt: "2023-10-25T02:09:06.310Z",
        },
      ],
      customer: {
        _id: "65372778b8da0e521b8a3587",
        issuer: "did:ethr:0xcfe8dfc248cef257524ec05374fa6157114e8991",
        aptosWallet: "0xcfe8dfc248cef257524ec05374fa6157114e8991",
        nickname: "test nickname",
        username: "test12",
        email: "test@email.com",
        referralCode: "98N39",
      },
      reposts: [],
      originalCustomer: {
        _id: "65372778b8da0e521b8a3587",
        issuer: "did:ethr:0xcfe8dfc248cef257524ec05374fa6157114e8991",
        aptosWallet: "0xcfe8dfc248cef257524ec05374fa6157114e8991",
        nickname: "test nickname",
        username: "test12",
        email: "test@email.com",
        referralCode: "98N39",
      },
      repost: false,
      originalPostId: "65430c7f372dd89672e9214d",
      originalCustomerId: "65372778b8da0e521b8a3587",
    },
  ],
  //AllPost: [],
  PostState: POSTSTATE.NONE,
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
  async (
    {
      description,
      sellNFTPrice,
      nftTokenId,
      nftCollection,
      nftImageUrl,
      file,
      token,
    }: any,
    thunkAPI
  ) => {
    try {
      const res = await axios.post(
        `${BACKEND_URL}posts/create`,
        {
          description,
          sellNFTPrice,
          nftTokenId,
          nftCollection,
          nftImageUrl,
          file,
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
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
        params: {
          page: "",
          limit: "",
          search: "",
          userId: "",
        },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      const result = await response.data;
      return result;
    } catch (error) {
      //return thunkAPI.rejectWithValue(error);
      return [];
    }
  }
);

export const getOnlyUserPost = createAsyncThunk(
  "getOnlyUserPost",
  async ({ userId, token }: any) => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}posts/findByUserId/${userId}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      const result = await response.data;
      return result;
    } catch (error) {
      return [];
    }
  }
);

export const rePost = createAsyncThunk(
  "feed/repost",
  async ({ post_id, token }: any) => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}posts/repost/${post_id}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      const result = await response.data;
      return result;
    } catch (error) {
      return
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
      state.PostState = POSTSTATE.FULFILLED;
    });
    builder.addCase(getAllPost.pending, (state, action) => {
      state.PostState = POSTSTATE.PENDING;
    });
    builder.addCase(getAllPost.rejected, (state, action) => {
      state.PostState = POSTSTATE.REJECTED;
      state.AllPost = [...state.AllPost];
    });
    builder.addCase(
      getOnlyUserPost.fulfilled,
      (state, action: PayloadAction<Array<PostData>>) => {
        state.OnlyUserPost = action.payload;
      }
    );
    builder.addCase(getOnlyUserPost.rejected, (state, action) => {
      state.PostState = POSTSTATE.REJECTED;
      state.AllPost = [...state.OnlyUserPost];
    });
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
