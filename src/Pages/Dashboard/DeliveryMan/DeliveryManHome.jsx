import { IoCardOutline, IoGiftOutline, IoTimeOutline } from "react-icons/io5";
import SectionTitle from "../../../Components/SectionTitle";

const DeliveryManHome = () => {
    return (
        <div className="mx-16">
            <SectionTitle
                heading={"Welcome to"}
                headingBold={"Delivery Man Dashboard"}
                subHeading="Manage your deliveries efficiently."
            ></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                <div className="bg-blue-100 rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-blue-800 mb-4"> Deliveries</h2>
                    <div className="flex items-center space-x-2">
                        {/* <IoPackageOutline className="text-3xl text-blue-500" /> */}
                        <span>Parcel from ABC Mart - Electronics</span>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                        {/* <IoPackageOutline className="text-3xl text-blue-500" /> */}
                        <span>Parcel from XYZ Supermarket - Groceries</span>
                    </div>
                </div>

                <div className="bg-green-100 rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-green-800 mb-4">All Deliveries</h2>
                    <div className="flex items-center space-x-2">
                        <IoTimeOutline className="text-3xl text-green-500" />
                        <span>Scheduled delivery for John's Electronics - ETA: 2 days</span>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                        <IoTimeOutline className="text-3xl text-green-500" />
                        <span>Upcoming delivery for Fresh Mart - ETA: 1 day</span>
                    </div>
                </div>

                <div className="bg-yellow-100 rounded-lg shadow-lg p-6 col-span-2 lg:col-span-1 ">
                    <h2 className="text-2xl font-bold text-yellow-800 mb-4">Exclusive Offers</h2>
                    <div className="flex items-center space-x-2">
                        <IoGiftOutline className="text-3xl text-yellow-500" />
                        <span>Special discount on your next 3 deliveries! Use code: DMDEAL</span>
                    </div>
                    
                    <p className="text-sm text-yellow-600 mt-3">* Exclusively for our delivery partners</p>
                </div>

                <div className="bg-purple-100 rounded-lg shadow-lg p-6 col-span-2 lg:col-span-1 ">
                    <h2 className="text-2xl font-bold text-purple-800 mb-4">My Reviews</h2>
                    <div className="flex items-center space-x-2">
                        <IoCardOutline className="text-3xl text-purple-500" />
                        <span>Rapid Express - Fast-track delivery for priority parcels</span>
                    </div>
                
                    <p className="text-sm text-purple-600 mt-3">* Ensure timely delivery with Rapid Express</p>
                </div>
            </div>
        </div>
    );
};

export default DeliveryManHome;