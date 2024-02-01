import { PostData } from "./../createPost/index";
import { images } from "./../../constants/images";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ImageSourcePropType } from "react-native";
import { communities, friends } from "./models";
import { APTOS_NAME_URL, BACKEND_URL, didToken } from "../../../config/env";
import axios from "axios";

export interface collection {
  image: ImageSourcePropType;
  id: number;
  isSelected: boolean;
}

export interface SELECTEDSUPERSTAR {
        nftImageUrl: string;
        nftTokenId: string;
        nftCollection: string;
      }

export interface selectedCollection {
  image: ImageSourcePropType;
  collectionId: number;
  itemId: number;
  id: number;
}
export interface NftCollection {
  Collectionimage?: any;
  collections: collection[];
  Name: string;
  id: number;
}

export interface EditProfileProps {
  username: string;
  nickname: string;
  bio: string;
  token: string;
}

export interface PostInfo {
  _id: string;
  description: string;
  imageUrls: Array<string>;
  videoUrls: Array<string>;
  sellPrice: string;
  nftTokenId: string;
  nftCollection: string;
  nftImageUrl: string;
  isSwapApt: boolean;
  userId: string;
  createdAt: string;
  sellNFTPrice: string;
}

export interface UserCommentData {
  _id: string;
  content: string;
  imageUrls: Array<string>;
  videoUrls: Array<string>;
  userId: string;
  postId: string;
  createdAt: string;
  postInfo: PostInfo;
}

export interface NFTInfoArray {
  nftTokenId: string;
  nftImageUrl: string;
  nftCollection: string;
}

export interface UserData {
  _id: string;
  profileImage: string;
  bio: string;
  issuer: string;
  aptosWallet: string;
  nickname: string;
  username: string;
  email: string;
  badge: Array<string>;
  referralCode: string;
  followers: Array<friends>;
  following: Array<friends>;
  posts: Array<PostData>;
  groups: Array<communities>;
  comments: Array<UserCommentData>;
  createdAt: string;
  superstars: {
    _id: string;
    nftInfoArray: NFTInfoArray[];
    customerId: string;
    createdAt: string;
  };
}
interface UserState {
  UserData: UserData;
  aptosName: string;
  errors: {
    nicknameError: boolean;
    usernameError: boolean;
    emailError: boolean;
    usernameErrorMessage: string;
  };
  didToken: string;
  accountInfo: any;
  metadata: any;
  editProfile: boolean;
  NFTCollections: NftCollection[];
  selectedSuperStars: {
    nftImageUrl: string;
    nftTokenId: string;
    nftCollection: string;
  }[];
  theirProfileBottomSheet: boolean;
  isSignUpContinueButtonDisable: boolean;
  socialInfo: any;
  BookMarks: PostData[];
}

interface signUpRequest {
  aptosWallet: string;
  nickname: string;
  username: string;
  email: string;
}

interface followRequest {
  toUserIds: string[];
  token: string;
}
const initialState: UserState = {
  UserData: {
    _id: "6588dd27973c4e8e226c92f2",
    issuer: "did:ethr:0x8880807e9188a75767c647374d83272d031a0b42",
    aptosWallet: "0x8880807e9188a75767c647374d83272d031a0b42",
    nickname: "TO1",
    username: "TOTO1",
    email: "to@town.com",
    bio: `🖇️ Love everything about blockchain \n🌍3 web3 Native \n 👀 Always on a lookout for blue chips`,
    referralCode: "E1HFN",
    createdAt: "2023-11-20T01:01:59.418Z",
    profileImage:
      "https://townesquare-media.s3.amazonaws.com/20231124T025800.147Z_28i87s00i6s.jpg",
    followers: [],
    badge: [],
    following: [
      {
        _id: "655d71b07123f56056b546d8",
        fromUserId: "655ab007ce8937ff6d512885",
        toUserId: "653730c76171091d6b469bf2",
      },
      {
        _id: "655d71ff7123f56056b546d9",
        fromUserId: "655ab007ce8937ff6d512885",
        toUserId: "65517b59c40bc87fe2ac38f8",
      },
    ],
    posts: [
      {
        _id: "655df7a347784b1665992617",
        title: "",
        userId: "65372778b8da0e521b8a3587",
        description: "Test post ",
        imageUrls: [""],
        videoUrls: ["https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"],
        createdAt: "2023-11-02T03:01:59.721Z",
        sellNFTPrice: "",
        nftImageUrl: "",
        nftCollection: "",
        nftTokenId: "",
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
          profileImage: "",
          createdAt: "",
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
          profileImage: "",
          createdAt: "",
        },
        repost: false,
        originalPostId: "65430c7f372dd89672e9214d",
        originalCustomerId: "65372778b8da0e521b8a3587",
      },
      {
        _id: "6543112773263dcd8d741ba0",
        title: "",
        userId: "65372778b8da0e521b8a3587",
        description: "Test post ",
        imageUrls: [""],
        videoUrls: ["https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"],
        createdAt: "2023-11-02T03:01:59.721Z",
        sellNFTPrice: "",
        nftImageUrl:
          "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png",
        nftCollection: "APtomingos",
        nftTokenId: "Aptomingo #123",
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
          profileImage: "",
          createdAt: "",
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
          profileImage: "",
          createdAt: "",
        },
        repost: false,
        originalPostId: "65430c7f372dd89672e9214d",
        originalCustomerId: "65372778b8da0e521b8a3587",
      },
    ],
    groups: [],
    superstars: {
      _id: "6563f507f07bc47317331a30",
      nftInfoArray: [
        {
          nftTokenId: "Aptomingo #111",
          nftImageUrl:
            "https://airnfts.s3.amazonaws.com/nft-images/20210821/This_is_Link_1629558829889.png",
          nftCollection: "Aptomingos",
        },
        {
          nftTokenId: "Aptomingo #112",
          nftImageUrl:
            "https://airnfts.s3.amazonaws.com/nft-images/20210821/This_is_Link_1629558829889.png",
          nftCollection: "Aptomingos",
        },
        {
          nftTokenId: "Aptomingo #113",
          nftImageUrl:
            "https://airnfts.s3.amazonaws.com/nft-images/20210821/This_is_Link_1629558829889.png",
          nftCollection: "Aptomingos",
        },
      ],
      customerId: "655ab007ce8937ff6d512885",
      createdAt: "2023-11-27T01:46:47.630Z",
    },
    comments: [
      {
        _id: "656495e6f07bc47317331a32",
        content: "Test Content",
        imageUrls: ["https://image.com/image1"],
        videoUrls: ["https://video.com/video1"],
        userId: "655ab007ce8937ff6d512885",
        postId: "655df7a347784b1665992617",
        createdAt: "2023-11-27T13:13:10.776Z",
        postInfo: {
          _id: "655df7a347784b1665992617",
          description: "Test Post - 4",
          sellNFTPrice: "20.4",
          nftTokenId: "Aptomingo #123",
          nftCollection: "APtomingos",
          nftImageUrl:
            "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?format=png&width=960",
          userId: "655ab007ce8937ff6d512885",
          createdAt: "2023-11-22T12:44:19.364Z",
          imageUrls: [""],
          isSwapApt: false,
          videoUrls: [""],
          sellPrice: "",
        },
      },
      {
        _id: "655bfe3a45ec78b4b2d04863",
        content: "Test Content",
        imageUrls: [""],
        videoUrls: ["https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"],
        userId: "655ab007ce8937ff6d512885",
        postId: "655ab012ce8937ff6d512886",
        createdAt: "2023-11-21T00:47:54.262Z",
        postInfo: {
          _id: "655df7a347784b1665992617",
          description: "Test Post - 4",
          sellNFTPrice: "20.4",
          nftTokenId: "Aptomingo #123",
          nftCollection: "APtomingos",
          nftImageUrl:
            "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?format=png&width=960",
          userId: "655ab007ce8937ff6d512885",
          createdAt: "2023-11-22T12:44:19.364Z",
          imageUrls: [""],
          isSwapApt: false,
          videoUrls: [""],
          sellPrice: "",
        },
      },
    ],
  },
  aptosName: "",
  errors: {
    nicknameError: false,
    usernameError: false,
    emailError: false,
    usernameErrorMessage: "",
  },
  didToken: didToken,
  editProfile: false,
  NFTCollections: [
    {
      Collectionimage: images.NftCollection1,
      collections: [
        {
          image: images.pinnedNFT,
          id: 1,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_1,
          id: 2,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_2,
          id: 3,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_3,
          id: 4,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_4,
          id: 5,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_5,
          id: 6,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_6,
          id: 7,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_7,
          id: 8,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_8,
          id: 9,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_9,
          id: 10,
          isSelected: false,
        },
      ],
      Name: "Aptomingos222222",
      id: 1,
    },
    {
      Collectionimage: images.NftCollection2,
      collections: [
        {
          image: images.pinnedNFT_10,
          id: 1,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_11,
          id: 2,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_12,
          id: 3,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_13,
          id: 4,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_14,
          id: 5,
          isSelected: false,
        },
      ],
      Name: "Aptos Monkey",
      id: 2,
    },
    {
      Collectionimage: images.NftCollection3,
      collections: [
        {
          image: images.pinnedNFT_15,
          id: 1,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_16,
          id: 2,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_17,
          id: 3,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_18,
          id: 4,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_19,
          id: 5,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_20,
          id: 6,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_21,
          id: 7,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_22,
          id: 8,
          isSelected: false,
        },
      ],
      Name: "Aptomingos",
      id: 3,
    },
    {
      Collectionimage: images.NftCollection1,
      collections: [
        {
          image: images.pinnedNFT_23,
          id: 1,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_24,
          id: 2,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_25,
          id: 3,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_26,
          id: 4,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_27,
          id: 5,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_28,
          id: 6,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_29,
          id: 7,
          isSelected: false,
        },
      ],
      Name: "Aptos Monkey",
      id: 5,
    },
    {
      Collectionimage: images.NftCollection2,
      collections: [
        {
          image: images.pinnedNFT_30,
          id: 1,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_31,
          id: 2,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_32,
          id: 3,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_33,
          id: 4,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_34,
          id: 5,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_35,
          id: 6,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_36,
          id: 7,
          isSelected: false,
        },
      ],
      Name: "Aptomingos",
      id: 6,
    },
    {
      Collectionimage: images.NftCollection3,
      collections: [
        {
          image: images.pinnedNFT_37,
          id: 1,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_38,
          id: 2,
          isSelected: false,
        },
        {
          image: images.pinnedNFT_40,
          id: 3,
          isSelected: false,
        },
      ],
      Name: "Aptos Monkey lorem Ipsumdalr",
      id: 7,
    },
  ],
  accountInfo: undefined,
  metadata: undefined,
  socialInfo: undefined,
  selectedSuperStars: [],
  theirProfileBottomSheet: false,
  isSignUpContinueButtonDisable: false,
  BookMarks: [
    {
      _id: "6543112773263dcd8d741ba0",
      title: "",
      userId: "65372778b8da0e521b8a3587",
      description: "Test post ",
      imageUrls: [""],
      videoUrls: ["https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"],
      createdAt: "2023-11-02T03:01:59.721Z",
      sellNFTPrice: "",
      nftImageUrl: "",
      nftCollection: "",
      nftTokenId: "",
      likes: [
        {
          _id: "6560962a233ac36e73bc42ce",
          userId: "655ab007ce8937ff6d512887",
          postId: "655df7a347784b1665992617",
          createdAt: "2023-11-24T12:25:14.173Z",
        },
        {
          _id: "6560962a233ac36e73bc42ce",
          userId: "655ab007ce8937ff6d512887",
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
        _id: "655ab007ce8937ff6d512885",
        issuer: "did:ethr:0xcfe8dfc248cef257524ec05374fa6157114e8991",
        aptosWallet: "0xcfe8dfc248cef257524ec05374fa6157114e8991",
        nickname: "test nickname",
        username: "test12",
        email: "test@email.com",
        referralCode: "98N39",
        profileImage: "",
        createdAt: "",
      },
      reposts: [
        {
          _id: "6570a9166460587de2c1a9c9",
          postId: "6570a9166460587de2c1a9c8",
          customerId: "655ab007ce8937ff6d512885",
          originalPostId: "65649c452b47b41b4f22ffd0",
          createdAt: "2023-12-06T17:02:14.813Z",
        },
        {
          _id: "6570a9166460587de2c1a9c9",
          postId: "6570a9166460587de2c1a9c8",
          customerId: "655ab007ce8937ff6d512886",
          originalPostId: "65649c452b47b41b4f22ffd0",
          createdAt: "2023-12-06T17:02:14.813Z",
        },
      ],
      originalCustomer: {
        _id: "65372778b8da0e521b8a3587",
        issuer: "did:ethr:0xcfe8dfc248cef257524ec05374fa6157114e8991",
        aptosWallet: "0xcfe8dfc248cef257524ec05374fa6157114e8991",
        nickname: "test nickname",
        username: "test12",
        email: "test@email.com",
        referralCode: "98N39",
        profileImage: "",
        createdAt: "",
      },
      repost: false,
      originalPostId: "65430c7f372dd89672e9214d",
      originalCustomerId: "65372778b8da0e521b8a3587",
    },
  ],
};

export const signUp = createAsyncThunk(
  "User/signUp",
  async (signupRequest: signUpRequest, thunkAPI) => {
    const { aptosWallet, nickname, username, email } = signupRequest;
    try {
      const res = await axios.post(`${BACKEND_URL}user/signup`, {
        aptosWallet,
        nickname,
        username,
        email,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const followUser = createAsyncThunk(
  "User/follow",
  async (followRequest: followRequest, thunkAPI) => {
    const { toUserIds, token } = followRequest;
    try {
      await axios.post(
        `${BACKEND_URL}user/follow-friends`,
        {
          followIds: toUserIds,
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
      //return thunkAPI.rejectWithValue(error);
    }
  }
);

export const unFollowUser = createAsyncThunk(
  "User/Unfollow",
  async ({ token, followId }: any) => {
    try {
      await axios.post(
        `${BACKEND_URL}user/unfollow-friends`,
        {
          followId,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: token,
          },
        }
      );
    } catch (error) {}
  }
);

export const getUserData = createAsyncThunk(
  "User/getUserData",
  async ({ userId, token }: any): Promise<UserData> => {
    try {
      const res = await axios.get(`${BACKEND_URL}user/${userId}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      const userData: UserData = res.data;
      return {
        _id: userData._id,
        issuer: userData.issuer,
        profileImage: userData.profileImage || "",
        bio: userData.bio || "",
        aptosWallet: userData.aptosWallet || "",
        nickname: userData.nickname || "",
        username: userData.username || "",
        email: userData.email || "",
        badge: userData.badge || [],
        referralCode: userData.referralCode || "",
        followers: userData.followers || [],
        following: userData.following || [],
        posts: userData.posts || [],
        groups: userData.groups || [],
        comments: userData.comments || [],
        createdAt: userData.createdAt || "",
        superstars: userData.superstars,
      };
    } catch (error) {
      return {
        _id: "",
        issuer: "",
        profileImage: "",
        bio: "",
        aptosWallet: "",
        nickname: "",
        username: "",
        email: "",
        badge: [],
        referralCode: "",
        followers: [],
        following: [],
        posts: [],
        groups: [],
        comments: [],
        createdAt: "",
        superstars: {
          _id: "",
          nftInfoArray: [],
          customerId: "",
          createdAt: "",
        },
      };
    }
  }
);

export const setSuperStarsNFT = createAsyncThunk(
  "User/setSuperStarsNFT",
  async ({ token, nftInfoArray }: any) => {
    try {
      await axios.post(
        `${BACKEND_URL}user/set_superstars`,
        {
          nftInfoArray,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
    } catch (error) {}
  }
);

export const getAptosName = createAsyncThunk(
  "User/getAptosName",
  async ({ address }: any) => {
    try {
      const res = await axios.get(`${APTOS_NAME_URL}${address}`);
      const aptosName: string = res.data;
      return aptosName;
    } catch (error) {
      return "unavailable";
    }
  }
);

export const editProfile = createAsyncThunk(
  "User/EditProfile",
  async ({ bio, nickname, username, token }: EditProfileProps) => {
    try {
      await axios.put(
        `${BACKEND_URL}user/update_bio`,
        {
          bio,
          nickname,
          username,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token,
          },
        }
      );
    } catch (error) {}
  }
);

export const deletePost = createAsyncThunk(
  "user/deletePost",
  async ({ postId, token }: any) => {
    try {
      await axios.delete(`${BACKEND_URL}posts/${postId}`, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error) {}
  }
);

export const getUserBookmark = createAsyncThunk(
  "user/getUserBookmark",
  async ({ token }: any) => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}posts/get_bookmark_post`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      const result = response.data;
      return result;
    } catch (error) {}
  }
);

export const bookMarkPost = createAsyncThunk(
  "user/bookmarkPost",
  async ({ token, postId }: any) => {
    try {
      await axios.get(`${BACKEND_URL}posts/bookmark/${postId}`, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error) {}
  }
);
export const USER = createSlice({
  name: "User",
  initialState,
  reducers: {
    updateTypeOfWallet: (state, action: PayloadAction<string>) => {
      state.UserData.aptosWallet = action.payload;
    },
    updateNickname: (state, action: PayloadAction<string>) => {
      if (state.UserData.nickname.length >= 30) {
        state.UserData.nickname = action.payload;
        state.errors.nicknameError = true;
      } else {
        state.UserData.nickname = action.payload;
        state.errors.nicknameError = false;
      }
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      if (state.UserData.email.length >= 70) {
        state.UserData.email = action.payload;
        state.errors.emailError = true;
      } else {
        state.UserData.email = action.payload;
        state.errors.emailError = false;
      }
    },
    updateUsername: (state, action: PayloadAction<string>) => {
      const usernameRegex = /^[a-zA-Z0-9]+$/;
      if (
        !usernameRegex.test(action.payload) &&
        state.UserData.username.length > 1
      ) {
        state.errors.usernameError = true;
        state.UserData.username = action.payload;
        state.errors.usernameErrorMessage =
          "Use only alphanumeric characters and letters";
      } else if (action.payload.length < 4) {
        state.errors.usernameError = true;
        state.UserData.username = action.payload;
        state.errors.usernameErrorMessage =
          "Username must be longer than 4 characters";
      } else if (state.UserData.username.length >= 15) {
        state.errors.usernameError = true;
        state.UserData.username = action.payload;
        state.errors.usernameErrorMessage =
          "Username can be max. 15 characters long";
      } else {
        state.UserData.username = action.payload;
        state.errors.usernameError = false;
      }
    },
    updateReferralCode: (state, action: PayloadAction<string>) => {
      state.UserData.referralCode = action.payload;
    },
    updateFollowedFriends: (state, action: PayloadAction<friends>) => {
      state.UserData.following = [...state.UserData.following, action.payload];
    },
    updateJoinedCommunities: (state, action: PayloadAction<communities>) => {
      state.UserData.groups = [...state.UserData.groups, action.payload];
    },
    updateNicknameError: (state, action: PayloadAction<boolean>) => {
      state.errors.nicknameError = action.payload;
    },
    updateEmailError: (state, action: PayloadAction<boolean>) => {
      state.errors.emailError = action.payload;
    },
    updateUsernameError: (state, action) => {
      state.errors.usernameError = action.payload;
    },
    updateProfileImage: (state, action: PayloadAction<string>) => {
      state.UserData.profileImage = action.payload;
    },
    updateUserId: (state, action: PayloadAction<string>) => {
      state.UserData._id = action.payload;
    },
    updateDidToken: (state, action: PayloadAction<string>) => {
      state.didToken = action.payload;
    },
    updateEditProfile: (state, action: PayloadAction<boolean>) => {
      state.editProfile = action.payload;
    },
    updateSelectedSuperStars: (
      state,
      action: PayloadAction<
        { nftImageUrl: string; nftTokenId: string; nftCollection: string }[]
      >
    ) => {
      state.selectedSuperStars = action.payload;
    },

    updateAccountInfo: (state, action: PayloadAction<any>) => {
      state.accountInfo = action.payload;
    },
    updateSocialconnect: (state, action: PayloadAction<any>) => {
      state.socialInfo = action.payload;
    },
    updateMetadata: (state, action: PayloadAction<any>) => {
      state.metadata = action.payload;
    },
    updateSelectedSuperStar: (
      state,
      action: PayloadAction<{
        nftImageUrl: string;
        nftTokenId: string;
        nftCollection: string;
      }>
    ) => {
      if(undefined){
        state.selectedSuperStars = [action.payload]
      } else {
        state.selectedSuperStars = [...state.selectedSuperStars, action.payload];
      }
      
    },
    deleteSelectedSuperStar: (state, action: PayloadAction<string>) => {
      state.selectedSuperStars = state.selectedSuperStars.filter(
        (obj) => obj["nftTokenId"] !== action.payload
      );
    },
    resetSelectedSuperStar: (state) => {
      ``;
      state.selectedSuperStars = state.UserData.superstars.nftInfoArray;
    },
    updateBio: (state, action: PayloadAction<string>) => {
      state.UserData.bio = action.payload;
    },
    updateTheirProfileBottomSheet: (state, action: PayloadAction<boolean>) => {
      state.theirProfileBottomSheet = action.payload;
    },
    disableContinueButton: (state, action: PayloadAction<boolean>) => {
      state.isSignUpContinueButtonDisable = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, action) => {
      const userId = action.payload;
      state.UserData._id = userId;
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.UserData = action.payload;
    });
    builder.addCase(getUserData.rejected, (state, action) => {
      state.UserData = {
        _id: "",
        issuer: "",
        profileImage: "",
        bio: "",
        aptosWallet: "",
        nickname: "",
        username: "",
        email: "",
        badge: [],
        referralCode: "",
        followers: [],
        following: [],
        posts: [],
        groups: [],
        comments: [],
        createdAt: "",
        superstars: {
          _id: "",
          nftInfoArray: [],
          customerId: "",
          createdAt: "",
        },
      };
    });
    builder.addCase(getAptosName.fulfilled, (state, action) => {
      state.aptosName = action.payload;
    });
    builder.addCase(getUserBookmark.fulfilled, (state, action) => {
      state.BookMarks = action.payload;
    });
  },
});
export const {
  updateTypeOfWallet,
  updateNickname,
  updateEmail,
  updateUsername,
  updateFollowedFriends,
  updateJoinedCommunities,
  updateNicknameError,
  updateUsernameError,
  updateEmailError,
  updateDidToken,
  updateProfileImage,
  updateUserId,
  updateEditProfile,
  updateAccountInfo,
  updateMetadata,
  updateSocialconnect,
  updateSelectedSuperStar,
  deleteSelectedSuperStar,
  resetSelectedSuperStar,
  updateBio,
  updateTheirProfileBottomSheet,
  updateSelectedSuperStars,
  updateReferralCode,
  disableContinueButton,
} = USER.actions;
export default USER.reducer;
