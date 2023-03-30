import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="max-w-md mx-auto rounded-md shadow-md overflow-hidden">
      <img
        src="https://presidentekennedy.es.leg.br/images/perfil-neutro.jpg"
        alt=""
        className=""
      />
      <div className="">
        <h3>{props.name}</h3>
      </div>
      <div>
        <p>Teléfono: {!props.phone ? "No indicado" : props.phone}</p>
        <Link className="flex justify-center" to={`/detail/${props.id}`}>
          <h2 className="flex justify-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
            <p>Perfil</p>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Card;
