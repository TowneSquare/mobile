import React, { ReactNode, createContext, useState } from 'react';
export type CommunityDetailsType = {
  selectedCryptoAsset: {
    logo: ReactNode;
    name: string;
    coinId: string;
    amount?: string;
  };
  cryptoAssetAmountType: 'any_amount' | 'specified_amount';
};

type CommunitySettingsContextProps = {
  children: ReactNode;
};
export type SetCommunitySettingsType = {
  communityDetails: Partial<CommunityDetailsType>;
  setCommunityDetails: (details: Partial<CommunityDetailsType>) => void;
  ischooseAssetBottomSheetVisible: boolean;
  setChooseAssetBottomSheetVisibilty: (state: boolean) => void;
  selectedAsset: { logo: ReactNode; Name: string; coinId: string } | undefined;
  setSelectedAsset: (assets: {
    logo: ReactNode;
    Name: string;
    coinId: string;
  }) => void;
  selectedAssetBottomSheetVisibility: boolean;
  setSelectedAssetBottomSheetVisibility: (state: boolean) => void;
};
export const SetCommunitySettingsContext =
  createContext<SetCommunitySettingsType>({
    setCommunityDetails: (details: CommunityDetailsType) => {},
    communityDetails: undefined,
    ischooseAssetBottomSheetVisible: false,
    setChooseAssetBottomSheetVisibilty: (state: boolean) => {},
    selectedAsset: undefined,
    setSelectedAsset: (assets: {
      logo: ReactNode;
      Name: string;
      coinId: string;
    }) => {},
    selectedAssetBottomSheetVisibility: false,
    setSelectedAssetBottomSheetVisibility: (state: boolean) => {},
  });

const CommunitySettingsContext: React.FC<CommunitySettingsContextProps> = ({
  children,
}) => {
  const [communityDetails, setDetails] = useState<
    Partial<CommunityDetailsType>
  >({
    selectedCryptoAsset: {
      logo: <></>,
      name: '',
      coinId: '',
      amount: '',
    },
    cryptoAssetAmountType: 'any_amount',
  });
  const [ischooseAssetBottomSheetVisible, setChooseAssetBottomSheetVisibilty] =
    useState<boolean>(false);
  const [selectedAsset, setSelectedAsset] = useState<
    | {
        logo: ReactNode;
        Name: string;
        coinId: string;
      }
    | undefined
  >(undefined);
  const [
    selectedAssetBottomSheetVisibility,
    setSelectedAssetBottomSheetVisibility,
  ] = useState(false);
  const contextValue: SetCommunitySettingsType = {
    communityDetails,
    setCommunityDetails(details) {
      setDetails(details);
    },
    ischooseAssetBottomSheetVisible,
    setChooseAssetBottomSheetVisibilty(state) {
      setChooseAssetBottomSheetVisibilty(state);
    },
    selectedAsset,
    setSelectedAsset(assets) {
      setSelectedAsset(assets);
    },
    selectedAssetBottomSheetVisibility,
    setSelectedAssetBottomSheetVisibility: (state: boolean) => {
      setSelectedAssetBottomSheetVisibility(state);
    },
  };

  return (
    <SetCommunitySettingsContext.Provider value={contextValue}>
      {children}
    </SetCommunitySettingsContext.Provider>
  );
};

export default CommunitySettingsContext;
