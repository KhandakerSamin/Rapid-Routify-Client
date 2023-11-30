import React from "react";
import SectionTitle from "../../../Components/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { GiConfirmed } from "react-icons/gi";
import { getAuth, updateProfile } from "firebase/auth";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const MyProfile = () => {
  const { setUser, user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const image = e.target.image.files[0];

    const formData = new FormData();
    formData.append("image", image);

    try {
      const res = await axiosPublic.post(image_hosting_api, formData);

      if (res.data.success) {
        const newImageUrl = res.data.data.url;

        const auth = getAuth();
        await updateProfile(auth.currentUser, { photoURL: newImageUrl });

        setUser({
          displayName: user.displayName,
          email: user.email,
          photoURL: newImageUrl,
        });

        console.log('Profile picture updated successfully');
      } else {
        console.error('Error uploading image:', res.data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="mx-16">
      <SectionTitle
        heading={'My'}
        headingBold={'Profile'}
        subHeading={'Your Profile information here '}
      ></SectionTitle>

      <div className="min-h-[500px] bg-slate-800 text-white rounded-lg shadow-lg p-8 px-4 md:p-8 mb-6">
        <div className="flex justify-center items-center flex-col mb-6">
          <img
            src={user?.photoURL}
            className="rounded-full h-32 w-32 mx-auto mb-4"
            alt=""
          />
          <h1 className=" font-bold text-2xl mb-2">{user?.displayName}</h1>
          <p className=" text-sm mb-4">{user?.email}</p>
          <div className="flex flex-col space-y-2 ">
            <p>{`Address: ${user?.address || 'N/A'}`}</p>
            <p>{`Postal Code: ${user?.postalCode || 'N/A'}`}</p>
            <p>{`Gender: ${user?.gender || 'N/A'}`}</p>
            <p>{`Phone Number: ${user?.phoneNumber || 'N/A'}`}</p>
          </div>
        </div>

        <div className="text-center text-yellow-500 mb-2">
            <p>For update profile photo Choose photo and click confirm : </p>
        </div>

        <div className="mt-6">
        <form onSubmit={handleSubmit} encType="multipart/form-data" className="text-center flex flex-col items-center  justify-center">
                        <input type="file" className="file-input file-input-bordered file-input-sm w-full max-w-xs" />
                        <button className="btn btn-outline text-white mt-4 hover:bg-yellow-600 btn-sm" type="submit"> Confirm
                            <GiConfirmed className="text-2xl font-bold text-white " />
                        </button>
                    </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
