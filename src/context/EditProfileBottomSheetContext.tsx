import { ReactNode, createContext, useState } from 'react';
type EditPictureBottomSheetStateType = {
  isChooseProfilePictureVisible: boolean;
  setProfilePictureBottomSheet: (state: boolean) => void;
  isCollectionBottomSheetVisible: boolean;
  setCollectionBottomSheet: (state: boolean) => void;
  isSelectedCollectionBottomSheetVisible: boolean;
  setSelectedCollectionVisible: (state: boolean) => void;
};
type EditBottomSheetStateProps = {
  children: ReactNode;
};
export const EditProfilePictureContext =
  createContext<EditPictureBottomSheetStateType>({
    isChooseProfilePictureVisible: false,
    isCollectionBottomSheetVisible: false,
    isSelectedCollectionBottomSheetVisible: false,
    setCollectionBottomSheet: (state: boolean) => {},
    setProfilePictureBottomSheet: (state: boolean) => {},
    setSelectedCollectionVisible: (state: boolean) => {},
  });

export const EditProfileBottomSheetProvider: React.FC<
  EditBottomSheetStateProps
> = ({ children }) => {
  const [isChooseProfilePictureVisible, setIsProfilePictureVisible] =
    useState(false);
  const [isCollectionBottomSheetVisible, setCollectionBottomSheetVisible] =
    useState(false);
  const [
    isSelectedCollectionBottomSheetVisible,
    setSelectedCollectionBottomSheetVisible,
  ] = useState(false);

  const contextValue: EditPictureBottomSheetStateType = {
    isChooseProfilePictureVisible,
    isCollectionBottomSheetVisible,
    isSelectedCollectionBottomSheetVisible,
    setCollectionBottomSheet(state) {
      setCollectionBottomSheetVisible(state);
    },

    setProfilePictureBottomSheet(state) {
      setIsProfilePictureVisible(state);
    },
    setSelectedCollectionVisible(state) {
      setSelectedCollectionBottomSheetVisible(state);
    },
  };
  return (
    <EditProfilePictureContext.Provider value={contextValue}>
      {children}
    </EditProfilePictureContext.Provider>
  );
};
