import { Avatar, IconButton, ListItem, Stack, Typography } from '@mui/material';
import React, { memo } from 'react'
import { Add, Remove } from '@mui/icons-material';
import { transformImage } from '../../libs/features';

const UserItem = ({user, handler , handlerloading  , isAdded = false ,styling ={}}) => {
    const {name , _id , avatar} = user
  return (
   <ListItem >
    <Stack direction={"row"} alignItems={"center"}
    spacing={" 1rem"}  width={"100%"} {...styling}>
        <Avatar src={transformImage(avatar)} />
        <Typography
         variant='body1'
         sx={{
            flexGrow :1,
            display:"-webkit-box",
            WebkitLineClamp :"vertical",
            overflow : "hidden",
            textDecoration :"ellipsis"

         }}
        >{name}</Typography>

        <IconButton
        size='small'
        sx={{
            bgcolor: isAdded ? "error.main":"primary.main",
            color: "white",
            "&:hover" :{
                bgcolor: isAdded ? 'error.dark' : 'primary.dark',
            }
        }}
         onClick={()=> handler(_id)} disabled ={handlerloading}>

            {
                isAdded ? <Remove /> :  <Add />
            }
          

        </IconButton>
    </Stack>
   </ListItem>
  )
}

export default memo(UserItem);