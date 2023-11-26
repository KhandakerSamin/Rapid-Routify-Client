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
import UpdateParcel from "../Pages/Dashboard/User/UpdateParcel";
import AllParcels from "../Pages/Dashboard/Admin/AllParcels";
import Statistics from "../Pages/Dashboard/Admin/Statistics";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers";
import AllDeliveryMan from "../Pages/Dashboard/Admin/AllDeliveryMan";
import DeliveryManHome from "../Pages/Dashboard/DeliveryMan/DeliveryManHome";
import MyDeliveryList from "../Pages/Dashboard/DeliveryMan/MyDeliveryList";
import MyReviews from "../Pages/Dashboard/DeliveryMan/MyReviews";

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
                path:'/dashboard/userhome',
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
            },
            {
                path:'updateParcel/:id',
                element:<UpdateParcel></UpdateParcel>,
                loader: ({params} ) => fetch(`http://localhost:5000/parcels/${params.id}`)
            },
           

            // admin routes:

            {
                path:'allParcels',
                element:<AllParcels></AllParcels>
            },
            {
                path:'allParcels/:id',
                element:<AllParcels></AllParcels>
            },
            {
                path:'statistics',
                element:<Statistics></Statistics>
            },
            {
                path:'allUsers',
                element:<AllUsers></AllUsers>
            },
            {
                path:'allDeliveryMan',
                element:<AllDeliveryMan></AllDeliveryMan>
            },
            
            // delivery man route : 

            {
                path: 'deliveryManHome',
                element: <DeliveryManHome></DeliveryManHome>
            },
            {
                path:'myDeliveryList',
                element:<MyDeliveryList></MyDeliveryList>
            },
            {
                path:'myReviews',
                element: <MyReviews></MyReviews>
            }


           
        ]
    }

])

export default router;