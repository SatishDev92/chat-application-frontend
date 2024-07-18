import { isValidUsername } from "6pp"

export const  usernameValidator = (username) => {
    const result = isValidUsername(username);

   if(!result) {
    return (
        { isValid: false, errorMessage: "Invalid username" }
    )
    
   }  else {
    return ( {
        isvalid:true, 
        errormessage:"Invalid Username"
  })
   }

}
