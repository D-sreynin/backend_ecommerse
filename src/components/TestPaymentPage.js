import React from 'react';
import { useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const TestPaymentPage = () => {
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const amount = params.get('amount'); // Retrieve the 'amount' query parameter

  return (
    <div style={{marginTop:"200px"}}>
      <h1>Test Payment Page</h1>
      <p>Total Amount: ${amount}</p>
      {/* Simulate a checkout process */}
    </div>
  );
};

export default TestPaymentPage;