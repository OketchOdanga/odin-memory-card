import { useState,useEffect } from "react";

// eslint-disable-next-line react/prop-types
export  const Cards = ({pokemon, onClick}) => {
    const[data, setData] = useState('');
    //Effect to fetch data when the component mounts.
    useEffect(() => {
         //fetching data
        const fetchData = async () => {
            try {
                //GET request using Fetch API
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`, {mode: 'cors'});
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
        
        fetchData()
    },[pokemon]);

    //get name and image.    
    const names = data.species.name;
    const imageUrl = data.sprites.other['official-artwork'].front_default;


    return(
        <button className="card" onClick={onClick}>
            <img src={imageUrl} alt="poke"/>
            <h4>{names}</h4>
        </button>
 
    )
}