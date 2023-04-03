import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiHome2Fill, RiMenu3Fill, RiSettings4Fill } from "react-icons/ri";

const Postulation = () => {
  const [postulaciones, setPostulaciones] = useState([
    { id: 1, nombre: "Postulacion 1" },
    { id: 2, nombre: "Postulacion 2" },
    { id: 3, nombre: "Postulacion 3" },
  ]);

  return (
    <div>
      <nav className="flex items-center justify-between bg-gray-800 text-white p-4">
        <Link to="/home">
          <RiHome2Fill className="text-2xl mr-2" />
          Home
        </Link>
        <div className="flex items-center">
          <RiMenu3Fill className="text-2xl mr-4" />
          <RiSettings4Fill className="text-2xl" />
        </div>
      </nav>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">
          <ul className="flex flex-row space-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {postulaciones.map((el) => (
              <li key={el.id} className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-lg font-bold mb-2">{el.nombre}</h2>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  nec nunc eget massa convallis consequat. Duis eget neque et
                  libero tincidunt hendrerit.
                </p>
                <div className="flex justify-center items-center h-24">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Save Changes
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </h1>
      </div>
    </div>
  );
};

export default Postulation;
