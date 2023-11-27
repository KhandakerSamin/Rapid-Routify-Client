import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import SectionTitle from "../../../Components/SectionTitle";
import { RxUpdate } from "react-icons/rx";
import { IoStarHalf } from "react-icons/io5";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useState } from "react";



const MyParcel = () => {

    const axiosPublic = useAxiosPublic();

    const { user } = useAuth()
    
    const { data: parcel = [], refetch } = useQuery({
        queryKey: ['parcel'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/userBooking?email=${user?.email}`)
            return res.data
        }
    })
    console.log(parcel);
    
        const [selectedParcel, setSelectedParcel] = useState(null);
        const [searchTerm, setSearchTerm] = useState('');
        const [statusFilter, setStatusFilter] = useState('');

    const renderUpdateButton = (item) => {
        if (item.status === 'Pending') {
            return (
                <Link to={`/dashboard/updateParcel/${item._id}`}>
                    <button className="btn hover:bg-yellow-400 btn-sm text-white btn-square btn-outline">
                        <RxUpdate />
                    </button>
                </Link>
            );
        } else {
            return (
                <button className="btn btn-sm opacity-20 cursor-not-allowed text-white btn-square btn-outline">
                    <RxUpdate />
                </button>
            );
        }
    };

    const renderCancelButton = (item) => {
        if (item.status === 'Pending') {
            return (
                <button
                    onClick={() => handleDelete(item)}
                    className="btn hover:bg-yellow-400 text-white btn-square btn-sm btn-outline"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            );
        } else {
            return (
                <button className="btn btn-sm opacity-20 cursor-not-allowed text-white btn-square btn-outline">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            );
        }
    };

    const renderReviewButton = (item) => {
        if (item.status === 'Delivered') {
            return (
                <button className="btn text-xl hover:bg-yellow-400 text-white btn-square btn-sm btn-outline">
                    <IoStarHalf />

                </button>
            );
        } else {
            return (
                <button className="btn btn-sm opacity-20 cursor-not-allowed text-white btn-square btn-outline">
                    <IoStarHalf />

                </button>
            );
        }
    };

    const handleDelete = (item) => {
        Swal.fire({
            title: "Are you sure to Cencel it?",
            text: "You wont be able to revert this",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cencel it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/parcels/${item._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Booking Cencel!",
                                text: 'Parcel Cenceled successfully.',
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    const filteredParcels = parcel.filter((parcel) =>
    parcel.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (statusFilter ? parcel.status.toLowerCase() === statusFilter.toLowerCase() : true)
);


    return (
        <div className="mx-10">


            <SectionTitle heading={'Your Booked'} headingBold={'Parcels'} subHeading={'All your pacels here with needed information'}></SectionTitle>

            <div className="flex items-center bg-slate-600 justify-between rounded-lg mt-4 py-3 px-10 mx-4">
                
                
                <label className="label ml-4">
                    <span className="label-text text-2xl text-white font-bold">Filter by Status</span>
                </label>
                <select
                    className="select bg-white w-full max-w-[450px] text-slate-800  flex justify-center select-bordered"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                >
                    <option value="">All</option>
                    <option value="pending">Pending</option>
                    <option value="On The Way">On The Way</option>
                    <option value="delivered">Delivered</option>
                    <option value="cenceled">Cenceled</option>
                </select>
            </div>

            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">

                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">

                        <thead className="dark:bg-gray-700">
                            <tr className="text-left">
                                <th className="p-3">SL</th>
                                <th className="p-3">Parcel Type</th>
                                <th className="p-3">Requested Date</th>
                                <th className="p-3">Approximate Date</th>
                                <th className="p-3">Booking Date</th>
                                <th className="p-3">Delivery Man ID</th>
                                <th className="p-3">Status</th>
                                <th className="p-3">Update</th>
                                <th className="p-3">Cencel</th>
                                <th className="p-3">Review</th>
                                <th className="p-3">Payment</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                filteredParcels.map((item, index) => <tr key={item._id} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                    <td className="p-3">
                                        {index + 1}
                                    </td>
                                    <td className="p-3">
                                        <p>{item.parcelType}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{item.requestedDate}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{item.aproximateDate ? item.aproximateDate : "Not Confirmed"} </p>
                                    </td>
                                    <td className="p-3">
                                        <p>{item.bookingDate} </p>
                                    </td>
                                    <td className="p-3 ">
                                        <p>{item.deliveryManId ? item.deliveryManId : "Not Assigned"}</p>
                                    </td>
                                    <td className="p-3 ">
                                        <span className=" py-1 font-semibold rounded-md text-yellow-400">
                                            <span>{item.status}</span>
                                        </span>
                                    </td>


                                    <td className="p-3 lg:pl-4 ">
                                        {renderUpdateButton(item)}
                                    </td>


                                    <td className="p-3 lg:pl-4 ">
                                        {/* Cancel Button */}
                                        {renderCancelButton(item)}
                                    </td>


                                    <td className="p-3 lg:pl-4 ">
                                        {renderReviewButton(item)}
                                    </td>


                                    <td className="p-3 ">
                                        <span className="px-3 py-1 font-semibold rounded-md btn bg-green-600 hover:bg-green-00 border-none btn-outline btn-sm text-white">
                                            <span>Pay</span>
                                        </span>
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

export default MyParcel;