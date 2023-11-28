import React from "react"
import { GameContext } from "../../context/GameContext"
import Pokemon from "../Pokemon/Pokemon"
import './styles.css'

export function PlayingBlock () {

    const {round, handleStopPlaying, iaPokemon } = React.useContext(GameContext)

    return (<div className="playingBlock">
        <div>
          <p className='round'>Round {round}</p>
          <button onClick={handleStopPlaying}>Reset</button>
        </div>

        <img className='enemy' src={iaPokemon.sprites[0]}/>
        <Pokemon />
      </div> 
    )
}