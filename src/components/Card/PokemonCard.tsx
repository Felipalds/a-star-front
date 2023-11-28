import React, { Dispatch, SetStateAction } from "react"
import './styles.css'
import { IPokemon } from "../../interfaces/IPokemon"
import { postStart } from "../../services/round.service"

interface PokemonChoiceProps {
    pokemon: IPokemon
    setPokemon: Dispatch<SetStateAction<IPokemon | null>>
    setStep: Dispatch<SetStateAction<number>>
    step: number
    userPokemon: IPokemon | null
}

export default function PokemonCard ({pokemon, setPokemon, step, setStep, userPokemon}: PokemonChoiceProps) {

    async function handleClick() {
        setPokemon(pokemon)

        if(step === 1) {
            const res = await postStart({userPokemon: userPokemon?.name.toLowerCase(), aiPokemon: pokemon.name.toLowerCase() })
            console.log('aaaaaaaaaa', res)
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