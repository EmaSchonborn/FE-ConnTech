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
    <div className="flex justify-center bg-indigo-600">
      <form className="text-white">
        <input type="text" placeholder="Buscar..." onChange={handleChange} className="bg-white mr-2 rounded-sm p-2" />
        <button type="submit" onClick={handleClick} className="bg-black rounded-md text-white py-2 hover:scale-105 duration-300" >Find</button>
      </form>
    </div>
  );
}
