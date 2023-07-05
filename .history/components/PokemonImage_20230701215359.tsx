"use client"

import React from 'react'
import Image from 'next/image'

export function PokemonImage({ image, name}:{image: string, name: string}) {
  return (
    <Image
    src={image}
    width={200}
    height={200}
    alt={pokemonName}
    />
  )
}
