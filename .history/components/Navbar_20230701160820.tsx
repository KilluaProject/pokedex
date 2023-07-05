import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className="flex container justify-between mx-auto gap-3 item-center bg-slate-500 ">

        <Link href="/">
        
        <h1 className="text-3xl">POKEDEX</h1>

        </Link>

        <div>
            <Link href="/about">About</Link>
            <Link href="/pokemon">Pokemon</Link>
        </div>

        
    </div>
  )
}
