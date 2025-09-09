import React, { useContext } from 'react'
import { DemoContext } from './Utils/ExampleContext'

const App = () => {
  const{name, setName} = useContext(DemoContext)
  return (
    <div>{name}</div>
  )
}

export default App