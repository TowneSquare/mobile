import { useState, useEffect, useRef } from "react";
import { Platform } from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export async function sendPushNotification(
  expoPushToken: string,
  {
    userId = "",
    receiverId = "",
    title = "",
    msg = "",
    navigateTo = "",
    chatId = "",
    name = "",
    pfp = "",
    nickname = "",
  }
) {
  const message = {
    to: expoPushToken,
    sound: "default",
    title: title,
    body: msg,
    data: {
      userId: userId, // sender id
      receiver: receiverId, // receiver id
      message: msg, // message
      navTo: navigateTo,
      chatId: chatId,
      name: name,
      pfp: pfp,
      nickname,
    },
  };

  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  })
    .then(async (res) => {
      const data = await res.json();
      console.log(data);
    })
    .catch((err) => console.log(err));
}

async function registerForPushNotificationsAsync() {
  let token: Notifications.ExpoPushToken;

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = await Notifications.getExpoPushTokenAsync({
      projectId: Constants.expoConfig.extra.eas.projectId,
    });
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  return token.data;
}

export default function usePushNotification() {
  const navigation = useNavigation();
  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();
  const [notification, setNotification] = useState<
    Notifications.Notification | undefined
  >();
  const [expoPushToken, setExpoPushToken] = useState<string>();

  console.log(expoPushToken);
  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log("response");
        let data = response.notification.request.content.data;
        if (data.navTo) {
          navigation.navigate("Conversation", {
            chatId: data.chatId,
            name: data.name,
            nickname: data.nickname,
            pfp: data.pfp,
          });
        }
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return <></>;
}
