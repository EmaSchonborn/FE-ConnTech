import React from "react";
import { NavLink } from "react-router-dom";

const CardDetail = (props) => {
  return (
    <div>
      <div>
        <NavLink to={`/detail/${props.id}`}>
          <h2>{props.name}</h2>
        </NavLink>
      </div>
      <div>{props}</div>
    </div>
  );
};

export default CardDetail;
