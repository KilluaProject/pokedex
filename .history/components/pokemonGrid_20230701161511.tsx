"use client"

import React from 'react'

import { useState } from 'react'

export default function pokemonGrid() {
    const [searchText, setSearchText] = useState("")

  return (
    <div>
        <h3>Search Your Pokemon</h3>
        <div className="w-full grid max-w-sm items-center gap-2">


        </div>
    </div>
  )
}
