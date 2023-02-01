async function getPokemons() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const { results } = await response.json();
    return results;
  } catch (error) {
    throw new NetworkError();
  }
}

export default getPokemons;
