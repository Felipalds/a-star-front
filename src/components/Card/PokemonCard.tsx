import React, { Dispatch, SetStateAction } from "react"
import './styles.css'
import { IPokemon, IStartResponse, IStatus } from "../../interfaces/IPokemon"
import { postStart } from "../../services/round.service"

interface PokemonChoiceProps {
    pokemon: IPokemon
    setUserStatus: Dispatch<SetStateAction<IStatus | null>>
    setAiStatus: Dispatch<SetStateAction<IStatus | null>>
    setUserPokemon: Dispatch<SetStateAction<IPokemon | null>>
    setAiPokemon: Dispatch<SetStateAction<IPokemon | null>>
    setStep: Dispatch<SetStateAction<number>>
    step: number
    userPokemon: IPokemon | null
}

export default function PokemonCard ({pokemon, setUserStatus, setAiStatus, setAiPokemon, setUserPokemon, step, setStep, userPokemon}: PokemonChoiceProps) {

    async function handleClick() {
        if(step === 0) {
            setUserPokemon(pokemon)
        }
        if(step === 1) {
            const res: IStartResponse = await postStart({userPokemon, aiPokemon: pokemon })
            setUserStatus(res.userStatus)
            setAiStatus(res.aiStatus)
            setAiPokemon(pokemon)
        }

        setStep(step + 1)
        
    }
    return(
        <button className={"pokeCardChoice"} onClick={handleClick}>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.imageFront} style={{width: "150px"}}/>
        </button>
    )

}