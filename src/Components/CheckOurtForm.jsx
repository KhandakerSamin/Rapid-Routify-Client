import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from '../Hooks/useAuth'

const CheckOurtForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [error, serError] = useState('')
    const [clientSecret, setClientSecret] = useState()
    const [transitionId , setTransitionId] = useState()
    const axiosPublic = useAxiosPublic()
    const {user} = useAuth()
    const navigate = useNavigate()

    const parcelData = useLoaderData()
    const price = parcelData.price

    useEffect(() => {
        axiosPublic.post("/create-payment-intent", {price})
            .then(res => {
                console.log(res.data);
                setClientSecret(res.data.clientSecret)
            })

    }, [axiosPublic, price])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {

            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            serError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            serError('');
        }

        //  confirm 
        const {paymentIntent ,error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card , 
                billing_details: {
                    name: user?.displayName ||  'anoymous',
                    email: user.email || 'anoymous'
                }
            }
        })
        if(confirmError){
            console.log('confirm erro');
        }else{
            console.log('paymentIntent',paymentIntent);
            if(paymentIntent.status === 'succeeded'){
                console.log('transition id ' , paymentIntent.id);
                setTransitionId(paymentIntent.id)
                navigate('/dashboard/payment-success')
            }
        }

    }
    return (
        <form className="m-32 mx-44 rounded-xl  p-10 border-2 bg-slate-700" onSubmit={handleSubmit}>
            {
                clientSecret && <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '30px',
                                color: '#FFF',
                                '::placeholder': {
                                    color: '#FFF',
                                },
                            },
                            invalid: {
                                color: '#f56565',
                                fontSize: '30px',
                                fontWeight: 'bold'
                            },
                        },
                    }}
                />
            }
            <div className="flex justify-center items-end">
                <button className="btn btn-outline px-16 hover:bg-green-800 text-2xl mt-16 bg-green-600 text-white border-none my-6 " type="submit" disabled={!stripe || !clientSecret }>
                    Pay
                </button>
            </div>
            <p className="text-red-500 text-xl font-bold mt-1 mb-3 text-center">{error}</p>
            {
                transitionId && <p className="text-green-600">Transaction Id : {transitionId}</p>
            }
        </form>
    );
};

export default CheckOurtForm;

// 8+7^f)7bQKwHk_^