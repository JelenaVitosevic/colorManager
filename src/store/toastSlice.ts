import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Toast } from '../types/interfaces'
import { RootState } from './store'

interface ToastState {
  toast: Toast | null
}

const initialState: ToastState = {
  toast: null,
}

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showToast: (state, action: PayloadAction<Toast>) => {
      state.toast = action.payload
    },
    hideToast: (state) => {
      state.toast = null
    },
  },
})

export const selectToast = (state: RootState) => state.toast.toast
export const { showToast, hideToast } = toastSlice.actions
export default toastSlice.reducer
