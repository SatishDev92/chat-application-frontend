import React from 'react';
import { FileOpen } from '@mui/icons-material';
import { transformImage } from '../../libs/features';

const RenderAttachement = (file, url) => {
  switch (file) {
    case "video":
      return <video src={url} preload='none' width={"200px"} controls />;
    case "image":
      return <img src={transformImage(url)} alt="Attachment" width={"200px"} height={"150px"} style={{ objectFit: 'contain' }}  />;
    case "audio":
      return <audio src={url} preload='none' controls />;
    default:
      return <FileOpen />;
  }
}

export default RenderAttachement;
