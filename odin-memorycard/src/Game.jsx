//game functionalitiy.
//fetch cards from an api (giphy or pokemon).
// if giphy. {cat,rain,dog,ducks,donkey,dance,laugh,flowers}
// if pokemon ??

import { useEffect, useState } from "react"

export function Game() {
    const[data, setData] = useState(null);
    //Effect to fetch data when the component mounts.
    useEffect(() => {
        fetchData()
    },[]);

    //fetching data
    const fetchData = async () => {
        try {
            //GET request using Fetch API
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/gengar/`, {mode: 'cors'});
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const result = await response.json();

            //update state with the fetched data
            setData(result);
            
        } catch (error) {
            console.error('Error fetching data:', error.message)
            
        }
    };

    //get name and image.
    
    const name = data.species.name;
    const imageUrl = data.sprites.other['official-artwork'].front_default;   
    return(
        <button className="card">
            <img src={imageUrl} alt="poke"/>
            <h4>{name}</h4>
        </button>            
    )
}