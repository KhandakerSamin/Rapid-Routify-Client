import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";

const ContactUs = () => {

    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()

    const handleSendMessege = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value 
        const messege = e.target.messege.value
        const newText = { name ,email , messege }
        console.log(newText);
        axiosPublic.post('/userText', newText)
            .then(res => {
                if (res.data.insertedId) {
                    console.log("text send");
                    toast.success('Thanks for you feedback !')

                }
            })
    }
    return (
        <div>
            <div className="h-[400px] w-full bg-slate-800  ">
                <h1 className="text-7xl text-center font-bold pt-36 text-white "> Contact Us</h1>
                <p className="py-8 text-xl text-white font-semibold text-center">Fill the all infomation with your opinion to reach us</p>
            </div>
            <div className="bg-slate-700 rounded-xl p-12 mx-auto max-w-2xl my-5 min-h-[500px]">
                <h1 className="text-3xl font-bold text-white text-center py-5">Fill the Form </h1>
                <form onSubmit={handleSendMessege}>

                    <label className="form-control w-full max-w-full">
                        <span className="label-text text-lg text-white">Full Name</span>
                        <input type="text" name="name" placeholder="Type here" defaultValue={user.displayName} className="input text-white input-bordered bg-slate-600 w-full " />
                    </label>
                    <label className="form-control w-full max-w-full my-5">
                        <span className="label-text text-lg text-white">Email</span>
                        <input type="text" name="email" placeholder="Type here" defaultValue={user.email} className="input text-white input-bordered bg-slate-600 w-full " />
                    </label>
                    <label className="form-control w-full max-w-full my-5">
                        <span className="label-text text-lg text-white">Messege</span>
                        <textarea name="messege" className="textarea text-white textarea-bordered h-24 bg-slate-600" placeholder="Describe your issue here"></textarea>
                    </label>

                   <div className="flex justify-center items-center">
                   <button type="submit" className="btn btn-outline text-white font-bold">Send Messege</button>
                   </div>

                </form>
            </div>
        </div>
    );
};

export default ContactUs;