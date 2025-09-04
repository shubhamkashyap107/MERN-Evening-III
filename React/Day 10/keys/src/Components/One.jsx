import React, { useEffect } from 'react'
import Two from './Two'

const One = () => {
      useEffect(() => {
        console.log("One component mounted")
      })
  return (
    <div>
        <Two />
    </div>
  )
}

export default One