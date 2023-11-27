export interface IPokemon {
    name: string,
    type: string,
    images: Images,
    powers: Power[],
    isSelected: boolean
    life: number
}

interface Images {
    front: string
    back: string
}

interface Power {
    name: string
}
