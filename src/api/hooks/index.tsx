import axios from 'axios';
import { NFT_SCAN, APTOS_NAME_URL, BACKEND_URL } from '../../../config/env';
import { useQuery } from 'react-query';
import { UserNFT } from '../../controller/UserController/models';
import { initialData } from './dummyData';
import { UserData } from '../../controller/UserController';
import { Image } from 'react-native';

export const useUserNFT = ({ userAddress }) => {
  axios.defaults.headers['X-API-KEY'] = 'OTwwCP3PG9ia9PlgBcCiwqxt';
  const fetchUserNFT = async (userAddress: string): Promise<UserNFT> => {
    return await axios
      .get(`${NFT_SCAN}${userAddress}`, {})
      .then((response) => response.data);
  };
  return useQuery({
    queryKey: ['UserNFT', userAddress],
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
    queryKey: ['userAptosName', userAddress],
    queryFn: () => getUserAptosName(userAddress),
    initialData: 'unavailable',
  });
};

export const useUserInfo = ({ userId, token }) => {
  const getUserInfo = async (
    userId: string,
    token: string
  ): Promise<UserData> => {
    return await axios
      .get(`${BACKEND_URL}user/${userId}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => response.data);
  };

  return useQuery({
    queryKey: ['userInfo', userId],
    queryFn: () => getUserInfo(userId, token),
  });
};
