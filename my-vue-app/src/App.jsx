import { Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./Views/LandingPage";
import Home from "./Views/Home";
import Login from "./Views/Login";
import "./App.css";
import About from "./Views/About";
import Preguntas from "./Components/Preguntas";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/info" component={Preguntas} />
      </BrowserRouter>
    </div>
  );
}

export default App;
