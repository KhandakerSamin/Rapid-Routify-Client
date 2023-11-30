import Card from '../../Components/Card';
import SectionTitle from '../../Components/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';



const TopDeliveryMan = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const url = "https://rapid-routify-server.vercel.app/deliveryMans-top?sortField=delivered&sortOrder=desc";
        fetch(url)
            .then((res) => res.json())
            .then((responseData) => {
                const slicedData = responseData.slice(0, 5);
                setData(slicedData);
            });
    }, []);


    return (
        <div className='max-w-screen-xl mx-auto lg:ml-[158px] lg:mr-[158px] pb-20'>

            <SectionTitle heading={'Top'} headingBold={'Delivery Man'} subHeading={'Our All delivary mans are here via ranking'}></SectionTitle>
            <div className='pt-12 hidden lg:block'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        data?.map(deliveryMan => <SwiperSlide key={deliveryMan._id}><div className="w-[390px] border-2 border-slate-800 rounded-xl  overflow-hidden aspect-square relative cursor-pointer group bg-[#F3F3F3] h-[450px]">
                            <img className=" object-cover w-full h-[250px] group-hover:scale-110 transition " src={deliveryMan.image} alt="" />
                            <div className="absolute right-3 top-3">
                                <p className="text-white bg-slate-900 rounded-xl font-mono font-medium text-sm px-2 py-1 ">Recomended</p>
                            </div>
                            <h1 className="text-left my-4 mx-10 text-xl font-semibold"> {deliveryMan.name} </h1>
                            <h1 className="text-left my-4 mx-10 text-2xl text-yellow-500 font-semibold"><span className="text-black">Parcel Deliverd : </span>{deliveryMan.delivered}</h1>
                            <h1 className="text-left my-4 mx-10 text-xl font-semibold"><div className="flex flex-wrap items-center mt-2 mb-1 space-x-2">
                                
                                <span className="dark:text-gray-500">{deliveryMan.rating} out of 5</span>
                            </div></h1>

                        </div></SwiperSlide>)
                    }

                </Swiper>
            </div>

            <div className='grid grid-cols-2 lg:hidden mx-20 gap-6'>
                <Card></Card> <Card></Card>
                <Card></Card>  <Card></Card><Card></Card>
            </div>

        </div>
    );
};

export default TopDeliveryMan;







