export const PokemonCards = ({curPokemon}) => {
    // console.log(curPokemon)
  return (
    <>
      <li className="pokemon-card">
        <figure>
          <img src={curPokemon?.sprites?.back_default} alt={curPokemon.name} className="pokemon-image" />
        </figure>
        <h1 className="pokemon-name">{curPokemon.name}</h1>
        <div className="pokemon-info pokemon-highlight">
          <p>
            {curPokemon?.types?.map((curtype)=>curtype.type.name).join(",")}
          </p>
        </div>
        <div className="grid-three-cols">
          <p className="pokemon-info">
            <span> Height:{curPokemon.height}</span>
          </p>
          <p className="pokemon-info">
            <span> Weight:{curPokemon.weight}</span>
          </p>
          <p className="pokemon-info">
            <span> speed:{curPokemon.stats[5].base_stat}</span>
          </p>
        </div>
        <div className="grid-three-cols">
          <div className="pokemon-info">
            <p>{curPokemon.base_experience}</p>
            <span> Experience:</span>
          </div>
          <div className="pokemon-info">
            <p>{curPokemon.stats[1].base_stat}</p>
            <span>Attack:</span>
          </div>
          <div className="pokemon-info">
          <p>
            {curPokemon.abilities
              .map((abilityInfo) => abilityInfo.ability.name)
              .slice(0, 1)
              .join(", ")}
          </p>
          <span> Abilities: </span>
        </div>
        </div>
      </li>
    </>
  );
};
