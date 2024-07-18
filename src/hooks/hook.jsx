import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { NEW_MESSAGE } from "./events";



const useError =(errors = []) =>{

    

    useEffect(() => {

   errors.forEach(({isError, error , fallback}) =>{
     if(isError) {
        if(fallback) return fallback();
        else return  toast.error(error.data?.message ||"something went wrong");
     }

   })

      }, [errors]);
      
};




const useAsyncMutation = (mutation) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const [mutate] = mutation();
  
    const executeMutation = async (toastMessage, ...args) => {
      if (isLoading) {
        toast.error("Request is already in progress.");
        return;
      }
  
      setIsLoading(true);
      const toastId = toast.loading( toastMessage || "Updating the data");
  
      try {
        const res = await mutate(...args).unwrap(); // Use unwrap for better error handling
           console.log(res)
        if (res) {
          toast.success(res.message || "Updated data successfully", {
            id: toastId,
          });
          setData(res.data || res.message);
        } else {
          toast.error(res.message || "Something went wrong", {
            id: toastId,
          });
        }
      } catch (error) {
        console.error(error);
        toast.error(error.data?.message || "Something went wrong", {
          id: toastId,
        });
      } finally {
        setIsLoading(false);
      }
    };
  
    return [executeMutation, isLoading, data];
  };


const useSocketEvents  = (socket ,handler) =>{
   useEffect(()=>{
    Object.entries(handler).forEach(([event ,handler])=>{
      socket.on(event,handler);
    });
   
    return () =>{
      Object.entries(handler).forEach(([event ,handler])=>{
        socket.off(event,handler);
      });
     
    }


   },[socket , handler]);
}


export {useError , useAsyncMutation , useSocketEvents};