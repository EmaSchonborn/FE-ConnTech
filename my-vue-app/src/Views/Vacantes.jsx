import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetVacantsByUserId } from '../Redux/actions';
import Card from '../Components/Card/Card';
import { useParams } from 'react-router-dom';
//import DetalleVacante from './DetalleVacante';

const Vacantes = () => {

  const VacantsByUserId=useSelector((state)=>state.VacantsByUserId);
  const dispatch=useDispatch();
  const [loading, setLoading] = useState(true);
  let params = useParams();
  /* const [vacanteSeleccionada, setVacanteSeleccionada] = useState(null);

  const vacantes = [
    { id: 1, title: 'Back end developer', location: 'Buenos Aires' },
    { id: 2, title: 'Analista it', location: 'Córdoba' },
    { id: 3, title: 'Full stack developer', location: 'Rosario' },
  ];

  const handleVacanteClick = (vacante) => {
    setVacanteSeleccionada(vacante);
  } */
  useEffect(() => {
    dispatch(GetVacantsByUserId(params.id));
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 8000);
  
    return () => {
      clearTimeout(timeout);
    }
  }, [])
  
  if (loading) {
    return <div>Cargando...</div>; // Indicador de carga
  }

  return (
    <div>
      <h2>Vacantes publicadas</h2>
      {VacantsByUserId?.map(e=>
        <Card
        id={e.id}
        key={e.id}
        title={e.title}
        description={e.description}
        typeId={e.typeId}
      />
        )}
      {/* {vacanteSeleccionada && <DetalleVacante vacante={vacanteSeleccionada} />} */}
    </div>
  );
}

export default Vacantes;