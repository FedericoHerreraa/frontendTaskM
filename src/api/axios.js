import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://backendauth-vqbq.onrender.com/api'
})

export default instance