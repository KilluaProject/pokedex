import { PokemonImage } from "@/components/PokemonImage";
import { getPokemon } from "@/lib/pokemonAPI";
import Image from "next/image";
import React from "react";


export default async function PokemonPage({params} : {params:{pokemonName: string}}) {

    const {pokemonName} = params;
    const pokemonObject = await getPokemon(pokemonName)

  return (

   <div>
    <h1>{pokemonName}</h1>
    <PokemonImage/>
    <Image
    src={pokemonObject.sprites.other['official-artwork'].front_default}
    width={200}
    height={200}
    alt={pokemonName}
    
    />
   </div>
  )
}
