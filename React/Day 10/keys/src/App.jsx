// import React from 'react'

// const App = () => {
//   const data = [
//     "Shubham",
//     "Ayush",
//     "Vishoo",
//     "Abhishek"
//   ]

//   return (
//     <div>
//       <ul>
//         {data.map((item, index) => {
//           return <li key={index}>{item}</li>
//         })}
//       </ul>
//     </div>
//   )
// }

// export default App



import React, { useEffect, useState } from 'react'
import One from './Components/One'

const App = () => {
  useEffect(() => {
    console.log("App component mounted")
  })
  const[val, setVal] = useState(0)
  return (
    <div>
      <p onClick={()=> [
        setVal(val + 1)
      ]}>{val}</p>
      <One />
    </div>
  )
}

export default App