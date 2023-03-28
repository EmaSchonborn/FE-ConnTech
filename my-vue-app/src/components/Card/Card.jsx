import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ title, requeriments, description }) => {
  return (
    <div className="max-w-md mx-auto rounded-md shadow-md overflow-hidden">
      {/* <img src={props.image} alt="bg" className="" />
      <div className="">
        {props.id}
        <h3>{props.requeriments}</h3>
        <p>
          {props.description}
          I'm sorry, but "text lorem impsup" is not a coherent question or
          statement. It appears to be a random combination of words. Can you
          please provide more context or clarify your request? I'm here to help
          with any questions or concerns you may have.
        </p>
      </div>
      <div>
        <NavLink className="flex justify-center" to={`/detail/${props.id}`}>
          <h2 className="flex justify-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
            <p>This is Bottom</p>
          </h2>
        </NavLink>
      </div> */}
      <h2>{title}</h2>
      <p>{requeriments}</p>
      <p>{description}</p>
    </div>
  );
};

export default Card;
