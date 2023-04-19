import { useSelector, useDispatch } from "react-redux";
import { filterByTechnology, filterBySource } from "../../Redux/actions";

const Filter = () => {
  const dispatch = useDispatch();
  const tecnologías = useSelector((state) => state.tecnologías);

  const handleTechnologyFilter = (e) => {
    e.preventDefault();
    dispatch(filterByTechnology(e.target.value));
  };

  const handleSourceFilter = (e) => {
    e.preventDefault();
    dispatch(filterBySource(e.target.value));
  };

  return (
    <div>
      <div>
        <select onChange={handleTechnologyFilter}>
          <option disabled selected defaultValue>
            Origen
          </option>
          <option value="All">Todos</option>
          <option value="">Usuarios</option>
          <option value="">Empleos</option>
        </select>
      </div>
      <div></div>
    </div>
  );
};

export default Filter;
