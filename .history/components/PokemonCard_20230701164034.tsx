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
    className="bg-slate-800"
    >

        <h2>
            {name}
        </h2>
    
    
    </Link>
  )
}
