import React, { Dispatch, SetStateAction } from "react"
import { IPokemon, IStatus } from "../interfaces/IPokemon"

interface IGameContext {
    round: number
    setRound: Dispatch<SetStateAction<number>>
    handleStopPlaying: () => void
    aiPokemon: IPokemon 
    setAiPokemon: Dispatch<SetStateAction<IPokemon  | null>>
    userPokemon: IPokemon
    setUserPokemon: Dispatch<SetStateAction<IPokemon  | null>>
    userStatus: IStatus | null
    setUserStatus: Dispatch<SetStateAction<IStatus | null>>
    aiStatus: IStatus | null
    setAiStatus: Dispatch<SetStateAction<IStatus | null>>
    battleLogs: string[]
    setBattleLogs: Dispatch<SetStateAction<string[]>>
    showModal: boolean
    setShowModal: Dispatch<SetStateAction<boolean>>
    pokemonModal: IStatus | null
    setPokemonModal: Dispatch<SetStateAction<IStatus | null>>
    endBattle: boolean
    setEndBattle: Dispatch<SetStateAction<boolean>>
}

export const GameContext = React.createContext<IGameContext>({} as IGameContext)
