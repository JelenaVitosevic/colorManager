import React, { Ref, useState } from 'react'
import styles from './ColorForm.module.css'
import { useDispatch } from 'react-redux'
import { addColor } from '../../../store/colorSlice'
import { AppDispatch } from '../../../store/store'
import { ColorFormData } from '../../../types/interfaces'
import { PrimaryButton } from '../../atoms/Button/PrimaryButton'
import { FormError } from '../../atoms/FormError/FormError'
import { TextInput } from '../../atoms/Input/TextInput'

const INITIAL_FORM_DATA: ColorFormData = {
  name: '',
  hex: '#FFFFFF',
}

export const ColorForm: React.FC = () => {
  const [formData, setFormData] = useState<ColorFormData>(INITIAL_FORM_DATA)
  const [error, setError] = useState<string>('')

  const nameInputRef = React.useRef<HTMLInputElement>(null)
  const hexInputRef = React.useRef<HTMLInputElement>(null)
  const dispatch = useDispatch<AppDispatch>()

  const validateForm = (): { isValid: boolean; error: string; field: 'name' | 'hex' | null } => {
    if (!formData.name.trim()) {
      return { isValid: false, error: 'Color name is required', field: 'name' }
    }

    const hexRegex = /^#[0-9A-Fa-f]{6}$/
    if (!hexRegex.test(formData.hex)) {
      return { isValid: false, error: 'Invalid hex color', field: 'hex' }
    }

    return { isValid: true, error: '', field: null }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const { isValid, error, field } = validateForm()
    if (!isValid) {
      setError(error)
      if (field === 'name') {
        nameInputRef.current?.focus()
      } else if (field === 'hex') {
        hexInputRef.current?.focus()
      }
      return
    }

    dispatch(addColor(formData))
    setFormData(INITIAL_FORM_DATA)
    setError('')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setError('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-white p-4 rounded-lg shadow-md border border-gray-200 w-full mx-auto'
    >
      <div className='flex flex-col md:flex-row md:items-center gap-4'>
        <div className='w-full md:flex-1'>
          <TextInput
            ref={nameInputRef}
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Enter color name'
            error={error === 'Color name is required' ? error : ''}
          />
        </div>

        <ColorInput
          value={formData.hex}
          onChange={handleChange}
          error={error === 'Invalid hex color' ? error : ''}
          ref={hexInputRef}
        />

        <PrimaryButton type='submit' className='w-full md:w-auto'>
          Add Color
        </PrimaryButton>
      </div>

      <FormError message={error} />
    </form>
  )
}

interface ColorInputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  ref?: Ref<HTMLInputElement>
  error?: string
}

const ColorInput: React.FC<ColorInputProps> = React.forwardRef<HTMLInputElement, ColorInputProps>(
  ({ value, onChange, error }, ref) => (
    <div className='flex items-center gap-3 w-full md:w-auto'>
      <div className='flex-shrink-0 w-10 md:w-auto'>
        <input
          type='color'
          id='hex'
          name='hex'
          value={value}
          onChange={onChange}
          className={`w-10 h-10 ${styles.colorPicker}`}
        />
      </div>
      <div className='flex-1 md:flex-initial'>
        <TextInput
          ref={ref}
          type='text'
          value={value}
          onChange={onChange}
          name='hex'
          placeholder='#FFFFFF'
          className='w-full md:w-28'
          error={error}
        />
      </div>
    </div>
  )
)
