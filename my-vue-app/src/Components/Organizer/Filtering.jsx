import { useDispatch } from "react-redux";

const Filter = () => {
const dispatch = useDispatch();
const tecnologías = useSelector((state) => state.tecnologías)

const handleTechnologyFilter = (e) => {
    e.preventDefault();
    dispatch(filterByTechnology(e.target.value))
}

const handleSourceFilter = (e) => {
    e.preventDefault();
    dispatch(filterBySource(e.target.value))
}

  return (
    <div>
      <div>
        <select onChange={handleTechnologyFilter}>
          <option disabled selected defaultValue>
            Source
          </option>
          <option value="All"></option>
          //falta agregar lógica de filtrado
          //falta además armar back de tecnologías
          <option value=""></option>
        </select>
      </div>
      <div></div>
    </div>
  );
};

export default Filter;
