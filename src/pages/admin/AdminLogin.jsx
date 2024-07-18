import React, { useEffect, useState } from 'react';
import { Container, Paper, TextField, Typography, Button, Stack, Avatar, IconButton } from '@mui/material';
import { useInputValidation } from '6pp';
import { Navigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import { adminLogin, getAdmin } from '../../redux/admin';




const AdminLogin = () => {

const {isAdmin} = useSelector((state)=>state.redux)

  const secretKey = useInputValidation("");
  const dispatch = useDispatch();
   

     const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(adminLogin(secretKey.value));
     }
  
    useEffect(()=>{
  dispatch(getAdmin());
 },[dispatch])

  if (isAdmin) return <Navigate to="/admin/dashboard" />;
    

  
  return (
    <div style={{ background: "#e0f7fa", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Container component="main" maxWidth="sm">
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            bgcolor: '#ffffff',
            borderRadius: '8px'
          }}
        >
           
              <Typography variant='h5' color="#0288d1">Admin Login</Typography>
              <form onSubmit={submitHandler}>
              <TextField
                required
                fullWidth
                label="Key"
                type="password"
                margin="normal"
                variant="outlined"
                value={secretKey.value}
                onChange={secretKey.changeHandler}
              />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{ marginTop: "1rem", backgroundColor: '#0288d1' }}
                  fullWidth
                >
                  Login
                </Button>
              </form>
        </Paper>
      </Container>
    </div>
  )
}

export default AdminLogin;