import { useState } from "react";
import data from "/src/data/pokedex.json";

function Body({ activeType }) {
  console.log(activeType);
  const pokemon_type = Object.fromEntries(
    Object.entries(data).filter(([key, value]) => value.type == activeType)
  );
  console.log(pokemon_type);
}

export default Body;
