import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useDeliveryMan = () => {
    const {user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const { data: isDeliveryMan , isPending: isDeliveryManLoading} = useQuery({
        queryKey: [user?.email, 'isDeliveryMan'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/deliveryMan/${user.email}`);
            // console.log(res.data);
            return res.data?.deliveryMan;
        }
    }) 
    return [isDeliveryMan, isDeliveryManLoading]
};

export default useDeliveryMan;