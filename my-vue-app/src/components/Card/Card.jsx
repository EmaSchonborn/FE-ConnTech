import React from "react";

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
        <p className="mt-2 text-base text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default Card;
