import { FaMapLocationDot } from "react-icons/fa6";
import SectionTitle from "../../../Components/SectionTitle";
import {  RiChatDeleteFill } from "react-icons/ri";
import { MdCloudDone } from "react-icons/md";

const MyDeliveryList = () => {
    return (
        <div>

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
                                <th className="p-3">Requested Delivery Date </th>
                                <th className="p-3">Approximate Delivery Date </th>
                                <th className="p-3">Recievers phone </th>
                                <th className="p-3">Location</th>
                                <th className="p-3">Cencel</th>
                                <th className="p-3">Delivered</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                    <td className="p-3">
                                        
                                    </td>
                                    <td className="p-3">
                                        <p></p>
                                    </td>
                                    <td className="p-3">
                                        <p></p>
                                    </td>
                                    <td className="p-3">
                                        <p className="pl-10"> - </p>
                                    </td>
                                    
                                    <td className="p-3">
                                        <p className="pl-10"> - </p>
                                    </td>
                                    <td className="p-3">
                                    <p className="pl-10"> - </p>
                                    </td>
                                    <td className="p-3">
                                        <p className="pl-10"> - </p>
                                    </td>
                                    <td className="p-3">
                                    <p className="pl-10"> - </p>
                                    </td>
                                    <td className="p-3">
                                        <button className="btn ml-3 hover:bg-yellow-400 text-xl btn-sm text-white btn-square btn-outline">
                                        <FaMapLocationDot />
                                        </button>
                                    </td>
                                    <td className="p-3">
                                        <button className="btn ml-1 hover:bg-yellow-400 text-xl btn-sm text-white btn-square btn-outline">
                                        <RiChatDeleteFill />
                                        </button>
                                    </td>
                                    <td className="p-3">
                                        <button className="btn ml-3 hover:bg-yellow-400 text-xl btn-sm text-white btn-square btn-outline">
                                        <MdCloudDone />
                                        </button>
                                    </td>
                                    

                                </tr>
                            

                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    );
};

export default MyDeliveryList;