import React from 'react'
import { Palette } from 'lucide-react'

export const Navbar: React.FC = () => {
  return (
    <nav className='bg-white shadow-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center'>
          <div className='flex-shrink-0 flex items-center space-x-4'>
            <Palette size={32} className='text-rose-300' />
            <span className='text-2xl font-bold md:text-3xl bg-gradient-to-r from-rose-300 to-purple-400 bg-clip-text text-transparent'>
              COLOR MANAGER
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}
