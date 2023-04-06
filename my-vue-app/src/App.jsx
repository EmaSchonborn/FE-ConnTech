import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Views/Home";
import Login from "./Views/Login";
//import "./App.css";
import { Landing } from "./Views/Landing";
import About from "./Views/About";
import Preguntas from "./Components/Preguntas";
import Profile from "./Components/ProfileUser/ProfileUser"
import Register from "./Components/Register/Register";

import Postulation from "./Views/Postulation"
import NewVacant from "./Components/NewVacant/NewVacant";
import VacantDetail from "./Components/VacantDetail/VacantDetail";
import Vacantes from "./Views/Vacantes";
//import Vacantes from "./Views/Vacantes";

//import NewVacant from "./Components/NewVacant/NewVacant";
//import VacantDetail from "./Components/VacantDetail/VacantDetail";
//import Postulation from "./Views/Postulation"


function App() {
  return (
    <div className="App font-D-DIN">
      <BrowserRouter>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/info" component={Preguntas} />
        <Route path="/perfil" component={Profile} />
        <Route path="/mis-vacantes/:id" component={Vacantes} />
        <Route path="/register" component={Register} />
        <Route path="/newvacant" component={NewVacant} />
        <Route path="/vacant-detail/:id" component={VacantDetail} />
      </BrowserRouter>
    </div>
  );
}

export default App;