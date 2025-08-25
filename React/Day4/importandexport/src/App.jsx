// import React from 'react'
// // import Hi from "./Components/DefaultExport"
// // import meraNaam from "./Components/DefaultExport"
// import something from "./Components/DefaultExport"

// let Abc = something[0]
// let Xyz = something[1]

// const App = () => {
//   return (
//     <div>
//       {/* <KuchBhi /> */}
//       {/* <Hi /> */}
//       {/* <h1>{meraNaam}</h1> */}
//       <Abc />
//       <Xyz />
//     </div>
//   )
// }

// export default App



import {MyFn1 as Fn, MyFn2, MyFn3, animal, arr} from "./Components/NamedExport"

const App = () => {
  return (
    <div>
      {/* <MyFn1 /> */}
      <Fn />
      <MyFn2 />
      <MyFn3 />
      <h1>{animal}</h1>
      <h1>{arr}</h1>
    </div>
  )
}

export default App