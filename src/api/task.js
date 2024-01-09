import axios from 'axios'


const URL = 'https://backendauth-vqbq.onrender.com/api'
axios.defaults.withCredentials = true

export const getTasksRequest = async () => axios.get(`${URL}/tasks`)

export const getTaskRequest = async (id) => axios.get(`${URL}/tasks/${id}`)

export const createTaskRequest = async (task) => axios.post(`${URL}/tasks`, task)

export const updateTaskRequest = async (id, task) => axios.put(`${URL}/tasks/${id}`, task)

export const deleteTaskRequest = async (id) => axios.delete(`${URL}/tasks/${id}`)

