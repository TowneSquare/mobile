import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Pressable,
  Animated,
  ActivityIndicator,
} from 'react-native';
import { useRef, useReducer } from 'react';
const { height, width } = Dimensions.get('window');
import { sizes } from '../../utils';
import { useContext } from 'react';
import { ChatDmContext } from '../../context/ChatContext';
const size = new sizes(height, width);
import { Avatar } from 'react-native-elements';
import { appColor, images } from '../../constants';
import { Timestamp } from '@firebase/firestore';
import dayjs from 'dayjs';
import { useAppSelector } from '../../controller/hooks';
import relativeTime from 'dayjs/plugin/relativeTime';
import {
  ChatText,
  ChatDate,
  Data,
  SortedChat,
  DataWithoutChatDate,
} from '../../models/conversationModel';
import { ChatClass } from '../../utils/ChatUtils';
dayjs.extend(relativeTime);
import {
  HandlerStateChangeEvent,
  Swipeable,
} from 'react-native-gesture-handler';
import GetContent from '../../components/DM/GetContent';
import SwipeArrowIcon from '../../../assets/images/svg/SwipeArrowIcon';

type State = {
  backgroundColor: '#222222' | 'transparent';
  messageId: string;
};
type Action = {
  type: 'ChangeBGColor';
  payload: {
    bgColor: '#222222' | 'transparent';
    messageId: string;
  };
};

interface Props {
  data: ChatText | ChatDate;
  showReplyingTo: () => void;
  chatUtilsInstance: ChatClass;
  onProfilePictureLongPress: () => void;
}

function isDate(data: Data): data is ChatDate {
  return (data as ChatDate).dateType !== undefined;
}
function isSortedType(data: Data): data is SortedChat {
  return 'sortedType' in data === true;
}

function getTimeStamp(createdAt: Timestamp, uid: string) {
  if (createdAt) {
    const jsDate: Date = createdAt.toDate();
    const formattedTime: string = jsDate.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });

    return <Text style={styles.timeStamp}>{formattedTime}</Text>;
  } else {
    return (
      <View style={styles.sendingView}>
        <Text style={styles.sendingText}>Sending...</Text>
        <ActivityIndicator
          size={size.getHeightSize(16)}
          color={appColor.primaryLight}
        />
      </View>
    );
  }
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'ChangeBGColor':
      return {
        backgroundColor: action.payload.bgColor,
        messageId: action.payload.messageId,
      };
  }
};
const Messages = ({ data, showReplyingTo, chatUtilsInstance }: Props) => {
  const { setReplyingToMessage } = useContext(ChatDmContext);
  const uid = useAppSelector((state) => state.USER.UserData._id);
  const swipeRef = useRef<Swipeable>();
  const [selected, dispatch] = useReducer(reducer, {
    backgroundColor: 'transparent',
    messageId: '',
  });

  const updateReplyText = (data) => {
    if (data.message.messageType == 'text') {
      setReplyingToMessage({
        id: data.id,
        message: data.message.text,
        sender: data.user.name,
        type: data.message.messageType,
      });
    } else if (data.message.messageType == 'replied') {
      setReplyingToMessage({
        id: data.id,
        message: data.message.reply,
        sender: data.user.name,
        type: 'text',
      });
    }
  };

  const leftSwipe = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-16, 34, 84, 83],
    });

    return (
      <Animated.View
        style={{
          transform: [{ translateX: trans }],
          justifyContent: 'center',
        }}
      >
        <SwipeArrowIcon
          size={size.getHeightSize(24)}
          style={{
            alignSelf: 'flex-end',
          }}
        />
      </Animated.View>
    );
  };
  let content: JSX.Element;

  if (!isDate(data)) {
    if (isSortedType(data)) {
      const contents = data.content;
      // console.log(content);
      contents.map((messageContent, index) => {
        const { id, user } = messageContent;

        if (user._id === '12345') {
          content = (
            <View
              style={{
                backgroundColor:
                  id === selected.messageId
                    ? selected.backgroundColor
                    : 'transparent',
                paddingVertical: size.getHeightSize(8),
              }}
            >
              <Swipeable
                ref={swipeRef}
                onEnded={() => {
                  dispatch({
                    type: 'ChangeBGColor',
                    payload: {
                      bgColor: 'transparent',
                      messageId: '',
                    },
                  });
                }}
                friction={2}
                renderLeftActions={leftSwipe}
                rightThreshold={40}
                onFailed={() => {}}
                onSwipeableOpen={() => {}}
                onBegan={() => {}}
                onSwipeableWillOpen={() => {
                  showReplyingTo();
                  swipeRef.current.close();
                  dispatch({
                    type: 'ChangeBGColor',
                    payload: {
                      bgColor: 'transparent',
                      messageId: '',
                    },
                  });
                }}
                onActivated={(
                  event: HandlerStateChangeEvent<Record<string, unknown>>
                ) => {
                  const state = event.nativeEvent.state;
                  state === 4 &&
                    dispatch({
                      type: 'ChangeBGColor',
                      payload: {
                        bgColor: '#222222',
                        messageId: id,
                      },
                    });
                }}
              >
                <View
                  style={{
                    gap: size.getHeightSize(6),
                    alignSelf: 'flex-end',
                    paddingRight: size.getWidthSize(8),
                    paddingLeft: size.getWidthSize(64),
                  }}
                >
                  <GetContent
                    uid={uid}
                    data={messageContent}
                    chatUtilsInstance={chatUtilsInstance}
                  />
                  {messageContent.createdAt &&
                    getTimeStamp(data.createdAt, uid)}
                </View>
              </Swipeable>
            </View>
          );
        } else {
          content = (
            <View
              style={{
                backgroundColor:
                  id === selected.messageId
                    ? selected.backgroundColor
                    : 'transparent',
                paddingVertical: size.getHeightSize(8),
              }}
            >
              <Swipeable
                ref={swipeRef}
                onEnded={() => {
                  dispatch({
                    type: 'ChangeBGColor',
                    payload: {
                      bgColor: 'transparent',
                      messageId: '',
                    },
                  });
                }}
                friction={3}
                renderLeftActions={leftSwipe}
                rightThreshold={0}
                onFailed={() => {}}
                onSwipeableOpen={() => {}}
                onBegan={() => {}}
                onSwipeableWillOpen={() => {
                  showReplyingTo();
                  swipeRef.current.close();
                  dispatch({
                    type: 'ChangeBGColor',
                    payload: {
                      bgColor: 'transparent',
                      messageId: '',
                    },
                  });
                }}
                onActivated={(
                  event: HandlerStateChangeEvent<Record<string, unknown>>
                ) => {
                  const state = event.nativeEvent.state;
                  state === 4 &&
                    dispatch({
                      type: 'ChangeBGColor',
                      payload: {
                        bgColor: '#222222',
                        messageId: id,
                      },
                    });
                }}
              >
                <View style={styles.view1}>
                  <Avatar
                    source={images.pfpImage}
                    size={size.getHeightSize(40)}
                    rounded
                  />
                  <View style={styles.view2}>
                    <GetContent
                      uid={uid}
                      data={messageContent}
                      chatUtilsInstance={chatUtilsInstance}
                    />
                    {messageContent.createdAt &&
                      getTimeStamp(data.createdAt, uid)}
                  </View>
                </View>
              </Swipeable>
            </View>
          );
        }
      });
      return content;
    } else {
      const {
        id,
        message: { messageType, text },
        user,
      } = data;
      // console.log('=====data======');
      // console.log(data);
      if (user._id === '12345') {
        content = (
          <View
            style={{
              backgroundColor:
                id === selected.messageId
                  ? selected.backgroundColor
                  : 'transparent',
              paddingVertical: size.getHeightSize(8),
            }}
          >
            <Swipeable
              ref={swipeRef}
              onEnded={() => {
                dispatch({
                  type: 'ChangeBGColor',
                  payload: {
                    bgColor: 'transparent',
                    messageId: '',
                  },
                });
              }}
              friction={2}
              renderLeftActions={leftSwipe}
              rightThreshold={40}
              onFailed={() => {}}
              onSwipeableOpen={(event) => {}}
              onBegan={() => {}}
              onSwipeableWillOpen={(event) => {
                updateReplyText(data);
                showReplyingTo();
                if (data.message.messageType) swipeRef.current.close();
                dispatch({
                  type: 'ChangeBGColor',
                  payload: {
                    bgColor: 'transparent',
                    messageId: '',
                  },
                });
              }}
              onActivated={(
                event: HandlerStateChangeEvent<Record<string, unknown>>
              ) => {
                const state = event.nativeEvent.state;
                state === 4 &&
                  dispatch({
                    type: 'ChangeBGColor',
                    payload: {
                      bgColor: '#222222',
                      messageId: id,
                    },
                  });
              }}
            >
              <View
                style={{
                  gap: size.getHeightSize(6),
                  alignSelf: 'flex-end',
                  paddingRight: size.getWidthSize(8),
                  paddingLeft: size.getWidthSize(64),
                }}
              >
                <GetContent
                  uid={uid}
                  data={data}
                  chatUtilsInstance={chatUtilsInstance}
                />
                {getTimeStamp(data.createdAt, uid)}
              </View>
            </Swipeable>
          </View>
        );
      } else {
        content = (
          <View
            style={{
              backgroundColor:
                id === selected.messageId
                  ? selected.backgroundColor
                  : 'transparent',
              paddingVertical: size.getHeightSize(8),
            }}
          >
            <Swipeable
              ref={swipeRef}
              onEnded={() => {
                dispatch({
                  type: 'ChangeBGColor',
                  payload: {
                    bgColor: 'transparent',
                    messageId: '',
                  },
                });
              }}
              friction={3}
              renderLeftActions={leftSwipe}
              rightThreshold={0}
              onFailed={() => {}}
              onSwipeableOpen={() => {}}
              onBegan={() => {}}
              onSwipeableWillOpen={() => {
                showReplyingTo();
                updateReplyText(data);
                swipeRef.current.close();
                dispatch({
                  type: 'ChangeBGColor',
                  payload: {
                    bgColor: 'transparent',
                    messageId: '',
                  },
                });
              }}
              onActivated={(
                event: HandlerStateChangeEvent<Record<string, unknown>>
              ) => {
                const state = event.nativeEvent.state;
                state === 4 &&
                  dispatch({
                    type: 'ChangeBGColor',
                    payload: {
                      bgColor: '#222222',
                      messageId: id,
                    },
                  });
              }}
            >
              <View style={styles.view1}>
                <Avatar
                  source={images.pfpImage}
                  size={size.getHeightSize(40)}
                  rounded
                />
                <View style={styles.view2}>
                  <GetContent
                    uid={uid}
                    data={data}
                    chatUtilsInstance={chatUtilsInstance}
                  />
                  <Text numberOfLines={1} style={styles.timeStamp2}>
                    {getTimeStamp(data.createdAt, uid)}
                  </Text>
                </View>
              </View>
            </Swipeable>
          </View>
        );
      }
    }
  } else if (isDate(data)) {
    const { date } = data;
    content = (
      <View style={styles.dateContainer}>
        <View style={styles.view3}>
          <View style={styles.absolute}>
            <Text style={styles.date}>
              {chatUtilsInstance.getDisplayDate(date.split('-'))}
            </Text>
          </View>
        </View>
      </View>
    );
  }
  return content;
};

export default Messages;
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
    paddingRight: size.getWidthSize(32),
    paddingLeft: size.getWidthSize(8),
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
  sendingView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(2),
    alignSelf: 'flex-end',
  },
  sendingText: {
    color: appColor.grayLight,
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(18),
  },
});
