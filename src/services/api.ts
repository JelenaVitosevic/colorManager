import axios from 'axios'
import { Color, ColorFormData } from '../types/interfaces'
import { SearchCriteria } from '../types/types'

const BASE_URL = 'http://localhost:3001'

const http = axios.create({ baseURL: BASE_URL })

export const colorsApi = {
  getAll: async () => {
    try {
      const response = await http.get<Color[]>('/colors')
      console.log('Response from getAll:', response.data)
      return response.data
    } catch (error) {
      console.error('Error in getAll:', error)
      throw error
    }
  },

  getFilteredColors: async (criteria: SearchCriteria, value: string) => {
    try {
      const queryParam = criteria === 'name' ? 'name_like' : 'hex_like'
      const url = `/colors?${queryParam}=${encodeURIComponent(value)}`
      const response = await http.get<Color[]>(url)
      console.log('Response from getFilteredColors:', response.data)
      return response.data
    } catch (error) {
      console.error('Error in getFilteredColors:', error)
      throw error
    }
  },

  addColor: async (newColor: ColorFormData) => {
    try {
      const response = await http.post<Color>('/colors', newColor)
      console.log('Response from addColor:', response.data)
      return response.data
    } catch (error) {
      console.error('Error in addColor:', error)
      throw error
    }
  },

  deleteColor: async (id: string) => {
    try {
      const response = await http.delete<string>(`/colors/${id}`)
      console.log('Response from deleteColor:', response.data)
      return response.data
    } catch (error) {
      console.error('Error in deleteColor:', error)
      throw error
    }
  },
}
