import { useState } from "react";
import Order  from "./Ordering";
import Filter from "./Filtering";

const Buttons = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="flex flex-row gap-10">
      <button onClick={() => setShowFilters(!showFilters)}>
        Filtrar u Ordenar
      </button>
      {showFilters && (
        <div className="flex flex-row gap-5">
          <Order />
          <Filter />
        </div>
      )}
    </div>
  );
};

export default Buttons;
