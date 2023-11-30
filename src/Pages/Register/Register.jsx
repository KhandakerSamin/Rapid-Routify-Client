
import { Form, Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import img from '../../assets/Image/register2.gif'
import toast, { Toaster } from 'react-hot-toast';
import SocialLogin from '../../Components/SocialLogin';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const Register = () => {

    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const {  createUser, updateUserProfile } = useContext(AuthContext)
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {

        console.log(data)

        const image = data.image[0];
        console.log(image);

        const formData = new FormData();

        formData.append("image", image);

        const res = await axiosPublic.post(image_hosting_api, formData);
        if (res.data.success) {
            const newImageUrl = res.data.data.url;
            console.log(newImageUrl);
            createUser(data.email, data.password)
                .then(res => {
                    const newUser = res.user
                    console.log(newUser)
                    updateUserProfile(data.name, newImageUrl)
                        .then(() => {
                            // create user entry in the database 
                            const userInfo = {
                                name: data.name,
                                email: data.email,
                                role: data.role,
                                phone: data.phone,
                                image:newImageUrl

                            }
                            console.log(userInfo);
                            axiosPublic.post('/users', userInfo)
                                .then(res => {
                                    if (res.data.insertedId) {
                                        console.log('user added to the database');
                                        toast.success('Successfully Created Account')
                                        reset();
                                        navigate('/')
                                    }
                                })
                        })

                        .catch(error => {
                            if (error.code === 'auth/email-already-in-use') {

                                console.log('Email is already in use. Please use a different email.');
                            } else {
                                console.error(error);
                                toast.error("Email is already in use")
                            }
                        })
                })
        }
    }

    // SAMIN123yeasar!


    return (
        <div className='  flex   items-center h-full' >

            <Helmet>
                <title>
                    Rapid Routify | Register
                </title>
            </Helmet>



            <div className='max-w-screen-xl mt-28 md:min-w-[1000px] shadow-2xl  min-h-[650px] flex flex-row-reverse mx-auto items-center' >
                <div className='w-1/2 pr-16  h-full'>
                    <div className='h-[450px] w-full mx-auto flex items-center '>
                        <img className='h-[450px]' src={img} alt="" />
                    </div>
                </div>
                <div className='w-1/2 px-16'>
                    <h1 className='text-4xl font-bold text-center '>Register Now</h1>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", { required: true })} type="text" placeholder="Full Name" className="input max-w-lg  input-bordered"
                                name='name'
                            />
                            {errors.name && <span className='text-red-600'>Name field is required</span>}
                        </div>

                        <div className='flex justify-between items-center'>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    {...register("email", { required: true })} type="email" placeholder="Email Address" className="input max-w-lg  input-bordered"
                                    name='email'
                                />
                                {errors.email && <span className='text-red-600'>Email field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input
                                    {...register("phone", { required: true })} type="text" placeholder="Phone Number" className="input max-w-lg  input-bordered"
                                    name='phone'
                                />
                                {errors.phone && <span className='text-red-600'>Phone Number is required</span>}
                            </div>
                        </div>

                        <div className='flex justify-between items-center' >
                            <div className="form-control flex justify-center">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Password length must be at least 6 characters"
                                        },
                                        maxLength: {
                                            value: 20,
                                            message: "Password length must be less than 20 characters"
                                        },
                                        pattern: {
                                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                            message: "Must have at least one uppercase letter, one lowercase letter, one digit, and one special character"
                                        }
                                    })}
                                    type="password"
                                    placeholder="Password"
                                    className={`input max-w-lg input-bordered ${errors.password ? 'input-error' : ''}`}
                                    name="password"
                                />
                                {errors.password && <span className="text-red-600">{errors.password.message}</span>}
                            </div>

                            <div className='form-control'>
                                <div className="form-control w-full max-w-full">
                                    <label className="label">
                                        <span className="label-text">Select Your Role</span>
                                    </label>
                                    <select {...register("role", { required: true })} defaultValue='user' className="select min-w-[225px]  select-bordered ">
                                        <option value='default' disabled >Select Role</option>
                                        <option value='user'>Normal User</option>
                                        <option value='deliveryMan'>Delivery Man</option>
                                    </select>
                                </div>
                                {errors.role && <span className='text-red-600'>Role is required</span>}
                            </div>
                        </div>


                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">Choose Your Profile</span>
                            </label>
                            <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full max-w-lg" />
                            {/* <input {...register("photoUrl", { required: true })} type="text" placeholder="Photo URL" className="input input-bordered w-[265px]  "
                                name='photoUrl'
                            /> */}
                            {errors.photoUrl && <span className='text-red-600'>Photo URL is required</span>}
                        </div>



                        <button type='submit' className='w-full mt-8 btn bg-[#315098] hover:bg-blue-700 text-white text-xl font-bold text-center rounded-lg '>Register</button>


                        <Link to='/login'><p className='text-center text-[#315098] font-bold my-3'>Already registered? Go to log in</p></Link>
                        <p className='text-center'>Or sign up with</p>

                    </Form>
                    {/* Social login btn */}

                    <SocialLogin></SocialLogin>

                    <div><Toaster /></div>

                </div>
            </div>
        </div>
    );
};

export default Register;