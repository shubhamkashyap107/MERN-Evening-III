import { createContext, useState } from "react"
import Display from "./Components/Display"
import Form from "./Components/Form"


export const taskContext = createContext()

const App = () => {
  const[tasks, setTasks] = useState([])

  return (
    <taskContext.Provider value={{tasks, setTasks}}>

    <div className="flex">
      <Form />
      <Display />
    </div>
    
    </taskContext.Provider>
  )
}

export default App