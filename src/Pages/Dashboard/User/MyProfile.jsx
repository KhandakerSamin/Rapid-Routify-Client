import SectionTitle from "../../../Components/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import profileBg from "../../../assets/Image/myProfile-2.png";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { GiConfirmed } from "react-icons/gi";
import { getAuth, updateProfile } from "firebase/auth";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const MyProfile = () => {
    const {setUser, user } = useAuth();
    
    const axiosPublic = useAxiosPublic();

    const bannerStyle = {
        backgroundImage: `url(${profileBg})`,
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const image = e.target.image.files[0];
        console.log(image);

        const formData = new FormData();

        formData.append("image", image);

        const res = await axiosPublic.post(image_hosting_api, formData);

        if (res.data.success) {
            const newImageUrl = res.data.data.url;

            const auth = getAuth();
            await updateProfile(auth.currentUser, { photoURL: newImageUrl });

            setUser({displayName:user.displayName, email: user.email, photoURL: newImageUrl})
            
            console.log('Updated');

        }else{
            console.log('SOme issue');
        }
    };


    return (
        <div className="mx-16">
            <SectionTitle heading={'My'} headingBold={'Profile'} subHeading={'Your Profile informaiton here '}></SectionTitle>

            <div className="bg-cover relative min-h-[500px]   rounded-lg shadow-lg p-8 px-4 md:p-8 mb-6 " style={bannerStyle}>
                <img src={user?.photoURL} className="w-[175px] right-[175px] top-[110px] h-[175px] rounded-full absolute" alt="" />

                <div className="m-10 mt-24">
                    <h1 className="text-white font-bold text-4xl ">Name: {user?.displayName}</h1>
                    <h1 className="text-white  text-2xl mt-3">Email: {user?.email}</h1>
                    <h1 className="text-white font-bold text-2xl mt-3">Total Bookings : </h1>
                </div>

                <div className="m-10">
                    <h1 className="text-white font-bold text-2xl mb-4">Update Your Profile Picture :</h1>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <input name="image" type="file" className="file-input file-input-bordered w-full max-w-xs" />
                        <h1></h1>
                        <button className="btn btn-outline text-white mt-4" type="submit">
                            Confirm
                            <GiConfirmed className="text-2xl font-bold text-white" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;