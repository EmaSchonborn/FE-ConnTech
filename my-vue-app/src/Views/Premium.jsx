import React, { useState, useEffect } from "react";
//import "./App.css";

const ProductDisplay = () => (
  <section>
    <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
      <h3>Stubborn Attachments</h3>
      <h5>$20.00</h5>
      </div>
    </div>
    <form action="https://api-conntech.onrender.com/create-checkout-session" method="POST">
      <button type="submit">
        Checkout
      </button>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function Premium() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
}


//import React, { useState, useEffect } from "react";
//import { loadStripe } from "@stripe/stripe-js";
//import { Elements } from "@stripe/react-stripe-js";

//import CheckoutForm from "../Components/CheckoutForm/CheckoutForm";
//import { useDispatch, useSelector } from "react-redux";
//import { CreatePayment } from "../Redux/actions";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
//const stripePromise = loadStripe("pk_test_Dt4ZBItXSZT1EzmOd8yCxonL");

//export default function Premium() {
  //const [clientSecret, setClientSecret] = useState("");
  //const dispatch=useDispatch();

  //useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    //dispatch(CreatePayment());
    /* fetch("https://api-conntech.onrender.com/premium/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret)); */
  //}, []);

  //const appearance = {
    //theme: 'stripe',
  //};
  //const options = {
    //clientSecret,
    //appearance,
//   };
//   const clientSecret=useSelector((state)=>state.clientSecret);
//   console.log(clientSecret);

//   return (
//     <div>
//       {clientSecret && (
//         <Elements options={options} stripe={stripePromise}>
//           <CheckoutForm />
//         </Elements>
//       )}
//     </div>
//   );
// }
