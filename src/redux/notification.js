import { createSlice } from "@reduxjs/toolkit";
import { getOrSave } from "../libs/features";
import { NEW_MESSAGE_ALERT } from "../hooks/events";

const initialState={
    count :0,
    newMessage : getOrSave({key:NEW_MESSAGE_ALERT , get:true})|| [{
        chatId:"",
        count:0,
    }]
}

const ChatSlice = createSlice({

    name : "Chat",
    initialState,
    reducers : {
     increase : (state ) =>{
            state.count += 1
        },
        reset :(state) =>{
           state.count=0;
        },
        setMessageAlert :(state,action)=>{
         const index = state.newMessage.findIndex((item)=> item.chatId === action.payload.chatId);

         if(index !==-1){
            state.newMessage[index].count +=1;
         }else{
            state.newMessage.push({
                chatId:action.payload.chatId,
                count:1,
            })
         }
        },
        removeMessageAlter :(state,action)=>{
            state.newMessage = state.newMessage.filter((item) => item.chatId !== action.payload);
        }
    },
})


export default ChatSlice;

export const {increase,reset, setMessageAlert , removeMessageAlter} = ChatSlice.actions;