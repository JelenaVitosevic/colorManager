import { SearchCriteria } from './../types/types'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Color, ColorFormData } from '../types/interfaces'
import { colorsApi } from '../services/api'
import { showToast } from './toastSlice'
import { RootState } from './store'

interface ColorState {
  colors: Color[]
  isLoading: boolean
  error: string | null
}

const initialState: ColorState = {
  colors: [],
  isLoading: false,
  error: null,
}

export const fetchColors = createAsyncThunk(
  'colors/fetchColors',
  async (_, { rejectWithValue }) => {
    try {
      const response = await colorsApi.getAll()
      console.log('get all response:', response)
      return response
    } catch (err) {
      console.error('Error fetching colors:', err)
      return rejectWithValue('Failed to fetch colors')
    }
  }
)

export const searchColors = createAsyncThunk(
  'colors/searchColors',
  async (
    { criteria, value }: { criteria: SearchCriteria; value: string },
    { dispatch, rejectWithValue }
  ) => {
    try {
      if (!value.trim()) {
        const response = await colorsApi.getAll()
        return response
      }
      const response = await colorsApi.getFilteredColors(criteria, value)
      return response
    } catch (err) {
      console.log('Error filtering colors:', err)
      dispatch(showToast({ message: 'Failed to search colors', type: 'error' }))
      return rejectWithValue('Failed to search colors')
    }
  }
)

export const addColor = createAsyncThunk(
  'colors/addColor',
  async (newColor: ColorFormData, { dispatch, rejectWithValue }) => {
    try {
      const response = await colorsApi.addColor(newColor)
      return response
    } catch (err) {
      console.log('Error adding color:', err)
      dispatch(showToast({ message: 'Failed to add color', type: 'error' }))
      return rejectWithValue('Failed to add color')
    }
  }
)

export const deleteColor = createAsyncThunk(
  'colors/deleteColor',
  async (id: string, { dispatch, rejectWithValue }) => {
    try {
      const response = await colorsApi.deleteColor(id)
      return response
    } catch (err) {
      console.log('Error deleting color:', err)
      dispatch(showToast({ message: 'Failed to delete color', type: 'error' }))
      return rejectWithValue('Failed to delete color')
    }
  }
)

const colorSlice = createSlice({
  name: 'colors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle fetchColors
      .addCase(fetchColors.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchColors.fulfilled, (state, action) => {
        state.isLoading = false
        state.colors = action.payload
      })
      .addCase(fetchColors.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      // Handle searchColors
      .addCase(searchColors.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(searchColors.fulfilled, (state, action) => {
        state.isLoading = false
        state.colors = action.payload
      })
      .addCase(searchColors.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      // Handle addColor
      .addCase(addColor.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(addColor.fulfilled, (state, action) => {
        state.isLoading = false
        state.colors.push(action.payload)
      })
      .addCase(addColor.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      // Handle deleteColor
      .addCase(deleteColor.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(deleteColor.fulfilled, (state, action) => {
        state.isLoading = false
        state.colors = state.colors.filter((color) => color.id !== action.payload)
      })
      .addCase(deleteColor.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  },
})

export const selectColors = (state: RootState) => state.colors.colors
export const selectIsLoading = (state: RootState) => state.colors.isLoading
export const selectError = (state: RootState) => state.colors.error

export default colorSlice.reducer
