import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SimpleCardForm from "../SimpleCardForm/SimpleCardForm";


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51IeP8JJG96MVqTC8MgSNkiMCg8Pf6aKapc7tNeryhQEx1WlKDBgjFkn7v3L28OYbEan4TEAJ3TtFqxBIbHlVgxiu00dGeJk5xU"
);

const ProcessPayment = ({handlePayment}) => {
  return (
    <Elements stripe={stripePromise}>
      <SimpleCardForm paymentData ={handlePayment}></SimpleCardForm>
      {/* <SplitCard paymentData={handlePayment}></SplitCard> */}
    </Elements>
  );
};
export default ProcessPayment;
