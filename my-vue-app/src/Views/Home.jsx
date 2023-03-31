import { Link } from "react-router-dom";
import CardsContainer from "../Components/CardsContainer/CardsContainer";
import SearchBar from "../Components/NavBar/SearchBar";
import SideBar from "../Components/SideBar/SideBar";

const Home = () => {
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
            <CardsContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

