import HomeLayout from "@/layouts/Home";
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
    }
])