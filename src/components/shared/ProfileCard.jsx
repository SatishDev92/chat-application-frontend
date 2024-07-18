import {  Stack, Typography } from '@mui/material';
import React from 'react'

const ProfileCard = ({text , Icon , heading}) => {
  return (
      <Stack direction={"row"}  alignItems={"center"} spacing={"1 rem"} color={"white "} textAlign={"center"}>
        {
            Icon && Icon
        }
        <Stack>
            <Typography variant='body1' > {text}</Typography>
            <Typography color={"gray"}  variant='caption' > {heading}</Typography>
            
        </Stack>
      </Stack>
  )
}

export default ProfileCard;