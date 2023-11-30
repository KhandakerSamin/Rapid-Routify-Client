import SectionTitle from '../../Components/SectionTitle';
import img1 from '../../assets/Image/24h-shop.gif';
import img2 from '../../assets/Image/shipping.gif';
import img3 from '../../assets/Image/tech-support.gif';
import img4 from '../../assets/Image/airplane.gif';
import img5 from '../../assets/Image/warehouse.gif';
import img6 from '../../assets/Image/destination.gif';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Feature = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });

        // Manually trigger AOS refresh on scroll
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        AOS.refresh();
    };

    const featureItems = [
        { img: img1, title: 'SAME DAY DELIVERY', description: 'Canvas metri essar. Incubator ramen viral product management drect mailing. such founders gamification Effct.' },
        { img: img2, title: 'PAKAGING & STORAGE', description: 'Canvas metri essar. Incubator ramen viral product management drect mailing. such founders gamification Effct.' },
        { img: img3, title: '24/7 Support', description: 'Canvas metri essar. Incubator ramen viral product management drect mailing. such founders gamification Effct.' },
        { img: img4, title: 'ECONOMICAL AIR FREIGHT', description: 'Canvas metri essar. Incubator ramen viral product management drect mailing. such founders gamification Effct.' },
        { img: img5, title: 'WAREHOUSING', description: 'Canvas metri essar. Incubator ramen viral product management drect mailing. such founders gamification Effct.' },
        { img: img6, title: 'MULTI-MODAL TRANSPORT', description: 'Canvas metri essar. Incubator ramen viral product management drect mailing. such founders gamification Effct.' },
    ];

    return (
        <div className="my-6 max-w-screen-xl mx-auto">
            <SectionTitle heading={'Our'} headingBold={'Features'} subHeading={'The support we will provide you'}></SectionTitle>

            <div className="grid grid-cols-2 lg:grid-cols-3  md:mx-0  gap-6 mx-16 lg:mr-16  md:mr-6 py-7 gap-x-10">
                {featureItems.map((item, index) => (
                    <div key={index} className="feature-item w-[400px] sm:ml-12 lg:ml-0  h-[150px]" data-aos="fade-up">
                        <div className="flex justify-center m-6 items-start">
                            <div>
                                <img src={item.img} className="w-[200px] h-[80px]" alt="" />
                            </div>
                            <div>
                                <h1 className="text-xl mb-2 mt-2 font-bold text-left">{item.title}</h1>
                                <p className="text-justify">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feature;
