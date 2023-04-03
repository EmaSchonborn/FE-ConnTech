import React, { useState } from 'react';
import DetalleVacante from './DetalleVacante';

const Vacantes = () => {
  const [vacanteSeleccionada, setVacanteSeleccionada] = useState(null);

  const vacantes = [
    { id: 1, title: 'Back end developer', location: 'Buenos Aires' },
    { id: 2, title: 'Analista it', location: 'Córdoba' },
    { id: 3, title: 'Full stack developer', location: 'Rosario' },
  ];

  const handleVacanteClick = (vacante) => {
    setVacanteSeleccionada(vacante);
  }

  return (
    <div>
      <h2>Vacantes publicadas</h2>
      <ul>
        {vacantes.map((vacante) => (
          <li key={vacante.id} onClick={() => handleVacanteClick(vacante)}>
            <h3>{vacante.title}</h3>
            <p>{vacante.location}</p>
          </li>
        ))}
      </ul>
      {vacanteSeleccionada && <DetalleVacante vacante={vacanteSeleccionada} />}
    </div>
  );
}

export default Vacantes;