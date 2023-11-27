import { FaMapLocationDot } from "react-icons/fa6";
import SectionTitle from "../../../Components/SectionTitle";
import { RiAdminFill, RiChatDeleteFill } from "react-icons/ri";
import { MdCloudDone } from "react-icons/md";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

const MyDeliveryList = () => {

    const axiosPublic = useAxiosPublic();

    const { user } = useAuth()

    const { data: userId = [], refetch } = useQuery({
        queryKey: ['userId', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`users/${user?.email}`)
            return res.data
        }
    })

    const deliveryManId = userId._id;
    console.log(deliveryManId);

    const { data: parcels = [], refetch: parcelRefecth } = useQuery({
        queryKey: ['parcels', deliveryManId],
        queryFn: async () => {
            const res = await axiosPublic.get(`/delivery-man/${deliveryManId}`)
            return res.data
        }
    })

    console.log(parcels);


    const handleMakeDelivered = (parcel) => {

        Swal.fire({
            title: "Did You Delivered it???",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delivery Done!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.patch(`/all-parcels/${parcel._id}`)
                    .then((res) => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            parcelRefecth()
                            Swal.fire({
                                title: "Delivered Success !",
                                text: "Your Parcel Status Changed",
                                icon: "success"
                            });
                        }
                    });
                const updated = {
                    nothing: 'nothing'
                }
                axiosPublic.patch(`/delivered-booking/${user?.email}`, updated)

            }
        });


    };







    const handleCencel = (parcel) => {
        Swal.fire({
            title: "Are you sure to Cencel ??",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "No..",
            confirmButtonText: "Yes, Cencel it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.patch(`/all-parcel/${parcel._id}`)
                    .then((res) => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            parcelRefecth()
                            Swal.fire({
                                title: "Cenceled Success!",
                                text: "Your Parcel Has been Cenceled",
                                icon: "success"
                            });
                        }
                    });

            }
        });
    };



    return (
        <div>
            <Toaster></Toaster>

            <SectionTitle heading={'My'} headingBold={'Delivery List'} subHeading={'All your pending delivey list are here'}></SectionTitle>

            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">

                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">

                        <thead className="dark:bg-gray-700">
                            <tr className="text-left">
                                <th className="p-3">SL</th>
                                <th className="p-3">Booked User’s Name</th>
                                <th className="p-3">Receivers Name</th>
                                <th className="p-3">Recievers phone </th>
                                <th className="p-3">Receivers Address </th>
                                <th className="p-3">Requested Date </th>
                                <th className="p-3">Approximate Date </th>
                                <th className="p-3">Recievers phone </th>
                                <th className="p-3">Location</th>
                                <th className="p-3">Cencel</th>
                                <th className="p-3">Delivered</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                parcels.map((parcel, index) => <tr key={parcel._id} className="border-b  border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                    <td className="p-3">
                                        {index + 1}
                                    </td>
                                    <td className="p-1">
                                        <p className="pl-2">{parcel.name}</p>
                                    </td>

                                    <td className="p-1">
                                        <p className="pl-2"> {parcel.receiver} </p>
                                    </td>

                                    <td className="p-1">
                                        <p className="pl-3"> {parcel.phone} </p>
                                    </td>
                                    <td className="p-1">
                                        <p className="pl-3"> {parcel.address} </p>
                                    </td>
                                    <td className="p-1">
                                        <p className="pl-3"> {parcel.requestedDate} </p>
                                    </td>
                                    <td className="p-1">
                                        <p className="pl-3"> {parcel.aproximateDate} </p>
                                    </td>
                                    <td className="p-1">
                                        <p className="pl-3"> {parcel.receiverPhone} </p>
                                    </td>
                                    <td className="p-1">
                                        <button className="btn ml-3 hover:bg-yellow-400 text-xl btn-sm text-white btn-square btn-outline">
                                            <FaMapLocationDot />
                                        </button>
                                    </td>
                                    <td className="p-1">
                                        {/* <button className="btn ml-3 hover:bg-yellow-400 text-xl btn-sm text-white btn-square btn-outline">
                                    <RiChatDeleteFill />
                                </button> */}
                                        {parcel.status === 'Cenceled' ? <p className="font-bold  text-red-500">Cenceled</p> : parcel.status === 'Delivered' ? <> <button className="btn ml-3 cursor-not-allowed  text-xl btn-sm text-slate-700 btn-square btn-outline hover:text-slate-800">
                                            <RiChatDeleteFill />
                                        </button></> : <button
                                            onClick={() => handleCencel(parcel)}
                                            className="">
                                            <button className="btn ml-3 hover:bg-yellow-400 text-xl btn-sm text-white btn-square btn-outline">
                                                <RiChatDeleteFill />
                                            </button>

                                        </button>}
                                    </td>
                                    <td className="p-3">


                                        {parcel.status === 'Delivered' ? <p className="font-bold  text-green-500">Delivered</p> : parcel.status === 'Cenceled' ? <> <button className="btn ml-3 cursor-not-allowed  text-xl btn-sm text-slate-700 hover:text-slate-800 btn-square btn-outline">
                                            <MdCloudDone />
                                        </button> </> : <button
                                            onClick={() => handleMakeDelivered(parcel)}
                                            className="">
                                            <button className="btn ml-3 hover:bg-yellow-400 text-xl btn-sm text-white btn-square btn-outline">
                                                <MdCloudDone />
                                            </button>

                                        </button>}

                                    </td>


                                </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default MyDeliveryList;