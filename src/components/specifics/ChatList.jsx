import { Stack } from '@mui/material';
import React from 'react';
import Chatitem from '../shared/Chatitem';

const ChatList = ({
    w = "100%", 
    chats = [],
    chatId,
    onlineUser = [],
    newMessagesAlert = [
        {
            chatId : "",
            count : 0
        }
    ],
    handleDeleteChat
}) => {
  return (
    <Stack width={w} direction={"column"} overflow={"auto"} height={"100%"}>
        {chats?.map((data, index) => {
            const { avatar, _id, name, groupChat, members } = data;
          
        const newMessageAlert = newMessagesAlert.find(
            ({ chatId }) => chatId === _id
          );
          const isOnline = members?.some((member) =>
            onlineUser.includes(member)
          );
         

            return (
                <Chatitem 
                    key={_id}
                    index={index}
                    newMessageAlert={newMessageAlert}
                    isOnline={isOnline}
                    name={name}
                    _id={_id}
                    groupChat={groupChat}
                    sameSender={chatId===_id}
                    handleDeleteChat={handleDeleteChat}
                    avatar={avatar}
                />
            );
        })}
    </Stack>
  );
};

export default ChatList;
