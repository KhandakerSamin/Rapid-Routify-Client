import { Link, NavLink, Outlet } from "react-router-dom";
import { FaAddressBook, FaUsers, FaArrowAltCircleRight, FaDollyFlatbed, FaHeadset, FaHome, FaOutdent, FaUserEdit, FaBoxOpen } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";


import logo from '../../src/assets/Image/logo-1.png'
import useAdmin from "../Hooks/useAdmin";
import useDeliveryMan from "../Hooks/useDeliveryMan";
import useAuth from "../Hooks/useAuth";
import { Helmet } from "react-helmet";
import { IoMdNotifications } from "react-icons/io";

const Dashboard = () => {

    const { user } = useAuth()
    const [isAdmin] = useAdmin()
    const [isDeliveryMan] = useDeliveryMan()
    console.log(isDeliveryMan);

    return (
        <div className="flex ">
            <Helmet>
                <title>
                    Rapid Route | Dashboard
                </title>
            </Helmet>
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
                            <li className="">
                                <NavLink to='/dashboard/userText'>
                                <IoMdNotifications />
                                    Users Messege
                                </NavLink>
                            </li>

                        </> : isDeliveryMan ? <>


                            <li className="mt-10">
                                <NavLink to='/dashboard/deliveryManHome'>
                                    <FaAddressBook />
                                    Dashboard
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

                <hr />

                <ul className="pt-4 pb-2 ml-3 space-y-1 text-white text-sm">
                    <li>
                        <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
                                <path d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z"></path>
                                <path d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z"></path>
                            </svg>
                            <span>Settings</span>
                        </a>
                    </li>
                    <li>
                        <Link to='/login'><a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
                                <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                                <rect width="32" height="64" x="256" y="232"></rect>
                            </svg>
                            <span>Logout</span>
                        </a></Link>
                    </li>
                </ul>

                <div className="flex items-center p-2 border-2 rounded-lg mt-12 space-x-4 justify-self-end">
                    <img src={user?.photoURL} alt="" className="w-12 h-12 rounded-lg dark:bg-gray-500" />
                    <div>
                        <h2 className="text-sm text-white font-semibold">{user?.displayName}</h2>
                        
                        <Link to='/dashboard/myProfile'><span className="flex items-center space-x-1">
                            <a rel="noopener noreferrer" href="#" className="text-sm font-semibold text-yellow-600 hover:underline  ">View profile</a>
                        </span></Link>
                    </div>
                </div>


            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;