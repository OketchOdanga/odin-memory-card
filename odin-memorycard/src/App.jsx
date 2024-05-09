// lib imports
import { useState } from 'react'
import {v4 as uuid} from 'uuid';
// local imports
import { Cards } from './Cards';
import Header from './Header';
// assets
import './App.css'

const pokemonList = [
  {name:'gengar',id: uuid()},
  {name:'ditto',id: uuid()},
  {name:'pikachu',id: uuid()},
  {name:'pidgey',id: uuid()},
  {name:'roseia',id: uuid()},
  {name:'squirtle',id: uuid()},
  {name:'zapdos',id: uuid()}
]

export default function App() {
  const[currentScore,setCurrentScore] = useState(0);
  const[highscore, setHighScore] = useState(0);
  const[pokeCards,setPokeCards] = useState(pokemonList);
  const[clickedId, setClickedId] = useState([]);

  //shuffles and updates score.
  const handleClick = (id) => {
    if(clickedId.includes(id)) {
      if (currentScore > highscore) {
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
      <Header currentscore={currentScore} highScore={highscore} />
      <Cards cards={pokeCards} onClick={handleClick} />
    </section>
  )

}

