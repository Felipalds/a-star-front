import React from 'react'
import './styles.css'
import { postHability } from '../../services/round.service'
import { GameContext } from '../../context/GameContext'
import { IResponseHability } from '../../interfaces/IPokemon'
import { Moves } from '../Moves'


const Pokemon = () => {

  const { 
    userPokemon, 
    aiPokemon, 
    userStatus, 
    setUserStatus, 
    aiStatus, 
    setAiStatus, 
    round, 
    setRound, 
    setUserPokemon, 
    setAiPokemon, 
    battleLogs, 
    setBattleLogs,
    setShowModal,
    setPokemonModal,
    setEndBattle,
    algorithm
  } = React.useContext(GameContext)

  async function handleMove(move: number) {
    setRound(round+1)

    const powerData = {
      userPokemon,
      aiPokemon,
      userMove: move,
      userStatus,
      aiStatus,
      algorithm
    }

    const data: IResponseHability = await postHability(powerData)
    
    setUserStatus(data.userStatus)
    setAiStatus(data.aiStatus)
    setUserPokemon(userPokemon)
    setAiPokemon(aiPokemon)
    setBattleLogs([...data.logs])
    if(data.ended === true) setEndBattle(true)
  }

  const exibStatus = (whichShow: string) => {
    whichShow === "user" ? setPokemonModal(userStatus) : setPokemonModal(aiStatus)
    setShowModal(true)
  }

  return (
    <div className="statusBlock">
        <div className="userStatus">
          <p>{userPokemon.name}</p>
          <p>Vida: {userStatus?.health?.toFixed(1)}</p>
          <button onClick={() => exibStatus("user")}>Ver Status</button>
        </div>

        <Moves userPokemon={userPokemon} handleMove={handleMove}/>

        <div className='logs'>
          {battleLogs.map(bl => {
            return <><p>{bl}</p></>
          })}
        </div>

        <div style={{color: "red"}}>
          <p>{aiPokemon.name}</p>
          <p>Vida: {aiStatus?.health?.toFixed(1)}</p>
          <button onClick={() => exibStatus("ai")}>Ver Status</button>
        </div>
      </div>
  )
}

export default Pokemon