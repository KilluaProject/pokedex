
import PokemonGrid from "@/components/PokemonGrid"
import {getPokemonList} from "@/lib/pokemonAPI" 



export default function Home() {
  return (
    <main className="container mx-auto">
      <PokemonGrid/>
   
    </main>
  )
}
