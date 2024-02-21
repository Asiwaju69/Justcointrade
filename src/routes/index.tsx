import HomeLayout from "@/layouts/Home";
import Home from "@/pages/Home";
import Login from "@/pages/authentication/Login";
import Register from "@/pages/authentication/Register";
import { createBrowserRouter } from "react-router-dom";

export const appRoutes = createBrowserRouter([
    {
        path:"/",
       element: <HomeLayout/>,
       children: [
        {
            index: true,
            element: <Home/>
            
        },
 
       ]
    },
    {
        path:"register",
        element:<Register/>
    },
    {
        path:"login",
        element:<Login/>
    }
])