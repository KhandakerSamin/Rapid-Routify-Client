import SectionTitle from "../../Components/SectionTitle";
import img1 from '../../assets/Image/24h-shop.gif'

const Feature = () => {
    return (
        <div>

            <SectionTitle heading={'Our'} headingBold={'Features'} subHeading={'The support we will provide you'}></SectionTitle>

            <div className="grid grid-cols-3 mx-10 gap-10">
                <div className="w-[450px]">
                    <div className="flex justify-center items-start">
                        <div>
                            <img src={img1} alt="" />
                        </div>
                        <div>
                            <h1 className="text-xl mb-4 mt-8 font-bold text-left" >SAME DAY DELIVERY</h1>
                            <p>Canvas metri essar. Incubator ramen viral product management drect mailing. such founders gamification Effct.</p>
                        </div>
                    </div>
                </div>
                <div className="w-[450px]">
                    <div className="flex justify-center items-start">
                        <div>
                            <img src={img1} alt="" />
                        </div>
                        <div>
                            <h1 className="text-xl mb-4 mt-8 font-bold text-left" >SAME DAY DELIVERY</h1>
                            <p>Canvas metri essar. Incubator ramen viral product management drect mailing. such founders gamification Effct.</p>
                        </div>
                    </div>
                </div>
                <div className="w-[450px]">
                    <div className="flex justify-center items-start">
                        <div>
                            <img src={img1} alt="" />
                        </div>
                        <div>
                            <h1 className="text-xl mb-4 mt-8 font-bold text-left" >SAME DAY DELIVERY</h1>
                            <p>Canvas metri essar. Incubator ramen viral product management drect mailing. such founders gamification Effct.</p>
                        </div>
                    </div>
                </div>
                <div className="w-[450px]">
                    <div className="flex justify-center items-start">
                        <div>
                            <img src={img1} alt="" />
                        </div>
                        <div>
                            <h1 className="text-xl mb-4 mt-8 font-bold text-left" >SAME DAY DELIVERY</h1>
                            <p>Canvas metri essar. Incubator ramen viral product management drect mailing. such founders gamification Effct.</p>
                        </div>
                    </div>
                </div>
                <div className="w-[450px]">
                    <div className="flex justify-center items-start">
                        <div>
                            <img src={img1} alt="" />
                        </div>
                        <div>
                            <h1 className="text-xl mb-4 mt-8 font-bold text-left" >SAME DAY DELIVERY</h1>
                            <p>Canvas metri essar. Incubator ramen viral product management drect mailing. such founders gamification Effct.</p>
                        </div>
                    </div>
                </div>
                <div className="w-[450px]">
                    <div className="flex justify-center items-start">
                        <div>
                            <img src={img1} alt="" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-left" >SAME DAY DELIVERY</h1>
                            <p>Canvas metri essar. Incubator ramen viral product management drect mailing. such founders gamification Effct.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Feature;