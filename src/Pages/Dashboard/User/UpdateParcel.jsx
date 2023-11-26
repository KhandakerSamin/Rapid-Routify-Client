import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle";
import toast, { Toaster } from "react-hot-toast";
import booking from '../../../assets/Image/bookParcel-2.jpg'
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useState } from "react";

const UpdateParcel = () => {
    const bookedParcel = useLoaderData()
    console.log(bookedParcel);

    const {user} = useAuth()

    const axiosPublic = useAxiosPublic()

    const bannerStyle = {
        backgroundImage: `url(${booking})`,
    };

    const previousPrice = bookedParcel.price ;

    const [weight, setWeight] = useState(0);
    const [price, setPrice] = useState(previousPrice);

    const calculatePrice = (weight) => {
        if (weight === 0) {
            return 0;
        } else if (weight === 1) {
            return 50;
        } else if (weight > 1 && weight < 3) {
            return 100;
        } else {
            return 150
        }
    };

    const handleWeightChange = (e) => {
        const newWeight = parseFloat(e.target.value);
        setWeight(newWeight);

        const newPrice = calculatePrice(newWeight);
        setPrice(newPrice);
    };

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const name = user?.displayName;
        const email = user?.email;
        const phone = form.phone.value;
        const parcelType = form.types.value;
        const weight = form.weight.value;
        const receiver = form.receiver.value;
        const receiverPhone = form.receiverNo.value;
        const address = form.address.value;
        const requestedDate = form.date.value;
        const price = form.price.value;
        const latitude = form.latitude.value;
        const longitude = form.longitude.value;
        const bookingDate = ""

        const newParcel = {
            name: name,
            email: email,
            phone: phone,
            parcelType: parcelType,
            weight: weight,
            receiver: receiver,
            receiverPhone: receiverPhone,
            address: address,
            requestedDate: requestedDate,
            price: price,
            bookingDate: bookingDate,
            latitude: latitude,
            longitude: longitude,
            status: 'Pending',
            deliveryManId: '',
            aproximateDate: '',
        }
        console.log(newParcel);
        axiosPublic.patch(`/parcels/${bookedParcel._id}`, newParcel)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    console.log('booking updated to the database');
                    toast.success('Your Booking Information Updated !')
                    // reset();
                    // navigate('/')
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>

            <SectionTitle heading={'Please'} headingBold={'Update'} subHeading={'You can update your booking information here'}></SectionTitle>

            <div><Toaster /></div>


            <div className="min-h-screen px-6 pb-6  flex items-center justify-center">
                <div className="container max-w-screen-lg mx-auto">
                    <div>
                    
                        <div style={bannerStyle} className=" bg-cover  rounded shadow-lg p-8 px-4 md:p-8 mb-6">
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-6">
                               
                                {/* User Name */}
                                <div className="lg:col-span-6 text-white">
                                    <div className="lg:col-span-4 flex flex-col mb-3 justify-center items-center text-white">
                                        <h1 className=" text-2xl font-bold">Update Your Details</h1>
                                        <p>Please fill out all the fields.</p>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6">


                                            <div className="md:col-span-3">
                                                <label>Full Name</label>
                                                <input type="text" name="name" readOnly className="h-10 border mt-1 text-black rounded px-4 w-full bg-gray-50" value={user?.displayName} />
                                            </div>
                                            {/* User Email  */}
                                            <div className="md:col-span-3">
                                                <label>Email Address</label>
                                                <input type="text" name="email" className="h-10 border mt-1 rounded px-4 w-full text-black bg-gray-50" value={user?.email} placeholder="email@domain.com" />
                                            </div>

                                            {/* User Phone Number */}
                                            <div className="md:col-span-3">
                                                <label>Enter Your Mobile No.</label>
                                                <input type="text" name="phone" className="h-10  border mt-1 rounded px-4 w-full text-black bg-gray-50" defaultValue={bookedParcel.phone} placeholder="Mobile No." />
                                            </div>
                                            {/* Parcel Delivery Address */}
                                            <div className="md:col-span-3">
                                                <label > Parcel Delivery Address</label>
                                                <input type="text" defaultValue={bookedParcel.address} name="address" className="h-10 border mt-1 rounded px-4 w-full text-black bg-gray-50" placeholder="Parcel Delivery Address" />
                                            </div>
                                            {/* Parcel Types */}
                                            <div className="md:col-span-3">
                                                <label >Parcel Types </label>
                                                <input type="text" name="types" className="h-10 border mt-1 rounded px-4 w-full text-black bg-gray-50" defaultValue={bookedParcel.parcelType} placeholder="Parcel Types" />
                                            </div>

                                            {/* Parcel Weight */}
                                            <div className="md:col-span-3">
                                                <label >Parcel Weight</label>
                                                <input onChange={handleWeightChange} type="number" min={0} name="weight" id="weight" className="h-10 text-black border mt-1 rounded px-4 w-full bg-gray-50" defaultValue={bookedParcel.weight} placeholder="Weight" />
                                            </div>

                                            {/* Receiver Name */}
                                            <div className="md:col-span-3">
                                                <label >Receiver Name</label>
                                                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                    <input type="text" name="receiver" className="h-10 border mt-1 rounded px-4 w-full text-black bg-gray-50" defaultValue={bookedParcel.receiver} placeholder="Receiver Name" />
                                                </div>
                                            </div>

                                            {/* Receiver Phone Number */}
                                            <div className="md:col-span-3">
                                                <label >Receiver Mobile Number</label>
                                                <input type="text" name="receiverNo" defaultValue={bookedParcel.receiverPhone} className=" flex items-center h-10 text-black border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Receiver Phone" />
                                            </div>


                                            {/* Requested Delivery Date */}
                                            <div className="md:col-span-3">
                                                <label>Request a Delivery Date</label>
                                                <input type="date" name="date" className="h-10  border mt-1 rounded px-4 w-full text-black bg-gray-50" defaultValue={bookedParcel.requestedDate} placeholder="Delivery Date" />
                                            </div>

                                            {/* Price */}
                                            <div className="md:col-span-3">
                                                <label>Price</label>
                                                <input type="number"  name="price" className="h-10  border mt-1 rounded px-4 w-full text-yellow-500 bg-gray-50" value={price} defaultValue={bookedParcel.price} placeholder="Price" />
                                            </div>


                                            {/* Delivery Address Latitude */}
                                            <div className="md:col-span-3">
                                                <label >Delivery Address Latitude </label>
                                                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                    <input type="text" name="latitude" className="h-10 border mt-1 rounded px-4 text-black w-full bg-gray-50" defaultValue={bookedParcel.latitude} placeholder="Latitude (i.e 21.121365496)" />
                                                </div>
                                            </div>
                                            {/* Delivery Address Longitude */}
                                            <div className="md:col-span-3">
                                                <label >Delivery Address Longitude</label>
                                                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                    <input type="text" name="longitude" className="h-10 border mt-1 rounded text-black px-4 w-full bg-gray-50" defaultValue={bookedParcel.longitude} placeholder="Longitude (i.e 21.121365496)" />
                                                </div>
                                            </div>



                                            <div className="md:col-span-6">
                                                <label >Please Check Before Submit</label>
                                                <input type="submit" value={'Update This Booking'} className="h-10 btn btn-outline font-bold  text-xl text-white border mt-1 rounded px-4 w-full " />
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UpdateParcel;