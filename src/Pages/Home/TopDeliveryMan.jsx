import Card from '../../Components/Card';
import SectionTitle from '../../Components/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img1 from '../../assets/Image/delivery-1.jpg'


const TopDeliveryMan = () => {
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
                    <SwiperSlide><Card img={img1}></Card></SwiperSlide>
                    <SwiperSlide><Card></Card></SwiperSlide>
                    <SwiperSlide><Card></Card></SwiperSlide>
                    <SwiperSlide><Card></Card></SwiperSlide>
                    <SwiperSlide><Card></Card></SwiperSlide>

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




