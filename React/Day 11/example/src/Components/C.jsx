import React from 'react'
import { useContext } from 'react'
import { exampleContext } from './B'

const C = () => {
    const{naam} = useContext(exampleContext)
  return (
    <div>{naam}</div>
  )
}

export default C