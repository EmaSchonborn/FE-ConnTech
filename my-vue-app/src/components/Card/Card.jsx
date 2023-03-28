import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="max-w-md mx-auto rounded-md shadow-md overflow-hidden">
      <img src={props.img} alt="" />
      <section>
        <h5>{props.title}</h5>
        <p>{props.requeriments}</p>
        <p>{props.description}</p>
      </section>
    </div>
  );
};

export default Card;
