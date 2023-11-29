import axios from "axios"
import { IPokemon } from "../interfaces/IPokemon"

const BASE_URL = "http://10.81.74.167:8080"

interface IRequestPokemon {
    data: {
        pokemons: IPokemon[]
    }
}

interface IPostHabilityData {
    userPokemon: IPokemon | undefined
    aiPokemon: IPokemon | undefined
    userMove: number
}

interface IPostStart {
    userPokemon: string | undefined,
    aiPokemon: string
}

export async function getLoad () {
    const {data}:IRequestPokemon = await axios.get(`${BASE_URL}/load`)
    return data.pokemons
}

export async function postStart ({userPokemon, aiPokemon}: IPostStart) {
    return  (await axios.post(`${BASE_URL}/start`, {userPokemon, aiPokemon})).data
}

export async function postHability (habilityData: IPostHabilityData) {
    return (await axios.post(`${BASE_URL}/round`, {...habilityData})).data
}

