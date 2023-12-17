import {createBrowserRouter} from "react-router-dom";
import useResponsiveLayoutSelector from 'pages/pages'
import {protectedRoutes} from "helpers/isLoggedInHandler";

export default function Routes(){
  const layoutSelector = useResponsiveLayoutSelector()
  return createBrowserRouter([
    {
      path:'/',
      loader: protectedRoutes,
      children:[
        {
          index:true,
          element:layoutSelector.home,
        },
        {
          path:'about',
          children:[
            {
              index:true,
              element:layoutSelector.about,
            },
            {
              path:'me',
              element:<div>I AM BEHROUZ MOHAMMADI</div>,
            }
          ]
        },
      ]
    },
    {
      path:'/login',
      element:layoutSelector.login
    },
    {
      path:"*",
      element:<>404 not founding</>
    }
  ],{
    basename:import.meta.env.PUBLIC_URL
  })
}
