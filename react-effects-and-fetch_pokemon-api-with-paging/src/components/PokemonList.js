import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [data, setData] = useState({});
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=0");

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("data: ", data);
        setPokemon(data.results);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [url]);

  if (data.previous === null) {
    return (
      <main>
        <button type="button" onClick={() => setUrl(data.previous)} disabled>
          Previous Page
        </button>
        <button type="button" onClick={() => setUrl(data.next)}>
          Next Page
        </button>
        <ul>
          {pokemon.map(({ name }) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </main>
    );
  }
  return (
    <main>
      <button type="button" onClick={() => setUrl(data.previous)}>
        Previous Page
      </button>
      <button type="button" onClick={() => setUrl(data.next)}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
