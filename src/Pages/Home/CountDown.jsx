import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import logo from '../../assets/Image/calendar-date.png'


const CountDown = () => {
    const [countDown, setCountDown] = useState(false)

    return (
        <div className="mt-24 bg-slate-100 py-16  shadow-md flex border justify-center w-full items-center ">

            <ScrollTrigger className='w-full mx-10 max-w-screen-xl' onEnter={() => setCountDown(true)} onExit={() => setCountDown(false)}>
                <div className="stats bg-slate-100  w-full ">

                    <div className="stat w-full place-items-center">
                    <div className="stat-title flex justify-between items-center">
                       
                       
                       <img src={logo} className="text-4xl h-7 w-7 font-bold mr-5" alt="" />
                       <h1 className="text-xl font-bold">Percel Booked</h1></div>
                        <div className="stat-value">{countDown && <CountUp start={0} end={672} duration={1} delay={0}></CountUp>}</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title flex justify-between items-center">
                            <TbTruckDelivery className="text-4xl text-black font-bold mr-5" />
                            <h1 className="text-xl font-bold">Percel Deliverd</h1></div>
                        <div className="stat-value text-yellow-400">{countDown && <CountUp start={0} end={546} duration={1} delay={0}></CountUp>}</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title flex justify-between items-center">
                       
                            <FaUsers className="text-4xl font-bold text-black mr-5" />
                            <h1 className="text-xl font-bold">Total Users</h1></div>
                        <div className="stat-value">{countDown && <CountUp start={150} end={2826} duration={1} delay={0}></CountUp>}</div>
                    </div>

                </div>
            </ScrollTrigger>

        </div>
    );
};

export default CountDown;