import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="flex flex-row items-center max-w-md mx-auto rounded-md shadow-md overflow-hidden h-auto md:h-20 ">
      <img
        src="https://thumbs.dreamstime.com/b/marcador-de-foto-avatar-perfil-predeterminado-ilustraci%C3%B3n-vectorial-189495158.jpg"
        alt=""
        className="w-10 h-10"
      />

      {props.name?<h3 className="px-4 py-2 ">{props.name}</h3>:<h3 className="px-4 py-2 ">{props.title}</h3>}
      {props.phone?<p className="px-4 py-2">Teléfono: {props.phone}</p>:<p className="px-4 py-2">Requerimientos: {props.requeriments}</p>}
      <div className="px-4 py-2">
      {props.description?<p className="px-4 py-2">Descripcion: {props.description}</p>:null}
        {props.name? <Link className="flex justify-center" to={`/detail/${props.id}`}>
          <h2 className="flex justify-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
            <p>Perfil</p>
          </h2>
        </Link> : <Link className="flex justify-center" to={`/vacant-detail/${props.id}`}>
          <h2 className="flex justify-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
            <p>Detalle</p>
          </h2>
        </Link>}
      </div>
    </div>
  );
};

export default Card;
