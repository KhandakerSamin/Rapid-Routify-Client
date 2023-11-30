import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOurtForm from "../../../Components/CheckOurtForm";

const Payment = () => {

    

    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY)

    return (
        <div>
            <SectionTitle heading={'Make your'} headingBold={'Payment'} subHeading={'Give your information correctly'}></SectionTitle>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckOurtForm></CheckOurtForm>
                </Elements>
            </div>
            
        </div>
    );
};

export default Payment;