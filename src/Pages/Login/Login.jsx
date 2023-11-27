import {  useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import SocialLogin from '../../Components/SocialLogin';
import img from '../../assets/Image/Login.gif'
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';

    const { signIn } = useContext(AuthContext)


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                toast.success("Logged In Successfully")
                navigate(from, { replace: true })
            })
    };


    return (


        <div className='will-change-scroll flex items-center' >

            <Helmet>
                <title>
                    Rapid Routify | Login
                </title>
            </Helmet>

            <div><Toaster /></div>


            <div className='max-w-screen-xl  mt-36  md:min-w-[1100px] shadow-2xl max-h-[600px] flex mx-auto items-center' >
                <div className='w-1/2 h-[600px]'>
                    <div className='h-[600px] mx-auto ml-20 flex items-center w-full'>
                        <img className='' src={img} alt='' />
                    </div>
                </div>
                <div className='w-1/2 px-20'>
                    <h1 className='text-4xl font-bold text-center'>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text'>Email</span>
                            </label>
                            <input type='email' placeholder='email' className='input input-bordered max-w-lg  ' name='email' required />
                        </div>
                        <div className='form-control flex justify-center'>
                            <label className='label'>
                                <span className='label-text'>Password</span>
                            </label>
                            <input type='password' placeholder='password' className='input input-bordered max-w-lg' name='password' required />
                        </div>
                        <button
                            type='submit'
                            className='w-full mt-8 btn bg-[#315098] hover:bg-blue-700 text-white text-xl font-bold text-center rounded-lg '
                        >
                            Log In
                        </button>
                        <Link to='/register'>
                            <p className='text-center text-blue-900 font-bold my-3'>New here? Create a New Account</p>
                        </Link>
                        <p className='text-center'>Or Log in with</p>
                        <SocialLogin></SocialLogin>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
