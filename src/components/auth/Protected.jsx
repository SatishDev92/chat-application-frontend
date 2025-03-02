import React from 'react'
import { Navigate , Outlet } from 'react-router-dom'
const Protected = ({children , user , redirect="/home"}) => {
  if(!user) return <Navigate to = {redirect} />
  else return children ? children : <Outlet />
}

export default Protected;