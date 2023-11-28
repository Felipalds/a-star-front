import React, { Dispatch, SetStateAction } from "react"
import { IPokemon } from "../interfaces/IPokemon"

interface IGameContext {
    round: number
    setRound: Dispatch<SetStateAction<number>>
    handleStopPlaying: () => void
    iaPokemon: IPokemon 
    setIaPokemon: Dispatch<SetStateAction<IPokemon  | null>>
    userPokemon: IPokemon
    setUserPokemon: Dispatch<SetStateAction<IPokemon  | null>>
}

export const GameContext = React.createContext<IGameContext>({} as IGameContext)
