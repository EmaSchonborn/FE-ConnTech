//import { useState, useEffect } from 'react'
//import {Routes, Route,} from "react-router-dom"
import "./App.css";

import Card from "./Components/Card/Card.jsx";

function App() {
  //const [count, setCount] = useState(0)
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card
        title="Example Title"
        description="This is an example card description."
        imageUrl="https://picsum.photos/600/400"
      />
    </div>
  );
}

export default App;
