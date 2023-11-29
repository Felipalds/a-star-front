import React from 'react'
import './styles.css'
import { postHability } from '../../services/round.service'
import { GameContext } from '../../context/GameContext'
import { IResponseHability } from '../../interfaces/IPokemon'


const Pokemon = () => {

  const { userPokemon, aiPokemon, round, setRound, setUserPokemon, setAiPokemon, battleLogs, setBattleLogs } = React.useContext(GameContext)

  async function handlePower(move: number) {
    setRound(round+1)

    const powerData = {
      userPokemon,
      aiPokemon,
      userMove: move
    }

    console.log(powerData)

    const data: IResponseHability = await postHability(powerData)
    
    userPokemon.status = data.statusUser
    aiPokemon.status = data.statusAi
    setUserPokemon(userPokemon)
    setAiPokemon(aiPokemon)
    setBattleLogs([...data.logsUser, ...data.logsAi])
  }

  return (
    <>
    <img src={userPokemon.sprites[1]} className='imageUser'/>
    <div className="statusBlock statusBlockStyle">

        <div style={{color: "red"}}>
          <h3>Enemy {aiPokemon.name}</h3>
          <p>Vida: {aiPokemon.status?.health}</p>
        </div>

        <p> {battleLogs[0] + battleLogs[1]} </p>

        
        <div className="userStatus">
          <div>
              <h3>{userPokemon.name}</h3>
              <h4>Qual será sua jogada?</h4>
              <p>Vida: {userPokemon.status?.health}</p>
          </div>


          <div className="powers ">
              {userPokemon.moves.map((p, n) => (
                <h4 className='power' onClick={() => handlePower(n)}>
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