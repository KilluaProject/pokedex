import React from 'react'
const POKEMON_API = "https://pokeapi.co/api/v2/"
export async function pokemonAPI() {
 const res = await fetch(POKEMON_API + "pokemon?limit=151&offset=0")
}
