import { NavLink, Outlet } from "react-router-dom";
import { FaAddressBook, FaUsers, FaArrowAltCircleRight, FaDollyFlatbed, FaHeadset, FaHome, FaOutdent, FaUserEdit, FaBoxOpen } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";


import logo from '../../src/assets/Image/logo-1.png'
import useAdmin from "../Hooks/useAdmin";
import useDeliveryMan from "../Hooks/useDeliveryMan";

const Dashboard = () => {

    const [isAdmin] = useAdmin()
    const [isDeliveryMan] = useDeliveryMan()
    console.log(isDeliveryMan);

    return (
        <div className="flex ">
            <div className="w-[280px]  h-[100vh] sticky top-0  p-[35px] bg-[#1c2536] ">

                <ul className="menu text-white  gap-y-3">
                    <div className="flex  flex-col">
                        <img src={logo} alt="" />
                    </div>

                    {
                        isAdmin ? <>
                            <li className="mt-10">
                                <NavLink to='/dashboard/statistics'>
                                    <FaAddressBook />
                                    Statistics
                                </NavLink>
                            </li>
                            <li className="">
                                <NavLink to='/dashboard/allParcels'>
                                    <FaBoxOpen />
                                    All Parcels
                                </NavLink>
                            </li>
                            <li className="">
                                <NavLink to='/dashboard/allDeliveryMan'>
                                    <TbTruckDelivery />
                                    All DeliveryMan
                                </NavLink>
                            </li>
                            <li className="">
                                <NavLink to='/dashboard/allUsers'>
                                    <FaUsers />
                                    All Users
                                </NavLink>
                            </li>

                        </> : isDeliveryMan ? <>


                            <li className="mt-10">
                                <NavLink to='/dashboard/deliveryManHome'>
                                    <FaAddressBook />
                                    Home
                                </NavLink>
                            </li>
                            <li className="">
                                <NavLink to='/dashboard/myDeliveryList'>
                                    <FaBoxOpen />
                                    My Delivery List
                                </NavLink>
                            </li>
                            <li className="">
                                <NavLink to='/dashboard/myReviews'>
                                    <TbTruckDelivery />
                                    My Riviews
                                </NavLink>
                            </li>


                        </> : <>


                            <li className=" mt-10">
                                <NavLink to='/dashboard/userhome'>
                                    <FaOutdent />
                                    Overview
                                </NavLink>
                            </li>
                            <li className="">
                                <NavLink to='/dashboard/bookParcel'>
                                    <FaAddressBook />
                                    Book A Parcel
                                </NavLink>
                            </li>
                            <li className="">
                                <NavLink to='/dashboard/myParcel'>
                                    <FaDollyFlatbed />
                                    My Parcel
                                </NavLink>
                            </li>
                            <li className="">
                                <NavLink to='/dashboard/myProfile'>
                                    <FaUserEdit />
                                    My Profile
                                </NavLink>
                            </li>


                        </>
                    }

                    {/* <li className=" mt-10">
                        <NavLink to='/dashboard/userhome'>
                            <FaOutdent />
                            Overview
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to='/dashboard/bookParcel'>
                            <FaAddressBook />
                            Book A Parcel
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to='/dashboard/myParcel'>
                            <FaDollyFlatbed />
                            My Parcel
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to='/dashboard/myProfile'>
                            <FaUserEdit />
                            My Profile
                        </NavLink>
                    </li>
                    <hr />

                    <li className="mt-10">
                        <NavLink to='/dashboard/deliveryManHome'>
                            <FaAddressBook />
                            Home
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to='/dashboard/myDeliveryList'>
                            <FaBoxOpen />
                            My Delivery List
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to='/dashboard/myReviews'>
                            <TbTruckDelivery />
                            My Riviews
                        </NavLink>
                    </li>
                    <hr />
                    <li className="mt-10">
                        <NavLink to='/dashboard/statistics'>
                            <FaAddressBook />
                            Statistics
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to='/dashboard/allParcels'>
                            <FaBoxOpen />
                            All Parcels
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to='/dashboard/allDeliveryMan'>
                            <TbTruckDelivery />
                            All DeliveryMan
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to='/dashboard/allUsers'>
                            <FaUsers />
                            All Users
                        </NavLink>
                    </li> */}





                    {/* Shared links */}

                    <hr />

                    <li className="">
                        <NavLink to='/'>
                            <FaHome />
                            Home
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to='/contactUs'>
                            <FaHeadset />
                            Contact Us
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to='/about'>
                            <FaArrowAltCircleRight />
                            About
                        </NavLink>
                    </li>
                </ul>


            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;