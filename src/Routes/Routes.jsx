import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import About from "../Pages/About/About";
import UserHome from "../Pages/Dashboard/User/UserHome";
import Dashboard from "../Layout/Dashboard";
import BookParcel from "../Pages/Dashboard/User/BookParcel";
import MyParcel from "../Pages/Dashboard/User/MyParcel";
import MyProfile from "../Pages/Dashboard/User/MyProfile";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [

            // normal users routes:
            {
                path:'userHome',
                element:<UserHome></UserHome>
            },
            {
                path:'bookParcel',
                element:<BookParcel></BookParcel>
            },
            {
                path: 'myParcel',
                element:<MyParcel></MyParcel>
            },
            {
                path:'myProfile',
                element:<MyProfile></MyProfile>
            }
           

            // admin routes:

           
        ]
    }

])

export default router;