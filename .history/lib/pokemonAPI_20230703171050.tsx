
const POKEMON_API = "https://pokeapi.co/api/v2/"

export async function pokemonAPI() {
 const res = await fetch(POKEMON_API + "pokemon?limit=151&offset=0")
 const data = await res.json()
 return data.results;
}


export async function getPokemon(name:string){
    const res = await fetch(POKEMON_API + "pokemon/"+ name)
    const data = await res.json();
    return data
}
