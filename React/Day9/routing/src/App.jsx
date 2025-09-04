import { Route, Routes } from "react-router-dom"
import Home from './Components/Home'
import About from './Components/About'
import Profile from './Components/Profile'
import Navbar from "./Components/Navbar"
import { useEffect } from "react"

const App = () => {

  useEffect(() => {
    console.log("App use effect called")
  })
  return (


      <div>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>

  )
}

export default App