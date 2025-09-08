import React, { createContext, useState } from 'react'
import Left from './Components/Left'
import Right from './Components/Right'

export const themeContext = createContext()

const App = () => {
  const[darkMode, setDarkMode] = useState(false)
  return (
    <themeContext.Provider value={{darkMode, setDarkMode}}>
        
    <div style={{display : "flex"}}>
      <Left />
      <Right />
    </div>
    
    </themeContext.Provider>
  )
}

export default App

// const App = () => {
//   const[darkMode, setDarkMode] = useState(false)

//   return (
//     <div style={{display : "flex"}}>
//       <Left darkMode={darkMode} setDarkMode={setDarkMode} />
//       <Right darkMode={darkMode} />
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'

// const App = () => {
//   const[darkMode, setDarkMode] = useState(false)
//   return (
//     <div style={{height : "100vh", backgroundColor : (darkMode == true ? "black" : "white")}}>
//       <button onClick={() => {
//         setDarkMode(true)
//       }}>Dark</button>
//       <button onClick={() => {
//         setDarkMode(false)
//       }}>Light</button>
//     </div>
//   )
// }

// export default App