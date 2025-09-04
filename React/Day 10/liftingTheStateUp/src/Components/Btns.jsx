import React, { useState } from 'react'

const Btns = ({count, setCount}) => {
//   const [count, setCount] = useState(0)
//   console.log(count)

  return (
    <div className="w-[50vw] h-[100vh] flex flex-col items-center justify-center gap-8 bg-gray-50">

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-6 py-3 bg-green-500 text-white rounded-2xl shadow-md hover:bg-green-600 active:scale-95 transition"
        >
          +
        </button>

        <button
          onClick={() => setCount(0)}
          className="px-6 py-3 bg-gray-500 text-white rounded-2xl shadow-md hover:bg-gray-600 active:scale-95 transition"
        >
          Reset
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="px-6 py-3 bg-red-500 text-white rounded-2xl shadow-md hover:bg-red-600 active:scale-95 transition"
        >
          -
        </button>
      </div>
    </div>
  )
}

export default Btns
