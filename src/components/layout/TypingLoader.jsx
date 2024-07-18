 import { Stack } from '@mui/material';
import React from 'react'
import { BouncingSkeleton } from '../style/Stylecomponent';
 
 const TypingLoader = () => {
   return   <Stack
   spacing={"0.5rem"}
   padding={"0.5rem"}
   direction={"row"}
   justifyContent={"center"}
   >
    <BouncingSkeleton  variant='circular' width={15} height={15} style={{
        animationDelay:"0.1s"
    }}/>
     <BouncingSkeleton  variant='circular' width={15} height={15} style={{
        animationDelay:"0.2s"
    }}/>
     <BouncingSkeleton  variant='circular' width={15} height={15} style={{
        animationDelay:"0.4s"
    }}/>
     <BouncingSkeleton  variant='circular' width={15} height={15} style={{
        animationDelay:"0.6s"
    }}/>

   </Stack>
 }
 
 export default TypingLoader;