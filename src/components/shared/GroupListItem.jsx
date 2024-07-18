import React, { memo } from 'react';
import { StyledLink } from '../style/Stylecomponent';
import { Stack, Typography } from '@mui/material';
import AvatarCard from './AvatarCard';

const GroupListItem = ({ group, chatId }) => {
  const { name, avatars, _id } = group;

  return (
    <StyledLink
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id) e.preventDefault();
      }}
    >
      <Stack direction="row" alignItems="center" spacing="1rem">
        <AvatarCard avatar={avatars} />
        <Typography>
          {name}
        </Typography>
      </Stack>
    </StyledLink>
  );
};

export default memo(GroupListItem);
