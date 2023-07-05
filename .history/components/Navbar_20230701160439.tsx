import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
        <Link href={"/"}>
        
        <h1>POKEDEX</h1>

        </Link>

        <div>
            <Link>About</Link>
            <Link>Pokemon</Link>
        </div>

        
    </div>
  )
}
