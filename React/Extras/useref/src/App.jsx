// import React, { useState } from 'react'

// const App = () => {
//   // let count = 0
//   var[count, setCount] = useState(0)
//   return (
//     <div>
//       <div>{count}</div>
//       <button onClick={() => {
//         // setCount(count + 1)
//         count++
//         console.log(count)
//       }}>Increment</button>
//       <button onClick={() => {
//         setCount(count - 1)
//         // count--
//         console.log(count)

//       }}>Decrement</button>
//     </div>
//   )
// }

// export default App





// import { useRef, useState } from 'react'

// const App = () => {
//   let count = 0
//   const tempRef = useRef(0)
//   const[temp, setTemp] = useState("")
//   return (
//     <>
//     <input
//     onChange={(e) => {
//       setTemp(e.target.value)
//     }}
//     value={temp} type="text" />

//     <div>{tempRef.current}</div>
//     <p>{count}</p>

//     <button onClick={() => {
//       tempRef.current = tempRef.current + 1
//       count++
//     }}>Increment</button>
//     <button onClick={() => {
//       tempRef.current = tempRef.current - 1
//       count--
//     }}>Decrement</button>
//     </>
//   )
// }

// export default App


import { useEffect, useRef } from 'react'

const App = () => {

  const inputRef = useRef()
  // inputRef.current.focus()

  useEffect(() => {
    inputRef.current.focus()
  })

  return (
    <div>
      
    <input id='xyz' ref={inputRef} type="text" placeholder='Enter your name' />

    <button id='hi' onClick={() => {
      console.log(inputRef)
    }}>Hi</button>

    </div>
  )
}

export default App