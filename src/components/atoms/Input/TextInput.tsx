import { forwardRef, InputHTMLAttributes } from 'react'
import { Search } from 'lucide-react'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: 'search' | null
  error?: string
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ icon, error, className = '', ...props }, ref) => {
    const baseStyles =
      'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent'
    const errorStyles = error ? 'border-rose-500' : ''
    const paddingLeft = icon ? 'pl-10' : ''

    return (
      <div className='relative'>
        {icon === 'search' && (
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <Search className='h-5 w-5 text-gray-400' />
          </div>
        )}

        <input
          ref={ref}
          className={`${baseStyles} ${errorStyles} ${paddingLeft} ${className}`}
          {...props}
        />

        {/* {error && <p className='text-rose-500 text-sm mt-1'>{error}</p>} */}
      </div>
    )
  }
)

TextInput.displayName = 'TextInput'
