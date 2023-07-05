import { getPokemon } from "@/lib/pokemonAPI";


export default async function PokemonPage({params} : {params:{pokemonName: string}}) {
    const {pokemonName} = params;
    const pokemonObject = getPokemon()
  return (
    <div>page</div>
  )
}
