import React, { useState } from 'react'

const Display = ({count}) => {
    // const[count, setCount] = useState(0)
  return (
    <div className='flex justify-center h-[100vh] w-[100vw] items-center'>
      <div className="text-6xl font-bold text-gray-800">{count}</div>
    </div>
  )
}

export default Display