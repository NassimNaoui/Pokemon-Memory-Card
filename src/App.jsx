import { useState, useEffect } from "react";
import "./App.css";

import Header from "./Header";

function App() {
  const [activeType, setActiveType] = useState("aqua");

  return (
    <>
      <div
        className="relative bg-cover bg-center h-full"
        style={{ backgroundImage: `url(/src/assets/${activeType}-gym.png)` }}
      >
        <Header setActiveType={setActiveType} />
      </div>
    </>
  );
}

export default App;
