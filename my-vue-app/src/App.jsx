import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Views/Home";
import Login from "./Views/Login";
import { Landing } from "./Views/Landing";
import About from "./Views/About";
import Preguntas from "./Components/Preguntas";
import Profile from "./Components/ProfileUser/ProfileUser"
import Register from "./Components/Register/Register";
import Postulation from "./Views/Postulation"
import NewVacant from "./Components/NewVacant/NewVacant";
import VacantDetail from "./Components/VacantDetail/VacantDetail";
import Vacantes from "./Views/Vacantes";
import CardDetail from "./Components/CardDetail/CardDetail";

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import Premium from "./Views/Premium";
import { useSelector } from "react-redux";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
//const stripePromise = loadStripe('pk_test_Dt4ZBItXSZT1EzmOd8yCxonL');


function App() {

  //let client_Secret=useSelector((state)=>state.clientSecret);

  //const options = {
    // passing the client secret obtained in step 3
    //clientSecret: `${client_Secret}`,
    // Fully customizable with appearance API.
    //appearance: {/*...*/},
  //};

  return (
    <div className="App font-D-DIN">
      {/* <Elements stripe={stripePromise} options={options}>
      <Premium />
      </Elements> */}
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
        <Route path="/premium" component={Premium}/>
        <Route path="/detail/:id" component={CardDetail} />
      </BrowserRouter>
    </div>
  );
}

export default App;