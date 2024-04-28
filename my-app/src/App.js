import React from "react";

import {
  ChatEngine,
  ChatList,
  ChatCard,
  NewChatForm,
  ChatFeed,
  ChatHeader,
  IceBreaker,
  MessageBubble,
  IsTyping,
  NewMessageForm,
  ChatSettings,
  ChatSettingsTop,
  PeopleSettings,
  PhotosSettings,
  OptionsSettings,
} from "react-chat-engine";

const TheSameChatUI = (props) => {
  return (
    <ChatEngine
      height="100vh"
      projectID={"1b390f27-7ebd-4835-85f8-a15f59a0a9d6"}
      userName={"Priyanka"}
      userSecret={"silky"}
      development={props.development}
      // Customize UI
      renderChatList={(chatAppState) => <ChatList {...chatAppState} />}
      renderChatCard={(chat, index) => (
        <ChatCard key={`${index}`} chat={chat} />
      )}
      renderNewChatForm={(creds) => <NewChatForm creds={creds} />}
      renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState} />}
      renderChatHeader={(chat) => <ChatHeader />}
      renderIceBreaker={(chat) => <IceBreaker />}
      renderMessageBubble={(creds, chat, lastMessage, message, nextMessage) => (
        <MessageBubble
          lastMessage={lastMessage}
          message={message}
          nextMessage={nextMessage}
          chat={chat}
        />
      )}
      renderIsTyping={(typers) => <IsTyping />}
      renderNewMessageForm={(creds, chatID) => <NewMessageForm />}
      renderChatSettings={(chatAppState) => <ChatSettings {...chatAppState} />}
      renderChatSettingsTop={(creds, chat) => <ChatSettingsTop />}
      renderPeopleSettings={(creds, chat) => <PeopleSettings />}
      renderPhotosSettings={(chat) => <PhotosSettings />}
      renderOptionsSettings={(creds, chat) => <OptionsSettings />}
    />
  );
};

export default TheSameChatUI;
