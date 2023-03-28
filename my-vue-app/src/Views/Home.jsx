import { Link } from "react-router-dom";
import SearchBar from "../Components/NavBar/SearchBar";
import SideBar from "../Components/SideBar/SideBar";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      {<Pagination />}
    </div>
  );
};

export default Home;
