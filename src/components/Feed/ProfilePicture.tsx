import { Pressable, Text, Dimensions, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import React, {useState} from 'react';
import { UserData } from '../../controller/UserController';
const { height, width } = Dimensions.get('window');
import { sizes } from '../../utils';
import { images, fonts } from '../../constants';
const size = new sizes(height, width);

import { useNavigation } from '@react-navigation/native';
interface Props {
  PFPsize?: number;
  profileImage:string
}

const ProfilePicture = ({ PFPsize, profileImage }: Props) => {
  const navigation = useNavigation();
   const [userData, setUserData] = useState<UserData>({
    _id: "655d71b07123f56056b546d8",
    issuer: "did:ethr:0x8880807e9188a75767c647374d83272d031a0b42",
    aptosWallet: "0x8880807e9188a75767c647374d83272d031a0b42",
    nickname: "TO1",
    username: "TOTO1",
    email: "to@town.com",
    bio: `🖇️ Love everything about blockchain \n🌍3 web3 Native \n 👀 Always on a lookout for blue chips`,
    referralCode: "E1HFN",
    createdAt: "2023-11-20T01:01:59.418Z",
    profileImage:
      "https://townesquare-media.s3.amazonaws.com/20231124T025800.147Z_28i87s00i6s.jpg",
    followers: [],
    following: [],
    badge:[],
    posts: [
      {
        _id: "655df7a347784b1665992617",
        title: "",
        userId: "65372778b8da0e521b8a3587",
        description: "Test post ",
        imageUrls: [""],
        videoUrls: ["https://www.youtube.com/watch?v=EJzB_Fa27ko"],
        createdAt: "2023-11-02T03:01:59.721Z",
        sellNFTPrice: "",
        nftImageUrl: "",
        nftCollection: "",
        nftTokenId: "",
        likes: [
          {
            _id: "6560962a233ac36e73bc42ce",
            userId: "655ab007ce8937ff6d512885",
            postId: "655df7a347784b1665992617",
            createdAt: "2023-11-24T12:25:14.173Z",
          },
        ],
        comments: [
          {
            username: "pelumi_main",
            nickname: "chokey",
            _id: "653878c2a000149cd06b9845",
            content: "POST comment TEstTest",
            userId: "65372778b8da0e521b8a3587",
            postId: "653728bd6171091d6b469bec",
            createdAt: "2023-10-25T02:09:06.310Z",
          },
          {
            username: "pelumi_second",
            nickname: "chokey",
            _id: "653878c2a000149cd06b9845",
            content: "POST comment TEstTest",
            userId: "65372778b8da0e521b8a3587",
            postId: "653728bd6171091d6b469bec",
            createdAt: "2023-10-25T02:09:06.310Z",
          },
        ],
        customer: {
          _id: "65372778b8da0e521b8a3587",
          issuer: "did:ethr:0xcfe8dfc248cef257524ec05374fa6157114e8991",
          aptosWallet: "0xcfe8dfc248cef257524ec05374fa6157114e8991",
          nickname: "test nickname",
          username: "test12",
          email: "test@email.com",
          referralCode: "98N39",
          profileImage: "",
          createdAt: "",
        },
        reposts: [],
        originalCustomer: {
          _id: "65372778b8da0e521b8a3587",
          issuer: "did:ethr:0xcfe8dfc248cef257524ec05374fa6157114e8991",
          aptosWallet: "0xcfe8dfc248cef257524ec05374fa6157114e8991",
          nickname: "test nickname",
          username: "test12",
          email: "test@email.com",
          referralCode: "98N39",
          profileImage: "",
          createdAt: "",
        },
        repost: false,
        originalPostId: "65430c7f372dd89672e9214d",
        originalCustomerId: "65372778b8da0e521b8a3587",
      },
      {
        _id: "6543112773263dcd8d741ba0",
        title: "",
        userId: "65372778b8da0e521b8a3587",
        description: "Test post ",
        imageUrls: [""],
        videoUrls: [""],
        createdAt: "2023-11-02T03:01:59.721Z",
        sellNFTPrice: "",
        nftImageUrl:
          "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png",
        nftCollection: "APtomingos",
        nftTokenId: "Aptomingo #123",
        likes: [
          {
            _id: "6560962a233ac36e73bc42ce",
            userId: "655ab007ce8937ff6d512885",
            postId: "655df7a347784b1665992617",
            createdAt: "2023-11-24T12:25:14.173Z",
          },
        ],
        comments: [
          {
            username: "pelumi_main",
            nickname: "chokey",
            _id: "653878c2a000149cd06b9845",
            content: "POST comment TEstTest",
            userId: "65372778b8da0e521b8a3587",
            postId: "653728bd6171091d6b469bec",
            createdAt: "2023-10-25T02:09:06.310Z",
          },
          {
            username: "pelumi_second",
            nickname: "chokey",
            _id: "653878c2a000149cd06b9845",
            content: "POST comment TEstTest",
            userId: "65372778b8da0e521b8a3587",
            postId: "653728bd6171091d6b469bec",
            createdAt: "2023-10-25T02:09:06.310Z",
          },
        ],
        customer: {
          _id: "65372778b8da0e521b8a3587",
          issuer: "did:ethr:0xcfe8dfc248cef257524ec05374fa6157114e8991",
          aptosWallet: "0xcfe8dfc248cef257524ec05374fa6157114e8991",
          nickname: "test nickname",
          username: "test12",
          email: "test@email.com",
          referralCode: "98N39",
          profileImage: "",
          createdAt: "",
        },
        reposts: [],
        originalCustomer: {
          _id: "65372778b8da0e521b8a3587",
          issuer: "did:ethr:0xcfe8dfc248cef257524ec05374fa6157114e8991",
          aptosWallet: "0xcfe8dfc248cef257524ec05374fa6157114e8991",
          nickname: "test nickname",
          username: "test12",
          email: "test@email.com",
          referralCode: "98N39",
          profileImage: "",
          createdAt: "",
        },
        repost: false,
        originalPostId: "65430c7f372dd89672e9214d",
        originalCustomerId: "65372778b8da0e521b8a3587",
      },
    ],
    groups: [],
    superstars: {
      _id: "6563f507f07bc47317331a30",
      nftInfoArray: [
        {
          nftTokenId: "Aptomingo #111",
          nftImageUrl:
            "https://airnfts.s3.amazonaws.com/nft-images/20210821/This_is_Link_1629558829889.png",
          nftCollection: "Aptomingos",
        },
        {
          nftTokenId: "Aptomingo #112",
          nftImageUrl:
            "https://airnfts.s3.amazonaws.com/nft-images/20210821/This_is_Link_1629558829889.png",
          nftCollection: "Aptomingos",
        },
        {
          nftTokenId: "Aptomingo #113",
          nftImageUrl:
            "https://airnfts.s3.amazonaws.com/nft-images/20210821/This_is_Link_1629558829889.png",
          nftCollection: "Aptomingos",
        },
      ],
      customerId: "655ab007ce8937ff6d512885",
      createdAt: "2023-11-27T01:46:47.630Z",
    },
    comments: [
      {
        _id: "656495e6f07bc47317331a32",
        content: "Test Content",
        imageUrls: ["https://image.com/image1"],
        videoUrls: ["https://video.com/video1"],
        userId: "655ab007ce8937ff6d512885",
        postId: "655df7a347784b1665992617",
        createdAt: "2023-11-27T13:13:10.776Z",
        postInfo: {
          _id: "655df7a347784b1665992617",
          description: "Test Post - 4",
          sellNFTPrice: "20.4",
          nftTokenId: "Aptomingo #123",
          nftCollection: "APtomingos",
          nftImageUrl:
            "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?format=png&width=960",
          userId: "655ab007ce8937ff6d512885",
          createdAt: "2023-11-22T12:44:19.364Z",
          imageUrls: [""],
          isSwapApt: false,
          videoUrls: [""],
          sellPrice: "",
        },
      },
      {
        _id: "655bfe3a45ec78b4b2d04863",
        content: "Test Content",
        imageUrls: ["https://image.com/image1", "https://image.com/image2"],
        videoUrls: ["https://video.com/video1", "https://video.com/video2"],
        userId: "655ab007ce8937ff6d512885",
        postId: "655ab012ce8937ff6d512886",
        createdAt: "2023-11-21T00:47:54.262Z",
        postInfo: {
          _id: "655df7a347784b1665992617",
          description: "Test Post - 4",
          sellNFTPrice: "20.4",
          nftTokenId: "Aptomingo #123",
          nftCollection: "APtomingos",
          nftImageUrl:
            "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?format=png&width=960",
          userId: "655ab007ce8937ff6d512885",
          createdAt: "2023-11-22T12:44:19.364Z",
          imageUrls: [""],
          isSwapApt: false,
          videoUrls: [""],
          sellPrice: "",
        },
      },
    ],
  });
  return (
    <Pressable onPress={() => navigation.navigate('TheirProfileScreen', {
      userData
    })}>
      <Avatar
        source={{uri:profileImage}}
        rounded
        size={PFPsize ? size.getHeightSize(PFPsize) : size.getHeightSize(40)}
      />
    </Pressable>
  );
};

export default ProfilePicture;
