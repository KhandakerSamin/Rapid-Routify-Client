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
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('');

    const handleManage = (event) => {
        event.preventDefault();
        const deliveryManId = event.target.deliveryManId.value;
        const approximateDate = event.target.approximateDate.value;
        const assignData = { approximateDate, deliveryManId };
        console.log(approximateDate);
        console.log(assignData);

        axiosPublic.patch(`/allParcels/${selectedParcel._id}`, assignData)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    console.log('Parcel updated in the database');
                    document.getElementById('my_modal').close();
                    refetch();
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

  const filteredParcels = parcels.filter((parcel) =>
    parcel.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (statusFilter ? parcel.status.toLowerCase() === statusFilter.toLowerCase() : true)
);





    return (
        <div className="mx-10 mb-16">
            <SectionTitle heading={'All'} headingBold={'Parcels'} subHeading={'All your parcels are here | Manage Them Sir '}></SectionTitle>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                <div className="flex items-center mt-4">
                    <label className="label">
                        <span className="label-text text-blue-900 font-bold">Search Parcel</span>
                    </label>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search By Name"
                        className="input bg-slate-600 input-bordered w-full max-w-full"
                    />
                    <label className="label ml-4">
                        <span className="label-text text-blue-900 font-bold">Filter by Status</span>
                    </label>
                    <select
                        className="select bg-slate-600 w-full flex justify-center select-bordered"
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
                            {filteredParcels.map((item, index) =>  (
                                <tr key={item._id} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                    <td className="p-3">{index + 1}</td>
                                    <td className="p-3"><p>{item.name}</p></td>
                                    <td className="p-3"><p>{item.phone}</p></td>
                                    <td className="p-3"><p>{item.bookingDate}</p></td>
                                    <td className="p-3"><p>{item.requestedDate}</p></td>
                                    <td className="p-3"><p className="text-blue-500">{item.price} Tk</p></td>
                                    <td className="p-3 ">
                                        <span className="py-1 font-semibold rounded-md text-yellow-400">
                                            <span>{item.status}</span>
                                        </span>
                                    </td>
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
                            <input type="date" name="approximateDate" placeholder="Type here" className="input bg-slate-600 input-bordered w-full max-w-full" />

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
