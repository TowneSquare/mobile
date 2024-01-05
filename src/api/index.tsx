import axios from "axios";
import { BACKEND_URL, APTOS_NAME_URL } from "../../config/env";
import { Customer, PostData } from "../controller/createPost";
import { useAppSelector } from "../controller/hooks";
import { UserData } from "../controller/UserController";
let _headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

function createCall(path, data = null, headers = {}, method = 'POST') {
  const merged = {
    ..._headers,
    ...headers,
  };

  let body = {};
  if (data) {
    body = data;
  }

  let strData = JSON.stringify(body);
  if (method == 'GET')
    return fetch(`${BACKEND_URL}${path}`, {
      method: method,
      headers: merged,
    })
      .then((resp) => resp.json())
      .catch((error) => {
        if (error.code == 400) console.log(error.message);
      });
  else
    return fetch(`${BACKEND_URL}${path}`, {
      method: method,
      headers: merged,
      body: strData,
    })
      .then((resp) => resp.json())
      .catch((error) => {
        if (error.code == 400) console.log(error.message);
      });
}

export async function checkSignup(token: string) {
  return createCall(`user/checkSignup`, {}, { authorization: token }, 'GET');
}
export async function signup(
  token: string,
  issuer: string,
  aptosWallet: string,
  nickname: string,
  username: string,
  email: string
) {
  return createCall(
    'user/signup',
    { issuer, aptosWallet, nickname, username, email },
    { authorization: token }
  );
}

export async function updateConnectedSocial(
  userId: string,
  token: string,
  input: any
) {
  return createCall(
    'user/connect-social/' + `${userId}`,
    input,
    { authorization: token },
    'PUT'
  );
}

export async function getSuggestFollowers(token: string) {
  return createCall(
    'user/suggested-friends',
    {},
    { authorization: token },
    'GET'
  );
}

export async function updatefollowFriends(token: string, followId: string) {
  return createCall(
    'user/follow-friends',
    { followIds: [followId] },
    { authorization: token },
    'POST'
  );
}

export async function uploadProfileImage(token: string, profileImage: any) {
  return fetch(`${BACKEND_URL}` + 'user/upload-profile-photo', {
    method: 'PUT',
    headers: { authorization: token, 'Content-Type': 'multipart/form-data' },
    body: profileImage,
  })
    .then((resp) => resp.json())
    .catch((error) => {
      if (error.code == 400) console.log(error.message);
    });
}

export async function getAllUser(token: string) {
  return createCall(`user/getall`, {}, { authorization: token }, "GET");
}

export const getPostById = async (
  token: string,
  post_id: string
): Promise<PostData> => {
  try {
    const res = await axios.get(`${BACKEND_URL}posts/${post_id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const result: PostData = await res.data;
    return {
      _id: result._id,
      title: result.title || "",
      description: result.description,
      imageUrls: result.imageUrls || [],
      videoUrls: result.videoUrls || [],
      nftImageUrl: result.nftImageUrl,
      nftCollection: result.nftCollection,
      nftTokenId: result.nftTokenId,
      userId: result.userId,
      repost: result.repost,
      createdAt: result.createdAt,
      likes: result.likes,
      reposts: result.reposts,
      comments: result.comments,
      customer: {
        _id: result.customer._id,
        issuer: result.customer.issuer || "",
        aptosWallet: result.customer.aptosWallet,
        nickname: result.customer.nickname,
        username: result.customer.username,
        email: result.customer.email || "",
        referralCode: result.customer.referralCode || "",
        profileImage: result.customer.profileImage || "",
        createdAt: result.createdAt,
      },
      sellNFTPrice: result.sellNFTPrice,
      originalCustomer: result.originalCustomer,
      originalPostId: result.originalPostId,
      originalCustomerId: result.originalCustomerId,
    };
  } catch (error) {
    return {
      _id: "",
      title: "",
      description: "",
      imageUrls: [],
      videoUrls: [],
      nftImageUrl: "",
      nftCollection: "",
      nftTokenId: "",
      userId: "",
      repost: false,
      createdAt: "",
      likes: [],
      reposts: [],
      comments: [],
      customer: {
        _id: "",
        issuer: "",
        aptosWallet: "",
        nickname: "",
        username: "",
        email: "",
        referralCode: "",
        profileImage: "",
        createdAt: "",
      },
      sellNFTPrice: "",
      originalCustomer: {
        _id: "",
        issuer: "",
        aptosWallet: "",
        nickname: "",
        username: "",
        email: "",
        referralCode: "",
        profileImage: "",
        createdAt: "",
      },
      originalPostId: "",
      originalCustomerId: "",
    };
  }
};

export const likePost = async (token: string, post_id: string) => {
  try {
    const res = await axios.get(`${BACKEND_URL}posts/like${post_id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const result: boolean = await res.data;
    return result;
  } catch (error) {}
};

export const reportUser = async (user_id: string, token: string) => {
  try {
    await axios.get(`${BACKEND_URL}user/report/${user_id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {}
};

export const blockUser = async (user_id: string, token: string) => {
  try {
    await axios.get(`${BACKEND_URL}user/block/${user_id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {}
};

export const reportPost = async (token: string, post_id: string) => {
  try {
    await axios.get(`${BACKEND_URL}user/block/${post_id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {}
};

export const getFollowings = async (token: string) => {
  try {
    const response = await axios.get(`${BACKEND_URL}user/followings`, {
      headers: {
        Authorization: token,
      },
    });
    const result: FollowingProps[] = response.data;
    return result;
  } catch (error) {}
};

export const getFollowers = async (token: string) => {
  try {
    const response = await axios.get(`${BACKEND_URL}user/followers`, {
      headers: {
        Authorization: token,
      },
    });
    const result = response.data;
    return result;
  } catch (error) {}
};

export const getUserInfo = async (
  userId: string,
  token: string
): Promise<UserData> => {
  try {
    const response = await axios.get(`${BACKEND_URL}user/${userId}`, {
      headers: {
        Authorization: token,
      },
    });
    const result: UserData = response.data;
    return {
      _id: result._id,
      profileImage: result.profileImage,
      bio: result.bio,
      issuer: result.issuer,
      aptosWallet: result.aptosWallet,
      nickname: result.nickname,
      username: result.username,
      email: result.email,
      badge: result.badge,
      referralCode: result.referralCode,
      followers: result.followers,
      following: result.following,
      posts: result.posts,
      groups: result.groups || [],
      comments: result.comments || [],
      createdAt: result.createdAt,
      superstars: result.superstars,
    };
  } catch (error) {}
};

export const getUserAptosName = async (address: string) => {
  try {
    const res = await axios.get(`${APTOS_NAME_URL}${address}`);
    const aptosName: string = res.data;
    return aptosName;
  } catch (error) {
    return "unavailable";
  }
};
