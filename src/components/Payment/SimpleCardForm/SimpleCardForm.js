import React, { useMemo, useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import useResponsiveFontSize from './ResponsiveFontSize';
import './style.css';

const useOptions = () => {
  const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    []
  );

  return options;
};


const SimpleCardForm = ({paymentData}) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  console.log(paymentData);
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
      setPaymentError(error.message);
      setPaymentSuccess(null);
      
    } else {
      setPaymentSuccess(paymentMethod.id)
      console.log('[PaymentMethod]', paymentMethod);
      setPaymentError(null);
      paymentData(paymentMethod.id)
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <CardElement/>
      <button type="submit" disabled={!stripe}>
        Pay And Place Order
      </button>
    </form>
    {
      paymentError && <p style={{color:"red"}}>{paymentError}</p>
    }
    {
      paymentSuccess && <p style={{color:"green"}}>Your Payment Was Successful</p>
    }
    </div>
  );
};

export default SimpleCardForm;