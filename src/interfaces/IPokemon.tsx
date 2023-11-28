export interface IPokemon {
    name: string,
    health: number,
    type: string,
    sprites: string[],
    moves: Move[],
    isSelected: boolean
}

interface Move {
    name: string
    power: number
}
