import axios from "axios"

axios.defaults.withCredentials = true

const URL = 'https://backendauth-vqbq.onrender.com/api'

export const registerRequest = async (user) => axios.post(`${URL}/register`, user)

export const loginRequest = async (user) => axios.post(`${URL}/login`, user)

export const verifyTokenRequest = async () => axios.get(`${URL}/verify`)

