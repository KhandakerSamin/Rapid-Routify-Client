import { Outlet } from "react-router-dom";
import NavBar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            
            <Outlet></Outlet>

            <Footer></Footer>
     
        </div>
    );
};

export default Main;