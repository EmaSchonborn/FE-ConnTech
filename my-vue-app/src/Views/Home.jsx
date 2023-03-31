import { Link } from "react-router-dom";
import CardsContainer from "../components/CardsContainer/CardsContainer";
import SearchBar from "../components/NavBar/SearchBar";
import SideBar from "../components/SideBar/SideBar";
import Paginate from "../components/Pagination/Pagination";
//import Pagination from "../components/Pagination/Pagination";

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
          <div className="relative">
            <div className="absolute z-0 h-screen w-screen bg-white">
              <CardsContainer />
            </div>
          </div>
          <div className="bg-black">
            <Paginate />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
