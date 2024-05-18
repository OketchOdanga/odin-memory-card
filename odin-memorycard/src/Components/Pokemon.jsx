// lib imports
import { useState, useEffect } from "react"
import { v4 as uuid } from "uuid"

// import { defaultPoke } from './MockData'

export const CardList = ({ pokes, clickAction }) => {
  return (
    <div className="space-y-2">
      <h4>Pokemon </h4>
      <section className="cardlist">
        {
          pokes.map((poke) => <PokeCard key={uuid()} poke={poke} clickAction={clickAction}/>)
        }
      </section>
    </div>
  )
}

const PokeCard = ({ poke, clickAction }) => {
  const { name, url } = poke
  const [ pokeInfo, setPokeInfo ] = useState({})
  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState("")

  useEffect(() => {
    fetch(url)
    .then(r => r.json())
    .then(d => {
      setPokeInfo(d)
      setLoading(false)
    })
    .catch(e => { console.error(e); setError("")})
  },[url])

  // useEffect(() => {
  //   const dataTimeout = setTimeout(() => {
  //     setLoading(false)
  //     setPokeInfo(defaultPoke)
  //   },500)

  //   return () => clearTimeout(dataTimeout)
  // })

  return (
    <div>
      {
        loading ? (
          <section className="loader">
            <h5> Loading ... </h5>
          </section>
        ) : (
        <div>
          {
            error !== "" ? (
            <header>
              <h2>{error}</h2>
             </header>
            ) : (
            <section className="card" onClick={() => clickAction(pokeInfo.id)}>
              <img src={pokeInfo.sprites.front_default} className=""  alt="pokemon image"/>
              <h5>{name}</h5>
            </section>
          )}
        </div>
        )}
    </div>
  )
}
