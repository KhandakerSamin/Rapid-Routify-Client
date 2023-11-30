/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useDeliveryMan from "../Hooks/useDeliveryMan";
import useAuth from "../Hooks/useAuth";

const DeliveryManRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [ isDeliveryMan , isDeliveryManLoading] = useDeliveryMan()
    const location = useLocation()

    if (loading || isDeliveryManLoading) {
        return <div className="min-h-[calc(100vh-300px)] flex justify-center items-center">
            <progress className="progress w-56"></progress>
        </div>
    }

    if (user && isDeliveryMan) {
        return children;
    }
    return <Navigate to='/' state={{ from: location }}></Navigate>
};

export default DeliveryManRoute;