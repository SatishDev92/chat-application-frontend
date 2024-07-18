import React, { useState } from 'react';
import { Grid, Box, IconButton, Drawer, Stack, Typography, styled } from '@mui/material';
import { Close, Menu, Dashboard, ManageAccounts, Group, Message, ExitToApp } from "@mui/icons-material";
import { useLocation, Link as LinkComp, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { adminLogout } from '../../redux/admin';


const StyledLink = styled(LinkComp)`
  text-decoration: none;
  border-radius: 2rem;
  padding: 1rem 3rem;
  color: black;
  &:hover {
    color: rgba(0, 0, 0, 0.54);
  }
  &.active {
    background-color: black;
    color: white;
    &:hover {
      color: gray;
    }
  }
`;

const adminTabs = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <Dashboard />
  },
  {
    name: "Users",
    path: "/admin/user-managment",
    icon: <ManageAccounts />
  },
  {
    name: "Chats",
    path: "/admin/chat-management",
    icon: <Group />
  },
  {
    name: "Messages",
    path: "/admin/message-management",
    icon: <Message />
  }
];

const SiderBar = ({ w = "100%" }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const logoutHandler = () => {
   dispatch(adminLogout());
  }

  return (
    <Stack width={w} direction={"column"} p={"3rem"} spacing={"3rem"}>
      <Typography variant='h3' textTransform={"uppercase"}>
        Admin
      </Typography>

      <Stack spacing={"1rem"}>
        {
          adminTabs.map((i) => (
            <StyledLink
              key={i.path}
              to={i.path}
              className={location.pathname === i.path ? "active" : ""}
            >
              <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
                {i.icon}
                <Typography>{i.name}</Typography>
              </Stack>
            </StyledLink>
          ))
        }

        <StyledLink
          onClick={logoutHandler}
         
        >
          <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
            <ExitToApp />
            <Typography>Logout</Typography>
          </Stack>
        </StyledLink>
      </Stack>
    </Stack>
  );
};

const AdminLayout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const isAdmin = useSelector((state) => state.redux.isAdmin);

  const handleMobile = () => setIsMobile(!isMobile);
  const handleClose = () => setIsMobile(false);

  if (!isAdmin) return <Navigate to={"/admin"} />

  return (
    <Grid container minHeight={"100vh"}>
      <Box
        sx={{
          display: {
            xs: "block",
            md: "none"
          },
          position: "fixed",
          right: "1rem",
          top: "1rem"
        }}
      >
        <IconButton onClick={handleMobile}>
          {isMobile ? <Close /> : <Menu />}
        </IconButton>
      </Box>
      <Grid
        item
        md={4}
        lg={3}
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <SiderBar />
      </Grid>
      <Grid item xs={12} md={8} lg={9} sx={{
        bgcolor: "#f5f5f5"
      }}>
        {children}
      </Grid>
      <Drawer open={isMobile} onClose={handleClose}>
        <SiderBar w="50vw" />
      </Drawer>
    </Grid>
  );
};

export default AdminLayout;
