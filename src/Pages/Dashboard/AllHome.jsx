import useAdmin from "../../Hooks/useAdmin";
import useDeliveryMan from "../../Hooks/useDeliveryMan";
import Statistics from "./Admin/Statistics";
import DeliveryManHome from "./DeliveryMan/DeliveryManHome";
import UserHome from "./User/UserHome";

const AllHome = () => {
    const [isAdmin] = useAdmin()
    const [isDeliveryMan] = useDeliveryMan()
    
    return (
        <div>
            {
                isAdmin? <><Statistics></Statistics></> : isDeliveryMan? <><DeliveryManHome></DeliveryManHome></> : <> <UserHome></UserHome></>
            }
        </div>
    );
};

export default AllHome;