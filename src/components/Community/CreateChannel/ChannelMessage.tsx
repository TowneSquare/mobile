import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useReducer, useRef } from 'react';
import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import {
  HandlerStateChangeEvent,
  Swipeable,
} from 'react-native-gesture-handler';
import SwipeArrowIcon from '../../../../assets/images/svg/SwipeArrowIcon';
import UserQueenBadge from '../../../../assets/images/svg/UserQueenBadge';
import { appColor, images } from '../../../constants';
import { sizes } from '../../../utils';
import { ChatClass } from '../../../utils/ChatUtils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
dayjs.extend(relativeTime);

type ChatText = {
  id: string;
  type: {
    messageType: 'text';
    text: string;
    createdAt: string;
  };
  user: {
    id: string;
    name: string;
  };
};
type ChatDate = {
  dateType: string;
  date: string;
  id: string;
};

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
function isText(data: ChatText | ChatDate): data is ChatText {
  return (data as ChatText).type !== undefined;
}

function isDate(data: Text | ChatDate): data is ChatDate {
  return (data as ChatDate).dateType !== undefined;
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
const ChannelMessage = ({
  data,
  showReplyingTo,
  chatUtilsInstance,
  onProfilePictureLongPress,
}: Props) => {
  const swipeRef = useRef<Swipeable>();
  const [selected, dispatch] = useReducer(reducer, {
    backgroundColor: 'transparent',
    messageId: '',
  });
  const leftSwipe = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-8, 42, 92, 93],
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
  if (isText(data)) {
    const {
      id,
      type: { createdAt, messageType, text },
      user,
    } = data;
    if (user.id === '1') {
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
                paddingHorizontal: size.getWidthSize(16),
              }}
            >
              <View style={styles.container}>
                <Text style={styles.message}>{text}</Text>
              </View>
              <Text style={styles.timeStamp}>Friday 18:40pm</Text>
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
            <View style={styles.view1}>
              <Avatar
                source={images.pfpImage}
                size={size.getHeightSize(40)}
                rounded
                onLongPress={() => onProfilePictureLongPress()}
              />
              <View style={styles.view2}>
                <View style={styles.row}>
                  <Text numberOfLines={1} style={styles.name}>
                    Username
                  </Text>
                  <UserQueenBadge size={size.getHeightSize(16)} />
                  <Text numberOfLines={1} style={styles.username}>
                    @username
                  </Text>
                </View>
                <View style={styles.messageContainer}>
                  <Text style={styles.message}>{text}</Text>
                </View>
                <Text numberOfLines={1} style={styles.timeStamp2}>
                  Friday 18:40pm
                </Text>
              </View>
            </View>
          </Swipeable>
        </View>
      );
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

export default ChannelMessage;
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
  },
  timeStamp2: {
    color: appColor.grayLight,
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(18),
    textAlign: 'left',
  },
});
