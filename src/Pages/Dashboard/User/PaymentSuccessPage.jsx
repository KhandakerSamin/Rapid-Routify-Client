import React, { useEffect } from 'react';
import Confetti from 'react-confetti';

const PaymentSuccessPage = () => {
  useEffect(() => {
    // You can add any additional logic here, e.g., fetching data, updating state, etc.
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Payment Successful!</h1>
      <p>Your payment was successful. Thank you for your purchase!</p>

      {/* Add Confetti Explosion */}
      <Confetti width={window.innerWidth} height={window.innerHeight} />

      {/* Additional content or styling can be added here */}
    </div>
  );
};

export default PaymentSuccessPage;
