"use client"

import React from 'react'

export function PokemonImage({ image, name}:{image: string, name: string}) {
  return (
    <Image
    src={pokemonObject.sprites.other['official-artwork'].front_default}
    width={200}
    height={200}
    alt={pokemonName}
    />
  )
}
