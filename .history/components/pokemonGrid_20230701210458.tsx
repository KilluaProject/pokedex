import React from 'react';
import { useState } from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import PokemonCard from '@/components/PokemonCard';

interface PokemonGridProps {
  pokemonList: any;
}

export default function PokemonGrid({ pokemonList }: PokemonGridProps) {
  const [searchText, setSearchText] = useState('');
  const searchFilter = (pokemonList: any) => {
    return pokemonList.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const filteredPokemonList = searchFilter(pokemonList);

  return (
    <div className="container flex flex-col gap-5">
      <h3>Search Your Pokemon</h3>
      <div className="w-full grid max-w-sm items-center gap-5">
        <Label htmlFor="pokemonName">Pokemon Name</Label>
        <Input
          type="text"
          value={searchText}
          id="pokemonName"
          placeholder="Charizard, Pikachu, etc"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-4 gap-5">
        {filteredPokemonList.map((pokemon: any) => {
          return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
        })}
      </div>
    </div>
  );
}
