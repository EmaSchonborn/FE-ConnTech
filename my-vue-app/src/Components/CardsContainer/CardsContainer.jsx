import React, { useState } from "react";
import { useDispatch, useSelector  } from "react-redux"
import { useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";

const CardsContainer = () => {
    //const dispatch = useDispatch();
    const [mensajePrueba, setMensajePrueba] = useState(true)
    //const currentPage = useSelector((state) => state);
    
  return(
    <>
    {mensajePrueba && <p>Este es un mensaje importante!!</p>}
    <button onClick={() => setMensajePrueba(false)}>Ocultar mensaje</button>
    </>
  )
};

export default CardsContainer;
