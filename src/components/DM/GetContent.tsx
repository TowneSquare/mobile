import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import { sizes } from '../../utils';
import { appColor, images } from '../../constants';
import { ChatClass } from '../../utils/ChatUtils';
import ActionButton from '../../shared/ActionButton';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import CharReplyIcon from '../../../assets/images/svg/ChatReplyIcon';
import { Avatar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import ChatTipIcon from '../../../assets/images/svg/ChatTipIcon';
dayjs.extend(relativeTime);
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

type ChatText = {
  id: string;
  message: {
    messageType: 'text';
    text: string;
    createdAt: string;
  };
  user: {
    id: string;
    name: string;
  };
};

type ChatImage = {
  id: string;
  message: {
    messageType: 'image';
    imageUri: string;
    createdAt: string;
  };
  user: {
    id: string;
    name: string;
  };
};
type ChatVideo = {
  id: string;
  message: {
    messageType: 'video';
    imageUri: string;
    createdAt: string;
  };
  user: {
    id: string;
    name: string;
  };
};
type ChatGif = {
  id: string;
  message: {
    messageType: 'gif';
    imageUri: string;
    createdAt: string;
  };
  user: {
    id: string;
    name: string;
  };
};
type ChatNftAtachment = {
  id: string;
  message: {
    messageType: 'nft';
    imageUri: string;
    createdAt: string;
    collectionImageUri: string;
    collectionName: string;
    collectionId: string;
  };
  user: {
    id: string;
    name: string;
  };
};
type ChatNftOffer = {
  id: string;
  message: {
    messageType: 'nftOffer';
    imageUri: string;
    createdAt: string;
    collectionImageUri: string;
    collectionName: string;
    collectionId: string;
    price: string;
    offeredBy: string;
    activeOffer: string;
  };
  user: {
    id: string;
    name: string;
  };
};
type ChatReplied = {
  id: string;
  message: {
    messageType: 'replied';
    reply: 'nft' | 'text' | 'image' | 'video' | 'gif' | 'nftOffer';
  };
  replied: {
    id: string;
    message: {
      messageType: 'text' | 'video' | 'NFT' | 'GIF' | 'NFT Offer' | 'Image';
      text: string;
      createdAt: string;
    };
    user: {
      id: string;
      name: string;
    };
  };
  reply: Data;
  user: {
    id: string;
    name: string;
  };
};

type Funds = {
  id: string;
  message: {
    messageType: 'funds';
    createdAt: string;
    amount: string;
  };
  user: {
    id: string;
    name: string;
  };
};

type Data =
  | ChatText
  | ChatImage
  | ChatVideo
  | ChatGif
  | ChatNftAtachment
  | ChatNftOffer
  | ChatReplied
  | Funds;
interface Props {
  data: Data;
  chatUtilsInstance: ChatClass;
}
const GetContent = ({ data, chatUtilsInstance }: Props) => {
  let { id, user, message } = data as Data;
  const navigation = useNavigation();
  switch (message.messageType) {
    case 'text':
      const urlPattern = /(https?:\/\/[^\s]+)/g;
      const texts = message.text.split(urlPattern);
      return (
        <View style={{}}>
          <View
            style={[
              user.id !== '1' ? styles.messageContainer : styles.container,
            ]}
          >
            <Text>
              {texts.map((text, index) =>
                text === '' ? (
                  <></>
                ) : urlPattern.test(text) ? (
                  <Text
                    style={{
                      color: appColor.primaryLight,
                    }}
                  >
                    {text}
                  </Text>
                ) : (
                  <Text style={styles.message}>{text}</Text>
                )
              )}
            </Text>
          </View>
        </View>
      );
    case 'image':
      return (
        <View>
          <View style={user.id !== '1' ? styles.imageView2 : styles.imageView}>
            <Image
              source={images.feedImage1}
              style={user.id !== '1' ? styles.imageStyle2 : styles.imageStyle}
              resizeMode="cover"
            />
          </View>
        </View>
      );
    case 'video':
      return (
        <View>
          <View style={user.id !== '1' ? styles.videoView : styles.videoView2}>
            <Image
              source={images.feedImage3}
              style={user.id !== '1' ? styles.videoStyle : styles.videoStyle2}
              resizeMode="cover"
            />
          </View>
        </View>
      );
    case 'gif':
      return (
        <View>
          <View style={user.id !== '1' ? styles.imageView2 : styles.imageView}>
            <Image
              source={images.feedImage2}
              style={user.id !== '1' ? styles.imageStyle2 : styles.imageStyle}
              resizeMode="cover"
            />
          </View>
        </View>
      );
    case 'nft':
      return (
        <View
          style={{
            gap: size.getHeightSize(8),
          }}
        >
          <View
            style={{
              height: size.getHeightSize(267),
              width: size.getWidthSize(264),
              borderRadius: 8,
            }}
          >
            <Image
              source={images.feedImage5}
              style={{ width: '100%', height: '100%', borderRadius: 8 }}
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: size.getWidthSize(4),
              alignSelf: 'flex-start',
            }}
          >
            <Avatar
              source={images.collectionImage}
              size={size.getHeightSize(16)}
              rounded
            />
            <Text
              style={{
                color: appColor.kTextColor,
                fontSize: size.fontSize(14),
                fontFamily: 'Outfit-Regular',
                lineHeight: size.getHeightSize(18),
                textAlign: 'left',
              }}
            >
              Aptomingos
            </Text>
          </View>
          <Text
            style={{
              color: appColor.kTextColor,
              fontSize: size.fontSize(16),
              fontFamily: 'Outfit-Medium',
              lineHeight: size.getHeightSize(21),
              textAlign: 'left',
            }}
          >
            Aptomingos #9280
          </Text>
        </View>
      );
    case 'nftOffer':
      return (
        <View>
          <View
            style={user.id !== '1' ? styles.nftOfferView : styles.nftOfferView2}
          >
            <Image
              source={images.siothian}
              style={
                user.id !== '1' ? styles.nftOfferImage2 : styles.nftOfferImage
              }
              resizeMode="cover"
            />
            <View
              style={{
                position: 'absolute',
                paddingVertical: size.getHeightSize(8),
                paddingHorizontal: size.getWidthSize(16),
                backgroundColor: '#00000070',
                width: size.getWidthSize(264),
                bottom: 0,
              }}
            >
              <Text
                style={{
                  color: appColor.kTextColor,
                  fontSize: size.fontSize(14),
                  fontFamily: 'Outfit-SemiBold',
                  lineHeight: size.getHeightSize(18),
                }}
              >
                SIOthian #3798
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: size.getWidthSize(4),
                }}
              >
                <Avatar
                  size={size.getHeightSize(16)}
                  source={images.NftCollection}
                  rounded
                />
                <Text
                  style={{
                    color: appColor.kTextColor,
                    fontSize: size.fontSize(14),
                    fontFamily: 'Outfit-Regular',
                    lineHeight: size.getHeightSize(18),
                  }}
                >
                  SIOthians
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingVertical: size.getHeightSize(8),
              paddingHorizontal: size.getWidthSize(16),
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: appColor.grayDark,
              width: size.getWidthSize(264),
            }}
          >
            <View
              style={{
                gap: size.getHeightSize(2),
              }}
            >
              <Text
                style={{
                  color: appColor.kTextColor,
                  fontSize: size.fontSize(14),
                  fontFamily: 'Outfit-Regular',
                  lineHeight: size.getHeightSize(18),
                }}
              >
                Price
              </Text>
              <Text
                style={{
                  color: appColor.kTextColor,
                  fontSize: size.fontSize(20),
                  fontFamily: 'Outfit-SemiBold',
                  lineHeight: size.getHeightSize(24),
                  letterSpacing: 0.4,
                }}
              >
                0.00009 APT
              </Text>
            </View>
            <Pressable
              onPress={() => {
                navigation.navigate('NFTOffer', {
                  type: user.id === '1' ? 'myOffer' : 'theirOffer',
                });
              }}
              style={{
                backgroundColor: appColor.kSecondaryButtonColor,
                paddingVertical: size.getHeightSize(7),
                paddingHorizontal: size.getWidthSize(24),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 40,
              }}
            >
              <Text
                style={{
                  color: appColor.kTextColor,
                  fontSize: size.fontSize(16),
                  fontFamily: 'Outfit-Medium',
                  lineHeight: size.getHeightSize(20),
                  letterSpacing: 0.32,
                }}
              >
                View
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: size.getWidthSize(8),
              paddingVertical: size.getHeightSize(6),
              width: size.getWidthSize(264),
            }}
          >
            <View
              style={{
                flex: 1,
                gap: size.getHeightSize(2),
              }}
            >
              <Text
                style={{
                  color: appColor.kGrayscale,
                  fontSize: size.fontSize(11),
                  fontFamily: 'Outfit-SemiBold',
                  lineHeight: size.getHeightSize(14),
                  letterSpacing: 0.44,
                }}
              >
                OFFERED BY
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: size.getWidthSize(4),
                }}
              >
                <Avatar
                  source={images.pfpImage}
                  size={size.getHeightSize(16)}
                  rounded
                />
                <Text
                  style={{
                    color: appColor.kTextColor,
                    fontSize: size.fontSize(14),
                    fontFamily: 'Outfit-SemiBold',
                    lineHeight: size.getHeightSize(18),
                  }}
                >
                  You
                </Text>
              </View>
            </View>
            <View>
              <View
                style={{
                  alignItems: 'flex-end',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: size.getWidthSize(4),
                  }}
                >
                  <View style={styles.greenIndicator} />
                  <Text
                    style={{
                      color: appColor.kGrayscale,
                      fontSize: size.fontSize(11),
                      fontFamily: 'Outfit-SemiBold',
                      lineHeight: size.getHeightSize(14),
                      textAlign: 'right',
                      letterSpacing: 0.44,
                    }}
                  >
                    ACTIVE OFFER
                  </Text>
                </View>

                <Text
                  style={{
                    color: appColor.kTextColor,
                    fontSize: size.fontSize(14),
                    fontFamily: 'Outfit-SemiBold',
                    lineHeight: size.getHeightSize(18),
                  }}
                >
                  2d 45h 33m
                </Text>
              </View>
            </View>
          </View>
        </View>
      );
    case 'replied':
      const replyData = data;
      let {
        id: chatId,
        message: msg,
        replied: taggedReply,
        user: usr,
        reply,
      } = replyData as ChatReplied;
      return (
        <View>
          <View
            style={usr.id === '1' ? styles.repliedView1 : styles.repliedView2}
          >
            <View
              style={
                user.id === '1' ? styles.myReplyView : styles.theirReplyView
              }
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  gap: size.getWidthSize(4),
                  paddingVertical: size.getHeightSize(10),
                  paddingHorizontal: size.getWidthSize(14),
                  justifyContent: 'space-between',
                }}
              >
                <View style={styles.replyToContainer}>
                  <View style={styles.replyToView}>
                    <CharReplyIcon size={size.getHeightSize(20)} />
                    <Text numberOfLines={1} style={styles.replyTo}>
                      Reply to{' '}
                      <Text
                        style={{
                          fontFamily: 'Outfit-SemiBold',
                        }}
                      >
                        UsernameX
                      </Text>
                    </Text>
                  </View>
                  {message.reply !== 'text' ? (
                    <Text style={styles.messageText}>
                      {taggedReply.message.messageType}
                    </Text>
                  ) : (
                    <Text numberOfLines={1} style={styles.mediaText}>
                      {taggedReply.message.text}
                    </Text>
                  )}
                </View>
                {message.reply !== 'text' && (
                  <View style={styles.mediaView}>
                    <Image
                      source={images.siothian}
                      style={styles.imageStyle3}
                    />
                  </View>
                )}
              </View>
              <View
                style={
                  user.id === '1' ? styles.myReplyView2 : styles.theirReplyView2
                }
              >
                <Text style={styles.replyText}>
                  It's really cool. I like it. I will buy it.
                </Text>
              </View>
            </View>
          </View>
        </View>
      );
    case 'funds':
      let {
        id: fundsChatId,
        message: fundMessage,
        user: userDetails,
      } = data as Funds;
      return (
        <View>
          <View
            style={[
              user.id !== '1'
                ? styles.theirFundsContainer
                : styles.fundsContainer,
            ]}
          >
            <View style={{ gap: size.getWidthSize(2) }}>
              <View
                style={{
                  gap: size.getHeightSize(5),
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    fontFamily: 'Outfit-Regular',
                    color: appColor.kTextColor,
                    fontSize: size.fontSize(13),
                    lineHeight: size.getHeightSize(16),
                  }}
                >
                  {user.id === '1' ? 'You sent' : ' You received'}
                </Text>
                <ChatTipIcon size={size.getHeightSize(16)} />
              </View>
              <Text
                style={{
                  fontFamily: 'Outfit-SemiBold',
                  color: appColor.kTextColor,
                  fontSize: size.fontSize(20),
                  lineHeight: size.getHeightSize(24),
                  letterSpacing: 0.4,
                }}
              >
                20 APT
              </Text>
            </View>
            <View
              style={{
                minHeight: size.getHeightSize(34),
                paddingHorizontal: size.getWidthSize(16),
                paddingVertical: size.getHeightSize(8),
                backgroundColor: appColor.kWhiteColor,
                borderRadius: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  color: appColor.kButtonTextColor,
                  letterSpacing: 0.32,
                  fontFamily: 'Outfit-Medium',
                  fontSize: size.fontSize(16),
                  lineHeight: size.getHeightSize(20),
                  textAlign: 'center',
                }}
              >
                View details
              </Text>
            </View>
          </View>
        </View>
      );
  }
};

export default GetContent;
const styles = StyleSheet.create({
  timeStamp: {
    color: appColor.grayLight,
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(18),
    textAlign: 'right',
  },
  message: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(24),
    textAlign: 'left',
  },
  container: {
    paddingVertical: size.getHeightSize(10),
    paddingHorizontal: size.getWidthSize(14),
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: appColor.primaryLight,
  },
  view1: {
    gap: size.getHeightSize(8),
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: size.getWidthSize(16),
  },
  view2: {
    flex: 1,
    gap: size.getHeightSize(6),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(4),
  },
  name: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
  },
  username: {
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    color: appColor.kgrayColor,
    lineHeight: size.getHeightSize(18),
    flex: 1,
  },
  messageContainer: {
    paddingVertical: size.getHeightSize(10),
    paddingHorizontal: size.getWidthSize(14),
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: appColor.grayDark,
    alignSelf: 'flex-start',
  },
  dateContainer: {
    marginVertical: size.getHeightSize(16),
    marginHorizontal: size.getWidthSize(16),
  },
  view3: {
    alignSelf: 'center',
    width: '100%',
    height: size.getHeightSize(1),
    backgroundColor: '#293056',
    justifyContent: 'center',
  },
  absolute: {
    alignSelf: 'center',
    position: 'absolute',
  },
  date: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(20),
    backgroundColor: appColor.feedBackground,
    paddingHorizontal: size.getWidthSize(24),
    paddingVertical: size.getHeightSize(8),
  },
  timeStamp2: {
    color: appColor.grayLight,
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(18),
  },
  imageView: {
    height: size.getHeightSize(218),
    width: size.getWidthSize(264),
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    marginBottom: size.getHeightSize(4),
  },
  imageView2: {
    height: size.getHeightSize(218),
    width: size.getWidthSize(264),
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    marginBottom: size.getHeightSize(4),
  },
  videoView: {
    height: size.getHeightSize(160),
    width: size.getWidthSize(283),
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    marginBottom: size.getHeightSize(4),
  },
  videoView2: {
    height: size.getHeightSize(160),
    width: size.getWidthSize(283),
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    marginBottom: size.getHeightSize(4),
  },
  videoStyle: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    width: '100%',
    height: '100%',
  },
  videoStyle2: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    width: '100%',
    height: '100%',
  },
  imageStyle: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    width: '100%',
    height: '100%',
  },
  imageStyle2: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    width: '100%',
    height: '100%',
  },
  nftOfferImage: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 8,
  },
  nftOfferImage2: {
    height: '100%',
    width: '100%',
    borderTopRightRadius: 8,
  },
  nftOfferView: {
    height: size.getHeightSize(275),
    width: size.getWidthSize(264),
    borderTopLeftRadius: 8,
  },
  nftOfferView2: {
    height: size.getHeightSize(275),
    width: size.getWidthSize(264),
    borderTopRightRadius: 8,
  },
  repliedView1: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(4),
    justifyContent: 'space-between',
  },
  repliedView2: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(4),
    borderTopRightRadius: 8,
    justifyContent: 'space-between',
    // alignSelf: 'flex-end',
  },
  theirReplyView: {
    backgroundColor: appColor.kGrayLight3,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  theirReplyView2: {
    paddingHorizontal: size.getWidthSize(14),
    paddingVertical: size.getHeightSize(10),
    backgroundColor: appColor.grayDark,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  replyText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(18),
  },
  imageStyle3: {
    height: '100%',
    width: '100%',
    borderRadius: 8,
  },
  mediaView: {
    height: size.getHeightSize(44),
    width: size.getWidthSize(44),
    borderRadius: 2,
  },
  mediaText: {
    color: appColor.kGrayscale,
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(18),
  },
  messageText: {
    color: appColor.kGrayscale,
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(18),
  },
  replyTo: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(18),
    maxWidth: size.getWidthSize(152),
  },
  replyToView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
  },
  replyToContainer: {
    // flex: 1,
  },
  myReplyView: {
    backgroundColor: appColor.grayDark,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  myReplyView2: {
    paddingHorizontal: size.getWidthSize(14),
    paddingVertical: size.getHeightSize(10),
    backgroundColor: appColor.kSecondaryButtonColor,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  greenIndicator: {
    height: size.getHeightSize(8),
    width: size.getWidthSize(8),
    borderRadius: 50,
    backgroundColor: appColor.success,
  },
  redIndicator: {
    height: size.getHeightSize(8),
    width: size.getWidthSize(8),
    borderRadius: 50,
    backgroundColor: appColor.error,
  },
  fundsContainer: {
    paddingVertical: size.getHeightSize(10),
    paddingHorizontal: size.getWidthSize(14),
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: appColor.primaryLight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: size.getWidthSize(8),
    width: size.getWidthSize(280),
  },
  theirFundsContainer: {
    paddingVertical: size.getHeightSize(10),
    paddingHorizontal: size.getWidthSize(14),
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: appColor.grayDark,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: size.getWidthSize(8),
    width: size.getWidthSize(280),
  },
});
