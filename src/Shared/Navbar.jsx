import logo from '../assets/Image/logo.png'
const NavBar = () => {


    // const handleLogOut = () => {
    //     Swal.fire({
    //         title: "Are you sure to log out?",
    //         text: "Once you logout you have to login again",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Log Out!"
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             logOut()
    //                 .then(res => console.log(res))
    //             Swal.fire({
    //                 title: "Logged Out!",
    //                 text: "Your Account logged Out Successfully",
    //                 icon: "success"
    //             });
    //         }
    //     });
    // }


    const navLinks = <>
        {/* <Link to='/' ><li><a>HOME</a></li></Link>
        <Link to='/contactUs'><li><a>CONTACT US</a></li>
        </Link>
        <Link to='/dashboard'><li><a>DASHBOARD</a></li></Link>
        <Link to='/menu'><li><a>OUR MENU</a></li></Link>
        <Link to='/order/Salads'><li><a>OUR SHOP</a></li></Link>
        <Link to='/dashboard/carts'>
            <div className="relative">
                <img className="h-10 w-10 rounded-xl" src={icon} alt="" />
                <div className="badge h-6 w-6 rounded-full text-white font-bold bg-green-500 border-none  absolute top-5 left-6">{cart.length}</div>
            </div>
        </Link>
        {
            user ? <button onClick={handleLogOut}><Link><li><a>Log Out</a></li></Link></button>
                : <Link to='/login'><li><a>Log in</a></li></Link>
        } */}
        <li><a>HOME</a></li>
        <li><a>DASHBOARD</a></li>
        <li><a><button className="">
            Inbox
            <div className="badge badge-secondary ml-2">+99</div>
        </button></a></li>
        <li><a>LOGIN</a></li>

    </>

    return (
        <div className="drawer max-w-screen-2xl fixed z-10 mx-auto">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-opacity-40 bg-pink-200 text-black">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">
                        <img src={logo} className='w-64 h-16' alt="" />
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {/* Navbar menu content here */}
                            {navLinks}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-60 min-h-full bg-base-200">
                    {/* Sidebar content here */}
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;