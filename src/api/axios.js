import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://backendauth-vqbq.onrender.com'
})

export default instance