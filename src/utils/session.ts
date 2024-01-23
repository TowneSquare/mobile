import AsyncStorage from "@react-native-async-storage/async-storage";
import { PersistTime, SessionKey } from "../constants";

export const setLoginSession = async (wallet: string, userId: string) => {
export const setLoginSession = async (wallet: string, userId: string) => {
  const session = {
    wallet: wallet,
    userId: userId,
    userId: userId,
    expiresAt: Date.now() + PersistTime,
  };
  await AsyncStorage.setItem(SessionKey, JSON.stringify(session));
};

export const getLoginSession = async () => {
  try {
    const data = await AsyncStorage.getItem(SessionKey);
    const session = JSON.parse(data);
    console.log(session)

    if (session) {
      if (session.expiresAt > Date.now()) {
        return session;
      } else {
        await AsyncStorage.removeItem(SessionKey);
        return undefined;
      }
    }
  } catch {
    return undefined;
  }
};

export const setUserToken = async (token: string) => {
  await AsyncStorage.setItem("usertoken", token);
};
export const getUserToken = async () => {
  try {
    const token = await AsyncStorage.getItem("usertoken");
    return token;
  } catch {
    return undefined;
  }
};
