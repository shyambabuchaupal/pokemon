import { useEffect, useState } from "react";
import { PokemonCards } from "./PokemonCards";

export const Pokemon = () => {
  const [pokemondata, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  console.log(search);
  const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

  const pokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      const detailedPokemonData = data.results.map(async (CurPokemon) => {
        const res = await fetch(CurPokemon.url);
        const data = await res.json();
        return data;
      });
      //    console.log(detailedPokemonData)
      const detailedRes = await Promise.all(detailedPokemonData);
      setPokemonData(detailedRes);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    pokemon();
  }, []);

  // search function

  const searcdata = pokemondata.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <section className="container">
        <header>
          <h1> Lets Catch Pokémon</h1>
        </header>
        <div className="pokemon-search">
          <input
            type="text"
            placeholder="search Pokemon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          {loading ? (
            <h1>Loading...</h1>
          ) : error ? (
            <h2 style={{ color: "red", textAlign: "center" }}>
              Something went wrong: {error.message}
            </h2>
          ) : (
            <ul className="cards">
              {searcdata?.map((curPokemon) => (
                <PokemonCards curPokemon={curPokemon} key={curPokemon.id} />
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
};
