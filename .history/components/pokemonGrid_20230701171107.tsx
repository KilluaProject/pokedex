"use client"

import React from 'react'

import { useState } from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import PokemonCard from '@/components/PokemonCard'

interface PokemonGridProps {
    pokemonList: any
}

export default function PokemonGrid({pokemonList} : PokemonGridProps) {
    const [searchText, setSearchText] = useState("");
    const searchFilter = (pokemonList:any) =>{
        return pokemonList.filter((pokemon:any) => pokemon.name.toLowerCase().include(searchText.toLowerCase()) )
    }
    

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
            {pokemonList.map((pokemon:any) => {
                return(

                    <PokemonCard name={pokemon.name}/>
                )
            })}
        </div>
    </div>
  )
}
