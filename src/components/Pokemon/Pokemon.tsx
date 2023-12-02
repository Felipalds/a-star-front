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
    setEndBattle
  } = React.useContext(GameContext)

  async function handleMove(move: number) {
    setRound(round+1)

    const powerData = {
      userPokemon,
      aiPokemon,
      userMove: move,
      userStatus,
      aiStatus
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
    <>
    <img src={userPokemon.imageBack} className='imageUser'/>
    <div className="statusBlock statusBlockStyle">

        

        {battleLogs.map(bl => {
          return <><p>{bl}</p><br /></>
        })}

        
        <div className="userStatus">
          <div>
              <h3>{userPokemon.name}</h3>
              <p>Vida: {userStatus?.health}</p>
              <button onClick={() => exibStatus("user")}>Ver Status</button>
          </div>
         <Moves userPokemon={userPokemon} handleMove={handleMove}/>
        </div>

        <div style={{color: "red"}}>
          <h3>Enemy {aiPokemon.name}</h3>
          <p>Vida: {aiStatus?.health}</p>
          <button onClick={() => exibStatus("ai")}>Ver Status</button>
        </div>
    </div>
    </>
  )
}

export default Pokemon