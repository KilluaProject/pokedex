import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



interface PokemonProps{
    name : string
}

export default function PokemonCard({name} : PokemonProps) {
    const pokemonObject = await getPokemon(pokemonName)
  return (

    <div className="border text-center rounded-lg">

        <Link
        href={name}
        key={name + "Card"}
        >
            <Image
            src={""}
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
