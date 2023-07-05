import Link from 'next/link'
import React from 'react'

interface PokemonProps{
    name : string
}

export default function PokemonCard({name} : PokemonProps) {
  return (

    <div>

        <Link
        href={name}
        key={name + "Card"}
        className="border"
        >
    
            <h2>
                {name}
            </h2>
        
        
        </Link>
      
    </div>
  )
}
