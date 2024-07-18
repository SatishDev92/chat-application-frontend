import React, { useEffect, useState } from 'react';
import AdminLayout from './AdminLayout';
import Table from '../../components/shared/Table';
import { Avatar, Skeleton, Stack } from '@mui/material';
import { dashBoardData } from "../../utils/sampleData";
import { transformImage } from "../../libs/features";
import AvatarCard from "../../components/shared/AvatarCard"
import { useFetchData } from '6pp';
import { useError } from '../../hooks/hook';
import { Server } from '../../hooks/config';
const columns = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "avatar",
    headerName: "Avatar",
    headerClassName: "table-header",
    width: 150,
    renderCell: (params) => <AvatarCard avatar={params.row.avatar} />,
  },
  {
    field: "name",
    headerName: "Name",
    headerClassName: "table-header",
    width: 300,
  },
  {
    field: "groupChat",
    headerName: "Group ",
    headerClassName: "table-header",
    width: 100,
  },
  {
    field: "totalMembers",
    headerName: "Total Members",
    headerClassName: "table-header",
    width: 120,
  },
 
, {
    field: "members",
    headerName: "Members",
    headerClassName: "table-header",
    width: 400,
    renderCell : (params) => <AvatarCard max={100} avatar ={params.row.members}  />
  },
  {
    field: "creator",
    headerName: "Created by",
    headerClassName: "table-header",
    width: 250,
    renderCell: (params) => (
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
        <Avatar alt={params.row.creator.name} src={params.row.creator.avatar} />
        <span>{params.row.creator.name}</span>
      </Stack>
    ),
  },
];

const ChatManager = () => {
  
  const {loading,data,error,refetch}=useFetchData(`${Server}/api/v1/admin/chats`,"dashboard-chat");

   


   useError([{
    isError:error,
    error:error,
   }])
   

  const [row, setRow] = useState([]);

  useEffect(() => {
    if (data) {
      setRow(
        data.chats.map((chat) => ({
          ...chat,
          id: chat._id,
          avatar: chat.avatar.map((i) => transformImage(i, 50)), 
          members: chat.members.map((member) => member.avatar), 
          creator: {
            name: chat.creator.name,
            avatar: chat.creator.avatar, // Single avatar URL
          },
        }))
      );
    }
  }, [data]);
  
  return (
    <AdminLayout>
      {
    loading ?<Skeleton height={"100vh"}/>
        :(
          <Table heading={"All Chats"} columns={columns} rows={row} />
        )
      }
    </AdminLayout>
  );
};

export default ChatManager;
