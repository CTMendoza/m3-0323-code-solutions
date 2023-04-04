
export default function PokemonList ({pokeArray}) {
  console.log('pokeArray: ', pokeArray)
  const listPokemon = pokeArray.map(pokemon =>
    <li key={pokemon.number}>{pokemon.name}</li>
    );
    return <ul>{listPokemon}</ul>
};
