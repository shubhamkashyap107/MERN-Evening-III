import MainContent from "./Components/MainContent"
import Navbar from "./Components/Navbar"
import Sidebar from "./Components/Sidebar"


function App() {
  return (
    <>
      {/* {Navbar("Shubham", 16)} */}
      {/* <Navbar></Navbar> */}
      {/* <Navbar age={12} naam={"Shubham"} color={"red"}/> */}
      <Navbar />
      <div style={{display : "flex"}}>

       <Sidebar />
       <MainContent />
      
      </div>
    </>
  )
}

export default App







// function Navbar(props)
// {

//   return (
//     <div>
//       <h3>{props.naam}, {props.age}, {props.color}</h3>


//       <div>
//         <a href="">Home</a>
//         <a href="">Profile</a>
//         <a href="">About</a>
//       </div>
//     </div>
//   )
// }


// function Navbar(obj)
// {
//   const{naam, age, color} = obj
//   return (
//     <div>
//       <h3>{naam}, {age}, {color}</h3>


//       <div>
//         <a href="">Home</a>
//         <a href="">Profile</a>
//         <a href="">About</a>
//       </div>
//     </div>
//   )
// }



// function Navbar({naam, age, color})
// {

//   return (
//     <div>
//       <h3>{naam}, {age}, {color}</h3>


//       <div>
//         <a href="">Home</a>
//         <a href="">Profile</a>
//         <a href="">About</a>
//       </div>
//     </div>
//   )
// }