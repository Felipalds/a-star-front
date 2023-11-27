import React, { Dispatch, SetStateAction } from 'react'
import { IPokemon } from '../../interfaces/IPokemon'
import './styles.css'
import { postHability } from '../../services/round.service'

interface IPokemonProps {
    userPokemon: IPokemon
    round: number
    setRound: Dispatch<SetStateAction<number>>
}

const Pokemon = ({userPokemon, round, setRound}:IPokemonProps) => {

  async function handlePower(power: string) {
    setRound(round+1)
    await postHability(power)
  }

  return (
    <>
    <img src={userPokemon.images.back} style={{width: "500px"}}/>
    <div className="statusBlock">
        <div>
            <h3>{userPokemon.name}</h3>
            <p>Vida: {userPokemon.life}</p>
        </div>
        <div className="powers">
            {userPokemon?.powers.map(p => (<h3 className='power' onClick={() => handlePower(p.name)}>{p.name}</h3>))}
        </div>
    </div>
    </>
  )
}

export default Pokemon