// import { useEffect, useState } from "react"

import { useEffect } from "react"
import A from "./Components/A"


// const App = () => {

//   // let count = 0
//   const[count, setCount] = useState(0)
//   const[text, setText] = useState("")
//   // console.log(useState(10))

//   // useEffect(() => {
//   //   console.log("Use effect fired")
//   // })

//   // useEffect(() => {
//   //   console.log("Use effect 2 fired")
//   // }, [])

//   useEffect(() => {
//     console.log("Use effect 3 fired")
//   }, [text])

//   return (
//     <div>

//       <div>
//         <input onChange={(e) => {
//           setText(e.target.value)
//         }} type="text" name="" id="" />
//         <h1>{text}</h1>
//       </div>

      
//       <div>{count}</div>
//       <button onClick={() => {
//         setCount(count + 1)
//       }}>+</button>
//       <button onClick={() => {
//         setCount(0)
//       }}>reset</button>
//       <button onClick={() => {
//         setCount(count - 1)
//       }}>-</button>
//     </div>
//   )
// }

// export default App





// const App = () => {
//   useEffect(() => {
//     console.log("App")
//   }, [])
//   return (
//     <div>
//       <A />
//     </div>
//   )
// }

// export default App


import React from 'react'
import HP from "./Components/HP"
import Shimmer from "./Components/Shimmer"

const App = () => {
  return (
    <div>
      <HP />
      {/* <Shimmer /> */}
    </div>
  )
}

export default App