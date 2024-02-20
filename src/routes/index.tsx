import HomeLayout from "@/layouts/Home";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";

export const appRoutes = createBrowserRouter([
    {
        path:"/",
       element: <HomeLayout/>,
       children: [
        {
            index: true,
            element: <Home/>
            
        }
       ]
    }
])