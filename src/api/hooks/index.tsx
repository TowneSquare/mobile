import axios from "axios";
import { useQuery } from "react-query";
import { APTOS_NAME_URL, BACKEND_URL, NFT_SCAN } from "../../../config/env";
import { UserData } from "../../controller/UserController";
import { UserNFT } from "../../controller/UserController/models";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useUserNFT = ({ userAddress }) => {
  axios.defaults.headers["X-API-KEY"] = "KeWS6RZ93ae5Upi2VR0bYDsH";
  const fetchUserNFT = async (userAddress: string): Promise<UserNFT> => {
    return await axios
      .get(`${NFT_SCAN}${userAddress}`, {})
      .then((response) => response.data);
  };
  return useQuery({
    queryKey: ["UserNFT", userAddress],
    queryFn: () => fetchUserNFT(userAddress),
    staleTime: 86400000,
  });
};

export const useAptosName = ({ userAddress }) => {
  const getUserAptosName = async (address: string) => {
    return await axios
      .get(`${APTOS_NAME_URL}${address}`)
      .then((response) => response.data);
  };
  return useQuery({
    queryKey: ["userAptosName", userAddress],
    queryFn: () => getUserAptosName(userAddress),
    initialData: "unavailable",
  });
};

export const useUserInfo = ({ userId }) => {
  const getUserInfo = async (userId: string): Promise<UserData> => {
    const user_token = await AsyncStorage.getItem("user_token");
    return await axios
      .get(`${BACKEND_URL}user/${userId}`, {
        headers: {
          Authorization: user_token,
        },
      })
      .then((response) => response.data);
  };

  return useQuery({
    queryKey: ["userInfo", userId],
    queryFn: () => getUserInfo(userId),
  });
};
