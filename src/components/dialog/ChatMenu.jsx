import { ListItemText, Menu, MenuItem, MenuList, Tooltip } from '@mui/material';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsfileMenu, setIsupLoadingLoader } from '../../redux/misc';
import { AudioFile, Image, UploadFile, VideoFile } from '@mui/icons-material';
import toast from 'react-hot-toast';
import { useSendAttachmentsMutation } from '../../redux/api';

const ChatMenu = ({ anchorEl, chatId }) => {
  const { isFileMenu } = useSelector((state) => state.MM);
  const dispatch = useDispatch();

  const imageRef = useRef(null);
  const filesRef = useRef(null);
  const audioRef = useRef(null);
  const videoRef = useRef(null);

  const [sendAttachment] = useSendAttachmentsMutation();
  const closedFileMenu = () => dispatch(setIsfileMenu(false));

  const selectImage = () => imageRef.current?.click();
  const selectAudio = () => audioRef.current?.click();
  const selectVideo = () => videoRef.current?.click();
  const selectFile = () => filesRef.current?.click();


  const fileChangeHandler = async (e, key) => {
    const files = Array.from(e.target.files);
    if (files.length <= 0) return;
    if (files.length > 5) return toast.error(`You can only send 5 ${key} at a time`);

    dispatch(setIsupLoadingLoader(true));
    const toastId = toast.loading(`Sending ${key}...`);
    closedFileMenu();

    try {
      const myform = new FormData();
      myform.append('chatId', chatId);
      files.forEach((file) => myform.append('files', file));

      const res = await sendAttachment(myform);
   
      if (res.data) {
        toast.success(`${key} sent successfully`, { id: toastId });
      } else {
        toast.error(`Failed to send ${key}`, { id: toastId });
      }
    } catch (error) {
      toast.error(error.message, { id: toastId });
    } finally {
      dispatch(setIsupLoadingLoader(false));
    }
  };

  return (
    <Menu anchorEl={anchorEl} open={isFileMenu} onClose={closedFileMenu}>
      <div style={{ width: '10rem' }}>
        <MenuList>
          <MenuItem onClick={selectImage}>
            <Tooltip title="Image">
              <Image />
            </Tooltip>
            <ListItemText style={{ marginLeft: '0.5rem' }}>Image</ListItemText>
            <input
              type="file"
              multiple
              accept="image/png, image/jpeg, image/gif"
              style={{ display: 'none' }}
              onChange={(e) => fileChangeHandler(e, 'Images')}
              ref={imageRef}
            />
          </MenuItem>
          <MenuItem onClick={selectAudio}>
            <Tooltip title="Audio">
              <AudioFile />
            </Tooltip>
            <ListItemText style={{ marginLeft: '0.5rem' }}>Audio</ListItemText>
            <input
              type="file"
              multiple
              accept="audio/mpeg, audio/wav, audio/ogg"
              style={{ display: 'none' }}
              onChange={(e) => fileChangeHandler(e, 'Audios')}
              ref={audioRef}
            />
          </MenuItem>
         
          <MenuItem onClick={selectVideo}>
            <Tooltip title="Video">
              <VideoFile />
            </Tooltip>
            <ListItemText style={{ marginLeft: '0.5rem' }}>Video</ListItemText>
            <input
              type="file"
              multiple
              accept="video/mp4,video/webm,video/ogg"
              style={{ display: 'none' }}
              onChange={(e) => fileChangeHandler(e, 'Videos')}
              ref={videoRef}
            />
          </MenuItem>
          <MenuItem onClick={selectFile}>
            <Tooltip title="File">
              <UploadFile />
            </Tooltip>
            <ListItemText style={{ marginLeft: '0.5rem' }}>File</ListItemText>
            <input
              type="file"
              multiple
              accept="*"
              style={{ display: 'none' }}
              onChange={(e) => fileChangeHandler(e, 'Files')}
              ref={filesRef}
            />
          </MenuItem>
        </MenuList>
      </div>
    </Menu>
  );
};

export default ChatMenu;
