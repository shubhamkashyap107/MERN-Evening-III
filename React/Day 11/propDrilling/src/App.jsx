import React, { createContext, useState } from 'react'
import A from './Components/A'


export const xyzContext = createContext()


const App = () => {
  const[text,setText] = useState("")
  return (
    <xyzContext.Provider value={{text, name : "Shubham"}}>

      <div>
        <input onChange={(e) => {
          setText(e.target.value)
        }} type="text" />

        <A  />
      </div>

    </xyzContext.Provider>

  )
}

export default App