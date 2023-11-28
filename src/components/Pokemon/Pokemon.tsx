import React from 'react'
import './styles.css'
import { postHability } from '../../services/round.service'
import { GameContext } from '../../context/GameContext'



const Pokemon = () => {

  const { userPokemon, round, setRound } = React.useContext(GameContext)

  async function handlePower(power: string) {
    setRound(round+1)
    await postHability(power)
  }

  return (
    <>
    <div className='imageUser'>
      <img src={userPokemon.sprites[1]} style={{width: "500px"}}/>
      <div className='userPokemonDiv'></div>
    </div>
    <div className="statusBlock">
        <div>
            <h3>{userPokemon.name}</h3>
            <p>Vida: {userPokemon.health}</p>
        </div>
        <div className="powers">
            {userPokemon.moves.map(p => (<h3 className='power' onClick={() => handlePower(p.name)}>{p.name}</h3>))}
        </div>
    </div>
    </>
  )
}

export default Pokemon