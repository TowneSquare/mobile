import React, { useState, createContext, ReactNode } from "react";

type SelectedCollectionContextProps = {
  isModalVisible: boolean;
  handleModalState: () => void;
};

export const SelectedCollectionContext =
  createContext<SelectedCollectionContextProps>({
    isModalVisible: false,
    handleModalState: () => {},
  });
type SelectedCollectionProviderProps = {
  children: ReactNode;
};

export const SelectedCollectionProvider: React.FC<
  SelectedCollectionProviderProps
> = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalState = () => {
    setIsModalVisible((previous) => !previous);
  };
  const contextValue: SelectedCollectionContextProps = {
    isModalVisible,
    handleModalState,
  };

  return (
    <SelectedCollectionContext.Provider value={contextValue}>
      {children}
    </SelectedCollectionContext.Provider>
  );
};
