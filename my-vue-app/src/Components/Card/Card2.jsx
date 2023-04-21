import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="container mx-auto p-4 mb-5 bg-slate-300 w-6/12 rounded-md">
      <img
        src="https://thumbs.dreamstime.com/b/marcador-de-foto-avatar-perfil-predeterminado-ilustraci%C3%B3n-vectorial-189495158.jpg"
        alt=""
        className="w-10 h-10"
      />

      {props.name?<h3 className="px-4 py-2 text-black text-base ">{props.name}</h3>:<h3 className="px-4 py-2 ">{props.title}</h3>}
      {props.phone?<p className="px-4 py-2 text-black text-base">Teléfono: {props.phone}</p>:null}
      <div className="px-4 py-2">
      {/* {props.description?<p className="px-4 py-2">Descripcion: {props.description}</p>:null} */}
        {props.name? <Link className="flex justify-center" to={`/detail/${props.id}`}>
          <h2 className="flex justify-center  bg-black  text-base  text-white px-4 py-2 rounded-md hover:bg-slate-50 hover:text-black transition-colors duration-300">
            <p>Perfil</p>
          </h2>
        </Link> : <Link className="flex justify-center" to={`/vacant-detail/${props.id}`}>
          <h2 className="flex justify-center  bg-black  text-base  text-white px-4 py-2 rounded-md hover:bg-slate-50 hover:text-black transition-colors duration-300">
            <p>Detalle</p>
          </h2>
        </Link>}
      </div>
    </div>
  );
};

export default Card;
