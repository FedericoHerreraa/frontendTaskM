import axios from './axios.js'

export const getTasksRequest = async () => axios.get('api/tasks')

export const getTaskRequest = async (id) => axios.get(`api/tasks/${id}`)

export const createTaskRequest = async (task) => axios.post('api/tasks', task)

export const updateTaskRequest = async (id, task) => axios.put(`api/tasks/${id}`, task)

export const deleteTaskRequest = async (id) => axios.delete(`api/tasks/${id}`)

