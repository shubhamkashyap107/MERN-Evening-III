import { useState } from "react"
import {useSelector} from "react-redux"


const Form = ({selectedItem, setSelectedItem}) => {


  const data = useSelector(store => store.recipe)
  const[temp, setTemp] = useState(-1)

  return (
    <div className="w-[50vw] bg-white rounded-2xl shadow-md p-6 border border-orange-200">
      <h2 className="text-xl font-semibold text-orange-500 mb-4">Add Recipe</h2>
      <div className="flex flex-col gap-4">
        {/* Text Input */}
        <input 
          type="text" 
          placeholder="Recipe Name" 
          className=" rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
        />

        {/* OR Divider */}
        <div className="flex items-center gap-2">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-400 text-sm font-medium">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Dropdown */}
        <select
        value={selectedItem}
        onChange={(e) => {
          // console.log(e.target.value)
          // setSelectedItem(e.target.value)
          setTemp(e.target.value)
        }}
          className=" rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white text-gray-700"
        >
          <option selected disabled value="">Select Recipe</option>

          {data.map((item) => {
            return (
              <option value={item.id} key={item.id}>{item.name}</option>
            )
          })}
        </select>

        {/* Button */}
        <button
        onClick={() => {
          setSelectedItem(temp)
        }}
        className="bg-orange-500 text-white rounded-lg py-2 font-medium hover:bg-orange-600 transition">
          Generate
        </button>
      </div>
    </div>
  )
}

export default Form
