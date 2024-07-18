import React, { useState } from 'react';
import { Avatar, Button, Dialog, DialogTitle, Skeleton, Stack, TextField, Typography } from "@mui/material";
import UserItem from '../shared/UserItem';
import { useInputValidation } from "6pp"; // Ensure you have this custom hook or its equivalent
import { useDispatch, useSelector } from 'react-redux';
import { useAsyncMutation, useError } from '../../hooks/hook';
import { useFriendAvailableQuery,  useNewGroupsMutation} from '../../redux/api';
import { setIsNewGroup } from '../../redux/misc';
import toast from 'react-hot-toast';

const NewGroupDialog = () => {
  const { isNewGroup } = useSelector((state) => state.MM);
  const dispatch = useDispatch();
  const { isError, isLoading, error, data } = useFriendAvailableQuery();

  const[newGroup,newGrouploading] =useAsyncMutation(useNewGroupsMutation)

  const [selectedUsers, setSelectedUsers] = useState([]);

  const errors = [{ isError, error }];
  useError(errors);

  const selectMembers = (id) => {
    setSelectedUsers((prev) =>
      prev.includes(id) ? prev.filter((current) => current !== id) : [...prev, id]
    );
  };

  const groupName = useInputValidation("");
  const submitHandler = () => {
    if (!groupName.value) return toast.error("Group name is required");
    if (selectedUsers.length < 2) return toast.error("Group must contain at least 2 members");

    // Handle the group creation logic here
    newGroup("Creating New Group...",{name:groupName.value , members:selectedUsers});

    closeHandler();
  };

  const closeHandler = () => {
    dispatch(setIsNewGroup(false));
  };

  return (
    <Dialog onClose={closeHandler} open={isNewGroup}>
      <Stack p={{ sx: "1rem", sm: "3rem" }} maxWidth={"25rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"} variant="h4">
          New Group
        </DialogTitle>
        <TextField
          label="Group Name"
          value={groupName.value}
          onChange={groupName.changeHandler}
        />
        <Typography variant='body1'>Members</Typography>
        <Stack>
          {isLoading ? (
            <Skeleton />
          ) : (
            data?.friends?.map((user ,index) => (
              <UserItem
                user={user}
                key={`${user._id}-${index}`}  // Ensure unique key
                handler={() => selectMembers(user._id)}
                isAdded={selectedUsers.includes(user._id)}
              />
            ))
          )}
        </Stack>
        <Stack direction="row" justifyContent="flex-end" spacing={1} mt={2}>
          <Button variant="text" color="error" onClick={closeHandler}>
            Cancel
          </Button>
          <Button variant="contained" onClick={submitHandler} disabled={newGrouploading}>
            Create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroupDialog;
