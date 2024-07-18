import { Button, Dialog, DialogTitle, Skeleton, Stack, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { sampleUser } from '../../utils/sampleData';
import UserItem from '../../components/shared/UserItem';
import { useAsyncMutation, useError } from '../../hooks/hook';
import { useAddMemberMutation, useFriendAvailableQuery } from '../../redux/api';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAddMember } from '../../redux/misc';

const AddMemberDialog = ({ chatId }) => {


  const [selectedUsers, setSelectedUsers] = useState([]);
  const { isAddMember } = useSelector((state) => state.MM);
  const { isError, isLoading, error, data } = useFriendAvailableQuery(chatId);

  const dispatch = useDispatch();
  const [addMember, isLoadingAddMember] = useAsyncMutation(useAddMemberMutation);

  const selectMembers = (id) => {
    setSelectedUsers((prev) =>
      prev.includes(id) ? prev.filter((current) => current !== id) : [...prev, id]
    );
  };

  const close = () => {
    dispatch(setIsAddMember(false));
  };

  const submitFriendHandler = () => {
  
    addMember("Adding Members.." ,  {members: selectedUsers, chatId })
      .then(() => close())
      .catch((err) => console.error("Error adding members:", err));
  };
  const errors = [{ isError, error }];
  useError(errors);


  return (
    <Dialog open={isAddMember} onClose={close}>
      <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"}>Add Member</DialogTitle>
        <Stack spacing={"1rem"}>
          {isLoading ? (
            <Skeleton />
          ) : data?.friend?.length > 0 ? (
            data?.friend?.map((user) => (
              <UserItem
                key={user._id}
                user={user}
                handler={selectMembers}
                isAdded={selectedUsers.includes(user._id)}
              />
            ))
          ) : (
            <Typography textAlign={"center"}>No friends</Typography>
          )}
        </Stack>
      </Stack>
      <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={2} p={2}>
        <Button color='error' onClick={close}>Cancel</Button>
        <Button variant='contained' disabled={isLoadingAddMember} onClick={submitFriendHandler}>Add Member</Button>
      </Stack>
    </Dialog>
  );
};

export default AddMemberDialog;
