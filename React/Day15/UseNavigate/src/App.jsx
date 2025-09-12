import {Route, Routes, Link, useNavigate, NavLink} from "react-router-dom"
import A from './Components/A'
import B from './Components/B'
import C from './Components/C'

const App = () => {
  const navigate = useNavigate()
  return (
      <>
    <nav className='bg-black text-white flex justify-between px-5'> 
      {/* <Link to={"/a"}>A</Link>
      <br />
      <Link to={"/b"}>B</Link> */}

      {/* <button onClick={() => {
        navigate("/a")
      }}>A</button>
      <button onClick={() => {
        navigate("/b")
      }}>B</button> */}

      <NavLink
      to={"/a"}
      className={({isActive}) => {return isActive ? "text-yellow-500" : ""}}>APPLE</NavLink>

      <NavLink
      to={"/b"}
      className={({isActive}) => (isActive ? "text-yellow-500" : "")}>BAT</NavLink>

      <NavLink
      to={"/c"}
      className={({isActive}) => isActive ? "text-yellow-500" : ""}>CAT</NavLink>
      
    </nav>

      <div>
        <Routes>
          <Route path='/a' element={<A />} />
          <Route path='/b' element={<B />} />
          <Route path='/b' element={<C />} />
        </Routes>
      </div>

      </>
  )
}

export default App