/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";


const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()

    if (loading || isAdminLoading) {
        return <div className="min-h-[calc(100vh-300px)] flex justify-center items-center">
            <progress className="progress w-56"></progress>
        </div>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/' state={{ from: location }}></Navigate>
};

export default AdminRoute;