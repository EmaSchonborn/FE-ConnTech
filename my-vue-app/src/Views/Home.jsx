import CardsContainer from "../Components/CardsContainer/CardsContainer";
import SearchBar from "../Components/NavBar/SearchBar";
import SideBar from "../Components/SideBar/SideBar";
//import Paginate from "../components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
// import { fetchProtectedResource, getUsers, getVacantes } from "../Redux/actions";
import CardsContainer2 from "../Components/CardsContainer/CardsContainer2";
import SideBar2 from "../Components/SideBar/SideBar2";
import { Link } from "react-router-dom";
import { Hero } from "../Components/LandingComponents/Hero";
import { Work } from "../Components/LandingComponents/Work";
import { verifyToken } from "../Redux/actions";

//import Pagination from "../components/Pagination/Pagination";

const Home = () => {
  const userRole = useSelector((state) => state.userVerified.user);

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [dispatch, userRole]);

  useEffect(() => {
    dispatch(verifyToken());
  }, [dispatch]);

  const verified = useSelector((state) => state.isAuthenticated);

  if (loading) {
    return <div>Cargando...</div>; // Indicador de carga
  }

  return (
    <div className="bg-white">
      {verified === true ? (
        <>
          <div className="py-4 bg-indigo-700 shadow-md">
            <SearchBar />
          </div>
          {userRole?.roleId === 1 ? <SideBar /> : <SideBar2 />}
          <div className="fixed top-50 left-52 transform -translate-x-3/2 flex flex-col items-center justify-center md:flex-row bg-slate-50">
            <div className="w-screen h-screen md:flex-1 bg-slate-50">
              {userRole?.roleId === 1 ? (
                <h1 className="text-2xl font-bold my-4 text-black text-center">
                  Usuarios en búsqueda laboral
                </h1>
              ) : (
                <h1 className="text-2xl font-bold my-4 text-black text-center">
                  Vacantes
                </h1>
              )}
              <div className="bg-slate-50 shadow-md rounded-lg p-10 h-full">
                {userRole?.roleId === 1 ? (
                  <CardsContainer />
                ) : (
                  <CardsContainer2 />
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <main className="bg-gradient-to-r from-rose-100 to-teal-100 font-D-DIN">
          <div class="flex flex-col items-center justify-center h-screen">
            <h1 class="text-2xl font-bold mb-6">
              ¡Ups! Parece que todavía no iniciaste sesión
            </h1>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <Link to="/login"> Iniciar Sesión </Link>
            </button>
          </div>
        </main>
      )}
    </div>
  );
};

export default Home;
