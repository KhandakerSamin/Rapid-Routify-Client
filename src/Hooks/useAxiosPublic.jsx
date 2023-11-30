import axios from "axios";

const axiosPublic = axios.create({
    baseURL:'https://rapid-routify-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
}

export default useAxiosPublic;