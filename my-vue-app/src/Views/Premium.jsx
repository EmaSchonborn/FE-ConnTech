import React, { useState } from 'react';
import Stripe from 'stripe';

let stripe = Stripe('sk_test_51Mu3LiJxJBGJcqxnE5FrbtfC7La83efVuuQiNNhEcSvA8lSp25hvMvQApyEwksGrbuwcwXxiOGI5CyJOrxVwO27600nrIsdBl4');

const Premium = () => {
  const [pagoCompletado, setPagoCompletado] = useState(false);

  const procesarPago = async () => {
    let resultado = await stripe.redirectToCheckout({
      lineItems: [{ price: '1', quantity: 1 }],
      mode: 'payment',
      successUrl: 'https://tuapp.com/exito',
      cancelUrl: 'https://tuapp.com/cancelado',
    });

    if (resultado.error) {
      console.log(resultado.error.message);
    } else {
      setPagoCompletado(true);
    }
  };

  return (
    <div>
      {pagoCompletado ? (
        <p>¡Pago completado!</p>
      ) : (
        <button onClick={procesarPago}>Pagar</button>
      )}
    </div>
  );
};

export default Premium;
