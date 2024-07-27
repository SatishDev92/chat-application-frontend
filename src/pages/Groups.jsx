import { Add, Delete, Done, Edit, KeyboardBackspace, Menu } from '@mui/icons-material';
import { Backdrop, Box, Button, CircularProgress, Drawer, Grid, IconButton, Stack, TextField, Tooltip, Typography } from '@mui/material';
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Grouplist from "../components/specifics/Grouplist";
import UserItem from '../components/shared/UserItem';
import { useAddMemberMutation, useDeleteChatMutation, useGetChatsDetailsQuery, useMyGroupsQuery, useRemoveMemberMutation, useUpdateGroupNameMutation } from '../redux/api';
import { useAsyncMutation, useError } from '../hooks/hook';
import LoaderR   from "../components/layout/LoaderR"
import { useDispatch, useSelector } from 'react-redux';
import { setIsAddMember } from '../redux/misc';
const DeleteConfirmDialog = lazy(() => import("../components/dialog/deleteHandler"));
const AddMemberDialog = lazy(() => import("../components/dialog/addMemberDialog"));




const Groups = () => {
  const [searchParams] = useSearchParams();
  const chatId = searchParams.get("group");

const dispatch = useDispatch();

  const navigate = useNavigate();

 const myGroups =useMyGroupsQuery();

 const { isAddMember } = useSelector((state)=>state.MM)

 const groupDetails = useGetChatsDetailsQuery({chatId , populate:true} ,{skip : !chatId});
 const [updateGroup,isLoading] =useAsyncMutation(useUpdateGroupNameMutation);

 const [removeMember,isLoadingRemoveMember] =useAsyncMutation(useRemoveMemberMutation);

 
 const [deleteGroup,isdeleteGroups] =useAsyncMutation(useDeleteChatMutation);


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);



  const [groupName, setGroupName] = useState(" ");
  const [groupNameUpdate, setGroupNameUpdate] = useState("");
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);
  const[member, setMember] = useState([]);

const  errors = [
  {
    isError:myGroups.isError,
    error:myGroups.error
  },
  {
    isError:groupDetails.isError,
    error:groupDetails.error
  }
] 


   useError(errors)


   useEffect(()=>{
  if(groupDetails.data){
    setGroupName(groupDetails.data.chat.name);
    setGroupNameUpdate(groupDetails.data.chat.name);
    setMember(groupDetails.data.chat.members)
  }
  return()=>{
    setGroupName(""),
    setGroupNameUpdate("");
    setMember([]);
  setIsEdit(false);
  }

   },[groupDetails.data])

  const navigateBack = () => {
    navigate('/');
  };

  const handleMbl = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMobileClose = () => setIsMobileMenuOpen(false);

  const updateGroupNameHandler = () => {
    
    setIsEdit(false);
    updateGroup("Updating...",{chatId, name: groupNameUpdate});
   
  };
    
  const reomveHandler = (userId) =>{
    removeMember("Removing Members...." , {userId, chatId});
  }




  const confirmAdd = () => {
  dispatch(setIsAddMember(true));
  
  };

  const confirmDelete = () => {
    setConfirmDeleteDialog(true);
    
  };

  const closeConfirmHandler = () => {
    setConfirmDeleteDialog(false);
  };

  const deleteHandler = () => {
    console.log("Group deleted");
    setConfirmDeleteDialog(false);
  };

  const dd = ()=>{
   deleteGroup("Deleting Groups...", chatId);
    closeConfirmHandler();
    navigate("/");
  }

  const IconsBtn = (
    <>
      <Box
        sx={{
          display: {
            xs: 'block',
            sm: 'none',
          },
          position: 'fixed',
          right: '1rem',
          top: '1rem',
        }}
      >
        <IconButton onClick={handleMbl}>
          <Menu />
        </IconButton>
      </Box>

      <Tooltip title="Back">
        <IconButton
          sx={{
            position: 'absolute',
            top: '2rem',
            left: '2rem',
            bgcolor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            '&:hover': {
              bgcolor: 'rgba(0, 0, 0, 0.7)',
            },
          }}
          onClick={navigateBack}
        >
          <KeyboardBackspace />
        </IconButton>
      </Tooltip>
    </>
  );

  const GroupName = (
    <Stack direction="row" alignItems="center" justifyContent="center" spacing="1rem" padding="3rem">
      {isEdit ? (
        <>
          <TextField
            value={groupNameUpdate}
            onChange={(e) => setGroupNameUpdate(e.target.value)}
          />
          <IconButton onClick={updateGroupNameHandler}
          disabled={isLoading}>
            <Done />
          </IconButton>
        </>
      ) : (
        <>
          <Typography variant="h4">{groupName}</Typography>
          <IconButton onClick={() => setIsEdit(true)} disabled={isLoading}>
            <Edit />
          </IconButton>
        </>
      )}
    </Stack>
  );

  const buttonGroup = (
    <Stack
      direction={{
        sm: "row",
        xs: "column-reverse"
      }}
      spacing="1rem"
      p={{
        sm: "1rem",
        xs: "0",
        md: "1rem 4rem",
      }}
    >
      <Button size="large" variant="contained" color="error" startIcon={<Delete />} onClick={confirmDelete}>
        Delete Group
      </Button>
      <Button size="large" variant="contained" startIcon={<Add />} onClick={confirmAdd}>
        Add Member
      </Button>
    </Stack>
  );

  return  myGroups.isLoading?<LoaderR/>:(
    <Grid container height="100vh">
      <Grid
        item
        sx={{
          display: {
            xs: 'none',
            sm: 'block',
          },
        }}
        sm={4}
        bgcolor="bisque"
      >
        <Grouplist myGroups={myGroups.data?.message} chatId={chatId} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          padding: '1rem 3rem',
        }}
      >
        {IconsBtn}

        {groupName && (
          <>
            {GroupName}
            <Typography margin="2rem" alignSelf="flex-start" variant="body1">
              Members
            </Typography>
            <Stack
              maxWidth="45rem"
              width="100%"
              boxSizing="border-box"
              padding={{
                sm: "1rem",
                xs: "0",
                md: "1rem 4rem"
              }}
              spacing="2rem"
              height="50vh"
              overflow="auto"
            >
              {/* Members list goes here */}
             {
              isLoadingRemoveMember ?<CircularProgress/>:
             member?.map((i)=>(
                  <UserItem  user={i} 
                  key={i._id}
                  isAdded styling ={{
                    boxShadow:"0 0 0.5rem rgba(0, 0, 0, 0.2)",
                    padding:" 1rem 2rem",
                    borderRadius : "1rem"
                  }} handler={reomveHandler} />
              )
            )
             }


            </Stack>
            {buttonGroup}
          </>
        )}
      </Grid>

     {
      isAddMember && 
        <Suspense fallback={<Backdrop open />}>
          <AddMemberDialog  chatId={chatId}/>
        </Suspense>
      


     }


      {confirmDeleteDialog && (
        <Suspense fallback={<Backdrop open />}>
          <DeleteConfirmDialog
            open={confirmDeleteDialog}
            handleClose={closeConfirmHandler}
            deleteHandler={dd}
          />
        </Suspense>
      )}

      <Drawer
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileClose}
      >
        <Grouplist w="50vw" myGroups={myGroups.data?.message} chatId={chatId} />
      </Drawer>
    </Grid>
  );
};

export default Groups;
