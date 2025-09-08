import { useContext, useState } from "react"
import { themeContext } from "../App"


// const Left = ({darkMode, setDarkMode}) => {
//   // const[darkMode, setDarkMode] = useState(false)
//   console.log(darkMode)
//   return (
//     <div style={{border : "1px solid black", height : "100vh", width : "50vw"}}>
//         <button onClick={() => {
//           setDarkMode(false)
//         }}>Light Mode</button>
//         <button onClick={() => {
//           setDarkMode(true)
//         }}>Dark Mode</button>
//     </div>
//   )
// }




const Left = () => {

  const{darkMode, setDarkMode} = useContext(themeContext)
  return (
    <div style={{border : "1px solid black", height : "100vh", width : "50vw"}}>
        <button onClick={() => {
          setDarkMode(false)
        }}>Light Mode</button>
        <button onClick={() => {
          setDarkMode(true)
        }}>Dark Mode</button>
    </div>
  )
}

export default Left