import { Route, Routes } from 'react-router-dom'
import Navbar from './COmponents/Navbar'
import Home from './COmponents/Home'
import Hp from './COmponents/Hp'
import Todos from './COmponents/Todos'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { example, getHpData } from './Utils/HarryPotterSlice'
import { todoThunk } from './Utils/TodoSLice'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {

    // dispatch(example())
    dispatch(getHpData())
    dispatch(todoThunk())

  }, [])
  return (
    <div>
      <Navbar />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hp' element={<Hp />} />
        <Route path='/todos' element={<Todos />} />
      </Routes>

    </div>
  )
}

export default App