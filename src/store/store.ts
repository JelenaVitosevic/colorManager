import { configureStore } from '@reduxjs/toolkit'
import colorReducer from './colorSlice'
import toastReducer from './toastSlice'

export const store = configureStore({
  reducer: {
    colors: colorReducer,
    toast: toastReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
