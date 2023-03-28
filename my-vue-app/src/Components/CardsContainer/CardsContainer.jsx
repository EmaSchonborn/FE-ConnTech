import React, { useState } from "react";
import { useDispatch  } from "react-redux"
import { useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";

const CardsContainer = () => {
    const dispatch = useDispatch();
    const [currentPage, setcurrentPage] = useState(1)

    
  return(
    <>

    </>
  )
};

export default CardsContainer;
