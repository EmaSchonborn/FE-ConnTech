import React, { useState } from 'react';
import Stripe from 'stripe';

const Premium = () => {
  const [stripe, setStripe] = useState(null);

  const handlePayment = () => {
    const paymentObject = stripe.paymentRequest({
      country: 'US',
      currency: 'usd',
      total: {
        label: 'Monto de la compra',
        amount: 1000, // 10.00 dólares.
      },
    });

    paymentObject.on('token', async (token) => {
      console.log(token);
      // Aquí podrías enviar el token de pago a tu servidor para procesar el pago.
    });

    paymentObject.show();
  };

  // Creamos la instancia de Stripe en el primer renderizado del componente.
  React.useEffect(() => {
    setStripe(Stripe('pk_test_51Mu3LiJxJBGJcqxndvR71n9Q0pRtN9YAdJVGKF9b8EeabkmJgnTg36malaW9PnPfqzgm22OqkVOqynJJX0cQjZLo009fTDNZy1'));
  }, []);

  return (
    <div>
      <h1>Página de pago Premium</h1>
      <p>Obtén acceso a contenido exclusivo por una tarifa de $10.00 dólares.</p>

      <button onClick={handlePayment}>Pagar ahora</button>
    </div>
  );
};

export default Premium;
