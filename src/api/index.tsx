import axios from "axios";
import { BACKEND_URL } from "../../config/env";
import { Customer, PostData } from "../controller/createPost";
import { useAppSelector } from "../controller/hooks";
let _headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};



export interface FollowingProps {
  _id: string;
  fromUserId: string;
  toUserId: string;
  isFollowing: boolean;
  customerInfo: Customer;
}

function createCall(path, data = null, headers = {}, method = "POST") {
  const merged = {
    ..._headers,
    ...headers,
  };

  let body = {};
  if (data) {
    body = data;
  }

  let strData = JSON.stringify(body);
  if (method == "GET")
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
  return createCall(`user/checkSignup`, {}, { authorization: token }, "GET");
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
    "user/signup",
    { issuer, aptosWallet, nickname, username, email },
    { authorization: token }
  );
}
export async function getAllUser(token: string) {
  return createCall(`user/getall`, {}, { authorization: token }, "GET");
}

export const getPostById = async (token: string, post_id: string) => {
  try {
    const res = await axios.get(`${BACKEND_URL}posts/${post_id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const result: PostData = await res.data;
    return result;
  } catch (error) {}
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
