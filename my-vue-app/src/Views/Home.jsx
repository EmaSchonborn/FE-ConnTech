import { Link } from "react-router-dom";
import CardsContainer from "../Components/CardsContainer/CardsContainer";
import SearchBar from "../Components/NavBar/SearchBar";
import SideBar from "../Components/SideBar/SideBar";
import Pagination from "../components/Pagination/Pagination";

const Home = () => {
  return (
    <div className="">
      <div className="py-4 bg-white shadow-md">
        <SearchBar />
      </div>

      <SideBar />
      <div className="fixed top-50 left-80 transform -translate-x-1/4 flex flex-col md:flex-row">
        <div className="md:flex-1 ml-50 ">
          <h1 className="text-2xl font-bold my-4">
            Usuarios en búsqueda laboral
          </h1>

          {/* UserCard */}
          <div className="bg-white shadow-md rounded-lg p-4">
          <CardsContainer/>
            <div className="mb-4">
              <h2 className="text-xl font-medium">name</h2>
              <p className="text-gray-500 text-sm">descripción</p>
            </div>
            <Link
              to="/user/detail"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Perfil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
