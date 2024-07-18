import React , { useEffect, useState } from 'react'
import AdminLayout from './AdminLayout';
import Table from '../../components/shared/Table';
import { dashBoardData } from '../../utils/sampleData';
import { fileFormat, transformImage } from "../../libs/features";
import moment from 'moment';
import { Avatar, Box, Skeleton, Stack } from '@mui/material';
import RenderAttachement from "../../components/shared/RenderAttachement"
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
    field: "attachments",
    headerName: "Attachments",
    headerClassName: "table-header",
    width: 200,
    renderCell: (params) => {
      const { attachments } = params.row;
      return attachments?.length > 0 ? attachments.map((i, index) => {
        const url = i.url;
        const file = fileFormat(url);
    
        return (
          <Box key={index} display="flex" alignItems="center">
            <a href={url}
            download
            target='_blank'
            style={{
              color:"black"
            }}
            
            >{RenderAttachement(file , url)}</a>
          </Box>
        );
      }) 
      : 
      "No Attachments";
    }
    
    
  },
  {
    field: "content",
    headerName: "Content",
    headerClassName: "table-header",
    width: 400,
  },
  {
    field: "sender",
    headerName: "Sent By",
    headerClassName: "table-header",
    width: 200,
    renderCell: (params) => (
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
      <Avatar alt={params.row.sender.name} src={params.row.sender.avatar} />
      <span>{params.row.sender.name}</span>
      </Stack>
    )
  },
  {
    field: "chat",
    headerName: "Chat",
    headerClassName: "table-header",
    width: 150,
  },
  {
    field: "groupChat",
    headerName: "Group Chat",
    headerClassName: "table-header",
    width: 100,
  },
  {
    field: "createdAt",
    headerName: "Time",
    headerClassName: "table-header",
    width: 250,
  },
];

const MessageManager = () => {

  const {loading,data,error,refetch}=useFetchData(`${Server}/api/v1/admin/messages`,"dashboard-message");

   

   const {stats} =data || {};

   useError([{
    isError:error,
    error:error,
   }])



  const [row, setRow] = useState([]);
  useEffect(() => {
     if(data) {
      setRow(data.messages.map((i)=>({
        ...i,
        id:i._id,
        sender :{
          name: i.sender.name,
          avatar : transformImage(i.sender.avatar , 50)
        },
        createdAt: moment(i.createdAt).format("MMMM Do YYYY , h:mm:ss a")
      })))
     }
  }, [data])
  

  return (
     <AdminLayout>
       {
        loading ?<Skeleton height={"100vh"}/> :(
          <Table heading={"All  Message"} columns={columns} rows={row} rowHeight={200} />
        )
       }
     </AdminLayout>
  )
}

export default MessageManager;