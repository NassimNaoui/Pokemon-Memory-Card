import { useState } from "react";
import data from "/src/data/pokedex.json";

function Body({ activeType }) {
  const [randomIndex, setRandomIndex] = useState(() => {
    return [...Array(9).keys()].sort(() => Math.random() - 0.5);
  });

  const generateRandomIndex = () => {
    const shuffled = [...Array(9).keys()].sort(() => Math.random() - 0.5);
    setRandomIndex(shuffled);
  };

  console.log(randomIndex);

  const pokemon_type = Object.fromEntries(
    Object.entries(data).filter(([key, value]) => value.type == activeType)
  );
  console.log(Object.entries(pokemon_type)[6][1].sprite);

  return (
    <>
      <div className="flex-1 flex justify-center items-center">
        <main className="w-full h-full grid grid-cols-3 grid-rows-3 justify-items-center items-center">
          <GenerateCards
            randomIndex={randomIndex}
            pokemonObject={Object.entries(pokemon_type)}
          />
        </main>
      </div>
    </>
  );
}

export default Body;

function GenerateCards({ randomIndex, pokemonObject }) {
  return randomIndex.map((index) => (
    <div className="cursor-pointer flex flex-col justify-center items-center text-center border border-transparent rounded-xl bg-gradient-to-t from-[#88a4c6] to-[#FDFDFD]/70 w-[50%] h-[60%] hover:border-amber-200">
      <img className=" w-[150%]" src={pokemonObject[index][1].sprite} alt="" />
      <div className="text-lg font-bold text-[#121212]">
        {pokemonObject[index][1].name_en}
      </div>
    </div>
  ));
}
