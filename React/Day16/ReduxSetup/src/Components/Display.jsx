import React, { useState } from 'react'

const Display = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="px-10 py-6 rounded-2xl shadow-lg bg-white">
        <p className="text-6xl font-extrabold text-blue-600">{count}</p>
      </div>
    </div>
  )
}

export default Display
