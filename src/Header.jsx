import { useState } from "react";

function Header({ setActiveType }) {
  return (
    <>
      <header
        className="absolute w-full bg-gray-100/25 text-[#121212] text-sm px-10
        grid grid-rows-3 grid-cols-1 justify-items-center items-center
        md:grid-rows-1 md:grid-cols-3 md:justify-items-stretch md:justify-between md:text-lg"
      >
        <div className="flex flex-row gap-3 row-start-2 md:col-start-1 md:row-start-1">
          <div
            className="cursor-pointer"
            onClick={() => setActiveType("water")}
          >
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
          className="flex flex-col  items-center row-start-1 md:col-start-2 md:row-start-1"
        >
          <img
            className="w-30"
            src="/src/assets/International_Pokémon_logo.svg.png"
            alt="Logo-pokémon"
          />
          <div className="text-center font-bold">Memory Card Game.</div>
        </div>
        <div
          id="score-record"
          className="row-start-3 flex flex-col font-bold text-center md:col-start-3 md:row-start-1 md:text-right"
        >
          <div>Score : 0</div>
          <div>Record : 0</div>
        </div>
      </header>
    </>
  );
}

export default Header;
