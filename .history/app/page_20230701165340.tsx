
import PokemonGrid from "@/components/PokemonGrid"
import {pokemonAPI} from "@/lib/pokemonAPI" 



export  async function Home() {
  const pokemonList = await getPokemonList()
  return (
    <main className="container mx-auto">
      <PokemonGrid pokemonList={pokemonList}/>
   
    </main>
  )
}
