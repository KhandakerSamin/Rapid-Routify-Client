import React, { useEffect } from 'react';
import bannerImg from '../../assets/Image/banner-111.jpg';
import animation from '../../../public/Truck delivery service.json';
import Lottie from 'lottie-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, // Only animate once
        });
    }, []);

    const bannerStyle = {
        backgroundImage: `url(${bannerImg})`,
    };

    return (
        <div className="banner-container lg:h-[700px] w-full bg-cover rounded-none" style={bannerStyle} data-aos="fade-up">
            <div className="flex justify-between items-center">

                <div className="banner-text-container w-1/2 sm:ml-24 lg:m-36">
                    <h1 className="banner-title text-4xl lg:text-7xl font-bold mb-6 pl-4 mt-16 text-yellow-600">Rapid Routify</h1>
                    <h3 className="banner-subtitle text-xl lg:text-3xl font-medium pl-4 text-white">Effortless Parcel Delivery, <br /> Fast and Reliable <br /> Logistics Solution.</h3>
                    <fieldset className="w-full pl-4 mt-6 space-y-1 dark:text-gray-100">
                        <label htmlFor="Search" className="hidden">Search</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                                    <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-100">
                                        {/* ... SVG path data ... */}
                                    </svg>
                                </button>
                            </span>
                            <input type="search" name="Search" placeholder="Search..." className="search-input w-48 bg-transparent py-2 pl-10 text-sm rounded-md sm:w-auto  input-bordered border-white border-2  " />
                        </div>
                    </fieldset>
                </div>
                <div className="banner-lottie-container w-1/2 lg:mr-32 mt-8 lg:mt-0 sm:mr-12 mb-16" data-aos="fade-left">
                    <Lottie className="w-[470px] h-[420px] lg:w-[600px] lg:h-[600px]" animationData={animation}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default Banner;
