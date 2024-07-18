import { Box, Stack, Typography } from '@mui/material';
import React, { memo } from 'react';
import { StyledLink } from '../style/Stylecomponent';
import AvatarCard from './AvatarCard';
import { motion } from 'framer-motion';

const Chatitem = ({
  avatar = [],
  name, 
  _id,
  groupChat = false, 
  sameSender, 
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChat
}) => {
  
  return (
    <StyledLink to={`/chat/${_id}`} onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)} sx={{ padding: 0 }}>
      <motion.div 
        initial={{ opacity: 0, targetY: "100%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 }}
        style={{
          display: "flex",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: sameSender ? "black" : "unset",
          color: sameSender ? "white" : "unset",
          justifyContent: "space-between",
          gap: "1rem",
          position: "relative"
        }}
      >
        <AvatarCard avatar={avatar} />
        <Stack>
          <Typography>{name}</Typography>
          {newMessageAlert && newMessageAlert.count && (
            <Typography>
              {newMessageAlert.count} New Message{newMessageAlert.count}
            </Typography>
          )}
        </Stack>
        {isOnline && (
         <Box
         sx={{
           width: "10px",
           height: "10px",
           borderRadius: "50%",
           position: "absolute",
           top: "50%",
           left: "50%",
           transform: "translate(-50%, -50%)",
           backgroundColor: "green"
         }}
       />
       
        
        )}
      </motion.div>
    </StyledLink>
  );
};

export default memo(Chatitem);
