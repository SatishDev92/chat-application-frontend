import React, {  Suspense ,lazy, useState } from 'react';
import { AppBar, Backdrop, Badge, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import { Add, Group, Logout, Menu, Notifications, Search } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { StyLink } from '../style/Stylecomponent';
import axios from 'axios';
import { Server } from '../../hooks/config';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { userNotExists } from '../../redux/auth';
import { setIsMobile, setIsNewGroup, setIsNotification, setIsSearch } from '../../redux/misc';

import { reset } from '../../redux/notification';


 const SearchDialog = lazy(()=>import("../specifics/NewSearchDialog"));
 
 const NotificationDialog  = lazy(()=>import("../specifics/NewNotificationDialog"));
 
 const GroupDialog = lazy(()=>import("../specifics/NewGroupDialog"));

const Header = () => {

  const dispatch = useDispatch();

  const {isSearch , isNoficiation,isNewGroup  } = useSelector((state)=>state.MM)
  const {count } = useSelector((state)=>state.Chat)
  
;


  const navigate = useNavigate();

  const handleMobile = () => {
   dispatch( setIsMobile(true));
  
  };

  const openSearch = () => {
    dispatch(setIsSearch(true));

  };

  const createGroup = () => {
    dispatch(setIsNewGroup(true));
 
  };

  const navigateGroup = () => navigate("/group");

  const log_out = async() => {
    console.log("logout")
try {
  const {data} = await axios.get(`${Server}/api/v1/user/logout`,{withCredentials:true});
   
  dispatch(userNotExists());

  toast.success(data.message)
} catch (error) {
  console.log(error);
  toast.error(error.response?.data?.message || "Something went wrong");
}
  
  };
    const newNotification =() =>{
      dispatch(setIsNotification(true));
     dispatch(reset());

    }
  
  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar position='static' sx={{ bgcolor: "#ea7070" }}>
          <Toolbar>
            <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
              <StyLink  to={"/"}>Chattii</StyLink></Typography>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color='inherit' onClick={handleMobile}>
                <Menu />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <IconBtn
                title={"Search"}
                Icon={Search}
                onClick={openSearch}
              />
              <IconBtn
                title={"New Group"}
                Icon={Add}
                onClick={createGroup}
              />
              <IconBtn
                title={"Manage Group"}
                Icon={Group}
                onClick={navigateGroup}
              />
                <IconBtn
                title={"Notification"}
                Icon={Notifications}
                onClick={newNotification}
                value={count}
              />

                     <IconBtn
                title={"Log Out"}
                Icon={Logout}
                onClick={log_out}
              />


            </Box>
          </Toolbar>
        </AppBar>
      </Box>


      {isSearch && (
        <Suspense fallback={<Backdrop open/>}>
          <SearchDialog />
        </Suspense>
      )}

      {isNoficiation  && (
      <Suspense fallback={<Backdrop open/>}>
          <NotificationDialog />
        </Suspense>
      )}

      {isNewGroup  && (
          <Suspense fallback={<Backdrop open/>}>
          <GroupDialog />
        </Suspense>
      )}
    </>
  );
};

const IconBtn = ({ title, Icon, onClick ,value }) => {
  return (
    <Tooltip title={title}>
      <IconButton
        color="inherit"
        size="large"
        onClick={onClick}
      >{
        value ? <Badge badgeContent ={value} color="error"><Icon /></Badge> : <Icon />
      }
       
      </IconButton>
    </Tooltip>
  );
};

export default Header;
