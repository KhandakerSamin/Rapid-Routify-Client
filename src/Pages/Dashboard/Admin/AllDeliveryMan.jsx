import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Rating } from 'primereact/rating';
import { data } from "autoprefixer";

const AllDeliveryMan = () => {

    const axiosPublic = useAxiosPublic();

    const { data: deliveryMans = [], refetch } = useQuery({
        queryKey: ['deliveryMans'],
        queryFn: async () => {
            const res = await axiosPublic.get('/deliveryMans');
            return res.data;
        },
    });


    return (
        <div className="mx-10">


            <SectionTitle heading={'All'} headingBold={'Delivery Man'} subHeading={'All your delivery mans are here | Manage Them Sir '}></SectionTitle>

            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">

                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">

                        <thead className="dark:bg-gray-700">
                            <tr className="text-left">
                                <th className="p-3">SL</th>
                                <th className="p-3">Delivery Man Name</th>
                                <th className="p-3">Phone Number</th>
                                <th className="p-3">Parcel Delivered</th>
                                <th className="p-3">Average review</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                deliveryMans.map((item, index) => <tr key={item._id} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                    <td className="p-3">
                                        {index + 1}
                                    </td>
                                    <td className="p-3">
                                        <p>{item.name}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{item.phone}</p>
                                    </td>
                                    <td className="p-3">
                                        <p className="ml-10"> {item.delivered}</p >
                                    </td>
                                    <td className="p-3">
                                        <Rating className="ml-2" value={5} readOnly cancel={false} />
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>



        </div>
    );
};

export default AllDeliveryMan;