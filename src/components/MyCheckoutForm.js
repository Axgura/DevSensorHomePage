import React, { useContext, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { CheckoutContext } from './Product';

const MyCheckoutForm = ({ handlePayment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [ btn, setBtn ] = useState("Pay Now");
  const { modalOpen, setModalOpen } = useContext(CheckoutContext);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setBtn("Making Payment...");
    await handlePayment(elements, stripe);
    setBtn("Make Payment");
  };

  return (
    <form class="mt-5 grid gap-6" onSubmit={handleSubmit}>
      <CardElement 
      className='text-white bg-black'
      />
      <button 
      className="border-2 border-white mt-4 mb-8 w-full bg-black rounded-none px-6 py-3 font-medium text-white"
      type="submit"
      disabled={!stripe}
      >{ btn }</button>
    </form>
  );
};

export default MyCheckoutForm;
