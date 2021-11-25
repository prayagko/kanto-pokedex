import React, {useState, useEffect} from 'react';




function Details(props){

    const api = "https://002ow15i9i.execute-api.ap-southeast-2.amazonaws.com/dev/"


    const [pokemon, setPokemon] = useState({})
    const [loading, setLoading] = useState(true)


    async function requestPokemon(id) {

        const body = {
            "pokemonId":id,
            "fetchList":["name", "height", "weight", "types", "description", "sprites"],
            "spritesList":["frontAnim","backAnim"]
            }

        const response = await fetch(api, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
            })

        if (response.ok){
            var {name, height, weight, types, description, sprites} = await response.json()
            
            sprites = JSON.parse(sprites)
            types = JSON.parse(types)

            setPokemon({name, height, weight, types, description, sprites}||{})
            console.log('sprite', sprites.frontAnim)
        }
            setLoading(false)
      }
    
    useEffect(() => {
        requestPokemon(props.id);
      }, [props.id])

    return(
        <div className="dex">
            {loading?<p className="loader">Loading...</p>: 
                Object.entries(pokemon).length === 0? 
                    <p className="error">Something Went Wrong...</p>:
                        (<div className="desc">
                            <div className="screenPanel">
                                <div className="screenPanelTop">
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
                                    <img src={pokemon.sprites.frontAnim} alt={pokemon.name} className = "image"></img>
                                </div>
                                <div className="sideButtons">
                                    <div className="leftSideButton"></div>
                                    <div className="rightSideButton"></div>
                                </div>
                                <div className="buttonPanel">
                                    <div className="abButtons">
                                        <div className="aButton"></div>
                                        <div className="bButton"></div>
                                    </div>
                                    <div className="arrowButtons">
                                        <div className="up"></div>
                                        <div className="center"></div>
                                        <div className="down"></div>                            
                                        <div className="left"></div>
                                        <div className="right"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="infoPanel">
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
                                            {pokemon.types.map(t=><span key = {t.name} className={`types ${t.name}`}>{t.name}</span>)}
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
                    </div>)
            }
        </div>

    )
}

export default Details