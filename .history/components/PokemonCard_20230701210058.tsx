import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { getPokemon } from "@/lib/pokemonAPI";




interface PokemonProps{
    name : string
}

export default async function PokemonCard({params} : {params:{pokemonNames: string}}) {
    const pokemonObject = await getPokemon(pokemonNames)
    const {pokemonNames} = params;
   
  return (

    <div className="border text-center rounded-lg items-center">

        <Link
        href={pokemonNames}
        key={pokemonNames + "Card"}
        >
            <Image className=""
            src={pokemonObject.sprites.other['official-artwork'].front_default}
            width={200}
            height={200}
            alt="Pokemon Name"
            />
            <h2>
               
            </h2>
        
        
        </Link>
      
    </div>
  )
}
