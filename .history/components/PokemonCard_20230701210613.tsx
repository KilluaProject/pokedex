import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { getPokemon } from "@/lib/pokemonAPI";




interface PokemonProps{
    name : string
}

export default async function PokemonCard({params} : PokemonProps {params:{pokemonNames: string}}) {
    const {pokemonNames} = params;
    const pokemonObject = await getPokemon(pokemonNames)
   
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
