import React, { useState } from 'react';
import {Link} from '@reach/router';

const Search =()=>{
    const [searchTerm, setSearchTerm] = useState('')
    const [match, setMatch] = useState([])

    const pokelistUpper=["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];
    
    const pokelist = pokelistUpper.map(
        (p, i)=>({id:i+1,name:p.toLowerCase()}))

    function autoComplete(Arr, Input) {
         return Arr.filter(e =>e.name.indexOf(Input.toLowerCase()) !== -1); }
    
    const handleChange = (e)=>{
        setSearchTerm(e.target.value);
        if (e.target.value.length>0){
            setMatch(autoComplete(pokelist,e.target.value));
        }
        else{
            setMatch([])
        }
    }
    console.log(match)
    return(
        <div>
            <div className="search-bar">
                <input 
                    className="search-box"
                    placeholder='Search...'
                    onChange={event=>handleChange(event)}
                    value={searchTerm}
                />
            </div>
            <div className="pokegrid">
                {match.map(m=>(
                    <div key={m.id} className='container'>
                        <Link to={`/details/${m.id}`}>
                            <img src={`https://pokeres.bastionbot.org/images/pokemon/${m.id}.png`} alt={m.name} className = "pokeimages"></img>
                        </Link>
                    </div>))}
            </div>
        </div>
    )
}

export default Search;