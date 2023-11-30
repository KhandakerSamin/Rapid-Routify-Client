import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'rapid-routify-server.vercel.app'
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth()

    // ? request interceptors to resecure 
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('Request Stoped By interceptors', token)
        config.headers.authorization = `Bearer ${token}`
        return config;
    },
        function (error) {
            return Promise.reject(error);
        });


    //? intercepts 401 and 403 status 
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    },
        async (error) => {
            const status = error.response.status;
            // console.log(status);
            // ? for 401 and 403 loged out the user and move to the login page
            if (status === 401 || status === 403) {
                await logOut();
                navigate('/login')
            }
            return Promise.reject(error);
        })
    return axiosSecure
};

export default useAxiosSecure;