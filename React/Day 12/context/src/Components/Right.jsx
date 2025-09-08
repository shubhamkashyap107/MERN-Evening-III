import React, { useContext, useState } from 'react'
import { themeContext } from '../App'

// const Right = ({darkMode}) => {
//     // const[darkMode, setDarkMode] = useState(false)
  
//   return (
//     <div style={{border : "1px solid black", height : "100vh", width : "50vw", backgroundColor : (darkMode ? "black" : "white")}}>Right</div>
//   )
// }


const Right = () => {

  const{darkMode} = useContext(themeContext)
  
  return (
    <div style={{border : "1px solid black", height : "100vh", 
      width : "50vw", backgroundColor : (darkMode ? "black" : "white")}}>
        Right</div>
  )
}

export default Right