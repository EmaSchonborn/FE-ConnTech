import React from "react"; 
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const CardDetail = () => {
  const valor = useSelector((state) => state.card)

  return (
    <div>
      <span>{valor.name}</span>
    </div>
  );
};

export default CardDetail;
