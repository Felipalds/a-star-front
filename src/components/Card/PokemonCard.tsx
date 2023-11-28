import React, { Dispatch, SetStateAction } from "react"
import './styles.css'
import { IPokemon } from "../../interfaces/IPokemon"

interface PokemonChoiceProps {
    pokemon: IPokemon
    setPokemon: Dispatch<SetStateAction<IPokemon | null>>
    setStep: Dispatch<SetStateAction<number>>
    step: number
}

export default function PokemonCard ({pokemon, setPokemon, step, setStep}: PokemonChoiceProps) {
    function handleClick() {
        setPokemon(pokemon)
        setStep(step + 1)
    }
    return(
        <button className={"pokeCardChoice"} onClick={handleClick}>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites[0]} style={{width: "150px"}}/>
        </button>
    )

}