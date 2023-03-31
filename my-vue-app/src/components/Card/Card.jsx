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
        {props.name?<h3>{props.name}</h3>:<h3>{props.title}</h3>}
      </div>
      <div>
      {props.phone? <p>Teléfono:{props.phone}</p> : null}
        <Link className="flex justify-center" to={`/detail/${props.id}`}>
          <h2 className="flex justify-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
            <p>Detalles</p>
          </h2>
        </Link>
      </div>
      {props.requeriments?<p>{props.requeriments}</p>:null}
      {props.description?<p>{props.description}</p>:null}
    </div>
  );
};

export default Card;
