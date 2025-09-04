import React, { useEffect } from 'react'
import Four from './Four'

const Three = () => {
      useEffect(() => {
        console.log("Three component mounted")
      })
  return (
    <div>
        <Four />
    </div>
  )
}

export default Three