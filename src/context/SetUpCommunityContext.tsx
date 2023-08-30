import React, { useState, createContext, ReactNode } from 'react';
import CommunityNFT from '../components/CreateCommunity/CommunityNFT';
import CryptoAssetView from '../components/CreateCommunity/CryptoAssetView';
import PrivacySettingsView from '../components/CreateCommunity/PrivacySettingsView';
import SelectTokenView from '../components/CreateCommunity/SelectTokenView';
import SelectedAssetView from '../components/CreateCommunity/SelectedAssetView';
import SetCommunityInfo from '../components/CreateCommunity/SetCommunityInfo';
import TokenGateView from '../components/CreateCommunity/TokenGateView';
interface ImageProps {
  uri: string;
  name: string;
  id: number;
}
export type CommunityDetailsType = {
  privacy: 'private' | 'public';
  communityName: string;
  communityPFP: ImageProps;
  gate: 'gated' | 'nongated';
  asset: 'NFT' | 'Crypto_asset';
  selectedCryptoAsset: {
    logo: ReactNode;
    name: string;
    coinId: string;
    amount?: string;
  };
  cryptoAssetAmountType: 'any_amount' | 'specified_amount';
};

export type SetCommunityType = {
  isChooseProfilePictureVisible: boolean;
  setProfilePictureBottomSheet: (state: boolean) => void;

  isCollectionBottomSheetVisible: boolean;
  setCollectionBottomSheet: (state: boolean) => void;

  isSelectedCollectionBottomSheetVisible: boolean;
  setSelectedCollectionVisible: (state: boolean) => void;

  PFPImage: ImageProps | undefined;
  setPFPImage: (nftImage: ImageProps | undefined) => void; // choosing pfp

  selectedNFTImage: ImageProps | undefined;
  setSelectedImage: (nftImage: ImageProps | undefined) => void; // selecting

  ischooseAssetBottomSheetVisible: boolean;
  setChooseAssetBottomSheetVisibilty: (state: boolean) => void;

  selectedAsset: { logo: ReactNode; Name: string; coinId: string } | undefined;
  setSelectedAsset: (assets: {
    logo: ReactNode;
    Name: string;
    coinId: string;
  }) => void;

  setSelectedAssetBottomSheet: (state: boolean) => void;
  selectedAssetVisibility: boolean;

  // assetAmount: string;
  // setAssetAmount: (amount: string) => void;

  setRemoveAssetBottomSheetVisibility: (state: boolean) => void;
  removeAssetBottomSheetVisibility: boolean;

  communityDetails: Partial<CommunityDetailsType>;
  setCommunityDetails: (details: Partial<CommunityDetailsType>) => void;

  views: ReactNode[];
  updateViews: (
    type: 'remove_cryto_asset_view' | 'add_crypto_asset_view'
  ) => void;
  viewIndex: number;
  setViewIndex: (index: number) => void;
};
type ChooseCommunityPFPProps = {
  children: ReactNode;
};
export const SetCommunityContext = createContext<SetCommunityType>({
  isChooseProfilePictureVisible: false,
  isCollectionBottomSheetVisible: false,
  isSelectedCollectionBottomSheetVisible: false,

  setCollectionBottomSheet: (state: boolean) => {},
  setProfilePictureBottomSheet: (state: boolean) => {},
  setSelectedCollectionVisible: (state: boolean) => {},

  PFPImage: undefined,
  setPFPImage: (image: ImageProps) => {},

  selectedNFTImage: undefined,
  setSelectedImage: (nftImage: ImageProps) => {},

  ischooseAssetBottomSheetVisible: false,
  setChooseAssetBottomSheetVisibilty: (state: boolean) => {},
  selectedAsset: undefined,
  setSelectedAsset: (assets: {
    logo: ReactNode;
    Name: string;
    coinId: string;
  }) => {},

  setSelectedAssetBottomSheet: (state: boolean) => {},
  selectedAssetVisibility: false,

  setRemoveAssetBottomSheetVisibility: (state: boolean) => {},
  removeAssetBottomSheetVisibility: false,

  communityDetails: {
    privacy: undefined,
    communityName: '',
    communityPFP: undefined,
    gate: undefined,
    asset: undefined,
    selectedCryptoAsset: {
      logo: <></>,
      name: '',
      coinId: '',
      amount: '',
    },
    cryptoAssetAmountType: 'any_amount',
  },
  setCommunityDetails: (details: Partial<CommunityDetailsType>) => {},
  updateViews: (
    type: 'remove_cryto_asset_view' | 'add_crypto_asset_view'
  ) => {},
  views: [
    <PrivacySettingsView />,
    <SetCommunityInfo />,
    <SelectTokenView />,
    <TokenGateView />,
    <CommunityNFT />,
    <CryptoAssetView />,
    <SelectedAssetView />, // or this
  ],
  viewIndex: 0,
  setViewIndex: (index: number) => {},
});
const SetUpCommunityContext: React.FC<ChooseCommunityPFPProps> = ({
  children,
}) => {
  const [communityDetails, setDetails] = useState<
    Partial<CommunityDetailsType>
  >({
    privacy: undefined,
    communityName: '',
    communityPFP: undefined,
    gate: undefined,
    asset: undefined,
    selectedCryptoAsset: {
      logo: <></>,
      name: '',
      coinId: '',
      amount: '',
    },
    cryptoAssetAmountType: 'any_amount',
    // ... initial values for communityDetails ...
  });
  const [isChooseProfilePictureVisible, setPFPBottomsheet] = useState(false);
  const [isCollectionBottomSheetVisible, setCollectionBottomSheetVisible] =
    useState(false);
  const [selectedAsset, setAsset] = useState<
    | {
        logo: ReactNode;
        Name: string;
        coinId: string;
      }
    | undefined
  >(undefined);
  const [
    isSelectedCollectionBottomSheetVisible,
    setSelectedCollectionBottomSheetVisible,
  ] = useState(false);
  const [PFPImage, setImage] = useState(undefined);
  const [ischooseAssetBottomSheetVisible, setChooseAssetVisibility] =
    useState(false);
  const [selectedNFTImage, setNFTImage] = useState(undefined);

  const [selectedAssetVisibility, setAssetSheetVisibility] = useState(false);

  const [removeAssetBottomSheetVisibility, setRemoveVisibility] =
    useState(false);

  const [views, setView] = useState([
    <PrivacySettingsView />,
    <SetCommunityInfo />,
    <SelectTokenView />,
    <TokenGateView />,
    <SelectedAssetView />, // or this
  ]);
  const [viewIndex, setIndex] = useState(0);
  const contextValue: SetCommunityType = {
    isChooseProfilePictureVisible,
    isCollectionBottomSheetVisible,
    isSelectedCollectionBottomSheetVisible,
    PFPImage,
    selectedNFTImage,
    ischooseAssetBottomSheetVisible,
    selectedAsset,
    selectedAssetVisibility,

    removeAssetBottomSheetVisibility,
    communityDetails,
    views,
    setCollectionBottomSheet(state) {
      setCollectionBottomSheetVisible(state);
    },

    setProfilePictureBottomSheet(state) {
      setPFPBottomsheet(state);
    },
    setSelectedCollectionVisible(state) {
      setSelectedCollectionBottomSheetVisible(state);
    },
    setPFPImage(nftImage) {
      setImage(nftImage);
      setDetails((previousDetails) => ({
        ...previousDetails,
        communityPFP: nftImage,
      }));
    },
    setSelectedImage(nftImage) {
      setNFTImage(nftImage);
    },
    setChooseAssetBottomSheetVisibilty(state) {
      setChooseAssetVisibility(state);
    },
    setSelectedAsset(assets) {
      setAsset(assets);
    },
    setSelectedAssetBottomSheet(state) {
      setAssetSheetVisibility(state);
    },

    setRemoveAssetBottomSheetVisibility(state) {
      setRemoveVisibility(state);
    },
    setCommunityDetails(details) {
      setDetails(details);
    },
    updateViews(type) {
      if (type === 'remove_cryto_asset_view') {
        setView([
          <PrivacySettingsView />,
          <SetCommunityInfo />,
          <SelectTokenView />,
          <TokenGateView />,
          <CommunityNFT />, //This
        ]);
      } else if (type === 'add_crypto_asset_view') {
        setView([
          <PrivacySettingsView />,
          <SetCommunityInfo />,
          <SelectTokenView />,
          <TokenGateView />,
          <CryptoAssetView />,
          // or this
          //This
          <SelectedAssetView />, // this
        ]);
      }
    },
    viewIndex,
    setViewIndex(index) {
      setIndex(index);
    },
  };

  return (
    <SetCommunityContext.Provider value={contextValue}>
      {children}
    </SetCommunityContext.Provider>
  );
};

export default SetUpCommunityContext;
