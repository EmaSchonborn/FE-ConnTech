import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Views/Home";
import Login from "./Views/Login";
import "./App.css";
import { Landing } from "./Views/Landing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route path="/home" component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
