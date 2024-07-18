import React from 'react'
import ProfileCard from '../shared/ProfileCard';
import { Avatar, Stack } from '@mui/material';
import { Face , AlternateEmail as UsernameIcon , CalendarMonth as CIcon} from "@mui/icons-material"
  import moment from  "moment";
import { transformImage } from '../../libs/features';

const Profile = ({user}) => {
  return (
     <Stack  spacing={"2 rem"} direction={"column"} alignItems={"center"}>
    <Avatar 
    src={transformImage(user?.avatar?.url) ||"https://as1.ftcdn.net/v2/jpg/08/14/56/82/1000_F_814568253_JBda1pjYXP0tt8mU9PmXkCjYMkUF7Y3U.jpg"}
    sx={{
        width:200,
        height :200,
        objectFit :"contain",
        marginBottom : "1 rem",
        border : "5px solid white"
    }}
    />



    <ProfileCard heading={"bio "} text={user?.bio}/>

    

    <ProfileCard heading={"Email "} text={user?.email} Icon={<UsernameIcon />}/>

    

    <ProfileCard heading={"Name "} text={user?.name} Icon={<Face />}/>
    
    <ProfileCard heading={"Joined "} text={moment(user.createdAt).fromNow()} Icon={<CIcon />}/>


     </Stack>

  )

}

export default Profile;