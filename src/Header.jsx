import { useState } from "react";

function Header() {
  const [activeType, setActiveType] = useState("aqua");

  console.log(activeType);

  return (
    <>
      <header className="bg-gray-100 bg-opacity-25 text-[#121212] flex items-center w-full justify-between px-10">
        <div className="flex gap-3">
          <div className="cursor-pointer" onClick={() => setActiveType("aqua")}>
            <img
              src="/src/assets/Badge_Cascade_Kanto_LGPE.png"
              alt="cascade-badge"
            />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setActiveType("grass")}
          >
            <img
              src="/src/assets/Badge_Prisme_Kanto_LGPE.png"
              alt="rainbow-badge"
            />
          </div>
          <div className="cursor-pointer" onClick={() => setActiveType("fire")}>
            <img
              src="/src/assets/Badge_Volcan_Kanto_LGPE.png"
              alt="volcano-badge"
            />
          </div>
        </div>
        <div
          id="app-logo"
          className="flex flex-col justify-items-center items-center"
        >
          <img
            className="w-30"
            src="/src/assets/International_Pokémon_logo.svg.png"
            alt="Logo-pokémon"
          />
          <div className="text-center font-bold text-2xl">
            Memory Card Game.
          </div>
        </div>
        <div
          id="score-record"
          className="flex flex-col text-xl font-bold text-right"
        >
          <div>Score : 0</div>
          <div>Record : 0</div>
        </div>
      </header>
    </>
  );
}

export default Header;
