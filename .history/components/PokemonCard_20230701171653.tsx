import Link from 'next/link'
import React from 'react'

interface PokemonProps{
    name : string
}

export default function PokemonCard({name} : PokemonProps) {
  return (

    <div className="border text-center h-3">

        <Link
        href={name}
        key={name + "Card"}
        >
            
            <h2>
                {name}
            </h2>
        
        
        </Link>
      
    </div>
  )
}
