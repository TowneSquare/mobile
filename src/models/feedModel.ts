export enum FeedContent {
  MESSAGE_ONLY = "message only",
  MESSAGE_IMAGE = "messageImage",
  GIF = "gif",
  VIDEO = "video",
  message_EXTERNAL_LINK = "message-external-link",
  NFT_FOR_SALE = "nft-for-sale",
  ATTACHED_NFT = "attached-nft",
  SWAP_OPTION_INCLUDED = "swap-option-included",
  FLOOR_PRICE_INCLUDED = "floor-price",
  REPOST = "repost",
}
export interface Message_Only {
  message: string;
}
export interface Message_Image {
  message: string;
  image: string;
}
export interface GIF {
  gif: string;
}
export interface VIDEO {
  video: string;
}
export interface Message_External_Link {
  message: string;
  link: string;
  linkDescription: string;
  linkSubTitle: string;
  url: string;
}
export interface NFT_FOR_SALE {
  message: string;
  collectionPFP: string;
  collectionName: string;
  collectionId: string;
  price: number;
}
export interface ATTACHED_NFT {
  image: string;
  sellerPFP: string;
  collectionId: string;
  collectionName: string;
}
export interface SWAP_OPTION_INCLUDED {
  message: string;
  messageTag: string;
  collectionName: string;
  logo: string;
  price: number;
}
export interface FLOOR_PRICE_INCLUDED {
  message: string;
  messageTag: string;
  collectionName: string;
  amount: number;
}
export interface Repost {
  contentTypeOfRepost: string;
  content:
    | Message_Only
    | Message_Image
    | Message_External_Link
    | NFT_FOR_SALE
    | ATTACHED_NFT
    | SWAP_OPTION_INCLUDED
    | FLOOR_PRICE_INCLUDED
    | GIF
    | VIDEO;
}
export interface UserPost {
  id: string;
  pfp: string;
  username: string;
  nickname: string;
  timepost: string;
  comments: string;
  retweet: string;
  like: string;
  type: string;
  content:
    | Message_Only
    | Message_Image
    | Message_External_Link
    | NFT_FOR_SALE
    | ATTACHED_NFT
    | SWAP_OPTION_INCLUDED
    | FLOOR_PRICE_INCLUDED
    | GIF
    | VIDEO
    | Repost;
}
export interface UserCommunityPost extends UserPost {
  postedin: string;
}
