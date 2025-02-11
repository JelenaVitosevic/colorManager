import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { SearchCriteria } from '../../../types/types'
import { fetchColors, searchColors } from '../../../store/colorSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../store/store'
import { PrimaryButton } from '../../atoms/Button/PrimaryButton'
import { TextInput } from '../../atoms/Input/TextInput'
import { RadioButton } from '../../atoms/RadioButton/RadioButton'

export const SearchFilters: React.FC = () => {
  const [searchCriteria, setSearchCriteria] = useState<SearchCriteria>('name')
  const [searchValue, setSearchValue] = useState<string>('')

  const dispatch = useDispatch<AppDispatch>()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(searchColors({ criteria: searchCriteria, value: searchValue }))
  }

  const handleRefresh = () => {
    setSearchValue('')
    dispatch(fetchColors())
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div className='flex flex-col sm:flex-row gap-4'>
        <div className='relative flex-1'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <Search className='h-5 w-5 text-gray-400' />
          </div>
          <TextInput
            type='text'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            icon='search'
            placeholder={`Search by ${searchCriteria}...`}
            className='h-10'
          />
        </div>
        <div className='flex gap-2 w-full sm:w-auto justify-stretch sm:justify-start'>
          <PrimaryButton type='submit' className='flex-1 sm:flex-none sm:w-24'>
            Search
          </PrimaryButton>
          <PrimaryButton
            type='button'
            variant='outlined'
            onClick={handleRefresh}
            className='flex-1 sm:flex-none sm:w-24'
          >
            Refresh
          </PrimaryButton>
        </div>
      </div>

      <div className='flex items-center gap-4'>
        <RadioButton
          value='name'
          checked={searchCriteria === 'name'}
          onChange={setSearchCriteria}
          label='Search by name'
        />
        <RadioButton
          value='hex'
          checked={searchCriteria === 'hex'}
          onChange={setSearchCriteria}
          label='Search by hex'
        />
      </div>
    </form>
  )
}
