import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getPokemon } from '@/lib/pokemonAPI';

interface PokemonProps {

  name: string;
}

export default async function PokemonCard({ name }: PokemonProps) {

 
  return (
    <div className="border text-center rounded-lg items-center py-4">
      <Link href={name} key={name + "Card"}>
  
        <h2>{name}</h2>
      </Link>
    </div>
  );
}
