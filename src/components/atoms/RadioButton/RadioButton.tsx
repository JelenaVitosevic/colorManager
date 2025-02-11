import { SearchCriteria } from "../../types/types"

interface RadioButtonProps {
  value: SearchCriteria
  checked: boolean
  onChange: (value: SearchCriteria) => void
  label: string
}

export const RadioButton: React.FC<RadioButtonProps> = ({ value, checked, onChange, label }) => {
  return (
    <label className='inline-flex items-center'>
      <input
        type='radio'
        className='form-radio accent-rose-500'
        checked={checked}
        onChange={() => onChange(value)}
      />
      <span className='ml-2 text-sm text-gray-700'>{label}</span>
    </label>
  )
}
