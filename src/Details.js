import React, {useState, useEffect} from 'react';

function Details(props){

    const api = 'https://pokeapi.co/api/v2/pokemon/'


    const [pokemon, setPokemon] = useState({})



    async function requestPokemon(id) {
        const response = await fetch(api+id)
        const {name, stats, height, weight, abilities, types, species} = await response.json()
        const speciesResponse = await fetch(species.url)
        const {flavor_text_entries} = await speciesResponse.json()
        const descriptionArray = flavor_text_entries.filter(d=>d.language.name==="en"&&d.version.name==="firered")
        const description = descriptionArray[0].flavor_text
        console.log('desc', description)
        setPokemon({name, stats, height, weight, abilities, types, description}||{})
      }

      useEffect(() => {
        requestPokemon(props.id)
      }, [props.id]);

    return(

        <div className="dex">
            {!!Object.keys(pokemon).length?
                (<div className="desc">
                    <div className="screen-panel">
                        <div className="screen-panel-top">
                            <div className="camled">
                                <div className="camera"></div>
                                <div className="led"></div>
                            </div>
                            <div className="speakers">
                                <div className="speakerHole"></div>
                                <div className="speakerHole"></div>
                                <div className="speakerHole"></div>
                                <div className="speakerHole"></div>
                                <div className="speakerHole"></div>
                            </div>
                        </div>
                        <div className="screen">
                            <img src={`/images/${props.id}.png`} alt={pokemon.name} className = "image"></img>
                        </div>
                        <div className="arrow-buttons">
                            <div className="left-button"></div>
                            <div className="right-button"></div>
                            
                        </div>
                    </div>
                    <div className="info-panel">
                        <div className="detail">

                            <h1 className="name">
                                {pokemon.name.toUpperCase()}
                            </h1>
                            <p className="item">
                                <span className="field">
                                    Pokedex No.
                                </span>
                                <span className="values">
                                    {props.id}
                                </span> 
                            </p>
                            <p className="item">
                                <span className="field">
                                Types
                                </span>
                                <span className="values">
                                    {pokemon.types.map(t=><span key = {t.type.name} className={`types ${t.type.name}`}>{t.type.name}</span>)}
                                </span>
                            </p>
                            <p className="item">
                                <span className="field">
                                    Weight
                                </span>
                                <span className="values">
                                    {pokemon.weight/10} kg
                                </span> 
                            </p>
                            <p className="item">
                                <span className="field">
                                    Height
                                </span>
                                <span className="values">
                                    {pokemon.height/10} m
                                </span> 
                            </p>
                            <p className="description">{pokemon.description}</p>
                        </div>
                    </div>
                </div>):null}
        </div>

    )
}

export default Details