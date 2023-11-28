import axios from "axios"
import { IPokemon } from "../interfaces/IPokemon"

const BASE_URL = "http://localhost:8080"

interface IRequestPokemon {
    data: {
        pokemons: IPokemon[]
    }
}

interface IPostHabilityData {
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
    const body = {userPokemon, aiPokemon}
    console.log(body)
    const { data } = await axios.post(`${BASE_URL}/start`, {userPokemon, aiPokemon})
    console.log(data)
}

export async function postHability (data: IPostHabilityData) {
    axios.post(`${BASE_URL}/round`, {...data})
}

