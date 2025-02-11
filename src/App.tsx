import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ColorList } from './components/organisms/ColorList/ColorList'
import { Navbar } from './components/organisms/Navbar/Navbar'
import { SearchFilters } from './components/organisms/SearchFilters/SearchFilters'
import { AppDispatch } from './store/store'
import { fetchColors, selectIsLoading } from './store/colorSlice'
import { selectToast } from './store/toastSlice'
import { ColorForm } from './components/organisms/ColorForm/ColorForm'
import { Toast } from './components/moleculs/Toast/Toast'

const App = () => {
  const dispatch = useDispatch<AppDispatch>()
  const isLoading = useSelector(selectIsLoading)
  const toast = useSelector(selectToast)

  useEffect(() => {
    dispatch(fetchColors())
  }, [dispatch])

  return (
    <div className='min-h-screen relative mx-auto bg-white'>
      <Navbar />
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {isLoading && (
          <div className='absolute inset-0 bg-white/50 flex items-center justify-center'>
            <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500'></div>
          </div>
        )}
        <div className='space-y-8'>
          <ColorForm />
          <SearchFilters />
          <ColorList />
        </div>
      </main>
      {toast && <Toast />}
    </div>
  )
}

export default App
