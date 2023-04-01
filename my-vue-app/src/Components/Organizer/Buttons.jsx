import { Order } from "./Ordering";
import { Filter } from "./Filtering";

const Buttons = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div>
      <button onClick={() => setShowFilters(!showFilters)}>
        Filtrar u Ordenar
      </button>
      {showFilters && (
        <div>
          <Order />
          <Filter />
        </div>
      )}
    </div>
  );
};

export default Buttons;
