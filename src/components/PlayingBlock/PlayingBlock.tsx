import React from "react"
import { GameContext } from "../../context/GameContext"
import Pokemon from "../Pokemon/Pokemon"

export function PlayingBlock () {

    const {round, handleStopPlaying, iaPokemon } = React.useContext(GameContext)

    return (<div className="playingBlock">
        <div>
          <p>Round {round}</p>
          <button onClick={handleStopPlaying}>Reset</button>
        </div>
        
        <div className='enemyPokemonPlayingBlock'>
          <div className='withImageEnemy'></div>
          <img className='enemy' src={iaPokemon.sprites[0]} style={{width: "250px"}}/>
        </div>
        
        <Pokemon />
      </div> 
    )
}