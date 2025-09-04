import React, { useState } from 'react'
import Btns from './Components/Btns'
import Display from './Components/Display'

const App = () => {
  const[count, setCount] = useState(0)
  return (
    <div className='flex'>
      <Btns count={count} setCount={setCount} />
      <Display count={count} />
    </div>
  )
}

export default App