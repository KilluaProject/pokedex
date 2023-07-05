import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className="flex container justify-between">
        <Link href="/">
        
        <h1>POKEDEX</h1>

        </Link>

        <div>
            <Link href="/about">About</Link>
            <Link href="/pokemon">Pokemon</Link>
        </div>

        
    </div>
  )
}
