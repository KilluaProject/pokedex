"use client"

import React from 'react'

import { useState } from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import PokemonCard from '@/components/PokemonCard'

export default function PokemonGrid() {
    const [searchText, setSearchText] = useState("")

  return (
    <div className="container flex flex-col gap-5">
        <h3>Search Your Pokemon</h3>
        <div className="w-full grid max-w-sm items-center gap-2">
        <Label htmlFor="pokemonName">Pokemon Name</Label>
        <Input
        type="text"
        value={searchText}
        id="pokemonName"
        placeholder="Charizard, Pikacu, etc"
        onChange={(e) => setSearchText(e.target.value)}
        
        
        />

        </div>
        <div className="grid grid-cols-4">
            <PokemonCard name='Pikachu'/>
        </div>
    </div>
  )
}
