// lib imports
import { useState, useEffect } from "react"

// Components
import { CardList } from "./Pokemon"

// import { mock } from './MockData'

// Main Component
export function MainDisplay() {
  const [ scoreDetails, setScoreDetails ] = useState({
    currentScore : 0,
    highestScore : 0
  })

  const [ clickedIDs, setClickedIDs ] = useState([])
  const [ pokes, setPokes ] = useState([])
  const [ error, setError ] = useState("")

  function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array
  }

  function clickAction(id) {
    let newScoreDetails = {...scoreDetails}
    let newClickedIDs = [...clickedIDs]

    if (newClickedIDs.includes(id)) {
      newScoreDetails.currentScore = 0
      newClickedIDs = []
    } else {
      newScoreDetails.currentScore += 1
      newScoreDetails.highestScore = Math.max(newScoreDetails.currentScore, newScoreDetails.highestScore);
      newClickedIDs.push(id)
    }

    const shuffledPokes = shuffle(pokes)
    setPokes(shuffledPokes)

    setClickedIDs(newClickedIDs)
    setScoreDetails(newScoreDetails)
  }

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(r => r.json())
    .then(d => setPokes(d.results))
    .catch(e => { console.error(e); setError("Error Fetching Pokemon, Please refresh the page")})
  },[])

  return (
    <div className="main">
      <Header scoreDetails={scoreDetails} updateScoreDetails={setScoreDetails}/>
      {
        error !== "" ?
        <header>
          <h2>{error}</h2>
        </header> :
        <CardList pokes={pokes} updatePokes={setPokes} clickAction={clickAction}/>
      }
    </div>
  )
}

// Header
const Header = ({ scoreDetails }) => {
  const { currentScore, highestScore } = scoreDetails

  return (
    <div className="header">
      <article>
        <h3>Pokemon Memory Game</h3>

        <p>Get points by clicking on an image, you should not click any more than once! If you click a pokemon more than once the score resets
        </p>
      </article>

      <article className="scores">
        <section>
          <h4> Current Score </h4>
          <span>{currentScore}</span>
        </section>
        <section>
          <h4> Highest Score </h4>
          <span>{highestScore}</span>
        </section>
      </article>
    </div>
  )
}


{/* <div className="main">
<Header/>
<CardList />
</div> */}