import React, { useEffect } from 'react';
import Confetti from 'react-confetti';

const PaymentSuccessPage = () => {
    useEffect(() => {
        // You can add any additional logic here, e.g., fetching data, updating state, etc.
    }, []);

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <div className='flex justify-center items-center mt-64'>
                
                    <div>
                    <h1 className='text-green-600 font-bold text-6xl'>Payment Successful!</h1><br />
                    <p className='font-semibold text-2xl mt-4'>Your payment was successful. Thank you for your purchase!</p>
                    </div>
            </div>

            {/* Add Confetti Explosion */}
            <Confetti width={window.innerWidth} height={window.innerHeight} />

            {/* Additional content or styling can be added here */}
        </div>
    );
};

export default PaymentSuccessPage;
