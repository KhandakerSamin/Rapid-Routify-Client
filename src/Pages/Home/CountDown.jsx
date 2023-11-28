import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { TbTruckDelivery } from "react-icons/tb";
import { FaCalendarCheck, FaUsers } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const CountDown = () => {

    const axiosPublic = useAxiosPublic();

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/users');
            return res.data;
        },
    });

    const { data: parcels = [] } = useQuery({
        queryKey: ['parcels'],
        queryFn: async () => {
            const res = await axiosPublic.get('/parcels');
            return res.data;
        },
    });

    const deliveredParcel = parcels.filter( parcel => parcel.status === 'Delivered')
    const [countDown, setCountDown] = useState(false)

    return (
        <div className="mt-36 my-16  py-4 bg-[#1c2536]  shadow-md flex border justify-center w-full items-center ">

            <ScrollTrigger className='w-full mx-10 max-w-screen-xl' onEnter={() => setCountDown(true)} onExit={() => setCountDown(false)}>
                <div className="stats bg-[#1c2536]  text-white w-full ">

                    <div className="stat w-full place-items-center">
                    <div className="stat-title flex flex-col justify-between items-center">
                       
                       
                    <FaCalendarCheck className="text-7xl mb-4 text-white font-bold " />
                       <h1 className="text-xl text-white mb-4  font-bold">Percel Booked</h1></div>
                        <div className="stat-value text-5xl">{countDown && <CountUp start={0} end={parcels.length} duration={3} delay={0}></CountUp>}</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title flex flex-col mb-4 justify-between items-center">
                            <TbTruckDelivery className="text-8xl text-white font-bold mr-5" />
                            <h1 className="text-xl text-white mb-4 font-bold">Percel Deliverd</h1></div>
                        <div className="stat-value text-5xl text-yellow-400">{countDown && <CountUp start={0} end={deliveredParcel.length} duration={3} delay={0}></CountUp>}</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title flex flex-col justify-between mb-4 items-center">
                       
                            <FaUsers className="text-8xl text-white font-bold  mr-5" />
                            <h1 className="text-xl text-white font-bold">Total Users</h1></div>
                        <div className="stat-value text-5xl">{countDown && <CountUp start={0} end={users.length} duration={3} delay={0}></CountUp>}</div>
                    </div>

                </div>
            </ScrollTrigger>

        </div>
    );
};

export default CountDown;