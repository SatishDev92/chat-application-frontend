import { createContext, useMemo,useContext } from 'react';
import io from 'socket.io-client';
import { Server } from './hooks/config';





const SocketContext = createContext();

const getSocket = () => useContext(SocketContext);


const SocketProvider = ({children}) =>{
    
const socket = useMemo(()=>io(Server , {withCredentials:true})
,[])
    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}


export{SocketProvider , getSocket}