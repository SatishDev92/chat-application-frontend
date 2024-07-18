import { Menu, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { setIsDeleteMenu } from '../../redux/misc';
import { Delete, ExitToApp } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAsyncMutation } from '../../hooks/hook';
import { useDeleteChatMutation, useExitGroupMutation, } from '../../redux/api';

const DeleteChatMenu = ({dispatch , deleteMenuAnchor}) => {
    
    const navigate = useNavigate();

    const {isDeleteMenu , seletedDelete} =useSelector((state)=>state.MM)
      
 const [de,_,deleteChatdata] = useAsyncMutation(useDeleteChatMutation)

 const [leave , __,leaveGroupData] = useAsyncMutation(useExitGroupMutation)

    const isGroup = seletedDelete.groupChat;
    const closeHandler =()=>{
        dispatch(setIsDeleteMenu(false));
        deleteMenuAnchor.current=null;
    }

    const leaveGroup = ()=>{
      closeHandler();
      leave("Leaving group...",seletedDelete.chatId)
    };
    const deleteChat = ()=>{
        closeHandler();
        de("Deleting Chat...",seletedDelete.chatId)
    };
 
    useEffect(()=>{
        
        if(deleteChatdata ||leaveGroupData) navigate('/')
    },[deleteChatdata ,leaveGroupData]);


  return (
    <Menu
    open={isDeleteMenu}
    onClose={closeHandler}
    anchorEl={deleteMenuAnchor.current}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "center",
      horizontal: "center",
    }}
  >
    <Stack
      sx={{
        width: "10rem",
        padding: "0.5rem",
        cursor: "pointer",
      }}
      direction={"row"}
      alignItems={"center"}
      spacing={"0.5rem"}
      onClick={isGroup?leaveGroup:deleteChat}
    >
      {isGroup ? (
        <>
          <ExitToApp />
          <Typography>Leave Group</Typography>
        </>
      ) : (
        <>
          <Delete />
          <Typography>Delete Chat</Typography>
        </>
      )}
    </Stack>
  </Menu>
);
};
  


export default DeleteChatMenu