import { createApi , fetchBaseQuery}   from "@reduxjs/toolkit/query/react";
import { Server } from "../hooks/config";
import { EventAvailable } from "@mui/icons-material";




const api = createApi({

    reducerPath : "api",
    baseQuery : fetchBaseQuery({baseUrl:`${Server}/api/v1/`}),

    tagTypes : ["Chat" , "User" , "Message"],

    endpoints : (builder) =>({
        myChat :builder.query({
            query : ()=>({
                url : "chat/my" ,credentials : "include",
            }),
            providesTags : ["Chat"],
        }),

        searchUser : builder.query({
            query: (name)=>({
                url :`user/search?name=${name}`, credentials : "include"
            }),
            providesTags : ["User"]
        }),
         sendFriendRequest : builder.mutation({
           query: (data)  =>({
           url : "user/sendrequest",
           method:"POST",
           credentials:"include",
           body: data,
           }),
           invalidatesTags:["User"]
         }),
         
        getNotification : builder.query({
            query: ()=>({
                url :`user/notification`, credentials : "include"
            }),
           keepUnusedDataFor :0,
        }),
        accpetFriendRequest : builder.mutation({
            query: (data)  =>({
            url : "user/accpetrequest",
            method:"POST",
            credentials:"include",
            body: data,
            }),
            invalidatesTags:["Chat"]
          }),
          getChatsDetails : builder.query({
            query: ({chatId ,populate = false})=>{
                 let url = `chat/${chatId}`
                if(populate) url+="?populate=true"
                return {
                    url , 
                    credentials : "include"
                }
            },
           providesTags:["Chat"]
        }),
        getMessage: builder.query({
            query: ({ chatId, page }) => ({
              url: `chat/message/${chatId}?page=${page}`,
              credentials: "include",
            }),
             keepUnusedDataFor: 0,
          }),
          sendAttachments : builder.mutation({
            query: (data)  =>({
            url : "chat/message",
            method:"POST",
            credentials:"include",
            body: data,
            }),
           
          }),
          myGroups :builder.query({
            query : ()=>({
                url : "chat/my/groups" ,credentials : "include",
            }),
            providesTags : ["Chat"],
        }),
         
        friendAvailable : builder.query({
            query :(chatId) =>{
              let url = "/user/friends";
              if(chatId) url +=`?chatId=${chatId}`
               return {
                url,
                credentials:"include"
               };
            },
            providesTags:["Chat"]
        }),
        newGroups : builder.mutation({
            query: ({name,members})  =>({
            url : "chat/new",
            method:"POST",
            credentials:"include",
            body:{name,members},
            }),
           invalidatesTags:["Chat"],
          }),

       updateGroupName :builder.mutation({
        query:({chatId,name})=>({
            url:`chat/${chatId}`,
            method:"POST",
            credentials:"include",
            body:{name},
            
        }),
        invalidatesTags:["Chat"]
       }),
       removeMember :builder.mutation({
        query:({userId , chatId})=>({
            url:`chat/removeMember`,
            method:"POST",
            credentials:"include",
            body:{userId , chatId},
            
        }),
        invalidatesTags:["Chat"]
       }),
       addMember :builder.mutation({
        query:({chatId, members })=>({
            url:`chat/addMember`,
            method:"POST",
            credentials:"include",
            body:{chatId, members},
            
        }),
        invalidatesTags:["Chat"]
       }),
       deleteChat :builder.mutation({
        query:(chatId)=>({
            url:`chat/${chatId}`,
            method:"DELETE",
            credentials:"include",
          
            
        }),
        invalidatesTags:["Chat"]
       }),
        exitGroup :builder.mutation({
            query:(chatId) =>(
                {
                    url:`chat/leave/${chatId}`,
                    method:"POST",
                    credentials:"include"
                }
            ),
            invalidatesTags:["Chat"]
        })
          
    }),

  
})



export default api;

export const {
   useMyChatQuery , useLazySearchUserQuery , useSendFriendRequestMutation,useGetNotificationQuery,useAccpetFriendRequestMutation,
   useGetChatsDetailsQuery,
   useGetMessageQuery, 
   useSendAttachmentsMutation,
   useMyGroupsQuery,
  useFriendAvailableQuery,
  useUpdateGroupNameMutation,
  useRemoveMemberMutation,
  useAddMemberMutation,
  useNewGroupsMutation,
  useDeleteChatMutation,
  useExitGroupMutation,


  
} = api;