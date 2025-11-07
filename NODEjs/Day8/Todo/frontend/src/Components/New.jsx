import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

const New = () => {
  const[title, setTitle] = useState("")
  const[desc, setDesc] = useState("")
  const nav = useNavigate()
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md border border-gray-100">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Add a New Task ✨</h1>

        <input
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          type="text"
          placeholder="Enter task title"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <textarea
          onChange={(e) => {
            setDesc(e.target.value)
          }}
          placeholder="Enter task description"
          className="w-full h-28 mb-4 px-4 py-2 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ></textarea>

        <button
          onClick={() => {
            if(!title.length || !desc.length || title.length < 10 || desc.length < 10)
            {
              toast.error("Please enter all the fields")
              return
            }
            axios.post(import.meta.env.VITE_DOMAIN + `/todos`, {title, desc})
            .then(() => {
              toast.success("Todo Added Successfully")
              nav("/")
            })
            .catch((error) => {
              // console.log(error)
              toast.error(error.response.data.error)
            })
          }}
          className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition-colors duration-200 font-medium"
        >
          Add Task
        </button>
      </div>
    </div>
  )
}

export default New
