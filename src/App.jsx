import React , { Suspense ,lazy, useEffect} from 'react'
import { BrowserRouter , Routes , Route, Navigate}  from "react-router-dom"
import Protected from './components/auth/Protected';
import LoaderR from './components/layout/LoaderR';
import axios    from "axios";
import  {Server}  from './hooks/config';
import {useDispatch, useSelector} from "react-redux"
import { userExists, userNotExists } from './redux/auth';
import {Toaster} from "react-hot-toast"
import { SocketProvider } from './socket';
import './index.css';
import Lannding from './le';
import Contact from './LandingPage/Contact';
import Services from './LandingPage/Services';
import About from './LandingPage/About';

const Home =  lazy(()=> import("./pages/Home"));
const Chat = lazy(()=> import ("./pages/Chat"));
const Login = lazy(() => import ("./pages/Login"));
const Group = lazy(()=> import ("./pages/Groups"));
const Notfound = lazy(() => import("./pages/Notfound"));
const AdminLogin = lazy(()=> import ("./pages/admin/AdminLogin"));

const AdminDashboard = lazy(()=> import("./pages/admin/Dashboard"));
const UserManager = lazy(()=> import("./pages/admin/UserManager"));
const ChatManager = lazy(()=> import("./pages/admin/ChatManager"));
const MessageManager = lazy(()=> import("./pages/admin/MessageManager"));






const App = () => {



  const {user ,loader} = useSelector((state) => state.redux);

  const dispatch = useDispatch();
 
   useEffect(() => {
    
    axios.get(`${Server}/api/v1/user/me`, {withCredentials:true}).then(({ data })=>dispatch(userExists(data))).catch((err) => dispatch(userNotExists()));
   }, [dispatch]);
   

  return loader ? <LoaderR/>  :(
    <BrowserRouter>
      <Suspense fallback={<LoaderR />}>
      <Routes>
       <Route element ={<SocketProvider>
        <Protected user={user} />
       </SocketProvider> }>
       <Route path="/" element={user ? <Home /> : <Navigate to="/home" />} />
          <Route  path = "/chat/:chatId"   element = {<Chat />} />
          <Route  path = "/group"   element = {<Group />} />
          
      </Route>
          <Route path = "/login" element = {
        <Protected user={!user} redirect='/'>
        <Login />
       </Protected>} 
       />

        <Route path = "/home" element = {
        <Protected user={!user} redirect='/'>
        <Lannding />
       </Protected>} 
       />


    <Route path='/admin'  element = {<AdminLogin />}/>
    <Route path='/admin/dashboard'  element = {<AdminDashboard/>}/>
    <Route path='/admin/user-managment'  element = {<UserManager/>}/>
    <Route path='/admin/chat-management'  element = {<ChatManager/>}/>
    <Route path='/admin/message-management'  element = {<MessageManager/>}/>

<Route path = "*"  element = {<Notfound />} />

<Route path="/contact" element={<Contact/>}/>
<Route path="/service" element={<Services/>}/>
<Route path="/abouts" element={<About/>}/>

      </Routes>
</Suspense> 
<Toaster position="bottom-center" />
    </BrowserRouter>
   
  )
};


export default App;