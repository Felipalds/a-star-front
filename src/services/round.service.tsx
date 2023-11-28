import axios from "axios"
import { IPokemon } from "../interfaces/IPokemon"

const BASE_URL = "http://localhost:8080"

interface IRequestPokemon {
    data: {
        pokemons: IPokemon[]
    }
}

export async function getLoad () {
    const {data}:IRequestPokemon = await axios.get(`${BASE_URL}/load`)
    return data.pokemons
}

// export async function postStart () {
//     axios.post(`${BASE_URL}/start`)
// }

export async function postHability (power: string) {
    axios.post(`${BASE_URL}/round`, {power})
}

