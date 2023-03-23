import { Routes, Route } from "react-router-dom";
import  LandingPage  from "./Views/LandingPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" component={LandingPage} />
      </Routes>
    </div>
  );
}

export default App;
