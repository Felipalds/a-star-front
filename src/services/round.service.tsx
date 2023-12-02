import axios from "axios"
import { IPostHabilityData, IPostStart, IRequestPokemon } from "../interfaces/IPokemon"

const BASE_URL = "http://localhost:8080"

export async function getLoad () {
    const {data}:IRequestPokemon = await axios.get(`${BASE_URL}/load`)
    return data.pokemons
}

export async function postStart ({userPokemon, aiPokemon}: IPostStart) {
    return  (await axios.post(`${BASE_URL}/start`, {userPokemon, aiPokemon})).data
}

export async function postHability (habilityData: IPostHabilityData) {
    const data = (await axios.post(`${BASE_URL}/round`, {...habilityData})).data
    console.log(data)
    return data

}

