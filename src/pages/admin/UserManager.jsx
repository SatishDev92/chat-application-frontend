import { useFetchData } from '6pp';
import { Avatar, Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Table from '../../components/shared/Table';
import { Server } from '../../hooks/config';
import { useError } from "../../hooks/hook";
import { transformImage } from "../../libs/features";
import AdminLayout from './AdminLayout';

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
    renderCell: (params) => <Avatar alt={params.row.name} src={params.row.avatar} />,
  },
  {
    field: "name",
    headerName: "Name",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "username",
    headerName: "UserName",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "friends",
    headerName: "Friends",
    headerClassName: "table-header",
    width: 150,
  },
  {
    field: "groups",
    headerName: "Groups",
    headerClassName: "table-header",
    width: 200,
  },
];

const UserManager = () => {
  const [row, setRow] = useState([]);
  
  const {loading,data,error,refetch}=useFetchData(`${Server}/api/v1/admin/users`,"dashboard-users");

   

   const {stats} =data || {};

   useError([{
    isError:error,
    error:error,
   }])

  useEffect(() => {
    if(data) {
      setRow(
         data.Users
         .map((user) => ({
          ...user,
          id: user._id,
          avatar: transformImage(user.avatar, 50), 
        }))
      );
    }
  }, [data]);

  return (
    <AdminLayout>
      {
       loading ?<Skeleton height={"100vh"}/>
        :(
      <Table heading={"All User"} columns={columns} rows={row} />

        )
      }
    </AdminLayout>
  );
};

export default UserManager;