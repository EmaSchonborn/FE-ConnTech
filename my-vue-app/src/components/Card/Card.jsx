import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="max-w-md mx-auto rounded-md shadow-md overflow-hidden">
      <img
        src={props.image}
        alt="https://presidentekennedy.es.leg.br/images/perfil-neutro.jpg"
        className=""
      />
      <div className="">
        {props.id}
        <h3>{props.name}</h3>
      </div>
      <div>
        <Link className="flex justify-center" to={`/detail/${props.id}`}>
          <h2 className="flex justify-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
            <p>Perfil</p>
          </h2>
        </Link>
      </div>
      <p>Teléfono: {!props.phone ? "No indicado" : props.phone}</p>
    </div>
  );
};

export default Card;
