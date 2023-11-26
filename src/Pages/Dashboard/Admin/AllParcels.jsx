import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import SectionTitle from "../../../Components/SectionTitle";
import { MdOutlineManageHistory } from "react-icons/md";
import { useState } from "react";

const AllParcels = () => {
    const axiosPublic = useAxiosPublic();

    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['parcels'],
        queryFn: async () => {
            const res = await axiosPublic.get('/parcels');
            return res.data;
        },
    });

    const { data: deliveryMans = [] } = useQuery({
        queryKey: ['deliveryMans'],
        queryFn: async () => {
            const res = await axiosPublic.get('/deliveryMans');
            return res.data;
        },
    });

    const [selectedParcel, setSelectedParcel] = useState(null);

    const handleManage = (event) => {
        event.preventDefault();
        const deliveryManId = event.target.deliveryManId.value;
        const aproximateDate = event.target.aproximateDate.value;
        const assignData = { aproximateDate, deliveryManId };

        axiosPublic.patch(`/allParcels/${selectedParcel._id}`, assignData)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    console.log('Parcel updated in the database');
                    // Close the modal or perform any other actions after successful update
                    // You can use state to manage the modal's visibility
                    document.getElementById('my_modal').close();
                    refetch(); // Optionally, refetch data after updating
                }
            })
            .catch(err => {
                console.log(err);
            });
    };

    const openModal = (parcel) => {
        setSelectedParcel(parcel);
        document.getElementById('my_modal').showModal();
    };

    return (
        <div className="mx-10">
            <SectionTitle heading={'All'} headingBold={'Parcels'} subHeading={'All your parcels are here | Manage Them Sir '}></SectionTitle>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                    <thead className="dark:bg-gray-700">
                            <tr className="text-left">
                                <th className="p-3">SL</th>
                                <th className="p-3">Booked By</th>
                                <th className="p-3">Booked By (Phone)</th>
                                <th className="p-3">Booking Date</th>
                                <th className="p-3">Requested Date</th>
                                <th className="p-3">Cost</th>
                                <th className="p-3">Status</th>
                                <th className="p-3">Manage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {parcels.map((item, index) => (
                                <tr key={item._id} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
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
                                        <p>{item.bookingDate} </p>
                                    </td>
                                    <td className="p-3">
                                        <p>{item.requestedDate} </p>
                                    </td>
                                    <td className="p-3">
                                        <p className="text-blue-500">{item.price} Tk</p>
                                    </td>
                                    <td className="p-3 ">
                                        <span className=" py-1 font-semibold rounded-md text-yellow-400">
                                            <span>{item.status}</span>
                                        </span>
                                    </td>
                                    {/* ... (other table cells) */}
                                    <td className="p-3">
                                        <span className="px-3 py-1">
                                            <button className="btn hover:bg-yellow-400 text-xl btn-sm text-white btn-square btn-outline" onClick={() => openModal(item)}>
                                                <MdOutlineManageHistory />
                                            </button>
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal */}
            <dialog id="my_modal" className="modal">
                <div className="modal-box bg-[#1c2536] ml-64">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute text-white right-2 top-2" onClick={() => document.getElementById('my_modal').close()}>✕</button>
                    </form>
                    <div className="form-control w-full max-w-full">
                        <form onSubmit={handleManage}>
                            <label className="label">
                                <span className="label-text text-white font-bold">Choose A Delivery Man</span>
                            </label>
                            <select className="select bg-slate-600 w-full flex justify-center select-bordered" name="deliveryManId">
                                <option disabled selected>Pick one</option>
                                {deliveryMans.map(deliveryMan => <option key={deliveryMan._id} value={deliveryMan._id}>{deliveryMan.name}</option>)}
                            </select>
                            <label className="label">
                                <span className="label-text text-white font-bold">Give the Approximate Delivery Date</span>
                            </label>
                            <input type="date" name="aproximateDate" placeholder="Type here" className="input bg-slate-600 input-bordered w-full max-w-full" />

                            <div className="mt-4">
                                <button type="submit" className="btn btn-outline mr-10 text-white hover:bg-white hover:text-black">Assign</button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AllParcels;
