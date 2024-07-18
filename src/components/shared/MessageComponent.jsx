import { Box, Typography } from '@mui/material';
import moment from 'moment';
import React, { memo } from 'react';
import { fileFormat } from '../../libs/features';
import RenderAttachement from './RenderAttachement';
import {motion} from "framer-motion";
const MessageComponent = ({ message, user }) => {
  const { attachments = [], sender, content, createdAt } = message;

  const sameSender = sender?._id === user?._id;
  const timeAgo = moment(createdAt).fromNow();
  return (
    <motion.div 
     initial={{opacity:0, x:"-100%"}}
     whileInView={{opacity:1,x:0}}
    style={{
      alignSelf: sameSender ? 'flex-end' : 'flex-start',
      marginBottom: '1rem',
      padding: '1rem',
      backgroundColor: sameSender ? '#dcf8c6' : '#fff',
      borderRadius: '10px',
      maxWidth: '60%'
    }}>
      {!sameSender && <Typography color={"#2694ab"} fontWeight={"600"} variant={"caption"}>{sender.name}</Typography>}
      {content && <Typography>{content}</Typography>}
      {attachments.length > 0 && attachments.map((attach, index) => {
        const url = attach.url;
        const file = fileFormat(url);

        return (
          <Box key={index}>
            <a href={url} target='_blank' rel='noopener noreferrer' download style={{ color: "black" }}>
              {RenderAttachement(file, url)}
            </a>
          </Box>
        );
      })}
      <Typography color={"text.secondary"} fontWeight={"600"} variant={"caption"}>{timeAgo}</Typography>
    </motion.div>
  );
}

export default memo(MessageComponent);
