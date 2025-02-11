interface FormErrorProps {
  message: string
}

export const FormError: React.FC<FormErrorProps> = ({ message }) =>
  message ? <p className='text-rose-500 text-sm mt-2'>{message}</p> : null
