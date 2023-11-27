import SectionTitle from "../../Components/SectionTitle";
import img1 from '../../assets/Image/24h-shop.gif'
import img2 from '../../assets/Image/shipping.gif'
import img3 from '../../assets/Image/tech-support.gif'
import img4 from '../../assets/Image/airplane.gif'
import img5 from '../../assets/Image/warehouse.gif'
import img6 from '../../assets/Image/destination.gif'

const Feature = () => {
    return (
        <div className="my-10 max-w-screen-xl mx-auto ">

            <SectionTitle heading={'Our'} headingBold={'Features'} subHeading={'The support we will provide you'}></SectionTitle>

            <div className="grid grid-cols-2 lg:grid-cols-3 mx-10 md:mx-0  gap-6 mr-28 md:mr-6 gap-x-10">
                <div className="w-[400px] h-[150px]">
                    <div className="flex justify-center m-6 items-start">
                        <div>
                            <img src={img1} className="w-[200px] h-[80px]" alt="" />
                        </div>
                        <div>
                            <h1 className="text-xl mb-2 mt-2 font-bold text-left" >SAME DAY DELIVERY</h1>
                            <p className="text-justify">Canvas metri essar. Incubator ramen viral product management drect mailing. such founders gamification Effct.</p>
                        </div>
                    </div>
                </div>
                <div className="w-[400px] h-[150px]">
                    <div className="flex justify-center m-6 items-start">
                        <div>
                            <img src={img2} className="w-[200px] h-[80px]" alt="" />
                        </div>
                        <div>
                            <h1 className="text-xl mb-2 mt-2 font-bold text-left" >PAKAGING & STORAGE</h1>
                            <p className="text-justify">Canvas metri essar. Incubator ramen viral product management drect mailing. such founders gamification Effct.</p>
                        </div>
                    </div>
                </div>
                <div className="w-[400px] h-[150px]">
                    <div className="flex justify-center m-6 items-start">
                        <div>
                            <img src={img3} className="w-[200px] h-[80px]" alt="" />
                        </div>
                        <div>
                            <h1 className="text-xl mb-2 mt-2 font-bold text-left" >24/7 Support</h1>
                            <p className="text-justify">Canvas metri essar. Incubator ramen viral product management drect mailing. such founders gamification Effct.</p>
                        </div>
                    </div>
                </div>
                <div className="w-[400px] h-[150px]">
                    <div className="flex justify-center m-6 items-start">
                        <div>
                            <img src={img4} className="w-[200px] h-[80px]" alt="" />
                        </div>
                        <div>
                            <h1 className="text-xl mb-2 mt-2 font-bold text-left" >ECONOMICAL AIR FREIGHT</h1>
                            <p className="text-justify">Canvas metri essar. Incubator ramen viral product management drect mailing. such founders gamification Effct.</p>
                        </div>
                    </div>
                </div>
                <div className="w-[400px] h-[150px]">
                    <div className="flex justify-center m-6 items-start">
                        <div>
                            <img src={img5} className="w-[200px] h-[80px]" alt="" />
                        </div>
                        <div>
                            <h1 className="text-xl mb-2 mt-2 font-bold text-left" > WAREHOUSING</h1>
                            <p className="text-justify">Canvas metri essar. Incubator ramen viral product management drect mailing. such founders gamification Effct.</p>
                        </div>
                    </div>
                </div>
                <div className="w-[400px] h-[150px]">
                    <div className="flex justify-center m-6 items-start">
                        <div>
                            <img src={img6} className="w-[200px] h-[80px]" alt="" />
                        </div>
                        <div>
                            <h1 className="text-xl mb-2 mt-2 font-bold text-left" >MULTI-MODAL TRANSPORT</h1>
                            <p className="text-justify">Canvas metri essar. Incubator ramen viral product management drect mailing. such founders gamification Effct.</p>
                        </div>
                    </div>
                </div>
                

            </div>

        </div>
    );
};

export default Feature;