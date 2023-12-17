import {redirect} from "react-router-dom";

export const protectedRoutes = async () =>{
  const isLoggedIn = true
  if(!isLoggedIn) throw redirect('/login')
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return null
}