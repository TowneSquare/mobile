export interface ChatsModel {
    _id: string;
    user: {
      _id: string;
      name: string;
    };
    chatName: string;
    lastMessage: {
      text: string;
      createdAt: number; // Timestamp for the last message
      user: {
        _id: string;
        name: string;
      };
    };
    unreadCount: number;
  }