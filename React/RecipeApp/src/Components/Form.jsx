import { useState } from "react"
import {useSelector} from "react-redux"
import toast from "react-hot-toast"
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey : import.meta.env.VITE_API_KEY});

const Form = ({selectedItem, setSelectedItem, aiRes, setAiRes, showBtn, setShowBtn}) => {


  const data = useSelector(store => store.recipe)
  const[temp, setTemp] = useState(-1)
  const[text, setText] = useState("")
  // console.log(text)

  return (
    <div className="w-[50vw] bg-white rounded-2xl shadow-md p-6 border border-orange-200 h-[40vh]">
      <h2 className="text-xl font-semibold text-orange-500 mb-4">Add Recipe</h2>
      <div className="flex flex-col gap-4">
        {/* Text Input */}
       <input 
          type="text" 
          value={text}
          onChange={(e) => {
           
            setText(e.target.value)
          }}
          placeholder="Recipe Name" 
          className="rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
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
        {showBtn && <button
        onClick={() => {
          setAiRes({})
          setSelectedItem("")
          setTemp(-1)
          if(text.length > 0)
          {

            async function getGeminiSeData()
            {
              setShowBtn(false)
              const res = await ai.models.generateContent({
                model : "gemini-2.5-flash",
                contents : prompt + text
              })
              setShowBtn(true)
              // console.log(res)
              // console.log(res.text.slice(8, res.text.length - 4))
              setAiRes(JSON.parse(res.text.slice(8, res.text.length - 4)))
              setText("")
              // console.log(JSON.parse(res.text))
            }
            getGeminiSeData()
          }
          else if(temp != -1)
          {
           setSelectedItem(temp)

          }
          else
          {
            toast.error("Please select a valid dish")
          }
         
        }}
        className="bg-orange-500 text-white rounded-lg py-2 font-medium hover:bg-orange-600 transition">
          Generate
        </button>}
      </div>
    </div>
  )
}

export default Form




let prompt = `You are a recipe generator.  
I will provide the name of a dish, and you must return a JSON object with the following structure:  

{
  id: <unique integer>,
  name: "<dish name>",
  ingredients: [<list of ingredients with measurements>],
  process: [<step-by-step cooking instructions as an array of strings with each string being numbered>]
}

Rules:
- Return only JSON. No extra text, no code blocks, no explanations.  
- Ensure the JSON is valid and can be parsed directly with JSON.parse().  


Dish name: `