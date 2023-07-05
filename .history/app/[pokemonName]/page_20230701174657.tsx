import { getPokemon } from "@/lib/pokemonAPI";
import Image from "next/image";


export default async function PokemonPage({params} : {params:{pokemonName: string}}) {
    const {pokemonName} = params;
    const pokemonObject = await getPokemon(pokemonName)
  return (
   <div>
    <h1>{pokemonName}</h1>
    <Image
    src={pokemonObject.spites.other.home.front_shiny}
    width={500}
    height={500}
    alt={pokemonName}
    
    />
   </div>
  )
}
