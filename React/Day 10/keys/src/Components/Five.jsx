import React, { useEffect, useState } from 'react'

const Five = () => {
      useEffect(() => {
        console.log("Five component mounted")
      })
      const[count, setCount] = useState(0)
  return (
    <div>
        <p onClick={() => {
            setCount(count + 1)
        }}>{count}</p>
    </div>
  )
}

export default Five