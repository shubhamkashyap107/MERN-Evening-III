import { useContext, useState } from "react"
import { taskContext } from "../App"
import { v4 as uuid } from 'uuid';

const Form = () => {
  const{tasks, setTasks} = useContext(taskContext)
  const[title, setTitle] = useState("")
  const[desc, setDesc] = useState("")
  return (
    <div className="w-[50vw] h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-[400px]">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add a New Task</h2>
        
        <input
        value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          placeholder="Enter task title"
          type="text"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
        
        <textarea
        value={desc}
        onChange={(e) => {
          setDesc(e.target.value)
        }}
          placeholder="Enter description"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none h-28"
        ></textarea>
        
        <button onClick={() => {
          // setTasks()
          // tasks.push({title, desc})
          if(title.length == 0 || desc.length == 0)
          {
            alert("Please fill all the fields")
            return 
          }
          // setTasks([...tasks, {title, desc, id : tasks.length}])
          setTasks([...tasks, {title, desc, id : uuid()}])
          setTitle("")
          setDesc("")
        }} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition-all">
          Add Task
        </button>
      </div>
    </div>
  )
}

export default Form
