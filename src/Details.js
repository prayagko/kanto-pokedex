import React, {useState, useEffect} from 'react';

function Details(props){

    const api = 'https://pokeapi.co/api/v2/pokemon/'

    const [pokemon, setPokemon] = useState({})

    async function requestPokemon(id) {
        const response = await fetch(api+id)
        const {name, stats, height, weight, abilities, types} = await response.json()
        setPokemon({name, stats, height, weight, abilities, types}||{})
      }

      useEffect(() => {
        requestPokemon(props.id)
      }, [props.id]);

      console.log('here',pokemon)
    return(
        <div className="wrap-details">
            {!!Object.keys(pokemon).length?
                (<div className="desc">
                    <img src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`} alt={pokemon.name} className = "pokeimages deets"></img>
                    <div className="deets">
                        <h1 className="name">
                            {pokemon.name.toUpperCase()}
                        </h1>
                        <p className="item">Types: {pokemon.types.map(t=><span key = {t.type.name} className={`types ${t.type.name}`}>{t.type.name+' '}</span>)}</p>
                        <p className="item">Abilities: {pokemon.abilities.map(a=><span key = {a.ability.name} className="abilities">{a.ability.name+' '}</span>)}</p>
                        <p className="item">
                            Weight: {pokemon.weight}
                        </p>
                        <p className="item">
                            Height: {pokemon.height}
                        </p>
                    </div>
                </div>):null}
        </div>
    )
}

export default Details