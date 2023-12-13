import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/Image/logo-1.png'
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import useAdmin from '../Hooks/useAdmin';
import useAxiosPublic from '../Hooks/useAxiosPublic';

const NavBar = () => {

    const { user, logOut } = useAuth()
    const [theme, setTheme] = useState("light");
    const [isAdmin] = useAdmin()
    const axiosPublic = useAxiosPublic()
    const [notification , setNotification] = useState()



    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    axiosPublic
      .get('/userText')
      .then((res) => res.data)
      .then((data) => {
        setNotification(data.length)
      })


    const handleLogOut = () => {
        Swal.fire({
            title: "Are you sure to log out?",
            text: "Once you logout you have to login again",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Log Out!"
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(res => console.log(res))
                Swal.fire({
                    title: "Logged Out!",
                    text: "Your Account logged Out Successfully",
                    icon: "success"
                });
            }
        });
    }


    const navLinks = <>
        <li><NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ?
                "text-yellow-600 text-lg font-medium  " :  "text-md font-normal text-white"
        }>Home</NavLink></li>

        {user ? <li><NavLink to="/dashboard" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ?
                "text-yellow-600 text-lg font-medium  " :  "text-md font-medium text-white"
        }>Dashboard</NavLink></li> : <> </>}
        
        <li><NavLink to="/about" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ?
                "text-yellow-600 text-lg font-medium " :  "text-md font-medium text-white"
        }>About</NavLink></li>
        <li><NavLink to="/contactUs" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ?
                "text-yellow-600 text-lg font-medium " : "text-md font-medium text-white"
        }>Contact Us</NavLink></li>
    </>

    return (
        <div className="drawer w-full lg:max-w-screen-2xl fixed z-10 mx-auto">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full py-2 max-w-screen mx-auto px-20 lg:px-[150px] flex justify-between items-center navbar bg-black bg-opacity-40  text-black">
                    <div className=" lg:hidden text-white">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="  min-w-max mx-2">
                        <img src={logo} className='min-w-54 h-12' alt="" />
                    </div>
                    <div className=" hidden ml-64 flex-none  lg:block">
                        <ul className="menu flex justify-center items-center menu-horizontal">
                            {/* Navbar menu content here */}
                            {navLinks}
                        </ul>
                    </div>


                    <div className="drawer flex justify-end mr-4 drawer-end">

                        {/* theme toggle */}

                        <button onClick={toggleTheme} className="pl-2 md:px-5 normal-case">
                            {theme === "light" ? <MdDarkMode className='text-3xl text-white mt-1'></MdDarkMode> : <MdLightMode className='text-white text-3xl mt-1'></MdLightMode>}
                        </button>

                        <div>
                            {
                                isAdmin ?  <>
                                <Link to='/dashboard/userText'><div className='relative '>
                                <IoMdNotifications className='text-3xl  text-white  mr-7 font-bold' />
                                <span><p className='absolute top-0 right-4  text-white text-xs bg-yellow-400 px-2 py-1 rounded-full'>{notification}</p></span>
                                </div></Link>
                                </> : user ? <> </>
                                    : <NavLink to='/login'><li className='btn text-white ml-3 btn-outline'><a>Log in</a></li></NavLink>
                            }
                        </div>
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-4" className="drawer-button ">
                                {user ?
                                    <img className='rounded-full w-[35px] md:w-[40px] h-[35px]  md:h-[40px] ' src={user.photoURL} alt='' />
                                    : <></>
                                }
                            </label>

                        </div>
                        <div className="drawer-side ">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 space-y-3 bg-[#1c2536] w-80 min-h-full  text-white ">
                                {/* Sidebar content here */}
                                <h1 className='text-md font-semibold mx-auto border-b-4 border-white text-base'>Your Profile Info : </h1>
                                <li className="text-xl font-bold"> <img className='h-24 w-28 mx-auto' src={user?.photoURL} alt='Profile I' /></li>
                                <li className="text-xl font-bold text-center">{user?.displayName}</li>
                                <li className="text-xs font-bold text-center">Email: {user?.email}</li>
                                <NavLink to='/dashboard'><li><a className="text-base btn btn-outline text-white md:text-lg mt-4 font-normal md:font-bold"> Dashboard</a></li></NavLink>
                                <div className='flex justify-between items-center gap-x-2'>
                                    <NavLink to='/login'><button className="btn btn-outline text-white  normal-case mt-5 text-base ">Switch Account</button></NavLink>
                                    {
                                        user ? <button className='btn btn-outline mt-5 normal-case w-1/2 text-white text-base  ' onClick={handleLogOut}><NavLink><li><a>Log Out</a></li></NavLink></button>
                                            : <NavLink to='/login'><li><a>Log in</a></li></NavLink>
                                    }
                                </div>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 bg-slate-900 w-60 min-h-full ">
                    {/* Sidebar content here */}
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;