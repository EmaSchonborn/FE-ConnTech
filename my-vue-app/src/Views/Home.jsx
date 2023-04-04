import { Link } from "react-router-dom";
import CardsContainer from "../components/CardsContainer/CardsContainer";
import SearchBar from "../components/NavBar/SearchBar";
import SideBar from "../components/SideBar/SideBar";
import Paginate from "../components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { getUsers, getVacantes } from "../Redux/actions";
import CardsContainer2 from "../Components/CardsContainer/CardsContainer2";
//import Pagination from "../components/Pagination/Pagination";

const Home = () => {
  //const userRole=useSelector((state)=>state.userVerified.user);
  const store = useStore();
  const state = store.getState();
  const [userRole, setUserRole]=useState();
  /* useEffect(() => {
    setUserRole(state.userVerified.user);
  }, []) */
  console.log(state);
  setUserRole(state.userVerified.user.roleId);

  /* let userRole1=null;
  if (userRole.roleId.par()==='1') {
    userRole1=true;
  }

  userRole.hasOwnProperty() */

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
            {userRole===null?<CardsContainer/>:<CardsContainer2/>}
            {/* {userRole.userVerified.user.roleId===2?<CardsContainer2/>:undefined} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

