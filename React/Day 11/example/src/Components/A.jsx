import React from 'react'
import B, { exampleContext } from './B'
import { useContext } from 'react'

const A = () => {
    // const{naam} = useContext(exampleContext)
    console.log(useContext(exampleContext))
  return ( 
    <div>
        <B />

        {/* <p>{naam}</p> */}
    </div>
  )
}

export default A