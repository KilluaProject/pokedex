import Link from 'next/link'
import React from 'react'

interface PokemonProps{
    name : string
}

export default function PokemonCard({name} : PokemonProps) {
  return (
    <Link
    href={name}
    key={name + "Card"}
    className="border border-gray-600 w-full"
    >

        <h2>
            {name}
        </h2>
    
    
    </Link>
  )
}
