import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";

const CardsContainer = () => {
  const [vacants, setVacants] = useState([]);

  useEffect(() => {
    // fetch("https://api-conntech.onrender.com/vacant/")
    //   .then((e) => e.json())
    //   .then((el) => setVacants(el));
    axios.get("https://api-conntech.onrender.com/vacant/").then(el => console.log(el.data))
  }, []);

  return (
    <div>
      {vacants
        ? vacants.map((e) => {
            <Card
              key={e.id}
              title={e.title}
              requeriments={e.requeriments}
              description={e.description}
            />;
          })
        : setVacants(info)}
    </div>
  );
};

export default CardsContainer;
