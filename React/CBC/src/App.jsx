// import React, { useState } from 'react'
// import Counter from './Components/Counter'

// const App = () => {
//   const[show, setShow] = useState(true)
//   return (
//     <div>
//       {/* <button onClick={() => {
//         setShow(!show)
//       }}>Toggle</button> */}

//       {show && <Counter name={"Shubham"} />}

//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'

const App = () => {
  const[count, setCount] = useState(0)
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => {

        console.log("before", count)
        setCount(count + 1)
        console.log("after", count)

      }}>Increment</button>
    </div>
  )
}

export default App