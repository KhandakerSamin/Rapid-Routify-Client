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
import PrivateRoute from '../Routes/PrivateRoute'
import AdminRoute from "./AdminRoute";
import DeliveryManRoute from "./DeliveryManRoute";
import Payment from "../Pages/Dashboard/User/Payment";
import AllHome from "../Pages/Dashboard/AllHome";
import PaymentSuccessPage from "../Pages/Dashboard/User/PaymentSuccessPage";
import ErrorPage from "../Pages/ErrorPage";
import ContactUs from "../Pages/ContactUs/ContactUs";
import UserText from "../Pages/Dashboard/Admin/UserText";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
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
            },
            {
                path:'/contactUs',
                element:<ContactUs></ContactUs>
            },
            
        ]
    },
    {
        path: '/dashboard',
        errorElement:<ErrorPage></ErrorPage>,
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [

            // normal users routes:

            {
                path:'/dashboard',
                element: <AllHome></AllHome>
            },

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
                loader: ({params} ) => fetch(`https://rapid-routify-server.vercel.app/parcels/${params.id}`)
            },
            {
                path: 'payment/:id',
                element: <Payment></Payment> ,
                loader: ({params} ) => fetch(`https://rapid-routify-server.vercel.app/parcels/${params.id}`)
            },

            {
                path:'payment-success',
                element:<PaymentSuccessPage></PaymentSuccessPage>
            },
           

            // admin routes:

            {
                path:'allParcels',
                element:<AdminRoute><AllParcels></AllParcels></AdminRoute>
            },
            {
                path:'allParcels/:id',
                element:<AdminRoute><AllParcels></AllParcels></AdminRoute>
            },
            {
                path:'statistics',
                element:<AdminRoute><Statistics></Statistics></AdminRoute>
            },
            {
                path:'allUsers',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:'allDeliveryMan',
                element:<AdminRoute><AllDeliveryMan></AllDeliveryMan></AdminRoute>
            },
            {
                path:'userText',
                element:<AdminRoute><UserText></UserText></AdminRoute>
            },
        
            
            // delivery man route : 

            {
                path: 'deliveryManHome',
                element: <DeliveryManRoute><DeliveryManHome></DeliveryManHome></DeliveryManRoute>
            },
            {
                path:'myDeliveryList',
                element:<DeliveryManRoute><MyDeliveryList></MyDeliveryList></DeliveryManRoute>
            },
            {
                path:'myReviews',
                element: <DeliveryManRoute><MyReviews></MyReviews></DeliveryManRoute>
            }


           
        ]
    }

])

export default router;