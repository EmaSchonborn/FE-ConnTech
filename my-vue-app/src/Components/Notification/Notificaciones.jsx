import React from 'react'
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Notificaciones({ message }) {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

Notificaciones.propTypes = {
  message: PropTypes.string.isRequired,
};

export default function App() {
  const [Notificaciones, setNotificaciones] = useState(null);

  const handleApplication = () => {
    setNotificaciones('Un postulante ha aplicado a tu oferta laboral.');
  };

  return (
    <div>
      <h1>Oferta laboral</h1>
      <button onClick={handleApplication}>Aplicar</button>
      {Notificaciones && <Notification message={Notificaciones} />}
    </div>
  );
}