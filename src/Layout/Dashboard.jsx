import { NavLink, Outlet } from "react-router-dom";
import {  FaAddressBook, FaArrowAltCircleRight, FaDollyFlatbed, FaHeadset, FaHome, FaOutdent, FaUserEdit } from "react-icons/fa";
import logo from '../../src/assets/Image/logo-1.png'

const Dashboard = () => {

    // const [cart] = useCart()
    // const [isAdmin] = useAdmin()

    return (
        <div className="flex ">
            <div className="w-[280px]  h-[100vh] sticky top-0  p-[35px] bg-[#1c2536] ">

                <ul className="menu text-white  gap-y-3">
                    <div className="flex  flex-col">
                        <img src={logo} alt="" />
                    </div>

                    {/* {
                        isAdmin ? <>
                            <li className="">
                                <NavLink to='/dashboard/adminHome'>
                                    <FaCartArrowDown />
                                    Admin Home
                                </NavLink>
                            </li>


                        </>
                            :
                            <>
                                <li className="">
                                    <NavLink to='/dashboard/userHome'>
                                        <FaCartArrowDown />
                                        User Home
                                    </NavLink>
                                </li>
                            </>
                    } */}

                    <li className=" mt-10">
                        <NavLink to='/dashboard/userHome'>
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