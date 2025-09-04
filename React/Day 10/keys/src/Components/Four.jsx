import React, { useEffect, useState } from 'react'
import Five from './Five'

const Four = () => {
      useEffect(() => {
        console.log("Four component mounted")
      })
      const[count, setCount] = useState(0)
  return (
    <div>
        <p onClick={() => {
            setCount(count + 1)
        }}>{count}</p>
        <Five />
    </div>
  )
}

export default Four