
import PokemonGrid from "@/components/PokemonGrid"
import {pokemonAPI} from "@/lib/pokemonAPI" 



export default async function Home() {
  const pokemonList = await pokemonAPI()
  return (
    <main className="container mx-auto">
      
      <PokemonGrid pokemonList={pokemonList}/>
   
    </main>
  )
}
