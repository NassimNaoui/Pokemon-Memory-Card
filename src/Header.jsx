import { useState } from "react";

function Header() {
  const [activeType, setActiveType] = useState("aqua");

  function handleType() {}

  return (
    <>
      <header className="bg-gray-100 bg-opacity-25 text-[#121212] flex-row">
        <div className="flex">
          <div id="aqua">
            <img
              src="/src/assets/Badge_Cascade_Kanto_LGPE.png"
              alt="cascade-badge"
            />
          </div>
          <div id="grass">
            <img
              src="/src/assets/Badge_Prisme_Kanto_LGPE.png"
              alt="rainbow-badge"
            />
          </div>
          <div id="fire">
            <img
              src="/src/assets/Badge_Volcan_Kanto_LGPE.png"
              alt="volcano-badge"
            />
          </div>
        </div>
        <div id="app-logo"></div>
        <div id="score-record"></div>
      </header>
    </>
  );
}

export default Header;
