import {configureStore} from "@reduxjs/toolkit"
import authSlice  from "./auth"
import api from "./api";
import miscSlice from "./misc";
import ChatSlice from "./notification";


const store = configureStore({
 reducer: {
    [authSlice.name] : authSlice.reducer,
    [api.reducerPath] : api.reducer,
    [miscSlice.name] : miscSlice.reducer,
    [ChatSlice.name] : ChatSlice.reducer,
 },
   middleware : (defualtmid) =>[...defualtmid() , api.middleware],
});


export default store;