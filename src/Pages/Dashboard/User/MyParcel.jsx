import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import SectionTitle from "../../../Components/SectionTitle";
import { RxUpdate } from "react-icons/rx";
import { IoStarHalf } from "react-icons/io5";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import toast, { Toaster } from "react-hot-toast";
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

    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('');

    const [rating, setRating] = useState(0);

    const currentDate = new Date();


    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Month is zero-based, so add 1
    const day = currentDate.getDate();


    // Format the date as a string
    const formattedDate = `${year}-${month}-${day}`;

    


    const handleRating = e => {
        e.preventDefault()
        const ratingValue = rating
        const text = e.target.text.value
        const id = e.target.id.value
        const newReview = {
            feedBack: text,
            ratings: ratingValue,
            rivewGiver: user?.displayName,
            reviewGiverImg: user?.photoURL,
            reviewGivingDate: formattedDate,
            deliveryManId: id
        }
        console.log(newReview);

        axiosPublic.post('/reviews', newReview)
            .then(res => {
                if (res.data.insertedId) {
                    console.log('booking added to the database');
                    toast.success('Thanks for you feedback !')
                    
                }
            })
    }

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
                <>
                    <button className="btn text-xl hover:bg-yellow-400 text-white btn-square btn-sm btn-outline" onClick={() => document.getElementById('my_modal_3').showModal()}>
                        <IoStarHalf /></button>
                    <dialog id="my_modal_3" className="modal ml-32">
                        <div className="modal-box bg-gray-900">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                                <div className="flex justify-between p-4">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src={user?.photoURL} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">{user?.displayName}</h4>

                                            <span className="text-xs dark:text-gray-400">{user?.email}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 dark:text-yellow-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                        </svg>
                                        <span className="text-xl font-bold">{rating}</span>
                                    </div>
                                </div>
                                <form onSubmit={handleRating}>
                                    <div className="flex flex-col pt-4 w-full">
                                        <h1 className="text-white font-semibold text-md text-center my-2">How was your </h1>
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={rating}
                                            onChange={setRating}
                                            isRequired
                                            className="mx-auto my-2 mb-3"
                                        />
                                        <input type="text" name="id" value={item.deliveryManId} className="hidden"/>

                                        <textarea rows="3" name="text" placeholder="Message..." className="p-4 text-white pt-3 rounded-md resize-none dark:text-gray-100 dark:bg-gray-700"></textarea>
                                        <button type="submit" className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400">Leave feedback</button>

                                    </div>
                                </form>

                                <h4 className="font-bold pt-3"> Delivery Man Id : {item.deliveryManId}</h4>
                            </div>
                        </div>
                    </dialog></>
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
            <Toaster></Toaster>

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