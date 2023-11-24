
import { Form, Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import img from '../../assets/Image/865ec733e6fd6fec84763f7cb494c772.gif'
import toast, { Toaster } from 'react-hot-toast';
import SocialLogin from '../../Components/SocialLogin';
// import Swal from 'sweetalert2';
// import useAxiosPublic from '../../hooks/useAxiosPublic';

const Register = () => {

    // const axiosPublic = useAxiosPublic()

    const { createUser, updateUserProfile } = useContext(AuthContext)

    // const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {

        console.log(data)
        

        createUser(data.email, data.password)
            .then(res => {
                const newUser = res.user
                console.log(newUser)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // create user entry in the database 
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            role: data.role,
                        }
                        console.log(userInfo);
                        // axiosPublic.post('/users', userInfo)
                        //     .then(res => {
                        //         if (res.data.insertedId) {
                        //             console.log('user added to the database');
                        //             Swal.fire({
                        //                 title: "Congratulations!",
                        //                 text: "You have created your accunt successfully",
                        //                 icon: "success"
                        //             });
                        //             reset();
                        //             navigate('/')
                        //         }
                        //     })
                        toast.success('Successfully Created Account')
                    })
                    
                    .catch(error => {
                        if (error.code === 'auth/email-already-in-use') {
                            toast.error("Email is already in use")
                            console.log('Email is already in use. Please use a different email.');
                            // You might also inform the user in your UI.
                        } else {
                            console.error(error);
                        }
                    })
            })

    }

    // SAMIN123yeasar!


    return (
        <div className='  flex pt-44 pb-44  items-center h-full' >

            <Helmet>
                <title>
                    Rapid Routify | Register
                </title>
            </Helmet>

            <div><Toaster /></div>

            <div className='max-w-screen-xl bg-[#eaeae9] md:min-w-[1000px] shadow-2xl min-h-[700px] flex flex-row-reverse mx-auto items-center' >
                <div className='w-1/2  h-full'>
                    <div className='h-[600px] mx-auto flex items-center w-full'>
                        <img className='h-[701px]' src={img} alt="" />
                    </div>
                </div>
                <div className='w-1/2 px-28'>
                    <h1 className='text-4xl font-bold text-center '>Sign Up</h1>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", { required: true })} type="text" placeholder="Name" className="input max-w-lg  input-bordered"
                                name='name'
                            />
                            {errors.name && <span className='text-red-600'>Name field is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                {...register("email", { required: true })} type="email" placeholder="email" className="input max-w-lg  input-bordered"
                                name='email'
                            />
                            {errors.email && <span className='text-red-600'>Email field is required</span>}
                        </div>
                        <div className="form-control flex justify-center">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
                                })} type="password" placeholder="password" className="input max-w-lg input-bordered"
                                name='password'
                            />
                            {/* {console.log(errors)} */}
                            {errors.password?.type === 'required' && <span className='text-red-600'>Password field is required</span>}
                            {errors.password?.type === 'minLength' && <span className='text-red-600'>Password length must be 6 </span>}
                            {errors.password?.type === 'maxLength' && <span className='text-red-600'>Password length must be less then 20 </span>}
                            {errors.password?.type === 'pattern' && <span className='text-red-600'>Must have upper case , lower case , number, and one special character</span>}
                        </div>
                        <div className=" flex justify-between items-center gap-x-2">
                            <div className='form-control'>
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input {...register("photoUrl", { required: true })} type="text" placeholder="Photo URL" className="input input-bordered w-[265px]  "
                                    name='photoUrl'
                                />
                                {errors.photoUrl && <span className='text-red-600'>Photo URL is required</span>}
                            </div>
                            <div className='form-control'>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Select Your Role</span>
                                    </label>
                                    <select {...register("role", { required: true })} defaultValue='default' className="select select-bordered">
                                        <option value='default' disabled >Select Role</option>
                                        <option value='user'>Normal User</option>
                                        <option>Delivery Man</option>
                                    </select>
                                </div>
                                {errors.role && <span className='text-red-600'>Role is required</span>}
                            </div>
                        </div>
                        <div>

                        </div>
                        <button onSubmit={onsubmit} type='submit' className='w-full mt-8 btn bg-[#315098] hover:bg-blue-700 text-white text-xl font-bold text-center rounded-lg '>Sign Up</button>
                        <Link to='/login'><p className='text-center text-[#315098] font-bold my-3'>Already registered? Go to log in</p></Link>
                        <p className='text-center'>Or sign up with</p>

                    </Form>
                         {/* Social login btn */}

                            <SocialLogin></SocialLogin> 
                </div>
            </div>
        </div>
    );
};

export default Register;