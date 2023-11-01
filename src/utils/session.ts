import AsyncStorage from "@react-native-async-storage/async-storage";
import { PersistTime, SessionKey } from "../constants";

export const setLoginSession = async (wallet: string) => {
  const session = {
    wallet: wallet,
    expiresAt: Date.now() + PersistTime,
  };
  await AsyncStorage.setItem(SessionKey, JSON.stringify(session));
};

export const getLoginSession = async () => {
  try {
    const data = await AsyncStorage.getItem(SessionKey);
    const session = JSON.parse(data);

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
