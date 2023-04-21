import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Views/Home";
import Login from "./Views/Login";
import { Landing } from "./Views/Landing";
import About from "./Views/About";
import Preguntas from "./Components/Preguntas";
import Profile from "./Components/ProfileUser/ProfileUser";
import Register from "./Components/Register/Register";
import Postulation from "./Views/Postulation";
import NewVacant from "./Components/NewVacant/NewVacant";
import VacantDetail from "./Components/VacantDetail/VacantDetail";
import Vacantes from "./Views/Vacantes";
import CardDetail from "./Components/CardDetail/CardDetail";
import Notificaciones from "./Components/Notification/Notificaciones";
import DashboardAdmin from "./Views/DashboardAdmin";
import Premium from "./Views/Premium";
import { useSelector } from "react-redux";

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
        <Route path="/mis-postulaciones/:id" component={Postulation} />
        <Route path="/register" component={Register} />
        <Route path="/newvacant" component={NewVacant} />
        <Route path="/vacant-detail/:id" component={VacantDetail} />
        <Route path="/premium" component={Premium} />
        <Route path="/detail/:id" component={CardDetail} />
        <Route path="/notificaciones" component={Notificaciones} />
        <Route path="/administrador" component={DashboardAdmin} />
      </BrowserRouter>
    </div>
  );
}

export default App;
