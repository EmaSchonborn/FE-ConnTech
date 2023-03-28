import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-md mx-auto rounded-md shadow-md overflow-hidden">
      <img
        className="object-cover object-center w-full h-48"
        src={imageUrl}
        alt={title}
      />
      <div className="p-4">
        <h5 className="text-lg font-medium text-gray-900">{title}</h5>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link to="/otra pagina" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">APLICAR</Link>
      </div>
    </div>
  );
};

export default Card;
