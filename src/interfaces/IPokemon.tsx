export interface IPokemon {
    name: string,
    type: string,
    secondType: string
    sprites: string[],
    moves: Move[],
    status ?: IStatus
}

interface Move {
    name: string
    power: number
}

export interface IStartResponse {
    userPokemon: IStatus
    aiPokemon: IStatus
}


export interface IStatus {
    health: number
    speed: number
    attack: number
    specialAttack: number
    specialDefense: number
    name: string
    pokeType: string
    secondPokeType: string
    speedStage: number
    attackStage: number
    spAttackStage: number
    defenseStage: number
    spDefenseStage: number
    fainted: boolean
}

export interface IResponseHability {
  statusUser: IStatus
  statusAi: IStatus
  turn: number
  ended: boolean
  logsUser: string[]
  logsAi: string[]
  first: string
}
