import React, { useState } from 'react'


const Btns = () => {
  const [count, setCount] = useState(0)


  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <div className="flex gap-4">
        <button
          onClick={() => {
            
          }}
          className="px-4 py-2 rounded-lg bg-green-500 text-white font-semibold shadow-md hover:bg-green-600 transition"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 rounded-lg bg-gray-500 text-white font-semibold shadow-md hover:bg-gray-600 transition"
        >
          Reset
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 rounded-lg bg-red-500 text-white font-semibold shadow-md hover:bg-red-600 transition"
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Btns
