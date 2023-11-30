import React from "react";
import SectionTitle from "../../../Components/SectionTitle";
import useAuth from "../../../Hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();

  return (
    <div className="mx-16">
      <SectionTitle
        heading={"Welcome to"}
        headingBold={"Rapid Routify Dashboard"}
        subHeading={`Hello, ${user?.displayName || "User"}! Explore what's new.`}
      ></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Book A Parcel</h2>
          <div className="flex items-center space-x-2">
            <span>Delivered parcel from ABC Mart - Electronics</span>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <span>Completed delivery for XYZ Supermarket - Groceries</span>
          </div>
          <a className="underline text-yellow-500" href="/dashboard/bookParcel">Book a parcel</a>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Upcoming Deliveries</h2>
          <div className="flex items-center space-x-2">
            <span>Scheduled delivery for John's Electronics - ETA: 2 days</span>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <span>Upcoming delivery for Fresh Mart - ETA: 1 day</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 col-span-2 lg:col-span-1 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Exclusive Offers</h2>
          <div className="flex items-center space-x-2">
            <span>Unlock special discount on your next 3 deliveries! Use code: RRDISCOUNT</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 col-span-2 lg:col-span-1 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">My Parcel</h2>
          <div className="flex items-center space-x-2">
            <span>Introducing Rapid Premium - Same-day delivery with live tracking</span> 
          </div>
          <a className="underline text-yellow-500" href="/dashboard/myParcel">My Parcels</a>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
