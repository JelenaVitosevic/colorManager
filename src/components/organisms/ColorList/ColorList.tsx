import React from 'react'
import { ColorCard } from '../ColorCard/ColorCard'
import { useSelector } from 'react-redux'
import { selectColors } from '../../../store/colorSlice'

export const ColorList: React.FC = () => {
  const colors = useSelector(selectColors)

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {colors.map((color) => (
        <ColorCard key={color.id} {...color} />
      ))}

      {colors.length === 0 && (
        <div className='col-span-full text-center py-12'>
          <p className='text-gray-500 text-lg'>No colors added yet. Add your first color!</p>
        </div>
      )}
    </div>
  )
}
