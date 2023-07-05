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

        <div>
            <PokemonImage
            
            image={pokemonObject.sprites.other[`official-artwork`].front_default}
            name={pokemonName}
            
            />
        
        </div>

        <h3>Berat : {pokemonObject.weight}</h3>
        <div className="flex flex-col">

        </div>
   </div>
  )
}
