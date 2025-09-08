import React, { useContext, useState } from 'react'
import { taskContext } from '../App'

const Display = () => {
//   const [tasks, setTasks] = useState([])
    const{tasks} = useContext(taskContext)

  return (
    <div className="w-[50vw] min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[500px] bg-white shadow-xl rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Task List</h2>

        <div className="space-y-4">
          {tasks.map((item, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all bg-gray-50"
            >
              <p className="text-lg font-medium text-gray-800">{item.title}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Display
