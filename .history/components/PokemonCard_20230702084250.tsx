import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getPokemon } from '@/lib/pokemonAPI';

interface PokemonProps {
  params: string; // Update the type of 'params' to string
  name: string;
}

export default async function PokemonCard({ name, params }: PokemonProps) {
  const pokemonName = params; // Assign 'params' directly to 'pokemonName'
  const pokemonObject = await getPokemon(pokemonName);
 
  return (
    <div className="border text-center rounded-lg items-center py-4">
      <Link href={name} key={name + "Card"}>
        <Image
          width={200}
          height={200}
          alt={pokemonName}
          src={pokemonObject.sprites.other['official-artwork'].front_default}
        />
        <h2>{name}</h2>
      </Link>
    </div>
  );
}
