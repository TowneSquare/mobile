import { Timestamp } from 'firebase/firestore';

export type ChatText = {
  id: string;
  createdAt: Timestamp;
  message: {
    messageType: 'text';
    text: string;
  };
  user: {
    _id: string;
    name: string;
  };
  read: boolean;
};
export type ChatDate = {
  dateType: string;
  date: string;
  id: string;
};

export type ChatImage = {
  id: string;
  createdAt: string;
  message: {
    messageType: 'image';
    imageUri: string;
  };
  user: {
    _id: string;
    name: string;
  };
};

export type ChatVideo = {
  id: string;
  createdAt: string;
  message: {
    messageType: 'video';
    imageUri: string;
  };
  user: {
    _id: string;
    name: string;
  };
};

export type ChatGif = {
  id: string;
  createdAt: string;
  message: {
    messageType: 'gif';
    imageUri: string;
  };
  user: {
    _id: string;
    name: string;
  };
};
export type ChatNftAtachment = {
  id: string;
  createdAt: string;
  message: {
    messageType: 'nft';
    imageUri: string;
    collectionImageUri: string;
    collectionName: string;
    collectionId: string;
  };
  user: {
    _id: string;
    name: string;
  };
};
export type ChatNftOffer = {
  id: string;
  createdAt: string;
  message: {
    messageType: 'nftOffer';

    collectionImageUri: string;
    collectionName: string;
    collectionId: string;
    price: string;
    offeredBy: string;
    activeOffer: string;
  };
  user: {
    _id: string;
    name: string;
  };
};

export type DataWithoutChatDate =
  | ChatText
  | ChatImage
  | ChatVideo
  | ChatGif
  | ChatNftAtachment
  | ChatNftOffer;

export type Data =
  | ChatText
  | ChatDate
  | ChatImage
  | ChatVideo
  | ChatGif
  | ChatNftAtachment
  | ChatNftOffer
  | SortedChat;

export type SortedChat = {
  content: DataWithoutChatDate[];
  sortedType: string;
  id: string;
};
