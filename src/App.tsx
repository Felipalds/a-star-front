import React from 'react'
import './App.css'
import { IPokemon, IStatus } from './interfaces/IPokemon'
import PokemonCard from './components/Card/PokemonCard'
import { getLoad } from './services/round.service'
import { GameContext } from './context/GameContext'
import { PlayingBlock } from './components/PlayingBlock/PlayingBlock'

function App() {

  const [pokemons, setPokemons] = React.useState<IPokemon[] | null>(null)
  const [userPokemon, setUserPokemon] = React.useState<IPokemon | null>(null)
  const [aiPokemon, setAiPokemon] = React.useState<IPokemon | null>(null)
  const [userStatus, setUserStatus] = React.useState<IStatus | null>(null)
  const [aiStatus, setAiStatus] = React.useState<IStatus | null>(null)
  const [step, setStep] = React.useState("userChoice")
  const [round, setRound] = React.useState(0)
  const [battleLogs, setBattleLogs] = React.useState<string[]>(["Battle start"])
  const [showModal, setShowModal] = React.useState(false)
  const [pokemonModal, setPokemonModal] = React.useState<IStatus | null>({} as IStatus)
  const [endBattle, setEndBattle] = React.useState<boolean>(false)
  const [algorithm, setAlgorithm] = React.useState<string>("astar")
  const [shouldWait, setShouldWait] = React.useState(false)


  React.useEffect(() => {
    async function loadPokemons() {
      const pokemons = await getLoad()
      setPokemons(pokemons)
    }
    if(!pokemons) {
      loadPokemons()
    }
  })

  function handleStopPlaying () {
    setShouldWait(false)
    setStep("userChoice")
    setUserPokemon(null)
    setUserPokemon(null)
    setAiPokemon(null)
    setRound(0)
    setBattleLogs(["Battle start"])
    setShowModal(false)
    setEndBattle(false)
  }

  function handleAlgorithm (alg: string) {
    setAlgorithm(alg)
    setStep("game")
  }

 

  if(step == "userChoice") {
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
                setUserStatus={setUserStatus}
                setAiStatus={setAiStatus}
                step={step} 
                setStep={setStep}
                userPokemon={null}
              />
          ))}
        </div>
      </div>
    )
  }
  if(step == "aiChoice") {
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
                setUserStatus={setUserStatus}
                setAiStatus={setAiStatus}
                setStep={setStep}
                userPokemon={userPokemon}
              />
          ))}
        </div>
      </div>
    )
  }

  if(step === "algorithmChoice") {
    return(
      <>
        <h1>Choose the AI algorithm</h1>
        <button onClick={() => handleAlgorithm("A_STAR")}>A STAR</button>
        <button onClick={() => handleAlgorithm("BFS")}>BFS</button>
      </>
    )
  }

  if(step === "game") {

    if(aiPokemon && userPokemon) return (
      <GameContext.Provider 
      value={{
        round, 
        setRound, 
        userPokemon, 
        setUserPokemon, 
        aiPokemon, 
        setAiPokemon, 
        userStatus,
        setUserStatus,
        aiStatus,
        setAiStatus,
        handleStopPlaying, 
        battleLogs, 
        setBattleLogs,
        showModal,
        setShowModal,
        pokemonModal,
        setPokemonModal,
        endBattle,
        setEndBattle,
        algorithm,
        shouldWait,
        setShouldWait
        }}>
        <PlayingBlock />
      </GameContext.Provider>
      )
  }
}

export default App
