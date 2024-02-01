import { ReactNode } from "react";
export interface communities {
  image: ReactNode;
  name: string;
  message?: string;
}
export interface friends {
  fromUserId: string;
  toUserId: string;
  _id: string;
}

export interface AssetsData {
  collection: string;
  name: string;
  image_uri: string;
  asset_id: string;
  property_version: string;
}

export interface NFTData {
  collection: string;
  logo_url: string;
  owns_total: number;
  assets: Array<AssetsData>;
}
export interface UserNFT {
  code: number;
  msg: string;
  data: Array<NFTData>;
}
