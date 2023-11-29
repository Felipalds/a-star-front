import React, { Dispatch, SetStateAction } from "react"
import './styles.css'
import { IPokemon, IStartResponse } from "../../interfaces/IPokemon"
import { postStart } from "../../services/round.service"

interface PokemonChoiceProps {
    pokemon: IPokemon
    setUserPokemon: Dispatch<SetStateAction<IPokemon | null>>
    setAiPokemon: Dispatch<SetStateAction<IPokemon | null>>
    setStep: Dispatch<SetStateAction<number>>
    step: number
    userPokemon: IPokemon | null
}

export default function PokemonCard ({pokemon, setAiPokemon, setUserPokemon, step, setStep, userPokemon}: PokemonChoiceProps) {

    async function handleClick() {
        if(step === 0) {
            setUserPokemon(pokemon)
        }
        if(step === 1) {
            const res: IStartResponse = await postStart({userPokemon: userPokemon?.name.toLowerCase(), aiPokemon: pokemon.name.toLowerCase() })
            pokemon.status = res.aiPokemon
            userPokemon!.status = res.userPokemon
            setAiPokemon(pokemon)
            setUserPokemon(userPokemon)
        }

        setStep(step + 1)
        
    }
    return(
        <button className={"pokeCardChoice"} onClick={handleClick}>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites[0]} style={{width: "150px"}}/>
        </button>
    )

}