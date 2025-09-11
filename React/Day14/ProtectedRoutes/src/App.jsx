import React from 'react'
import{Route, Routes} from "react-router-dom"
import Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Components/Home'
import Profile from './Components/Profile'
import About from './Components/About'
import Navbar from './Components/Navbar'
import ProtectedRoutes from './Components/ProtectedRoutes'
import NotFound from './Components/Error'

const App = () => {
  return (
    <div>

      <Navbar />

      <Routes>


        <Route path='/' element={<ProtectedRoutes />}>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/profile' element={<Profile/>} />
        </Route>


        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        {/* <Route path='*' element={<h1>404 : Page not found</h1>} /> */}
        <Route path='*' element={<NotFound />} />


      </Routes>
    </div>
  )
}

export default App