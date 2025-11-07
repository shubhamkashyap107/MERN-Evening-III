import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    const {id} = useParams()
    const[data, setData] = useState({})
    const nav = useNavigate()
    useEffect(() => {
        axios.get(import.meta.env.VITE_DOMAIN + `/todos/${id}`)
        .then((res) => {
            console.log(res)
            setData(res.data.data)
        })
    }, [])
    
  return (
    <div className='flex justify-center items-center h-[90vh]'>

        <div className='h-[40vh] w-[35vw] border border-gray-300 rounded-lg p-4'>

        <input
          value={data.title}
          onChange={(e) => {
            setData({
                ...data,
                title : e.target.value
            })
          }}
          type="text"
          placeholder="Enter task title"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <textarea
          value={data.desc}
          onChange={(e) => {
            setData({
                ...data,
                desc : e.target.value
            })
          }}
          placeholder="Enter task description"
          className="w-full h-28 mb-4 px-4 py-2 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ></textarea>

        <button
            onClick={() => {
                axios.patch(import.meta.env.VITE_DOMAIN + `/todos/${id}`, data)
                .then(() => {
                    toast.success("Task Edited Successfully")
                    nav("/")
                })
                .catch((error) => {
                    toast.error(error.response?.data?.error || "Task Failed")
                })
            }}
            className="bg-indigo-600 text-white px-5 py-2 rounded-xl hover:bg-indigo-700 transition-colors duration-200 font-medium">
            Save Changes
        </button>


        </div>

    </div>
  )
}

export default Edit