
// import bannerImg from '../../assets/Image/banner-1.png';
// import bannerImg from '../../assets/Image/banner-2.png';
// import bannerImg from '../../assets/Image/banner-3.png';
// import bannerImg from '../../assets/Image/banner-4.png';
import bannerImg from '../../assets/Image/banner-6.png';

const Banner = () => {
    const bannerStyle = {
        backgroundImage: `url(${bannerImg})`,
    };

    return (
        <div className="h-[700px] w-full bg-cover rounded-none " style={bannerStyle}>
            <div className='pt-24 px-14 md:pl-40 space-y-7'>
                
            </div>

        </div>
    );
};

export default Banner;