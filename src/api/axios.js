import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://fullauthproyect.onrender.com'
})

export default instance