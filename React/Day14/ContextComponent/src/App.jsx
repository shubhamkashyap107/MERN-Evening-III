import React, { useContext } from 'react'
import { useMyContext, UserContext } from './Utils/Context'

const App = () => {
  // const{age, name} = useContext(UserContext)
  // console.log(useMyContext())
  const{name, age} = useMyContext()
  return (
    <div>
      <p>{name}, {age}</p>
    </div>
  )
}

export default App