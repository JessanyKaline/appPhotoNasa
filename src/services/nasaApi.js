import axios from 'axios'

const apiKey = import.meta.env.VITE_NASA_API_KEY

const nasaApi = axios.create({
  baseURL:'https://api.nasa.gov'
})

export async function getAPOD(){
  try {
    const response = await nasaApi.get(`/planetary/apod?api_key=${apiKey}`)
    console.log('API Response:', response.data)
    return response.data
  } catch (error) {
    console.error('Erro ao obter dados da API:', error)
    throw error
  }
}