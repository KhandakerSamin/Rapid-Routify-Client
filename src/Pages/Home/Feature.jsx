import SectionTitle from "../../Components/SectionTitle";
import img1 from '../../assets/Image/24h-shop.gif'
import img2 from '../../assets/Image/shipping.gif'
import img3 from '../../assets/Image/tech-support.gif'
import img4 from '../../assets/Image/airplane.gif'
import img5 from '../../assets/Image/warehouse.gif'
import img6 from '../../assets/Image/destination.gif'

const Feature = () => {
    return (
        <div>

            <SectionTitle heading={'Our'} headingBold={'Features'} subHeading={'The support we will provide you'}></SectionTitle>

            <div className="grid grid-cols-3 max-w-screen-xl mx-auto gap-16">
                <div className="w-[450px] h-[150px]">
                    <div className="flex justify-center m-6 items-start">
                        <div>
                            <img src={img1} className="w-[250px] h-[100px]" alt="" />
                        </div>
                        <div>
                            <h1 className="text-2xl mb-4 mt-2 font-bold text-left" >SAME DAY DELIVERY</h1>
                            <p>Canvas metri essar. Incubator ramen viral product management drect mailing. such founders gamification Effct.</p>
                        </div>
                    </div>
                </div>
                <div className="w-[450px] h-[150px]">
                    <div className="flex justify-center m-6 items-start">
                        <div>
                            <img src={img2} className="w-[350px] h-[150px]" alt="" />
                        </div>
                        <div>
                            <h1 className="text-xl mb-4 mt-4 font-bold text-left" >PAKAGING & STORAGE</h1>
                            <p>Canvas metri essar. Incubator ramen viral product management drect mailing. such founders gamification Effct.</p>
                        </div>
                    </div>
                </div>
                <div className="w-[450px] h-[150px]">
                    <div className="flex justify-center m-6 items-start">
                        <div>
                            <img src={img3} className="w-[350px] h-[150px]" alt="" />
                        </div>
                        <div>
                            <h1 className="text-xl mb-4 mt-4 font-bold text-left" >24/7 Support</h1>
                            <p>Canvas metri essar. Incubator ramen viral product management drect mailing. such founders gamification Effct.</p>
                        </div>
                    </div>
                </div>
                <div className="w-[450px] h-[150px]">
                    <div className="flex justify-center m-6 items-start">
                        <div>
                            <img src={img4} className="w-[350px] h-[150px]" alt="" />
                        </div>
                        <div>
                            <h1 className="text-xl mb-4 mt-4 font-bold text-left" >
                                ECONOMICAL AIR FREIGHT</h1>
                            <p>Canvas metri essar. Incubator ramen viral product management drect mailing. such founders gamification Effct.</p>
                        </div>
                    </div>
                </div>
                <div className="w-[450px] h-[150px]">
                    <div className="flex justify-center m-6 items-start">
                        <div>
                            <img src={img5} className="w-[350px] h-[150px]" alt="" />
                        </div>
                        <div>
                            <h1 className="text-xl mb-4 mt-4 font-bold text-left" >
                                WAREHOUSING</h1>
                            <p>Canvas metri essar. Incubator ramen viral product management drect mailing. such founders gamification Effct.</p>
                        </div>
                    </div>
                </div>
                <div className="w-[450px] h-[150px]">
                    <div className="flex justify-center m-6 items-start">
                        <div>
                            <img src={img6} className="w-[350px] h-[150px]" alt="" />
                        </div>
                        <div>
                            <h1 className="text-xl mb-4 mt-4 font-bold text-left" >
                            MULTI-MODAL TRANSPORT</h1>
                            <p>Canvas metri essar. Incubator ramen viral product management drect mailing. such founders gamification Effct.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Feature;