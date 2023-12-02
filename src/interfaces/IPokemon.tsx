
export interface IRequestPokemon {
    data: {
        pokemons: IPokemon[]
    }
}

export interface IPostHabilityData {
    userPokemon: IPokemon | undefined
    aiPokemon: IPokemon | undefined
    userStatus: IStatus | null
    aiStatus: IStatus | null
    userMove: number
}

export interface IPostStart {
    userPokemon: IPokemon | null,
    aiPokemon: IPokemon | null
}

export interface IPokemon {
    name: string,
    type: string,
    secondType?: string
    imageFront: string,
    imageBack: string,
    health: number,
    attack: number,
    specialAttack: number,
    defense: number,
    specialDefense: number,
    speed: number
    moves: Move[],
}

export interface Move {
    name: string
    power: number
    description: string
    priority: number
    damageType: string
    pokeType: string
}

export interface IStartResponse {
    userStatus: IStatus
    aiStatus: IStatus

}


export interface IStatus {
    health?: number
    speed?: number
    attack?: number
    specialAttack?: number
    specialDefense?: number
    name?: string
    pokeType?: string
    secondPokeType?: string
    speedStage?: number
    attackStage?: number
    defense?: number
    spAttackStage?: number
    defenseStage?: number
    spDefenseStage?: number
    fainted?: boolean
}

export interface IResponseHability {
  userStatus: IStatus
  aiStatus: IStatus
  turn: number
  ended: boolean
  logs: string
  first: string
}

