import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";
import { CameraAlt } from "@mui/icons-material";
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import axios from "axios";
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { VisuallyHidden } from '../components/style/Stylecomponent';
import { Server } from '../hooks/config';
import { userExists } from '../redux/auth';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const name = useInputValidation("");
  const username = useInputValidation("");
  const password = useStrongPassword();
  const bio = useInputValidation("");
  const dispatch = useDispatch();
  const avatar = useFileHandler("single");
  const [isloading , setIsLoading] = useState(false)

  const handleLogin = async (e) => {
    setIsLoading(true);
    e.preventDefault();
      const toastId=toast.loading("Logging In...");
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      }
    };

    try {
      const { data } = await axios.post(`${Server}/api/v1/user/login`, {
        email: username.value,
        password: password.value,
      }, config);

      dispatch(userExists(data.user));
      toast.success(data.message, {
        id:toastId
      });
    } catch (error) {
      toast.error(error?.response?.data?.message || "something went wrong", {
        id:toastId
      });
    }finally{
    setIsLoading(false)
  }
  }

  const handleSignup = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    const toastId=toast.loading("Signing UP ...");

    const formData = new FormData();
    formData.append("avatar", avatar.file);
    formData.append("name", name.value);
    formData.append("bio", bio.value);
    formData.append("password", password.value);
    formData.append("email", username.value);

    const config = {
        withCredentials: true,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    };

    try {
        const { data } = await axios.post(`${Server}/api/v1/user/new`, formData, config);
        dispatch(userExists(data.user)); // Assuming this is correct
        toast.success(data.message ,{id:toastId});
    } catch (error) {
        console.error("Signup error:", error.response?.data?.message || error.message);
        toast.error(error.response?.data?.message || "Something went wrong",{id:toastId});
    }finally{
      setIsLoading(false);
    }
};


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
          {isLogin ? (
            <>
              <Typography variant='h5' color="#0288d1">Login</Typography>
              <form onSubmit={handleLogin}>
                <TextField
                  required
                  fullWidth
                  label="Email"
                  type='Email'
                  margin="normal"
                  variant="outlined"
                  value={username.value}
                  onChange={username.changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  value={password.value}
                  onChange={password.changeHandler}
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{ marginTop: "1rem", backgroundColor: '#0288d1' }}
                  fullWidth
                  disabled={isloading}
                >
                  Login
                </Button>
                <Typography textAlign={"center"} sx={{ margin: "1rem" }}>Or</Typography>
                <Button
                  sx={{ marginTop: "1rem", backgroundColor: '#004d40' }}
                  variant='contained'
                  color='secondary'
                  onClick={() => setIsLogin(false)}
                  fullWidth
                  disabled={isloading}
                >
                  Signup
                </Button>
              </form>
            </>
          ) : (
            <>
              <Typography variant='h5' color="#0288d1">Sign Up</Typography>
              <form onSubmit={handleSignup}>
                <Stack
                  sx={{
                    position: "relative",
                    width: "10rem",
                    height: "10rem",
                    margin: "auto",
                    marginBottom: "1rem"
                  }}
                >
                  <Avatar
                    sx={{
                      width: "10rem",
                      height: "10rem",
                      objectFit: "contain"
                    }}
                    src={avatar.preview}
                  />
                  <IconButton
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      color: "white",
                      bgcolor: "rgba(0, 0, 0, 0.5)",
                      ":hover": {
                        bgcolor: "rgba(0, 0, 0, 0.7)"
                      }
                    }}
                    component="label"
                  >
                    <CameraAlt />
                    <VisuallyHidden type="file" onChange={avatar.changeHandler} />
                  </IconButton>
                </Stack>

                {avatar.error && (
                  <Typography color="error" variant='caption' m={"1rem"} width={"fit-content"}>
                    {avatar.error}
                  </Typography>
                )}

                <TextField
                  required
                  fullWidth
                  label="Name"
                  type="text"
                  margin="normal"
                  variant="outlined"
                  value={name.value}
                  onChange={name.changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="Email"
                  margin="normal"
                  variant="outlined"
                  value={username.value}
                  onChange={username.changeHandler}
                />
                {username.error && (
                  <Typography color="error" variant='caption'>
                    {username.error}
                  </Typography>
                )}
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  value={password.value}
                  onChange={password.changeHandler}
                />
                {password.error && (
                  <Typography color="error" variant='caption'>
                    {password.error}
                  </Typography>
                )}
                <TextField
                  required
                  fullWidth
                  label="Bio"
                  type="text"
                  margin="normal"
                  variant="outlined"
                  value={bio.value}
                  onChange={bio.changeHandler}
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{ marginTop: "1rem", backgroundColor: '#0288d1' }}
                  fullWidth
                  disabled={isloading}
                >
                  Signup
                </Button>
                <Typography textAlign={"center"} sx={{ margin: "1rem" }}>Or</Typography>
                <Button
                  sx={{ marginTop: "1rem", backgroundColor: '#004d40' }}
                  variant='contained'
                  color='secondary'
                  onClick={() => setIsLogin(true)}
                  fullWidth
                  disabled={isloading}
                >
                  Login
                </Button>
              </form>
            </>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
