import Client_Dashboard_Layout from "@/layouts/Client_Dashboard";
import HomeLayout from "@/layouts/Home";
import Client_Home from "@/pages/Client_Dashboard/Home";
import Home from "@/pages/Home";
import ForgetPassword from "@/pages/authentication/ForgetPassword";
import Login from "@/pages/authentication/Login";
import Register from "@/pages/authentication/Register";
import Verification from "@/pages/authentication/Verification";
import NotFound from "@/pages/error/NotFound";
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
        path:"dashboard",
       element: <Client_Dashboard_Layout/>,
       children: [
        {
            index: true,
            element: <Client_Home/>
            
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
    },
    {
        path:"forget-password",
        element:<ForgetPassword/>
    },
    {
        path: "verify-code",
        element: <Verification/>
    },
    {
        path:"*",
        element: <NotFound/>
    },
 
])