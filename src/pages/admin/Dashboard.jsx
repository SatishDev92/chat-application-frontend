import { AdminPanelSettings, Group, Message, Notifications, Person } from "@mui/icons-material";
import { Box, Container, Paper, Skeleton, Stack, Typography } from '@mui/material';
import moment from "moment";
import React from 'react';
import { CurveButton, SearchField } from '../../components/style/Stylecomponent';
import AdminLayout from './AdminLayout';
import { DChart, LChart } from "./Chart";

import { useFetchData } from "6pp";
import { Server } from '../../hooks/config';

import { useError } from "../../hooks/hook";


const Dashboard = () => {

  const {loading,data,error,refetch}=useFetchData(`${Server}/api/v1/admin/stats`,"dashboard-stats");
   const {stats} =data || {};

   useError([{
    isError:error,
    error:error,
   }])
   
  const Appbar = (
    <Paper
      elevation={3}
      sx={{
        padding: "2rem",
        margin: "2rem 0",
        borderRadius: "1rem"
      }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
        <AdminPanelSettings sx={{ fontSize: "3rem" }} />
        <SearchField />
        <CurveButton>Search</CurveButton>
        <Box flexGrow={1} />
        <Typography
          display={{
            xs: "none",
            lg: "block",
          }}
        >
          {moment().format("MMM Do YYYY")}
        </Typography>
        <Notifications />
      </Stack>
    </Paper>
  );

  const Widgets = (
    <Stack
      direction={{
        xs: "column",
        sm: "row",
      }}
      spacing="2rem"
      justifyContent="space-between"
      alignItems={"center"}
      margin={"2rem 0"}
    >
      <Widget title={"Users"} value={stats?.
usersCount} Icon={<Person />} />
      <Widget title={"Chats"} value={stats?.totalChatsCount} Icon={<Group />} />
      <Widget title={"Messages"} value={stats?.messageCount} Icon={<Message />} />
    </Stack>
  );
  
  return loading?<Skeleton/>: (
    <AdminLayout>
      <Container component={"main"}>
        {Appbar}

        <Stack direction={{
          xs:"column",
          lg:"row"
        }} 
         flexWrap={"wrap"}
          justifyContent={"center"}
        alignItems={{
          xs:"center",
          lg:"stretch"
        }}
        sx={{gap:"2rem"}}>
          <Paper
            elevation={3}
            sx={{
              padding: "2rem 3.5rem",
              borderRadius: "1rem",
              width: "100%",
              maxWidth: "40rem"
            }}
          >
            <Typography>
              Last Messages
            </Typography>
            <LChart dataArray={stats?.
messagesChart ||[]}  />
          </Paper>

          <Paper
            elevation={3}
            sx={{
              padding: "1rem",
              borderRadius: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: {
                xs: "100%",
                sm: "50%"
              },
              maxWidth: "25rem",
              position: "relative",
            }}
          >
            <DChart labels={["sigle chat" , "GroupChat"]} dataArray={[stats?.totalChatsCount -stats?.
groupsCount  ||0
, stats?.
groupsCount ||0
]}  />


            <Stack
              position={"absolute"}
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={"0.5rem"}
              width={"100%"}
              height={"100%"}
           
            >
              <Group />
              <Typography>VS</Typography>
              <Person />
            </Stack>
          </Paper>
        </Stack>
        {Widgets}
      </Container>
    </AdminLayout>
  );
}

const Widget = ({ title, value, Icon }) => (
  <Paper
    elevation={3}
    sx={{
      padding: "2rem",
      margin: "2rem 0",
      borderRadius: "1rem",
      width: "20rem"
    }}
  >
    <Stack alignItems={"center"} spacing={"1rem"}>
      <Typography
        sx={{
          color: "rgba(0, 0, 0, 0.7)",
          borderRadius: "50%",
          border: "5px solid rgba(0, 0, 0, 0.9)",
          width: "5rem",
          height: "5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {value}
      </Typography>
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        {Icon}
        <Typography>{title}</Typography>
      </Stack>
    </Stack>
  </Paper>
);

export default Dashboard;
