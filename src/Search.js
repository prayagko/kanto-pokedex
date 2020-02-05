import React, { useState } from 'react';
import {Link} from '@reach/router';


const Search =()=>{
    const [searchTerm, setSearchTerm] = useState('')
    const [match, setMatch] = useState([])

    const pokemen=['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise', 'caterpie', 'metapod', 'butterfree', 'weedle', 'kakuna', 'beedrill', 'pidgey', 'pidgeotto', 'pidgeot', 'rattata', 'raticate', 'spearow', 'fearow', 'ekans', 'arbok', 'pikachu', 'raichu', 'sandshrew', 'sandslash', 'nidoran', 'nidorina', 'nidoqueen', 'nidoran', 'nidorino', 'nidoking', 'clefairy', 'clefable', 'vulpix', 'ninetales', 'jigglypuff', 'wigglytuff', 'zubat', 'golbat', 'oddish', 'gloom', 'vileplume', 'paras', 'parasect', 'venonat', 'venomoth', 'diglett', 'dugtrio', 'meowth', 'persian', 'psyduck', 'golduck', 'mankey', 'primeape', 'growlithe', 'arcanine', 'poliwag', 'poliwhirl', 'poliwrath', 'abra', 'kadabra', 'alakazam', 'machop', 'machoke', 'machamp', 'bellsprout', 'weepinbell', 'victreebel', 'tentacool', 'tentacruel', 'geodude', 'graveler', 'golem', 'ponyta', 'rapidash', 'slowpoke', 'slowbro', 'magnemite', 'magneton', "farfetch'd", 'doduo', 'dodrio', 'seel', 'dewgong', 'grimer', 'muk', 'shellder', 'cloyster', 'gastly', 'haunter', 'gengar', 'onix', 'drowzee', 'hypno', 'krabby', 'kingler', 'voltorb', 'electrode', 'exeggcute', 'exeggutor', 'cubone', 'marowak', 'hitmonlee', 'hitmonchan', 'lickitung', 'koffing', 'weezing', 'rhyhorn', 'rhydon', 'chansey', 'tangela', 'kangaskhan', 'horsea', 'seadra', 'goldeen', 'seaking', 'staryu', 'starmie', 'mr. mime', 'scyther', 'jynx', 'electabuzz', 'magmar', 'pinsir', 'tauros', 'magikarp', 'gyarados', 'lapras', 'ditto', 'eevee', 'vaporeon', 'jolteon', 'flareon', 'porygon', 'omanyte', 'omastar', 'kabuto', 'kabutops', 'aerodactyl', 'snorlax', 'articuno', 'zapdos', 'moltres', 'dratini', 'dragonair', 'dragonite', 'mewtwo', 'mew']

    const pokelist = pokemen.map(
        (p, i)=>({id:i+1,
            name:p}))

    function autoComplete(Arr, input) {
    
        return Arr.filter(e =>e.name.slice(0,input.length)===input.toLowerCase())
        }
    
    const handleChange = (e)=>{
        setSearchTerm(e.target.value);
        if (e.target.value.length>0){
            setMatch(autoComplete(pokelist,e.target.value));
        }
        else{
            setMatch([])
        }
    }
    return(
        <div>
            <div className="searchBar">
                <input 
                    className="searchBox"
                    placeholder='Search...'
                    onChange={event=>handleChange(event)}
                    value={searchTerm}
                />
            </div>
            <div className="pokegrid">
                {match.map(m=>(
                    <div key={m.id} className='container'>
                        <Link to={`/details/${m.id}`}>
                            <img src={`./images/${m.id}.png`} alt={m.name} className = "pokeimages"></img>
                            <p className="pokename">{m.name.toUpperCase()}</p>
                        </Link>
                    </div>))}
            </div>
        </div>
    )
}

export default Search;