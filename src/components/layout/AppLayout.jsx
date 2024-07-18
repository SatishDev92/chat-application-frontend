import React, { useCallback, useEffect, useRef, useState } from 'react';
import Title from '../shared/Title';
import Header from './Header';
import { Drawer, Grid, Skeleton } from '@mui/material';
import ChatList from '../specifics/ChatList';
import { Testdata } from '../../utils/sampleData';
import { useNavigate, useParams } from 'react-router-dom';
import Profile from '../specifics/Profile';
import { useMyChatQuery } from '../../redux/api';
import { useDispatch, useSelector } from 'react-redux';
import { setIsdeleteChat, setIsDeleteMenu, setIsMobile } from '../../redux/misc';

import { useError, useSocketEvents } from '../../hooks/hook';
import { getSocket } from '../../socket';
import { NEW_MESSAGE_ALERT, NEW_REQUEST, ONLINE_USER, REFETCH_CHATS } from '../../hooks/events';
import { increase, setMessageAlert } from '../../redux/notification';
import { getOrSave } from '../../libs/features';
import DeleteChatMenu from '../dialog/DeleteChatMenu';


const AppLayout = () =>(Component) =>{
  return (props) => {

    const params = useParams();
    const chatId = params.chatId;
    const deleteMenuAnchor =useRef(null);
       
    const dispatch = useDispatch();
  const navigate = useNavigate();
   const socket =getSocket();
  
    const [onlineUser ,setOnlineUser] = useState([]);
    const {isMobile} = useSelector((state) => state.MM);
    const {user} = useSelector((state) => state.  redux);
    const {newMessage} = useSelector((state) => state.  Chat);
 

    
    
    const {isLoading , data , isError,error , refetch} =useMyChatQuery("");

     useError([{isError , error}]);
 

      useEffect(() => {
        
      getOrSave({key: NEW_MESSAGE_ALERT, value:newMessage });
      }, [newMessage])
      



    const handleDeleteChat = (e, chatId, groupChat) => {
      dispatch(setIsDeleteMenu(true));
      dispatch( setIsdeleteChat({chatId,groupChat}))
      deleteMenuAnchor.current = e.currentTarget;
     
    }
    const handleMobileClose = () => dispatch(setIsMobile(false));
    const newMessageAlert = useCallback((data) => {
     if(data.chatId === chatId) return;
      dispatch(setMessageAlert(data));
    }, [chatId]);
    
    
    const requestHandler = useCallback(() => {

     dispatch(increase());
  }, []);

  
  const refreshHandlerListener = useCallback(() => {
   refetch();

 }, [refetch]);
  
 const onlineUserListener = useCallback((data) => {
  setOnlineUser(data)
 
}, []);
  
    const eventArr = { [NEW_MESSAGE_ALERT]: newMessageAlert ,
      [NEW_REQUEST]: requestHandler,
      [REFETCH_CHATS]: refreshHandlerListener,
      [ONLINE_USER] : onlineUserListener,
    };

    useSocketEvents(socket, eventArr);


    return (
      <>
        <Title />
         <Header />
         <DeleteChatMenu dispatch={dispatch}  deleteMenuAnchor={ deleteMenuAnchor}/>
           
   {
    isLoading ?<Skeleton/> :(
      <Drawer open={isMobile} onClose={handleMobileClose}>
      <ChatList
      w="70vw"
       chats={data?.transformedChats} 
       chatId={chatId} 
       handleDeleteChat={handleDeleteChat}
      newMessagesAlert={newMessage}
       onlineUser={onlineUser}
            />
            </Drawer>
    )
   }

        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{ display: { xs: "none", sm: "block" } }}
            height={"100%"}
          >
           {
            isLoading ?(<Skeleton />) : <ChatList chats={data?.transformedChats} chatId={chatId} handleDeleteChat={handleDeleteChat}
            newMessagesAlert={newMessage}
            onlineUser={onlineUser}
            />
           }
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            lg={6}
            height={"100%"}
          >
            <Component {...props} chatId ={chatId}    user ={user}/>
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            height={"100%"}
            sx={{ display: { xs: "none", md: "block" } }}
            padding={"2rem"}
            bgcolor={"rgba(0, 0, 0, 0.85)"}
            
          >
            <Profile  user={user}/>
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
