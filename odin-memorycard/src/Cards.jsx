import { useState,useEffect } from "react";

// eslint-disable-next-line react/prop-types
export const Cards = ({cards, pokemon, onClick}) => {
    const[poke, setPoke] = useState('');
    //mounts the cards on the screen.
    useEffect(()=> {
        async function getPokemons() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/gengar`, {mode: 'cors'});
            const pokemonData = await response.json();
            setPoke(pokemonData)
                    
        }
        getPokemons();
    },[pokemon])

    if (!poke) {
        return;
    }
    
    const imageSrc = poke.sprite.other['official-artwork'].front_default/* .front_default */;
    

    
    return(
        <section className="cards">             
           {/* eslint-disable-next-line react/prop-types */}
            {cards.map((card) => (
                <button type="button" key={card.id} id={card.id} onClick={onClick}>
                    <img src={imageSrc} alt="pokemon"/>
                    <span> {pokemon = card.name}</span> 
                </button>
            ))}
        </section>
    )
}