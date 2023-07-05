"use client"

import React from 'react'

import { useState } from 'react'
import { Label } from './ui/label'

export default function pokemonGrid() {
    const [searchText, setSearchText] = useState("")

  return (
    <div>
        <h3>Search Your Pokemon</h3>
        <div className="w-full grid max-w-sm items-center gap-2">
        <Label htmlFor="pokemonName">Pokemon Name</Label>

        </div>
    </div>
  )
}
