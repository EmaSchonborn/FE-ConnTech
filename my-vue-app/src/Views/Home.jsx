import { Link } from "react-router-dom";
import CardsContainer from "../components/CardsContainer/CardsContainer";
import SearchBar from "../components/NavBar/SearchBar";
import SideBar from "../components/SideBar/SideBar";
import Paginate from "../components/Pagination/Pagination";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVacantes } from "../redux/actions";
//import Pagination from "../components/Pagination/Pagination";

const Home = () => {
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(getVacantes);
  }, [dispatch])

  const vacants=useSelector((state)=>state.vacants);
  
  return (
    <div className="">
      <div className="py-4 bg-slate-500 shadow-md">
        <SearchBar />
      </div>

      <SideBar />
      <div className="fixed top-50 left-80 transform -translate-x-3/2 flex flex-col md:flex-row">
        <div className="md:flex-1 ml-50 ">
          <h1 className="text-2xl font-bold my-4">
            Usuarios en búsqueda laboral
          </h1>

          {/* UserCard */}

          <div className="bg-white shadow-md rounded-lg p-10 h-full">
            <CardsContainer vacants={vacants}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

