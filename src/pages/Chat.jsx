import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import AppLayout from '../components/layout/AppLayout';
import { IconButton, Skeleton, Stack } from '@mui/material';
import { AttachFile, Send } from '@mui/icons-material';
import { InputBox } from '../components/style/Stylecomponent';
import ChatMenu from '../components/dialog/ChatMenu';
import MessageComponent from '../components/shared/MessageComponent';
import { getSocket } from '../socket'; 
import { ALERT, CHAT_JOINED, CHAT_LEAVED, NEW_MESSAGE, START_TYPING, STOP_TYPING } from '../hooks/events';
import { useGetChatsDetailsQuery, useGetMessageQuery } from '../redux/api';
import { useError, useSocketEvents } from '../hooks/hook';
import { useInfiniteScrollTop } from '6pp';
import { useDispatch } from 'react-redux';
import { setIsfileMenu } from '../redux/misc';
import { removeMessageAlter } from '../redux/notification';
import TypingLoader from '../components/layout/TypingLoader';
import { Navigate, useNavigate } from 'react-router-dom';

const Chat = ({ chatId, user }) => {
   
  const socket = getSocket();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const containerRef = useRef(null); 
  const buttonRef = useRef(null); 

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(1);
  const [fileMenuAnchor, setFileMenuAnchor] = useState(null);

const userId = user._id;

  const [IamTyping , setIamTyping] = useState(false);
  const [userTyping , setUserTyping]  = useState(false);
  const typingtimeOut = useRef(null);

  const chatDetails = useGetChatsDetailsQuery({ chatId, skip: !chatId });
  const oldMessage = useGetMessageQuery({ chatId, page });


  const { data, setData } = useInfiniteScrollTop(
    containerRef,
    oldMessage.data?.totalPages,
    page,
    setPage,
    oldMessage.data?.messages
  );

  const members = chatDetails?.data?.chat?.members;
  const allMessages = [...data, ...messages];



  const errors = [
    { isError: chatDetails.isError, error: chatDetails.error },
    { isError: oldMessage.isError, error: oldMessage.error }
  ];

   const messageOnChange =(e) =>{ 
    setMessage(e.target.value);
    if(!IamTyping){
      socket.emit(START_TYPING , {members , chatId});
      setIamTyping(true);
    } 
     if(typingtimeOut.current) clearTimeout(typingtimeOut.current);

     typingtimeOut.current= setTimeout(()=>{
      socket.emit(STOP_TYPING , {members , chatId});
      setIamTyping(false);
    } , 2000)

  };


  const handleFileOpen = (e) => {
    dispatch(setIsfileMenu(true));
    setFileMenuAnchor(e.currentTarget);
  };

useEffect(()=>{
  socket.emit(CHAT_JOINED ,{userId, members} );
   dispatch(removeMessageAlter(chatId))
  return  ()=>{
    setMessage(""),
    setMessages([]),
    setData([]),
    setPage(1);
    socket.emit(CHAT_LEAVED,{userId,members});
   }
},[chatId]);

useEffect(() =>{
  if(buttonRef.current)
    buttonRef.current.scrollIntoView({behavior:"smooth"})
},[messages])


  const submitHandler = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Emit to server
    socket.emit(NEW_MESSAGE, { chatId, members, message });
    setMessage("");
  };

  
  const onNewMessage = useCallback((data) => {

      
    if(data.chatId !== chatId) return;

    setMessages((prev) => [...prev, data.messageForRealTime]);
  }, [chatId]);
   
const startTypingLIstner = useCallback(
  (data) =>{
      if(data.chatId !==chatId) return;
     
      setUserTyping(true);
  },[chatId]
);


const stopTypingLIstner = useCallback(
  (data) =>{
      if(data.chatId !==chatId) return;
     
      setUserTyping(false);
  },[chatId]
);
const alertListener = useCallback(
  (data) =>{
    if(data.chatId !==chatId) return;
    const messageForAlert ={  
      content:data.message,
      
      sender: {
        _id: "I am Satish",
        name: admin,
      },
      chat: chatId,
      createdAt: new Date().toISOString(),
    };
    setMessages((prev), [...prev , messageForAlert])
  },[chatId]
)

  const eventArr = { 
    [NEW_MESSAGE]: onNewMessage,
    [ALERT]: alertListener,
    [START_TYPING]: startTypingLIstner,
    [STOP_TYPING]: stopTypingLIstner,
   };

   
  useSocketEvents(socket, eventArr);
  useError(errors);

  return chatDetails.isLoading ? <Skeleton /> : (
    <Fragment>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={"rgba(247, 247, 247,1)"}
        height={"90%"}
        sx={{
          overflowX: 'hidden',
          overflowY: "auto",
        }}
      >
        {allMessages.map((Message) => (
          <MessageComponent key={Message._id} message={Message} user={user} />
        ))}

{
   userTyping && <TypingLoader/>


}
   <div ref={buttonRef}/>
      </Stack>
      <form style={{ height: "10%" }} onSubmit={submitHandler}>
        <Stack direction={"row"} height={"100%"} padding={"1rem"} alignItems={"center"} position={"relative"}>
          <IconButton
            sx={{
              position: "absolute",
              left: "1.5rem",
              rotate: "30deg",
            }}
            onClick={handleFileOpen}
          >
            <AttachFile />
          </IconButton>
          <InputBox placeholder='Type here a message' value={message} onChange={messageOnChange} />
          <IconButton type='submit'
            sx={{
              rotate: "-30deg",
              backgroundColor: "#07ebff",
              color: "white",
              marginLeft: "1rem",
              padding: "0.5rem",
              "&:hover": {
                bgcolor: "error.dark",
              },
            }}
          >
            <Send />
          </IconButton>
        </Stack>
      </form>
      <ChatMenu anchorEl={fileMenuAnchor} chatId={chatId} />
    </Fragment>
  );
};

export default AppLayout()(Chat)
