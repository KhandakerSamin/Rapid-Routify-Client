
// import bannerImg from '../../assets/Image/banner-1.png';
// import bannerImg from '../../assets/Image/banner-2.png';
// import bannerImg from '../../assets/Image/banner-3.png';
// import bannerImg from '../../assets/Image/banner-4.png';
import bannerImg from '../../assets/Image/banner-11.jpg';
import animation from '../../../public/Truck delivery service.json'
import Lottie from 'lottie-react';

const Banner = () => {
    const bannerStyle = {
        backgroundImage: `url(${bannerImg})`,
    };

    return (
        <div className=" lg:h-[700px] w-full bg-cover rounded-none " style={bannerStyle}>
            <div className='flex justify-between items-center'>

                <div className='w-1/2 m-36'>
                    <h1 className='text-4xl lg:text-7xl font-bold mb-6 pl-2 mt-20 text-yellow-600'>Rapid Routify</h1>
                    <h3 className='text-xl lg:text-3xl font-medium pl-2 text-white'>Effortless Parcel Delivery, <br /> Fast and Reliable <br /> Logistics Solution.</h3>
                    <fieldset className="w-full pl-2 mt-6 space-y-1 dark:text-gray-100">
                        <label for="Search" className="hidden">Search</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                                    <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-100">
                                        <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                    </svg>
                                </button>
                            </span>
                            <input type="search" name="Search" placeholder="Search..." className="w-48 bg-transparent py-2 pl-10 text-sm rounded-md sm:w-auto  input-bordered border-white border-2  " />
                        </div>
                    </fieldset>
                </div>
                <div className='w-1/2 '>
                    <Lottie className='w-[400px] h-[400px] lg:w-[600px]  lg:h-[600px]' animationData={animation} ></Lottie>
                </div>
            </div>

        </div>
    );
};

export default Banner;