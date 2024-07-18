import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isNewGroup : false,
    isAddMember : false,
    isNoficiation : false,
    isMobile: false,
    isSearch : false,
    isFileMenu : false,
    isDeleteMenu : false,
    uploadingLoader : false,
    seletedDelete : {
        chatId : "",
        groupChat :false,
    }


};

const miscSlice = createSlice({

    name : "MM",
    initialState,
    reducers : {
        setIsNewGroup : (state, action) =>{
            state.isNewGroup = action.payload;
        },

        setIsAddMember : (state, action) =>{
            state.isAddMember = action.payload;
        },

        setIsNotification : (state, action) =>{
            state.isNoficiation = action.payload;
        },

        setIsNewGroup : (state, action) =>{
            state.isNewGroup = action.payload;
        },


        setIsMobile : (state, action) =>{
            state.isMobile = action.payload;
        },


        setIsSearch : (state, action) =>{
            state.isSearch= action.payload;
        },

        setIsfileMenu : (state, action) =>{
            state.isFileMenu= action.payload;
        },
        
        setIsDeleteMenu : (state, action) =>{
            state.isDeleteMenu= action.payload;
        },

        setIsupLoadingLoader : (state, action) =>{
            state.uploadingLoader= action.payload;
        },
        setIsdeleteChat : (state, action) =>{
            state.seletedDelete= action.payload;
        },


    }
    
})


export default miscSlice;

export const {
    setIsAddMember,
    setIsdeleteChat,
    setIsMobile,
    setIsfileMenu,
    setIsupLoadingLoader,
    setIsSearch,
    setIsDeleteMenu,
    setIsNotification,
    setIsNewGroup,

   
} = miscSlice.actions;