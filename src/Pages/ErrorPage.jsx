import img from '../assets/Image/404-error-page-3959260-3299959.webp'
const ErrorPage = () => {
    return (
        <div className='bg-[#09001f] min-h-screen flex justify-center items-center'>
            <img className='w-[700px] h-[600px]' src={img} alt="" />
        </div>
    );
};

export default ErrorPage;