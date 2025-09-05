import React from 'react'
import { createContext } from 'react'
import C from './C'

export const exampleContext = createContext()


const B = () => {

  return (
    <exampleContext.Provider value={{naam : "Shubham"}}>

    <div>
        <C />
    </div>
    
    </exampleContext.Provider>
  )
}

export default B