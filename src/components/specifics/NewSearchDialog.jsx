import { useInputValidation } from "6pp";
import { Dialog, DialogTitle, InputAdornment, List, Stack, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLazySearchUserQuery, useSendFriendRequestMutation } from '../../redux/api';
import { setIsSearch } from '../../redux/misc';
import { sampleUser } from '../../utils/sampleData';
import UserItem from '../shared/UserItem';
import toast from "react-hot-toast";
import { useAsyncMutation } from "../../hooks/hook";

const NewSearchDialog = () => {
  const { isSearch } = useSelector((state) => state.MM);
  const dispatch = useDispatch();
  const [searchUser] = useLazySearchUserQuery();
  const [sendFriendRequest, isloading,] = useAsyncMutation(useSendFriendRequestMutation);
  
  const Search = useInputValidation("");

  
  const [users, setUsers] = useState(sampleUser);

  const addFriendHandler = async (id) => {
    await sendFriendRequest("Sending friend Request....",{userId:id});
  };

  const searchCloseHandler = () => dispatch(setIsSearch(false));

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (Search.value) {
        searchUser(Search.value)
          .then(({ data }) => setUsers(data))
          .catch((error) => console.error("Search error:", error));
      } else {
        setUsers(sampleUser); // Reset to sample users if the search value is empty
      }
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [Search.value, searchUser]);

  return (
    <Dialog open={isSearch} onClose={searchCloseHandler}>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>
          Find People
        </DialogTitle>
        <TextField
          label=""
          value={Search.value}
          onChange={Search.changeHandler}
          variant='outlined'
          size='small'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                🔍
              </InputAdornment>
            )
          }}
        />
        <List>
          {users.map((user) => (
            <UserItem
              user={user}
              key={user._id}
              handler={addFriendHandler}
              handlerloading={isloading}
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default NewSearchDialog;
