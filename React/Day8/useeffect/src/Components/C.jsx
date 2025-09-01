import React, { useEffect } from 'react'

const C = () => {
    useEffect(() => {
        console.log("C")
    }, [])
  return (
    <div>C</div>
  )
}

export default C