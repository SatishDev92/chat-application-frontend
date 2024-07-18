import { Stack, Typography } from '@mui/material';
import React from 'react';
import GroupListItem from '../shared/GroupListItem';

const Grouplist = ({ w = "100%", myGroups = [], chatId }) => {
 
  return (
    
    <Stack width={w}>
      {myGroups.length > 0 ? (
        myGroups.map((group) => (
          <GroupListItem group={group} chatId={chatId} key={group._id} />
        ))
      ) : (
        <Typography textAlign={"center"} padding={"1rem"}>NO Group</Typography>
      )}
    </Stack>
  );
}

export default Grouplist;
