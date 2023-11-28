import React from 'react'
import './styles.css'
import { postHability } from '../../services/round.service'
import { GameContext } from '../../context/GameContext'



const Pokemon = () => {

  const { userPokemon, iaPokemon, round, setRound } = React.useContext(GameContext)

  async function handlePower(power: string) {
    setRound(round+1)
    await postHability(power)
  }

  return (
    <>
    <img src={userPokemon.sprites[1]} className='imageUser'/>
    <div className="statusBlock statusBlockStyle">

        <div style={{color: "red"}}>
          <h3>Enemy {iaPokemon.name}</h3>
          <p>Vida: {iaPokemon.health}</p>
        </div>

        <p> Batalha iniciou! </p>

        
        <div className="userStatus">
          <div>
              <h3>{userPokemon.name}</h3>
              <h4>Qual será sua jogada?</h4>
              <p>Vida: {userPokemon.health}</p>
          </div>


          <div className="powers ">
              {userPokemon.moves.map(p => (
                <h4 className='power' onClick={() => handlePower(p.name)}>
                  {p.name} {p.power}
                </h4>
              ))}
          </div>
        </div>
    </div>
    </>
  )
}

export default Pokemon