// node.js doesn't have the fetch() API (..yet!)
// so we'll need an external library to make network requests
// axios is an isomorphic client that works client-side/server-side
// https://axios-http.com/docs/intro
const axios = require('axios');
const fs = require('fs');
const fsPromises = require('fs/promises');

let totalRequests = 0;

const getPokemon = async (id) => {
  try {
    console.log(`request for pokemon id=${id} initiated...`);
    const { data: pokemon } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
    return pokemon;
  } catch (error) {
    console.error(error);
  } finally {
    console.log('\x1b[33m', `request for pokemon with id=${id} has finished!`);
    totalRequests++;
  }
};

const myFetchFunc = async () => {
  // fs module has a subset of Promise-based APIs
  // here we're using the synchronous directory check from the non-Promise-based library
  // as well as the mkdir function from the Promise-based sub-library
  if (!fs.existsSync('./pokemons')) {
    await fsPromises.mkdir('./pokemons');
  }

  // notice the order that these requests log their finally() blocks!
  // consecutive runs of Promise.all are NOT idempotent
  // in other words: these requests aren't guaranteed to finish in the order they started
  const pokemons = await Promise.all([
    getPokemon(1),
    getPokemon(2),
    getPokemon(3),
    getPokemon(4),
  ]);

  for (const pokemon of pokemons) {
    await fsPromises.writeFile(
      `./pokemons/${pokemon.name}.json`,
      JSON.stringify(pokemon, null, 2)
    );
  }

  console.log(
    '\x1b[32m',
    `${totalRequests} pokemon written to ./pokemon/<name>.json`
  );
};

myFetchFunc();
