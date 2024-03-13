import { Timestamp } from "firebase/firestore";
export interface ChatsModel {
  _id: string;
  members: [
    {
      _id: string;
      name: string;
    },
    {
      _id: string;
      name: string;
    }
  ];
  activeMembers:string[];
  memberIds: string[];
  chatName: string;
  lastMessage: {
    text: string;
    createdAt: Timestamp; // Timestamp for the last message
    sender: {
      _id: string;
      name: string;
    };
  };
  unreadCount: number;
  unreadMessagesCount: number;
}

export interface ContactsChatModel {
  _id: string;
  members: [
    {
      _id: string;
      name: string;
    },
    {
      _id: string;
      name: string;
    }
  ];
  memberIds: string[];
  chatName: string;
  lastMessage: {
    text: string;
    createdAt: Timestamp; // Timestamp for the last message
    sender: {
      _id: string;
      name: string;
    };
  };
  unreadCount: number;
  unreadMessagesCount: number;
  pfp: string;
  nickname: string;
}
