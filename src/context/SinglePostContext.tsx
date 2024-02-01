import React, { ReactNode, createContext, useState } from "react";

interface SinglePostContextProps {
  children: ReactNode;
}
export type SinglePostContextType = {
  replyingTo: string;
  setReplyingTo: (username: string) => void;
};

export const SinglePostContext = createContext<SinglePostContextType>({
  replyingTo: "",
  setReplyingTo: (username: string) => {},
});
const SinglePostContextProvider: React.FC<SinglePostContextProps> = ({
  children,
}) => {
  const [replyingToUsername, setReplyingToUsername] = useState("");
  const contextValue: SinglePostContextType = {
    replyingTo: replyingToUsername,
    setReplyingTo(username) {
      setReplyingToUsername(username);
    },
  };
  return (
    <SinglePostContext.Provider value={contextValue}>
      {children}
    </SinglePostContext.Provider>
  );
};

export default SinglePostContextProvider;
