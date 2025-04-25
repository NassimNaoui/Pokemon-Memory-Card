import { useState } from "react";
import data from "/src/data/pokedex.json";

function Body({ activeType, setScore, getRecord }) {
  const [randomIndex, setRandomIndex] = useState(() => {
    return [...Array(9).keys()].sort(() => Math.random() - 0.5);
  });

  const generateRandomIndex = () => {
    const shuffled = [...Array(9).keys()].sort(() => Math.random() - 0.5);
    setRandomIndex(shuffled);
  };

  const pokemon_type = Object.fromEntries(
    Object.entries(data).filter(([key, value]) => value.type == activeType)
  );

  const [pokemonSelected, setPokemonSelected] = useState([]);

  const idTracker = (e) => {
    let pokemonSelectedCopy = [...pokemonSelected];
    const selectedPokemon = e.currentTarget.id;

    if (!pokemonSelectedCopy.includes(selectedPokemon)) {
      pokemonSelectedCopy.push(selectedPokemon);
      setPokemonSelected(pokemonSelectedCopy);
      const newScore = pokemonSelectedCopy.length;
      setScore(newScore);
      getRecord(newScore);
    } else setPokemonSelected([]), setScore(0);
  };

  const [color, setColor] = useState({
    water: "#88a4c6",
    fire: "#d9a7a7",
    grass: "#b0dfae",
  });

  return (
    <>
      <div className=" flex-1 flex justify-center items-center">
        <main className="w-full max-w-400 h-full grid grid-cols-3 grid-rows-3 justify-items-center items-center">
          <GenerateCards
            randomIndex={randomIndex}
            pokemonObject={Object.entries(pokemon_type)}
            color={color[activeType]}
            idTracker={(e) => {
              idTracker(e), generateRandomIndex();
            }}
          />
        </main>
      </div>
    </>
  );
}

export default Body;

function GenerateCards({ randomIndex, pokemonObject, color, idTracker }) {
  return randomIndex.map((index) => (
    <div
      className={`w-[90%] max-w-70 cursor-pointer flex flex-col justify-center items-center text-center 
      rounded-xl bg-gradient-to-t from-[${color}] to-[#FDFDFD]/70 shadow-none 
      md:rounded-3xl hover:shadow-2xl shadow-amber-500`}
      id={pokemonObject[index][0]}
      onClick={idTracker}
    >
      <img className="w-75" src={pokemonObject[index][1].sprite} alt="" />
      <div className="text-sm font-bold text-[#121212] p-2 md:text-lg from-[#d9a7a7]">
        {pokemonObject[index][1].name_en}
      </div>
    </div>
  ));
}
