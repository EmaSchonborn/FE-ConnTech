import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [findWorker, setFindWorker] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setFindWorker(findWorker);
  };

  const handleClick = (e) => {
    e.preventDefault();
    // dispatch(getWorkerByName(findWorker));
  }

  return (
    <div className="flex justify-center">
      <form>
        <input type="text" placeholder="Buscar..." onChange={handleChange} />
        <button type="submit" onClick={handleClick}>Find</button>
      </form>
    </div>
  );
}
