import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Dimensions, FlatList, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ChannelMessage from '../CreateChannel/ChannelMessage';
import ViewProfileBottomSheet from '../CreateChannel/ViewProfileBottomSheet';
import { updateViewProfileBottomsheetVisibility } from '../../../controller/BottomSheetController';
import { appColor } from '../../../constants';
import ChatInputBox, { ComponentRef } from '../../../shared/ChatInputBox';
import { sizes } from '../../../utils';
import { ChatClass } from '../../../utils/ChatUtils';
import { useAppDispatch } from '../../../controller/hooks';
import { message } from '../../../utils/messageData';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

const ChatTab = () => {
  const dispatch = useAppDispatch();
  const [showReplying, setShowReplyVisibility] = useState(false);

  const chatInputRef = useRef<ComponentRef>();

  const chatUtils = new ChatClass(message);
  const data = chatUtils.generateItems();

  showReplying && chatInputRef.current.focusTextInput();
  const setVisibilityTrue = () => {
    setShowReplyVisibility(true);
  };
  const setVisibilityFalse = () => {
    setShowReplyVisibility(false);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <FlatList
          contentContainerStyle={{
            gap: size.getHeightSize(8),
          }}
          data={data}
          renderItem={({ item }) => (
            <ChannelMessage
              chatUtilsInstance={chatUtils}
              data={item}
              showReplyingTo={setVisibilityTrue}
              onProfilePictureLongPress={() =>
                dispatch(updateViewProfileBottomsheetVisibility(true))
              }
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <ChatInputBox
        ref={chatInputRef}
        dismissShowReplyingTo={setVisibilityFalse}
        message=""
        showReplying={showReplying}
        username=""
      />
    </View>
  );
};

export default ChatTab;

const styles = StyleSheet.create({});
