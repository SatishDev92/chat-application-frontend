import React, { memo } from 'react';
import { Avatar, Button, Dialog, DialogTitle, ListItem, Skeleton, Stack, Typography } from "@mui/material";
import { sampleNotification } from '../../utils/sampleData';
import { useAccpetFriendRequestMutation, useGetNotificationQuery } from '../../redux/api';
import { useError } from '../../hooks/hook';
import { useDispatch, useSelector } from 'react-redux';
import { setIsNotification } from '../../redux/misc';
import toast from 'react-hot-toast';

// Define NotificationItem component before using it
const NotificationItem = memo(({ sender, _id, handler }) => {
  const { name, avatar } = sender;
  return (
    <ListItem>
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"} width={"100%"}>
        <Avatar />
        <Typography
          variant='body1'
          sx={{
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient :"vertical",
            
            overflow: "hidden",
            textDecoration: "ellipsis"
          }}
        >{`${name} sent a friend request`}</Typography>
        <Stack direction={{
          xs: "column",
          sm: "row"
        }}>
          <Button onClick={() => handler({ _id, accept: true })}>
            Accept
          </Button>
          <Button color='error' onClick={() => handler({ _id, accept: false })}>
            Reject
          </Button>
        </Stack>
      </Stack>
    </ListItem>
  );
});

const NewNotificationDialog = () => {

  const dispath = useDispatch();

  const {isNoficiation } = useSelector((state)=>state.MM)
   
  const  closeHander = () => dispath(setIsNotification(false));

  const {isLoading , data, error ,isError } = useGetNotificationQuery();


const [acceptRequest] = useAccpetFriendRequestMutation();
  const rHandler =  async({ _id, accept }) => {
      dispath(setIsNotification(false));
   try {
       const res = await acceptRequest({requestId:_id, accept});
       if(res.data) {
       console.log("Use socket here");
       toast.success(res.data.message);
       }else  toast.error(res.data?.error || "something went wrong")
   } catch (error) {
     toast.error("Something went wrong");
      console.log(error);
   }
  };
    useError([{error, isError}]);
   
  return (
    <Dialog open={isNoficiation } onClose={closeHander}>
      <Stack p={{ sx: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
        <DialogTitle>Notification</DialogTitle>
       {
        isLoading ?<Skeleton/> : <>
         {
          data.
          allRequests.length > 0 ? (
            data.
            allRequests?.map((i) => <NotificationItem sender={i.sender} _id={i._id} handler={rHandler} key={i._id} />)
          ) : (
            <Typography textAlign={"center"}>NO Notification</Typography>
          )
        }
        </>
       }
      </Stack>
    </Dialog>
  );
};

export default NewNotificationDialog;
