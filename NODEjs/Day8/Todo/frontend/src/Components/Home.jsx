import axios from "axios"
import { useEffect, useState } from "react"
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const Home = () => {

  const [todos, setTodos] = useState([])
  const nav = useNavigate()


  useEffect(() => {
    axios.get(import.meta.env.VITE_DOMAIN + "/todos")
      .then((res) => setTodos(res.data.data))
      .catch(() => toast.error("Failed to fetch todos"))
  }, [])

  return todos.length > 0 ? (



    <div className="max-w-2xl mx-auto mt-10 space-y-4 px-4 relative">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">My Tasks ✅</h1>

      {todos.map((item, index) => (
        <div
          key={index}
          className={`flex items-center justify-between bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 ${
            item.isCompleted ? "opacity-70" : ""
          }`}
        >
          <div>
            <h2
              className={`text-lg font-semibold ${
                item.isCompleted ? "line-through text-gray-500" : "text-gray-800"
              }`}
            >
              {item.title}
            </h2>
            <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                axios
                  .delete(import.meta.env.VITE_DOMAIN + `/todos/${item._id}`)
                  .then(() => {
                    const filteredTodos = todos.filter((val) => val._id !== item._id)
                    setTodos(filteredTodos)
                    toast.success("Task deleted successfully")
                  })
                  .catch(() => toast.error("Cannot delete the task"))
              }}
              className="cursor-pointer bg-red-50 hover:bg-red-100 text-red-500 px-3 py-2 rounded-lg transition-colors duration-200"
            >
              🗑️
            </button>

            <button onClick={() => {
              nav(`/edit/${item._id}`)
            }} className="cursor-pointer bg-red-50 hover:bg-red-100 text-red-500 px-3 py-2 rounded-lg transition-colors duration-200">✏️</button>

            <input
              type="checkbox"
              checked={item.isCompleted}
              onChange={() => {}}
              className="w-5 h-5 accent-indigo-600 cursor-pointer"
            />
          </div>
        </div>
      ))}
    </div>
  

  ) : (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center">
      <h1 className="text-2xl font-semibold text-gray-600">No tasks found 💤</h1>
      <p className="text-gray-400 mt-2">Add a new task to get started!</p>
    </div>
  )
}

export default Home
