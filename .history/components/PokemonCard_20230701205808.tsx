import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { getPokemon } from "@/lib/pokemonAPI";




interface PokemonProps{
    name : string
}

export default async function PokemonCard({name,params} : PokemonProps) {
    const pokemonObject = await getPokemon(pokemonName)
   
  return (

    <div className="border text-center rounded-lg items-center">

        <Link
        href={name}
        key={name + "Card"}
        >
            <Image className=""
            src={pokemonObject.sprites.other['official-artwork'].front_default}
            width={200}
            height={200}
            alt="Pokemon Name"
            />
            <h2>
                {name}
            </h2>
        
        
        </Link>
      
    </div>
  )
}
