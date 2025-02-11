import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../../store/store'
import { hideToast, selectToast } from '../../../store/toastSlice'

const TOAST_DURATION = 3000

export const Toast: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const toast = useSelector(selectToast)

  const handleClose = () => {
    dispatch(hideToast())
  }

  useEffect(() => {
    if (!toast) return

    const timer = setTimeout(handleClose, TOAST_DURATION)
    return () => clearTimeout(timer)
  }, [toast])

  if (!toast) return null

  return (
    <div className='fixed top-2 right-2 bg-red-500 text-white px-6 py-3 rounded-md shadow-lg z-50'>
      {toast.message}
    </div>
  )
}
