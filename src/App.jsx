import { useState, useEffect } from "react";
import "./App.css";

import Header from "./Header";
import Body from "./Body";

function App() {
  const [activeType, setActiveType] = useState("water");

  return (
    <>
      <div
        className="relative bg-cover bg-center h-full"
        style={{ backgroundImage: `url(/src/assets/${activeType}-gym.png)` }}
      >
        <Header setActiveType={setActiveType} />
        <Body activeType={activeType}></Body>
      </div>
    </>
  );
}

export default App;
