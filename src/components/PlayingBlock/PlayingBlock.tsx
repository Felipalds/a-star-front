import React from "react"
import { GameContext } from "../../context/GameContext"
import Pokemon from "../Pokemon/Pokemon"
import './styles.css'
import { StatusModal } from "../StatusModal/StatusModal"
import { EndModal } from "../EndModal/EndModal"

export function PlayingBlock () {

    const { userPokemon, round, handleStopPlaying, aiPokemon, setShowModal, showModal, pokemonModal, endBattle, setEndBattle, algorithm } = React.useContext(GameContext)

    return (<div className="playingBlock">
        <div>
          <p className='round'>Round {round}</p>
          <p>{algorithm}</p>
          <button onClick={handleStopPlaying}>Reset</button>
        </div>
        <img src={userPokemon.imageBack} className='imageUser'/>
        <StatusModal showModal={showModal} setShowModal={setShowModal} status={pokemonModal}/>
        <EndModal endBattle={endBattle} setEndBattle={setEndBattle}/>
        <img className='enemy' src={aiPokemon.imageFront}/>
        <Pokemon />
      </div> 
    )
}