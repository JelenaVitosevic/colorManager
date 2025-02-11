import { Trash2 } from 'lucide-react'

interface DeleteButtonProps {
  onClick: (e: React.MouseEvent) => void
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className='text-gray-400 hover:text-rose-500 transition-colors duration-200 cursor-pointer'
  >
    <Trash2 size={20} />
  </button>
)
