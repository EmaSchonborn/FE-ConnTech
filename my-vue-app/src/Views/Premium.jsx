import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../Components/CheckoutForm/CheckoutForm";
import { useDispatch, useSelector } from "react-redux";
import { CreatePayment } from "../Redux/actions";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripePromise = loadStripe("pk_test_Dt4ZBItXSZT1EzmOd8yCxonL");

export default function Premium() {
  //const [clientSecret, setClientSecret] = useState("");
  const dispatch=useDispatch();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    dispatch(CreatePayment());
    /* fetch("https://api-conntech.onrender.com/premium/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret)); */
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };
  const clientSecret=useSelector((state)=>state.clientSecret);
  console.log(clientSecret);

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
