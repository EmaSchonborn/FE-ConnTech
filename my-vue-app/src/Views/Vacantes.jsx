import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetVacantsByUserId } from "../Redux/actions";
import { useParams, Link } from "react-router-dom";
import { RiHome2Fill, RiMenu3Fill, RiSettings4Fill } from "react-icons/ri";

const Vacantes = () => {
  const VacantsByUserId = useSelector((state) => state.VacantsByUserId);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  let params = useParams();
  /* const [vacanteSeleccionada, setVacanteSeleccionada] = useState(null);

  const vacantes = [
    { id: 1, title: 'Back end developer', location: 'Buenos Aires' },
    { id: 2, title: 'Analista it', location: 'Córdoba' },
    { id: 3, title: 'Full stack developer', location: 'Rosario' },
    { id: 3, title: 'Front end developer', location: 'Rosario' },
  ];

  const handleVacanteClick = (vacante) => {
    setVacanteSeleccionada(vacante);
  } */
  useEffect(() => {
    dispatch(GetVacantsByUserId(params.id));
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (loading) {
    return <div>Cargando...</div>; // Indicador de carga
  }

  return (
    <section className="bg-white">
      <nav className="flex flex-row items-center justify-between bg-indigo-600 text-white p-4">
        <Link to="/home" className="bg-black p-2 rounded-md">
          <RiHome2Fill className="text-2xl mr-2" />
          Home
        </Link>

        <Link to="/newvacant">
            <button className="flex-none rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-50 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
              New Vacant
            </button>
          </Link>

        <div className="flex items-center">
          <RiMenu3Fill className="text-2xl mr-4" />
          <RiSettings4Fill className="text-2xl" />
        </div>
      </nav>
      <h2 className="bg-transparent text-black font-bold p-10">Vacantes publicadas : </h2>
      <div className="flex items-center justify-center w-full h-screen bg-gray-800">
        <div className=" flex  flex-col items-center justify-center w-full h-auto bg-white">
          <div>
            <ul className="flex flex-row items-center justify-center flex-wrap  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5">
              {VacantsByUserId.map((el) => (
                <li
                  key={el.id}
                  className="w-96 h-auto rounded-md shadow-2xl bg-indigo-700 text-white p-5 flex flex-col justify-center ml-5 mb-5"
                >
                  <h2 className="text-lg font-bold mb-2">{el.title}</h2>
                  <p>Descripcion: {el.description}</p>
                  <br />
                  <p>Requerimientos: {el.requeriments}</p>
                  <br />
                  <p>Modalidad: {el.typeId === 1 ? "Fulltime" : "Partime"}</p>
                  <br />
                  <div className="flex justify-center items-center h-24">
                    <button className="bg-black text-white hover:bg-slate-50 hover:text-black font-bold py-2 px-4 rounded mr-2">
                      Borrar
                    </button>
                    <br />
                    <br />
                    <Link to={`/vacant-detail-company/${el.id}`}>
                      Ver postulantes
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Vacantes;
