import axios from "axios"

const BASE_URL = ""


export async function getLoad () {
    return axios.get(`${BASE_URL}/load`).then(res => res.data)
}

export async function postStart () {
    axios.post(`${BASE_URL}/start`)
}

export async function postHability (power: string) {
    axios.post(`${BASE_URL}/round`, {power})
}

