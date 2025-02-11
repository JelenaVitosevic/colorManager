import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteColor, fetchColors } from '../../../store/colorSlice'
import { AppDispatch } from '../../../store/store'
import { DeleteButton } from '../../moleculs/DeleteButton/DeleteButton'

interface ColorCardProps {
  id: string
  name: string
  hex: string
}

export const ColorCard: React.FC<ColorCardProps> = ({ id, name, hex }) => {
  const dispatch = useDispatch<AppDispatch>()

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault()
    dispatch(deleteColor(id))
    dispatch(fetchColors())
  }

  return (
    <div
      key={id}
      className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300'
    >
      {/* Color Preview */}
      <div className='h-32 w-full' style={{ backgroundColor: hex }} />

      {/* Color Details */}
      <div className='p-4'>
        <div className='flex justify-between items-start'>
          <div>
            <h3 className='text-lg font-semibold text-gray-800'>{name}</h3>
            <p className='text-gray-600 mt-1'>{hex.toUpperCase()}</p>
          </div>
          <DeleteButton onClick={handleDelete} />
        </div>
      </div>
    </div>
  )
}
