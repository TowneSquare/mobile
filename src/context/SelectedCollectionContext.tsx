import { useState, createContext, ReactNode } from 'react';

type SelectedCollectionContextProps = {
  isModalVisible: boolean;
  handleModalState: () => void;
  modalType: 'createPost' | 'DM';
  handleModalType: (type: 'createPost' | 'DM') => void;
};

export const SelectedCollectionContext =
  createContext<SelectedCollectionContextProps>({
    isModalVisible: false,
    handleModalState: () => {},
    modalType: 'createPost',
    handleModalType: () => {},
  });
type SelectedCollectionProviderProps = {
  children: ReactNode;
};

export const SelectedCollectionProvider: React.FC<
  SelectedCollectionProviderProps
> = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalType, setModalType] = useState<'createPost' | 'DM'>('createPost');
  const handleModalState = () => {
    setIsModalVisible((previous) => !previous);
  };
  const contextValue: SelectedCollectionContextProps = {
    isModalVisible,
    handleModalState,
    modalType,
    handleModalType(type) {
      setModalType(type);
    },
  };

  return (
    <SelectedCollectionContext.Provider value={contextValue}>
      {children}
    </SelectedCollectionContext.Provider>
  );
};
