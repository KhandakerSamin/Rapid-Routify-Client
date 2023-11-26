import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import SectionTitle from "../../../Components/SectionTitle";
import { RiAdminFill } from "react-icons/ri";
import { MdDeliveryDining } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import { FaUser, FaUsers } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import { useState } from "react";

// ... (your existing imports)

const PAGE_SIZE = 5;

const AllUsers = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();

    const [currentPage, setCurrentPage] = useState(1);
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users', currentPage],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users?page=${currentPage}&pageSize=${PAGE_SIZE}`);
            return res.data;
        },
    });

    const handleMakeAdmin = (user) => {
        axiosPublic.patch(`/users/admin/${user._id}`)
            .then((res) => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    toast.success(`${user.name} is Now Admin`);
                }
            });
    };
    const handleMakeDeliveryMan = (user) => {
        axiosPublic.patch(`/users/delivery-man/${user._id}`)
            .then((res) => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    toast.success(`${user.name} is Now Delivery Man`);
                }
            });
    };

    const totalPages = Math.ceil(users.length / PAGE_SIZE);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const paginatedUsers = users.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

    return (
        <div className="mx-10">
            <Toaster></Toaster>

            <SectionTitle heading={'All'} headingBold={'Users'} subHeading={'All your users are here | Can Update their role'}></SectionTitle>

            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <thead className="dark:bg-gray-700">
                            <tr className="text-left">
                                <th className="p-3">SL</th>
                                <th className="p-3">Name</th>
                                <th className="p-3">Phone</th>
                                <th className="p-3">Percel Booked</th>
                                <th className="p-3">Spent Ammount</th>
                                <th className="p-3">Make Delivery Man</th>
                                <th className="p-3">Make Admin</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedUsers.map((user, index) => (
                                <tr key={user._id} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                    <td className="p-3">{index + 1}</td>
                                    <td className="p-3"><p>{user.name}</p></td>
                                    <td className="p-3"><p>{user.phone}</p></td>
                                    <td className="p-3"><p className="pl-10"> {user.order}</p></td>
                                    <td className="p-3"><p className="pl-10"> - </p></td>
                                    <td className="p-3 ">
                                        {
                                            user.role === 'admin' ? <MdDeliveryDining className="text-white ml-10 
                                            text-2xl"></MdDeliveryDining> :
                                                <> {
                                                    user.role === 'deliveryMan' ? <p className="font-bold ml-5  text-green-500">Delivery Man</p> : <button
                                                        onClick={() => handleMakeDeliveryMan(user)}
                                                        className="">
                                                        <MdDeliveryDining className="text-white 
                                        text-2xl"></MdDeliveryDining>
                                                    </button>
                                                } </>
                                        }
                                    </td>
                                    <td className="p-3 ">
                                        {user.role === 'admin' ? <p className="font-bold ml-5 text-green-500">Admin</p> : <button
                                            onClick={() => handleMakeAdmin(user)}
                                            className="">
                                            <RiAdminFill className="text-white ml-8 
                                        text-2xl"></RiAdminFill>

                                        </button>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="flex justify-center space-x-1 dark:text-gray-100">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-900 ${currentPage === page ? 'dark:text-violet-400 dark:border-violet-400' : ''}`}
                    >
                        {page}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AllUsers;
