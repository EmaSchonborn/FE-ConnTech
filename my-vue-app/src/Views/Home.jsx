import { Link } from "react-router-dom";
import CardsContainer from "../Components/CardsContainer/CardsContainer";
import SearchBar from "../components/NavBar/SearchBar";
import SideBar from "../components/SideBar/SideBar";
//import Paginate from "../components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { getUsers, getVacantes } from "../Redux/actions";
import CardsContainer2 from "../Components/CardsContainer/CardsContainer2";
//import Pagination from "../components/Pagination/Pagination";

const Home = () => {
  const userRole=useSelector((state)=>state.userVerified.user);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 8000);
  
    return () => {
      clearTimeout(timeout);
    }
  }, [])

  if (loading) {
    return <div>Cargando...</div>; // Indicador de carga
  }

  return (
    <div className="bg-white">
      <div className="py-4 bg-indigo-700 shadow-md">
        <SearchBar />
      </div>

      <SideBar />
      <div className="fixed top-50 left-52 transform -translate-x-3/2 flex flex-col items-center justify-center md:flex-row bg-slate-50">
        <div className="w-screen h-screen md:flex-1 bg-slate-50">
          <h1 className="text-2xl font-bold my-4 text-black text-center">
            Usuarios en búsqueda laboral
          </h1>

          {/* UserCard */}

          <div className="bg-slate-50 shadow-md rounded-lg p-10 h-full">
            {userRole.roleId===1?<CardsContainer/>:<CardsContainer2/>}
            {/* {userRole.userVerified.user.roleId===2?<CardsContainer2/>:undefined} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

