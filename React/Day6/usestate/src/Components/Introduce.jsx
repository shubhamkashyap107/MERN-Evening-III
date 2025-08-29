import React, { useState } from 'react'

const Introduce = () => {
    const[val, setVal] = useState("") // [variable, function (){}]
  return (
    <div>
        <input onChange={(e) => {
            setVal(e.target.value)
        }} type="text" placeholder='Name' />

        {val.length  > 0 && <h1 className='text-5xl'>Welcome, {val}</h1>}
        {val.length ? <h1 className='text-5xl'>Welcome, {val}</h1> : null }
    </div>
  )
}



export default Introduce