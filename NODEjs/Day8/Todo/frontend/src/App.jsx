import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from "./Components/Home"
import New from "./Components/New"
import { Toaster } from 'react-hot-toast';
import Edit from './Components/Edit';

const App = () => {
  return (
    <div>
      <Navbar />
      <Toaster />


      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Home />} path='/home' />
        <Route element={<New />} path='/new' />
        <Route element={<Edit />} path='/edit/:id' />
      </Routes>
    </div>
  )
}

export default App