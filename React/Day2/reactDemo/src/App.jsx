import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// function App()
// {
//   return(
//     <div>

//       <h1>Hello World</h1>
//       <h1>Hello World</h1>
//       <h1>Hello World</h1>
//       <h1>Hello World</h1>
//       <h1>Hello World</h1>


//     </div>
//   )
// }



// function App()
// {
//   return(
  
//     <>

//       <h1>Hello World</h1>
//       <h1>Hello World</h1>
//       <h1>Hello World</h1>
//       <h1>Hello World</h1>
//       <h1>Hello World</h1>


//     </>
   
//   )
// }



// function App()
// {
//   return(
  
//    <div>
//     <h1>Hello</h1>
//     <div>Hello</div>
//    </div>

   
   
//   )
// }

import Demo from "./Components/Demo"


function Demo2()
{
  return<h1>Hello from demo 2</h1>
}

function App()
{
  return (
    <div>

    <h1>Hi</h1>
    {Demo()}
    {Demo2()}
    
    </div>
  )
}


export default App
