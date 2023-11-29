import React, { Dispatch, SetStateAction } from "react"
import { IPokemon } from "../interfaces/IPokemon"

interface IGameContext {
    round: number
    setRound: Dispatch<SetStateAction<number>>
    handleStopPlaying: () => void
    aiPokemon: IPokemon 
    setAiPokemon: Dispatch<SetStateAction<IPokemon  | null>>
    userPokemon: IPokemon
    setUserPokemon: Dispatch<SetStateAction<IPokemon  | null>>
    battleLogs: string[]
    setBattleLogs: Dispatch<SetStateAction<string[]>>
}

export const GameContext = React.createContext<IGameContext>({} as IGameContext)
