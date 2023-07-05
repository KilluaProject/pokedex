import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className="flex container justify-between mx-auto item-center bg-slate-500 ">

        <Link href="/">
        
        <h1 className="text-3xl">POKEDEX</h1>

        </Link>

        <div className="flex justify-center items-center ">
            <Link href="/about">About</Link>
            <Link href="/pokemon">Pokemon</Link>
        </div>

        
    </div>
  )
}
