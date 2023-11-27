import Card from '../../Components/Card';
import SectionTitle from '../../Components/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img1 from '../../assets/Image/delivery-1.jpg'


const TopDeliveryMan = () => {
    return (
        <div className='max-w-screen-xl mx-auto mb-24'>

            <SectionTitle heading={'Top'} headingBold={'Delivery Man'} subHeading={'Our All delivary mans are here via ranking'}></SectionTitle>
            <div className=''>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
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

        </div>
    );
};

export default TopDeliveryMan;




