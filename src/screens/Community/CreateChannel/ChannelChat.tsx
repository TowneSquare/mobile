import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ChannelChatPinnedMessage from '../../../components/Community/CreateChannel/ChannelChatPinnedMessage';
import ChannelMessage from '../../../components/Community/CreateChannel/ChannelMessage';
import ViewProfileBottomSheet from '../../../components/Community/CreateChannel/ViewProfileBottomSheet';
import { appColor } from '../../../constants';
import ChatInputBox, { ComponentRef } from '../../../shared/ChatInputBox';
import CommunityHeader from '../../../shared/Community/CommunityHeader';
import { sizes } from '../../../utils';
import { ChatClass } from '../../../utils/ChatUtils';
import { message } from '../../../utils/messageData';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

const ChannelChat = () => {
  const [showReplying, setShowReplyVisibility] = useState(false);
  const [showViewProfileBottomSheet, setViewProfileBottomSheetVisibility] =
    useState(false);
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
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <StatusBar style="light" backgroundColor={appColor.signUpBackground} />
      <CommunityHeader title="#general" />
      <ChannelChatPinnedMessage
        noOfPinnedChat="3"
        pinnedMessage="Hey man, just wanted to say I love your pfp"
      />
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
                setViewProfileBottomSheetVisibility(true)
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
      <ViewProfileBottomSheet
        visibility={showViewProfileBottomSheet}
        onClose={() => setViewProfileBottomSheetVisibility(false)}
      />
    </SafeAreaView>
  );
};

export default ChannelChat;
