import React from 'react'
import './App.css'
import { IPokemon } from './interfaces/IPokemon'
import PokemonCard from './components/Card/PokemonCard'
import { getLoad } from './services/round.service'
import { GameContext } from './context/GameContext'
import { PlayingBlock } from './components/PlayingBlock/PlayingBlock'

function App() {

  const [pokemons, setPokemons] = React.useState<IPokemon[] | null>(null)
  const [userPokemon, setUserPokemon] = React.useState<IPokemon | null>(null)
  const [aiPokemon, setAiPokemon] = React.useState<IPokemon | null>(null)
  const [step, setStep] = React.useState(0)
  const [round, setRound] = React.useState(0)
  const [battleLogs, setBattleLogs] = React.useState<string[]>(["Battle start", "Now"])

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
    setAiPokemon(null)
    setRound(0)
  }

 

  if(step == 0) {
    if(pokemons) return (
      <div className="game">
        <div>
          <h1>Choose your Pokémon</h1>
          <h2>By: Luiz and Zoz</h2>
        </div>
        <div className='cards'>
          {pokemons.map(poke => (
              <PokemonCard 
                pokemon={poke} 
                setUserPokemon={setUserPokemon} 
                setAiPokemon={setAiPokemon}
                step={step} 
                setStep={setStep}
                userPokemon={null}
              />
          ))}
        </div>
      </div>
    )
  }
  if(step == 1) {
    if(pokemons) return (
      <div className="game">
        <div>
          <h1>Choose AI Pokémon</h1>
          <h2>By: Luiz and Zoz</h2>
        </div>
        <div className='cards'>
          {pokemons.map(poke => (
              <PokemonCard
                pokemon={poke} 
                setUserPokemon={setUserPokemon} 
                setAiPokemon={setAiPokemon}
                step={step} 
                setStep={setStep}
                userPokemon={userPokemon}
              />
          ))}
        </div>
      </div>
    )
  }

  if(step == 2) {

    if(aiPokemon && userPokemon) return (
      <GameContext.Provider 
      value={{round, setRound, userPokemon, setUserPokemon, aiPokemon, setAiPokemon, handleStopPlaying, battleLogs, setBattleLogs}}>
        <PlayingBlock />
      </GameContext.Provider>
      )
  }
}

export default App
