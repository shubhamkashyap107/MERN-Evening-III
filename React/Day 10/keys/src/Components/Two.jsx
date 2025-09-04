import React, { useEffect, useState } from 'react'
import Three from './Three'

const Two = () => {
    const[count, setCount] = useState(0)
      useEffect(() => {
        console.log("Two component mounted")
      })
  return (
    <div>
        <p onClick={() => {
            setCount(count + 1)
        }}>{count}</p>
        <Three />
    </div>
  )
}

export default Two