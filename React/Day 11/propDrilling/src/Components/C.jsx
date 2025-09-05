import React, { useContext } from 'react'
import {xyzContext}  from "../App"

const C = () => {
  // const text = useContext(xyzContext)
  const{text, name} = useContext(xyzContext)
  return (
    <div>
      {text}, {name}
    </div>
  )
}

export default C