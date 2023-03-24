import { Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./Views/LandingPage";
import Home from "./Views/Home";
import Login from "./Views/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
        <Route path="/home" component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
