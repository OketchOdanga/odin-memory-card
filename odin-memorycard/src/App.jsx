import { useState } from 'react'
import './App.css'
import Header from './Header';
import { Cards } from './Cards';
import {v4 as uuidv4} from 'uuid';

const pokemonList = [
  {name:'gengar',id: uuidv4()},
  {name:'ditto',id: uuidv4()},
  {name:'pikachu',id: uuidv4()},
  {name:'pidgey',id: uuidv4()},
  {name:'roselia',id: uuidv4()},
  {name:'squirtle',id: uuidv4()},
  {name:'zapdos',id: uuidv4()}
]

export default function App() {
  const[currentScore,setCurrentScore] = useState(0);
  const[highScore, setHighScore] = useState(0);
  const[pokeCards,setPokeCards] = useState(pokemonList);
  const[clickedId, setClickedId] = useState([]);

  //shuffles and updates score. 
  const handleClick = (id) => {
    if (clickedId.includes(id)) {
      if (currentScore > highScore) {
        setHighScore(currentScore);
      }
      setCurrentScore(0);
      setClickedId([]);
      
    } else {
      // eslint-disable-next-line no-const-assign
      setCurrentScore(currentScore + 1);
      setClickedId([...clickedId, id]);
      
    }
    const shuffleCards = [...pokeCards].sort(()=> Math.random() - 0.5);
    setPokeCards(shuffleCards);     
  }

  return(
    <section>
      <h2>POKEMON</h2>
      <Header currentscore={currentScore} highscore={highScore} />
      <section>
        {pokeCards.map((card) => (
          <Cards key={card.id} pokemon={card.name}  cards={pokeCards} onClick={handleClick}/>
        ))}
      </section>
      
      
    </section>
  )

}

