import React, { useEffect } from 'react'
import C from './C'

const B = () => {
    useEffect(() => {
        console.log("B")
    }, [])
  return (
    <div>
        <p>B</p>
        <C />
    </div>
  )
}

export default B