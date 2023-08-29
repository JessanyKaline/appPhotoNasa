import axios from 'axios'

const apiKey = 'ML7zl6HRF5yTby6MD5AEO82mr9zZw1RkCYOtF5Mo'

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