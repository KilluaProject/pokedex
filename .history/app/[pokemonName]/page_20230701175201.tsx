import { getPokemon } from "@/lib/pokemonAPI";
import Image from "next/image";
import React from "react";


export default async function PokemonPage({params} : {params:{pokemonName: string}}) {
    const {pokemonName} = params;
    const pokemonObject = await getPokemon(pokemonName)
  return (
   <div>
    <h1>{pokemonName}</h1>
    <Image
    src={pokemonObject.sprites.other.['official-artwork'].front_default}
    width={500}
    height={500}
    alt={pokemonName}
    
    />
   </div>
  )
}
