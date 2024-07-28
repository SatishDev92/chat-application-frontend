import React from 'react'
import {Helmet} from "react-helmet-async";
const Title = ( {title ="Chatti" , description ="This is a chatApplication where user can chat"}) => {
  return (
       <Helmet>
        <title> {title}</title>
        <meta name='description' content='{description}' />
       </Helmet>
  )
};

export default Title;