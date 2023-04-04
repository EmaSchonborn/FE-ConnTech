import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getVacantes } from "../../Redux/actions";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Card from "../Card/Card";
import Paginate from "../Pagination/Pagination";

export default function CardsContainer2() {
    const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  //handlers de paginado
  const handlerPaginate = (indexPage) => {
    setCurrentPage(indexPage);
  };
  const handleFirstCell = () => {
    setCurrentPage(1);
  };
  const handleLastCell = () => {
    setCurrentPage(lastCell);
  };
  const handlePrevPagination = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  const handleNextPagination = () => {
    setCurrentPage((nextPage) => nextPage + 1);
  };
  //esto tiene que estar asociado a state.filteredUsers (para no perder array original)
  //parche temporal
  //const users = useSelector((state) => state.filteredUsers);

  useEffect(() => {
    dispatch(getVacantes());
  }, [dispatch]);
  
  const vacants = useSelector((state) => state.vacants);
  
  //función de paginado y botones adyacentes
  const displayedvacants = 5;
  const finalReference = currentPage * displayedvacants;
  const initialReference = finalReference - displayedvacants;
  const paginationvacants = vacants?.slice(initialReference, finalReference);
  const lastCell = Math.ceil(vacants?.length / displayedvacants);

  //lógica para mostrar sólo algunos botones de paginado
  let startPage = Math.max(currentPage - 1, 1);
  let endPage = Math.min(currentPage + 4, lastCell);
  if (endPage - startPage < 6) {
    startPage = Math.max(endPage - 4, 1);
  }
  const totalPages = [];
  for (let i = startPage; i <= endPage; i++) {
    totalPages.push(i);
  }


  return (
    <div className="">
      <div className="flex flex-col gap-10">
        {paginationvacants.map((vacant) =>
          <Card
            id={vacant.id}
            key={vacant.id}
            title={vacant.title}
            description={vacant.description}
            typeId={vacant.typeId}
          />
        )}
      </div >
      <div className="flex flex-row fixed bottom-0 left-1/2 transform -translate-x-1/2">
        <button disabled={currentPage === 1} onClick={handleFirstCell}>
          First
        </button>
        <button disabled={currentPage === 1} onClick={handlePrevPagination}>
          <FiArrowLeft />
        </button>
        <Paginate
          totalPages={totalPages}
          paginate={handlerPaginate}
          currentPage={currentPage}
        />
        <button
          disabled={currentPage === lastCell}
          onClick={handleNextPagination}
        >
          <FiArrowRight />
        </button>
        <button disabled={currentPage === lastCell} onClick={handleLastCell}>
          Last
        </button>
      </div>
    </div>
  )
}
