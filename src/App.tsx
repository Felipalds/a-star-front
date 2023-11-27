import React from 'react'
import './App.css'
import { IPokemon } from './interfaces/IPokemon'
import { possiblePokemons } from './possiblePokemons'
import PokemonCard from './components/Card/PokemonCard'
import Pokemon from './components/Pokemon/Pokemon'
import { getLoad } from './services/round.service'

function App() {

  const [pokemons, setPokemons] = React.useState<IPokemon[] | null>(null)
  const [userPokemon, setUserPokemon] = React.useState<IPokemon | null>(null)
  const [iaPokemon, setIaPokemon] = React.useState<IPokemon | null>(null)
  const [step, setStep] = React.useState(0)
  const [round, setRound] = React.useState(0)

  React.useEffect(() => {
    async function loadPokemons() {
      setPokemons(await getLoad())
    }
    if(!pokemons) {
      loadPokemons()
    }
  })

  function handleStopPlaying () {
    setStep(0)
    setUserPokemon(null)
    setUserPokemon(null)
    setIaPokemon(null)
    setRound(0)
    possiblePokemons.map(poke => {
      poke.isSelected = false
    })
  }

 

  if(step == 0) {
    return (
      <div className="game">
        <div>
          <h1>Choose your Pokémon</h1>
          <h2>By: Luiz and Zoz</h2>
        </div>
        <div className='pokemonChoiceBlock'>
          {possiblePokemons.map(poke => (
              <PokemonCard 
                pokemon={poke} 
                setPokemon={setUserPokemon} 
                step={step} 
                setStep={setStep}
              />
          ))}
        </div>
      </div>
    )
  }
  if(step == 1) {
    return (
      <div className="game">
        <div>
          <h1>Choose AI Pokémon</h1>
          <h2>By: Luiz and Zoz</h2>
        </div>
        <div className='pokemonChoiceBlock'>
          {possiblePokemons.map(poke => (
              <PokemonCard
                pokemon={poke} 
                setPokemon={setIaPokemon} 
                step={step} 
                setStep={setStep}/>
          ))}
        </div>
      </div>
    )
  }
  if(step == 2) {
    if(iaPokemon && userPokemon) return (
      <div className="playingBlock">
        <div>
          <p>Round {round}</p>
          <button onClick={handleStopPlaying}>Reset</button>
        </div>
        
        <div className='enemyPokemonPlayingBlock'>
          <img className='enemy' src={iaPokemon?.images.front} style={{width: "250px"}}/>
        </div>
        
        <Pokemon 
          userPokemon={userPokemon}
          round={round}
          setRound={setRound}
        />
      </div>
    )
  }
}

export default App
