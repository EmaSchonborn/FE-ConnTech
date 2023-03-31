import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { useEffect } from "react";
import { getUsers, getVacants } from "../../Redux/actions";
import Card from "../Card/Card";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Paginate from "../Pagination/Pagination";

const CardsContainer = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [usertype,setUsertype]=useState();

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
  const users = useSelector((state) => state.filteredUsers);
  const vacants=useSelector((state)=>state.vacants);
  if (vacants.length===null) {
    dispatch(getVacants());
  }
  const userVerified=useSelector((state)=>state.userVerified);
  if (userVerified.roleId===1) {
    setUsertype('company');
  } else if(userVerified.roleId===2) {
    setUsertype('normal');
  }
  
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  
  //función de paginado y botones adyacentes
  const displayedItems = 5;
  const finalReference = currentPage * displayedItems;
  const initialReference = finalReference - displayedItems;
  let paginationUsers=[];
  let paginationVacants=[];
  let lastCell=0;
  if (usertype==='normal') {
    paginationVacants=vacants?.slice(initialReference, finalReference);
    lastCell = Math.ceil(vacants?.length / displayedItems);
  }
  if (usertype==='company') {
    paginationUsers=users?.slice(initialReference, finalReference);
    lastCell = Math.ceil(users?.length / displayedItems);
  }
  //const lastCell = Math.ceil(users?.length / displayedItems);

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
  
  console.log(paginationUsers);

  return (
    <div className="">
      <div>
        {
          paginationVacants?.map((vacant)=>
          <Card
            key={vacant.id}
            title={vacant.title}
            requeriments={vacant.requeriments}
            description={vacant.description}
            typeJob={vacant.typeId}
          />
          )}
        {paginationUsers?.map((user) =>
          <Card
            key={user.id}
            name={user.name}
            email={user.email}
            phone={user.phone}
          />
        )}
      </div>
      <div>
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
        <button disabled={currentPage === lastCell} onClick={handleNextPagination}>
          <FiArrowRight />
        </button>
        <button disabled={currentPage === lastCell} onClick={handleLastCell}>
          Last
        </button>
      </div>
    </div>
  );
};

export default CardsContainer;
