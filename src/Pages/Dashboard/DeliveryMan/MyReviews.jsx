import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth";


const MyReviews = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    const { data: userData = {} } = useQuery({
        queryKey: ['user', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/${user?.email}`);
            return res.data;
        },
    });

    // console.log(userData);

    const deliveryManId = userData?._id;

    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews', deliveryManId],
        queryFn: async () => {
            if (deliveryManId) {
                const res = await axiosPublic.get(`/reviews/${deliveryManId}`);
                return res?.data;
            } else {
                return [];
            }
        },
    });

    console.log(reviews);


    return (
        <div>
            <SectionTitle heading={'My'} headingBold={'Riviews'} subHeading={'All reviews given by the users'}></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-16 ">
                {
                    reviews.map(review => <div key={review._id} className="container flex flex-col min-h-[280px] w-full max-w-md p-6 mx-auto divide-y rounded-md dark:divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                        <div className="flex justify-between p-4">
                            <div className="flex space-x-4">
                                <div>
                                    <img src={review.reviewGiverImg} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold">{review.rivewGiver}</h4>
                                    <span className="text-xs dark:text-gray-400">{review.reviewGivingDate}</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 dark:text-yellow-500">
                                <div>
                                    <div className="flex items-center space-x-2 dark:text-yellow-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                        </svg>
                                        <h1 className="text-xl font-bold">{review.ratings}</h1>
                                    </div>
                                    <h1 className="text-xs dark:text-gray-400">Out of 5</h1>
                                </div>

                            </div>
                        </div>
                        <div className="p-4 space-y-2 text-sm text-white">
                            <p>{review.feedBack}</p>
                        </div>
                    </div>)
                }
            </div>


        </div>
    );
};

export default MyReviews;