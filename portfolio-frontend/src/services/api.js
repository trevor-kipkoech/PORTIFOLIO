import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'https://portifolio-t2q9.onrender.com/api'

const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
})

export const getProjects = () => api.get('/projects')
export const getSkills = () => api.get('/skills')
export const getExperience = () => api.get('/experience')
export const getProfile = () => api.get('/profile')
export const sendMessage = (data) => api.post('/contact', data)

export default api