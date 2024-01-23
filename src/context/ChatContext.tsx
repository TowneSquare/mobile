import React, { ReactNode, createContext, useState } from "react";
type ChatContextProps = {
  children: ReactNode;
};
interface ReplyTo {
  message: string;
  sender: string;
  id: string;
  type: string;
  mediaImageUri?: string;
}
export type ChatDmContextType = {
  replyingToMessage: ReplyTo;
  setReplyingToMessage: (message: ReplyTo) => void;
};
export const ChatDmContext = createContext<ChatDmContextType>({
  replyingToMessage: {
    message: "",
    sender: "",

    id: "",
    type: "",
    mediaImageUri: "",
  },
  setReplyingToMessage: (message: ReplyTo) => {},
});
const ChatContext: React.FC<ChatContextProps> = ({ children }) => {
  const [replyingToMessage, setReplyingToMessage] = useState<ReplyTo>({
    message: "",
    sender: "",

    id: "",
    type: "",
    mediaImageUri: "",
  });
  const contextValue: ChatDmContextType = {
    replyingToMessage,
    setReplyingToMessage(message) {
      setReplyingToMessage(message);
    },
  };
  return (
    <ChatDmContext.Provider value={contextValue}>
      {children}
    </ChatDmContext.Provider>
  );
};

export default ChatContext;
